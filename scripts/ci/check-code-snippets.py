# This code is a Qiskit project.
#
# (C) Copyright IBM 2024.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

"""
Test all code snippets in mdx files to make sure they
they don't slip through our CI tests.
"""
### Python script to gather all code snippets from our mdx files

from pathlib import Path, PosixPath
import re


# Create function to grab all mdx files
def gather_mdx_files():
    guides_path = Path("docs/guides")
    mdx_files = list(guides_path.glob("**/*.mdx"))
    return mdx_files


# Create function to parse an individual mdx file
def select_code_snippets(filepath: PosixPath):
    file_contents = filepath.read_text()
    code_snippets = re.findall(r"```python(.*?)```", file_contents, flags=re.DOTALL)
    if not len(code_snippets) == 0:
        return code_snippets
    return None


# Create function to save code snippets into a .py file
def save_code_snippets(code_snippets: list, filepath: PosixPath):
    python_file = Path("tmp/" + filepath.stem + ".py")
    python_file.write_text("".join(code_snippets))


if __name__ == "__main__":
    mdx_files = gather_mdx_files()
    tmp_dir = Path("tmp")
    tmp_dir.mkdir(exist_ok=True)
    for file in mdx_files:
        content = select_code_snippets(file)
        if content is not None:
            save_code_snippets(content, file)
