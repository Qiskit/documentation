# qiskit.ml.circuit.library.RawFeatureVector.qasm

`RawFeatureVector.qasm(formatted=False, filename=None, encoding=None)`

Return OpenQASM string.

**Parameters**

*   **formatted** (*bool*) – Return formatted Qasm string.
*   **filename** (*str*) – Save Qasm to file with name ‘filename’.
*   **encoding** (*str*) – Optionally specify the encoding to use for the output file if `filename` is specified. By default this is set to the system’s default encoding (ie whatever `locale.getpreferredencoding()` returns) and can be set to any valid codec or alias from stdlib’s [codec module](https://docs.python.org/3/library/codecs.html#standard-encodings)

**Returns**

If formatted=False.

**Return type**

str

**Raises**

*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If pygments is not installed and `formatted` is `True`.
*   [**QasmError**](qiskit.qasm.QasmError#qiskit.qasm.QasmError "qiskit.qasm.QasmError") – If circuit has free parameters.
