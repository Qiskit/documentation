# qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.get\_calibration

`RZXCalibrationBuilderNoEcho.get_calibration(params, qubits)`

Builds the calibration schedule for the RZXGate(theta) without echos.

**Parameters**

*   **params** (`List`) – Parameters of the RZXGate(theta). I.e. params\[0] is theta.
*   **qubits** (`List`) – List of qubits for which to get the schedules. The first qubit is the control and the second is the target.

**Returns**

The calibration schedule for the RZXGate(theta).

**Return type**

schedule

**Raises**

**QiskitError** – If the control and target qubits cannot be identified, or the backend does not support a cx gate between the qubits, or the backend does not natively support the specified direction of the cx.
