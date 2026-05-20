#!/usr/bin/env python3
"""
Script to find comments longer than 100 characters in code blocks within MDX files.
"""

import re
from pathlib import Path
from typing import List, Tuple, Dict

def extract_code_blocks(content: str) -> List[Tuple[int, str, str]]:
    """
    Extract code blocks from MDX content.
    
    Returns:
        List of tuples: (start_line, language, code_content)
    """
    code_blocks = []
    lines = content.split('\n')
    in_code_block = False
    current_block = []
    block_start = 0
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
                code_blocks.append((block_start, block_lang, '\n'.join(current_block)))
                current_block = []
                block_lang = ""
        elif in_code_block:
            current_block.append(line)
    
    return code_blocks

def find_long_comments_in_code(code: str, max_length: int = 100) -> List[Tuple[int, str, int]]:
    """
    Find comments longer than max_length in code.
    
    Returns:
        List of tuples: (line_number, comment_text, actual_length)
    """
    long_comments = []
    lines = code.split('\n')
    
    for line_num, line in enumerate(lines, start=1):
        # Strip leading whitespace to check comment
        stripped = line.lstrip()
        
        # Check for single-line comments (Python, JavaScript, etc.)
        if stripped.startswith('#') or stripped.startswith('//'):
            # Get the full line length (including indentation)
            line_length = len(line)
            if line_length > max_length:
                long_comments.append((line_num, line, line_length))
    
    return long_comments

def scan_mdx_file(file_path: Path, max_length: int = 100) -> Dict:
    """
    Scan an MDX file for long comments in code blocks.
    
    Returns:
        Dictionary with file info and found long comments
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        results = {
            'path': str(file_path),
            'long_comments': []
        }
        
        # Extract code blocks
        code_blocks = extract_code_blocks(content)
        
        for block_start_line, lang, code in code_blocks:
            # Find long comments in this code block
            long_comments = find_long_comments_in_code(code, max_length)
            
            for line_in_block, comment, length in long_comments:
                # Calculate actual line number in file
                actual_line = block_start_line + line_in_block
                results['long_comments'].append({
                    'line_number': actual_line,
                    'code_block_start': block_start_line,
                    'language': lang or 'unknown',
                    'line_in_block': line_in_block,
                    'comment': comment,
                    'length': length
                })
        
        return results
    
    except Exception as e:
        return {
            'path': str(file_path),
            'error': str(e),
            'long_comments': []
        }

def find_all_mdx_files(root_dir: Path) -> List[Path]:
    """Find all .mdx files in the directory tree."""
    return list(root_dir.rglob('*.mdx'))

def main():
    """Main function to scan all MDX files and report findings."""
    # Get the current directory
    root_dir = Path('.')
    
    print("Scanning for .mdx files with comments longer than 100 characters in code blocks...")
    print("=" * 80)
    
    # Find all MDX files
    mdx_files = find_all_mdx_files(root_dir)
    print(f"\nFound {len(mdx_files)} MDX files to scan.\n")
    
    # Scan each file
    all_results = []
    total_long_comments = 0
    
    for file_path in mdx_files:
        results = scan_mdx_file(file_path)
        if results['long_comments']:
            all_results.append(results)
            total_long_comments += len(results['long_comments'])
    
    # Print results
    if all_results:
        print(f"Found {total_long_comments} comments exceeding 100 characters in {len(all_results)} files:\n")
        
        for result in all_results:
            print(f"\n{'=' * 80}")
            print(f"File: {result['path']}")
            print(f"{'=' * 80}")
            
            for comment_info in result['long_comments']:
                print(f"\n  Line {comment_info['line_number']} (in code block starting at line {comment_info['code_block_start']}):")
                print(f"  Language: {comment_info['language']}")
                print(f"  Length: {comment_info['length']} characters")
                print(f"  Comment: {comment_info['comment']}")
                print(f"  {'-' * 76}")
        
        # Save to file
        import json
        output_file = 'long_comments_mdx_report.json'
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(all_results, f, indent=2)
        
        print(f"\n{'=' * 80}")
        print(f"Full report saved to: {output_file}")
        print(f"Total files with long comments: {len(all_results)}")
        print(f"Total long comments found: {total_long_comments}")
    else:
        print("✓ No comments exceeding 100 characters found in code blocks!")
    
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()

# Made with Bob
