#!/usr/bin/env python3
"""
Script to find comments longer than 100 characters in Jupyter notebook (.ipynb) files.
"""

import json
import os
import re
from pathlib import Path
from typing import List, Tuple, Dict

def find_long_comments_in_code(code: str, max_length: int = 100) -> List[Tuple[int, str, int]]:
    """
    Find comments longer than max_length in Python code.
    
    Returns:
        List of tuples: (line_number, comment_text, actual_length)
    """
    long_comments = []
    lines = code.split('\n')
    
    for line_num, line in enumerate(lines, start=1):
        # Strip leading whitespace to check comment
        stripped = line.lstrip()
        
        # Check for single-line comments
        if stripped.startswith('#'):
            # Get the full line length (including indentation)
            line_length = len(line)
            if line_length > max_length:
                long_comments.append((line_num, line, line_length))
    
    return long_comments

def scan_notebook(notebook_path: Path, max_length: int = 100) -> Dict:
    """
    Scan a Jupyter notebook for long comments.
    
    Returns:
        Dictionary with notebook info and found long comments
    """
    try:
        with open(notebook_path, 'r', encoding='utf-8') as f:
            notebook = json.load(f)
        
        results = {
            'path': str(notebook_path),
            'long_comments': []
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
                
                # Find long comments
                long_comments = find_long_comments_in_code(code, max_length)
                
                for line_num, comment, length in long_comments:
                    results['long_comments'].append({
                        'cell_index': cell_idx,
                        'line_in_cell': line_num,
                        'comment': comment,
                        'length': length
                    })
        
        return results
    
    except Exception as e:
        return {
            'path': str(notebook_path),
            'error': str(e),
            'long_comments': []
        }

def find_all_notebooks(root_dir: Path) -> List[Path]:
    """Find all .ipynb files in the directory tree."""
    return list(root_dir.rglob('*.ipynb'))

def main():
    """Main function to scan all notebooks and report findings."""
    # Get the current directory
    root_dir = Path('.')
    
    print("Scanning for .ipynb files with comments longer than 100 characters...")
    print("=" * 80)
    
    # Find all notebooks
    notebooks = find_all_notebooks(root_dir)
    print(f"\nFound {len(notebooks)} notebook files to scan.\n")
    
    # Scan each notebook
    all_results = []
    total_long_comments = 0
    
    for notebook_path in notebooks:
        results = scan_notebook(notebook_path)
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
                print(f"\n  Cell {comment_info['cell_index']}, Line {comment_info['line_in_cell']}:")
                print(f"  Length: {comment_info['length']} characters")
                print(f"  Comment: {comment_info['comment']}")
                print(f"  {'-' * 76}")
        
        # Save to file
        output_file = 'long_comments_report.json'
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(all_results, f, indent=2)
        
        print(f"\n{'=' * 80}")
        print(f"Full report saved to: {output_file}")
        print(f"Total files with long comments: {len(all_results)}")
        print(f"Total long comments found: {total_long_comments}")
    else:
        print("✓ No comments exceeding 100 characters found!")
    
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()

# Made with Bob
