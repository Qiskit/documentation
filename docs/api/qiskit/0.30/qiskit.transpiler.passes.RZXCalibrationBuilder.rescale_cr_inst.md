# qiskit.transpiler.passes.RZXCalibrationBuilder.rescale\_cr\_inst

`static RZXCalibrationBuilder.rescale_cr_inst(instruction, theta, sample_mult=16)`

**Parameters**

*   **instruction** (`Play`) – The instruction from which to create a new shortened or lengthened pulse.
*   **theta** (`float`) – desired angle, pi/2 is assumed to be the angle that the pulse in the given play instruction implements.
*   **sample\_mult** (`int`) – All pulses must be a multiple of sample\_mult.

**Returns**

**The play instruction with the stretched compressed**

GaussianSquare pulse.

**Return type**

[qiskit.pulse.Play](qiskit.pulse.Play#qiskit.pulse.Play "qiskit.pulse.Play")

**Raises**

**QiskitError** – if the pulses are not GaussianSquare.
