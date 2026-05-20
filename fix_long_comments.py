#!/usr/bin/env python3
"""
Script to automatically fix comments longer than 100 characters in Jupyter notebook (.ipynb) files.
"""

import json
import os
import re
from pathlib import Path
from typing import List, Tuple, Dict
import textwrap

def wrap_comment(comment: str, max_length: int = 100) -> List[str]:
    """
    Wrap a long comment into multiple lines, preserving indentation and full sentences.
    
    Args:
        comment: The comment line to wrap
        max_length: Maximum length per line
    
    Returns:
        List of wrapped comment lines
    """
    # Get the indentation
    indent = len(comment) - len(comment.lstrip())
    indent_str = comment[:indent]
    
    # Get the comment content (without # and leading spaces)
    stripped = comment.lstrip()
    if not stripped.startswith('#'):
        return [comment]  # Not a comment, return as-is
    
    # Remove the # and any spaces after it
    content = stripped[1:].lstrip()
    
    # Calculate available width (accounting for indent, #, and a space)
    available_width = max_length - indent - 2  # 2 for "# "
    
    if available_width < 20:  # If too narrow, use a minimum width
        available_width = 78
    
    # Try to split on sentence boundaries first (. ! ?)
    sentences = re.split(r'([.!?]\s+)', content)
    
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
                result.append(f"{indent_str}# {current_line.strip()}")
                current_line = ""
            
            # Wrap the long sentence
            wrapped = textwrap.wrap(
                sentence,
                width=available_width,
                break_long_words=False,
                break_on_hyphens=False
            )
            for line in wrapped:
                result.append(f"{indent_str}# {line}")
        else:
            # Try to add sentence to current line
            test_line = current_line + (" " if current_line else "") + sentence
            if len(test_line) <= available_width:
                current_line = test_line
            else:
                # Current line is full, start new line with this sentence
                if current_line:
                    result.append(f"{indent_str}# {current_line.strip()}")
                current_line = sentence
    
    # Don't forget the last line
    if current_line:
        result.append(f"{indent_str}# {current_line.strip()}")
    
    return result if result else [comment]

def fix_long_comments_in_code(code: str, max_length: int = 100) -> Tuple[str, int]:
    """
    Fix comments longer than max_length in Python code.
    
    Returns:
        Tuple of (fixed_code, number_of_fixes)
    """
    lines = code.split('\n')
    fixed_lines = []
    fixes_count = 0
    
    for line in lines:
        # Check if this is a comment line
        stripped = line.lstrip()
        if stripped.startswith('#') and len(line) > max_length:
            # Wrap the comment
            wrapped = wrap_comment(line, max_length)
            fixed_lines.extend(wrapped)
            fixes_count += 1
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines), fixes_count

def fix_notebook(notebook_path: Path, max_length: int = 100, dry_run: bool = False) -> Dict:
    """
    Fix long comments in a Jupyter notebook.
    
    Args:
        notebook_path: Path to the notebook
        max_length: Maximum comment length
        dry_run: If True, don't save changes
    
    Returns:
        Dictionary with fix results
    """
    try:
        with open(notebook_path, 'r', encoding='utf-8') as f:
            notebook = json.load(f)
        
        results = {
            'path': str(notebook_path),
            'fixes': 0,
            'cells_modified': 0
        }
        
        # Iterate through cells
        for cell_idx, cell in enumerate(notebook.get('cells', [])):
            if cell.get('cell_type') == 'code':
                # Get source code
                source = cell.get('source', [])
                if isinstance(source, list):
                    code = ''.join(source)
                else:
                    code = source
                
                # Fix long comments
                fixed_code, fixes = fix_long_comments_in_code(code, max_length)
                
                if fixes > 0:
                    results['fixes'] += fixes
                    results['cells_modified'] += 1
                    
                    # Update the cell source
                    # Convert back to list format (preserving newlines)
                    if isinstance(source, list):
                        # Split by newlines but keep them
                        fixed_lines = fixed_code.split('\n')
                        cell['source'] = [line + '\n' for line in fixed_lines[:-1]]
                        if fixed_lines[-1]:  # Add last line without newline if not empty
                            cell['source'].append(fixed_lines[-1])
                    else:
                        cell['source'] = fixed_code
        
        # Save the notebook if not dry run and fixes were made
        if not dry_run and results['fixes'] > 0:
            with open(notebook_path, 'w', encoding='utf-8') as f:
                json.dump(notebook, f, indent=1, ensure_ascii=False)
                f.write('\n')  # Add trailing newline
        
        return results
    
    except Exception as e:
        return {
            'path': str(notebook_path),
            'error': str(e),
            'fixes': 0,
            'cells_modified': 0
        }

def main():
    """Main function to fix all notebooks."""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='Fix comments longer than 100 characters in Jupyter notebooks'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be fixed without making changes'
    )
    parser.add_argument(
        '--file',
        type=str,
        help='Fix a specific file instead of all notebooks'
    )
    parser.add_argument(
        '--exclude',
        type=str,
        nargs='+',
        default=['.tox', '.ipynb_checkpoints', 'node_modules'],
        help='Directories to exclude from scanning'
    )
    
    args = parser.parse_args()
    
    print("=" * 80)
    if args.dry_run:
        print("DRY RUN MODE - No changes will be made")
    else:
        print("FIXING long comments in .ipynb files")
    print("=" * 80)
    
    # Get files to process
    if args.file:
        notebooks = [Path(args.file)]
    else:
        root_dir = Path('.')
        all_notebooks = list(root_dir.rglob('*.ipynb'))
        # Filter out excluded directories
        notebooks = [
            nb for nb in all_notebooks
            if not any(excluded in nb.parts for excluded in args.exclude)
        ]
    
    print(f"\nProcessing {len(notebooks)} notebook files...\n")
    
    # Fix each notebook
    total_fixes = 0
    total_cells = 0
    files_modified = 0
    
    for notebook_path in notebooks:
        results = fix_notebook(notebook_path, dry_run=args.dry_run)
        
        if 'error' in results:
            print(f"ERROR in {results['path']}: {results['error']}")
        elif results['fixes'] > 0:
            files_modified += 1
            total_fixes += results['fixes']
            total_cells += results['cells_modified']
            status = "[DRY RUN]" if args.dry_run else "[FIXED]"
            print(f"{status} {results['path']}")
            print(f"  - Fixed {results['fixes']} comments in {results['cells_modified']} cells")
    
    # Print summary
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Files processed: {len(notebooks)}")
    print(f"Files modified: {files_modified}")
    print(f"Total comments fixed: {total_fixes}")
    print(f"Total cells modified: {total_cells}")
    
    if args.dry_run:
        print("\nThis was a dry run. Run without --dry-run to apply fixes.")
    else:
        print("\nAll fixes have been applied!")
    
    print("=" * 80)

if __name__ == '__main__':
    main()

# Made with Bob
