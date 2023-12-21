---
title: read_from_lp_file
description: API reference for qiskit.optimization.QuadraticProgram.read_from_lp_file
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.QuadraticProgram.read_from_lp_file
---

# read\_from\_lp\_file

<span id="qiskit.optimization.QuadraticProgram.read_from_lp_file" />

`QuadraticProgram.read_from_lp_file(filename)`

Loads the quadratic program from a LP file.

**Parameters**

**filename** (`str`) – The filename of the file to be loaded.

**Raises**

*   **FileNotFoundError** – If the file does not exist.
*   **RuntimeError** – If CPLEX is not installed.

<Admonition title="Note" type="note">
  This method requires CPLEX to be installed and present in `PYTHONPATH`.
</Admonition>

**Return type**

`None`

