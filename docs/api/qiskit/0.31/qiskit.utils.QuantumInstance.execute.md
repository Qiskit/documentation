# qiskit.utils.QuantumInstance.execute

`QuantumInstance.execute(circuits, had_transpiled=False)`

A wrapper to interface with quantum backend.

**Parameters**

*   **circuits** (*Union\['QuantumCircuit', List\['QuantumCircuit']]*) – circuits to execute
*   **had\_transpiled** (`bool`) – whether or not circuits had been transpiled

**Raises**

*   **QiskitError** – Invalid error mitigation fitter class
*   **QiskitError** – TensoredMeasFitter class doesn’t support subset fitter
*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Ignis not installed

**Returns**

result object

**Return type**

[Result](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")

## TODO: Maybe we can combine the circuits for the main ones and calibration circuits before

assembling to the qobj.
