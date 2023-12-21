# qiskit.transpiler.passes.RZXCalibrationBuilder.get\_calibration

`RZXCalibrationBuilder.get_calibration(node_op, qubits)`

Builds the calibration schedule for the RZXGate(theta) with echos.

**Parameters**

*   **node\_op** (`Instruction`) – Instruction of the RZXGate(theta). I.e. params\[0] is theta.
*   **qubits** (`List`) – List of qubits for which to get the schedules. The first qubit is the control and the second is the target.

**Returns**

The calibration schedule for the RZXGate(theta).

**Return type**

schedule

**Raises**

**QiskitError** – if the control and target qubits cannot be identified or the backend does not support cx between the qubits.
