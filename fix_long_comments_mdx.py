#!/usr/bin/env python3
"""
Script to automatically fix comments longer than 100 characters in code blocks within MDX files.
Preserves full sentences and breaks after punctuation when possible.
"""

import re
from pathlib import Path
from typing import List, Tuple, Dict

def wrap_comment_with_sentence_preservation(comment: str, max_length: int = 100) -> List[str]:
    """
    Wrap a long comment into multiple lines, preserving full sentences and breaking after punctuation.
    
    Args:
        comment: The comment line to wrap
        max_length: Maximum length per line
    
    Returns:
        List of wrapped comment lines
    """
    # Get the indentation
    indent = len(comment) - len(comment.lstrip())
    indent_str = comment[:indent]
    
    # Get the comment content (without # or // and leading spaces)
    stripped = comment.lstrip()
    if stripped.startswith('#'):
        comment_marker = '#'
        content = stripped[1:].lstrip()
    elif stripped.startswith('//'):
        comment_marker = '//'
        content = stripped[2:].lstrip()
    else:
        return [comment]  # Not a comment, return as-is
    
    # Calculate available width (accounting for indent, comment marker, and a space)
    available_width = max_length - indent - len(comment_marker) - 1
    
    if available_width < 20:  # If too narrow, use a minimum width
        available_width = 78
    
    # Try to split on sentence boundaries first (. ! ? followed by space)
    # Also consider commas and semicolons as potential break points
    sentences = re.split(r'([.!?]\s+|,\s+(?=[A-Z])|;\s+)', content)
    
    # Reconstruct sentences with their punctuation
    full_sentences = []
    for i in range(0, len(sentences), 2):
        if i + 1 < len(sentences):
            full_sentences.append(sentences[i] + sentences[i + 1].rstrip())
        else:
            full_sentences.append(sentences[i])
    
    # Build lines trying to keep full sentences together
    result = []
    current_line = ""
    
    for sentence in full_sentences:
        sentence = sentence.strip()
        if not sentence:
            continue
            
        # If this sentence alone is too long, we need to wrap it
        if len(sentence) > available_width:
            # If we have content in current_line, flush it first
            if current_line:
                result.append(f"{indent_str}{comment_marker} {current_line.strip()}")
                current_line = ""
            
            # Try to break long sentence at natural points (commas, conjunctions, etc.)
            # Split on commas, "and", "or", "but", etc.
            parts = re.split(r'(,\s+|\s+and\s+|\s+or\s+|\s+but\s+|\s+with\s+|\s+for\s+|\s+to\s+)', sentence)
            
            temp_line = ""
            for part in parts:
                test_line = temp_line + part
                if len(test_line) <= available_width:
                    temp_line = test_line
                else:
                    if temp_line:
                        result.append(f"{indent_str}{comment_marker} {temp_line.strip()}")
                    temp_line = part.strip()
            
            if temp_line:
                result.append(f"{indent_str}{comment_marker} {temp_line.strip()}")
        else:
            # Try to add sentence to current line
            test_line = current_line + (" " if current_line else "") + sentence
            if len(test_line) <= available_width:
                current_line = test_line
            else:
                # Current line is full, start new line with this sentence
                if current_line:
                    result.append(f"{indent_str}{comment_marker} {current_line.strip()}")
                current_line = sentence
    
    # Don't forget the last line
    if current_line:
        result.append(f"{indent_str}{comment_marker} {current_line.strip()}")
    
    return result if result else [comment]

def extract_code_blocks_with_positions(content: str) -> List[Tuple[int, int, str, str]]:
    """
    Extract code blocks from MDX content with their positions.
    
    Returns:
        List of tuples: (start_line, end_line, language, code_content)
    """
    code_blocks = []
    lines = content.split('\n')
    in_code_block = False
    current_block = []
    block_start = 0
    block_end = 0
    block_lang = ""
    
    for i, line in enumerate(lines, start=1):
        # Check for code block start
        if line.strip().startswith('```'):
            if not in_code_block:
                # Starting a code block
                in_code_block = True
                block_start = i
                # Extract language if specified
                block_lang = line.strip()[3:].strip()
                current_block = []
            else:
                # Ending a code block
                in_code_block = False
                block_end = i
                code_blocks.append((block_start, block_end, block_lang, '\n'.join(current_block)))
                current_block = []
                block_lang = ""
        elif in_code_block:
            current_block.append(line)
    
    return code_blocks

def fix_long_comments_in_code(code: str, max_length: int = 100) -> Tuple[str, int]:
    """
    Fix comments longer than max_length in code.
    
    Returns:
        Tuple of (fixed_code, number_of_fixes)
    """
    lines = code.split('\n')
    fixed_lines = []
    fixes_count = 0
    
    for line in lines:
        # Check if this is a comment line
        stripped = line.lstrip()
        if (stripped.startswith('#') or stripped.startswith('//')) and len(line) > max_length:
            # Wrap the comment
            wrapped = wrap_comment_with_sentence_preservation(line, max_length)
            fixed_lines.extend(wrapped)
            fixes_count += 1
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines), fixes_count

def fix_mdx_file(file_path: Path, max_length: int = 100, dry_run: bool = False) -> Dict:
    """
    Fix long comments in code blocks within an MDX file.
    
    Args:
        file_path: Path to the MDX file
        max_length: Maximum comment length
        dry_run: If True, don't save changes
    
    Returns:
        Dictionary with fix results
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        results = {
            'path': str(file_path),
            'fixes': 0,
            'blocks_modified': 0
        }
        
        # Extract code blocks with positions
        code_blocks = extract_code_blocks_with_positions(content)
        
        # Process in reverse order to maintain line numbers
        lines = content.split('\n')
        
        for block_start, block_end, lang, code in reversed(code_blocks):
            # Fix long comments in this code block
            fixed_code, fixes = fix_long_comments_in_code(code, max_length)
            
            if fixes > 0:
                results['fixes'] += fixes
                results['blocks_modified'] += 1
                
                # Replace the code block content
                fixed_code_lines = fixed_code.split('\n')
                # Replace lines between block_start and block_end (exclusive)
                lines[block_start:block_end-1] = fixed_code_lines
        
        # Save the file if not dry run and fixes were made
        if not dry_run and results['fixes'] > 0:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(lines))
        
        return results
    
    except Exception as e:
        return {
            'path': str(file_path),
            'error': str(e),
            'fixes': 0,
            'blocks_modified': 0
        }

def main():
    """Main function to fix all MDX files."""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='Fix comments longer than 100 characters in MDX file code blocks'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be fixed without making changes'
    )
    parser.add_argument(
        '--file',
        type=str,
        help='Fix a specific file instead of all MDX files'
    )
    parser.add_argument(
        '--exclude',
        type=str,
        nargs='+',
        default=['node_modules', '.git'],
        help='Directories to exclude from scanning'
    )
    
    args = parser.parse_args()
    
    print("=" * 80)
    if args.dry_run:
        print("DRY RUN MODE - No changes will be made")
    else:
        print("FIXING long comments in MDX file code blocks")
    print("=" * 80)
    
    # Get files to process
    if args.file:
        mdx_files = [Path(args.file)]
    else:
        root_dir = Path('.')
        all_mdx_files = list(root_dir.rglob('*.mdx'))
        # Filter out excluded directories
        mdx_files = [
            f for f in all_mdx_files
            if not any(excluded in f.parts for excluded in args.exclude)
        ]
    
    print(f"\nProcessing {len(mdx_files)} MDX files...\n")
    
    # Fix each file
    total_fixes = 0
    total_blocks = 0
    files_modified = 0
    
    for file_path in mdx_files:
        results = fix_mdx_file(file_path, dry_run=args.dry_run)
        
        if 'error' in results:
            print(f"ERROR in {results['path']}: {results['error']}")
        elif results['fixes'] > 0:
            files_modified += 1
            total_fixes += results['fixes']
            total_blocks += results['blocks_modified']
            status = "[DRY RUN]" if args.dry_run else "[FIXED]"
            print(f"{status} {results['path']}")
            print(f"  - Fixed {results['fixes']} comments in {results['blocks_modified']} code blocks")
    
    # Print summary
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Files processed: {len(mdx_files)}")
    print(f"Files modified: {files_modified}")
    print(f"Total comments fixed: {total_fixes}")
    print(f"Total code blocks modified: {total_blocks}")
    
    if args.dry_run:
        print("\nThis was a dry run. Run without --dry-run to apply fixes.")
    else:
        print("\nAll fixes have been applied!")
    
    print("=" * 80)

if __name__ == '__main__':
    main()

# Made with Bob
