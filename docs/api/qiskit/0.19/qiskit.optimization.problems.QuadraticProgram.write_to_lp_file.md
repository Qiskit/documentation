---
title: write_to_lp_file
description: API reference for qiskit.optimization.problems.QuadraticProgram.write_to_lp_file
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.problems.QuadraticProgram.write_to_lp_file
---

# write\_to\_lp\_file

<span id="qiskit.optimization.problems.QuadraticProgram.write_to_lp_file" />

`QuadraticProgram.write_to_lp_file(filename)`

Writes the quadratic program to an LP file.

**Parameters**

**filename** (`str`) – The filename of the file the model is written to. If filename is a directory, file name ‘my\_problem.lp’ is appended. If filename does not end with ‘.lp’, suffix ‘.lp’ is appended.

**Raises**

*   **OSError** – If this cannot open a file.
*   **DOcplexException** – If filename is an empty string

**Return type**

`None`

