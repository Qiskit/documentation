# qiskit.aqua.QuantumInstance.execute

`QuantumInstance.execute(circuits, had_transpiled=False)`

A wrapper to interface with quantum backend.

**Parameters**

*   **circuits** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`]]) – circuits to execute
*   **had\_transpiled** (`bool`) – whether or not circuits had been transpiled

**Return type**

`Result`

**Returns**

Result object

## TODO: Maybe we can combine the circuits for the main ones and calibration circuits before

assembling to the qobj.
