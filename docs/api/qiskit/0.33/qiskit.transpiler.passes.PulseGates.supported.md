# qiskit.transpiler.passes.PulseGates.supported

`PulseGates.supported(node_op, qubits)`

Determine if a given node supports the calibration.

**Parameters**

*   **node\_op** (`Instruction`) – Target instruction object.
*   **qubits** (`List`) – Integer qubit indices to check.

**Return type**

`bool`

**Returns**

Return `True` is calibration can be provided.
