# qiskit.transpiler.passes.PulseGates.get\_calibration

`PulseGates.get_calibration(node_op, qubits)`

Gets the calibrated schedule for the given instruction and qubits.

**Parameters**

*   **node\_op** (`Instruction`) – Target instruction object.
*   **qubits** (`List`) – Integer qubit indices to check.

**Return type**

`Union`\[`Schedule`, `ScheduleBlock`]

**Returns**

Return Schedule of target gate instruction.
