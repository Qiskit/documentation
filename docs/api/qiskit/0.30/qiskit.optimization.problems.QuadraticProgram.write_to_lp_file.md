# qiskit.optimization.problems.QuadraticProgram.write\_to\_lp\_file

`QuadraticProgram.write_to_lp_file(filename)`

Writes the quadratic program to an LP file.

**Parameters**

**filename** (`str`) – The filename of the file the model is written to. If filename is a directory, file name ‘my\_problem.lp’ is appended. If filename does not end with ‘.lp’, suffix ‘.lp’ is appended.

**Raises**

*   **OSError** – If this cannot open a file.
*   **DOcplexException** – If filename is an empty string

**Return type**

`None`
