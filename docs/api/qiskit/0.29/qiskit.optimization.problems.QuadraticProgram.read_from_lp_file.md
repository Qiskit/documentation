# qiskit.optimization.problems.QuadraticProgram.read\_from\_lp\_file

`QuadraticProgram.read_from_lp_file(filename)`

Loads the quadratic program from a LP file.

**Parameters**

**filename** (`str`) – The filename of the file to be loaded.

**Raises**

*   **FileNotFoundError** – If the file does not exist.
*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If CPLEX is not installed.

<Admonition title="Note" type="note">
  This method requires CPLEX to be installed and present in `PYTHONPATH`.
</Admonition>

**Return type**

`None`
