# RZXCalibrationBuilder

<span id="undefined" />

`RZXCalibrationBuilder(backend=None, instruction_schedule_map=None, qubit_channel_mapping=None)`

Bases: `qiskit.transpiler.passes.calibration.builders.CalibrationBuilder`

Creates calibrations for RZXGate(theta) by stretching and compressing Gaussian square pulses in the CX gate. This is done by retrieving (for a given pair of qubits) the CX schedule in the instruction schedule map of the backend defaults. The CX schedule must be an echoed cross-resonance gate optionally with rotary tones. The cross-resonance drive tones and rotary pulses must be Gaussian square pulses. The width of the Gaussian square pulse is adjusted so as to match the desired rotation angle. If the rotation angle is small such that the width disappears then the amplitude of the zero width Gaussian square pulse (i.e. a Gaussian) is reduced to reach the target rotation angle. Additional details can be found in [https://arxiv.org/abs/2012.11660](https://arxiv.org/abs/2012.11660).

Initializes a RZXGate calibration builder.

**Parameters**

*   **backend** (`Union`\[`BaseBackend`, `BackendV1`, `None`]) – DEPRECATED a backend object to build the calibrations for. Use of this argument is deprecated in favor of directly specifying `instruction_schedule_map` and `qubit_channel_map`.
*   **instruction\_schedule\_map** (`Optional`\[`InstructionScheduleMap`]) – The `InstructionScheduleMap` object representing the default pulse calibrations for the target backend
*   **qubit\_channel\_mapping** (`Optional`\[`List`\[`List`\[`str`]]]) – The list mapping qubit indices to the list of channel names that apply on that qubit.

**Raises**

**QiskitError** – if open pulse is not supported by the backend.

## Methods

|                                                                                                                                                                                                                     |                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`get_calibration`](qiskit.transpiler.passes.RZXCalibrationBuilder.get_calibration#qiskit.transpiler.passes.RZXCalibrationBuilder.get_calibration "qiskit.transpiler.passes.RZXCalibrationBuilder.get_calibration") | Builds the calibration schedule for the RZXGate(theta) with echos. |
| [`name`](qiskit.transpiler.passes.RZXCalibrationBuilder.name#qiskit.transpiler.passes.RZXCalibrationBuilder.name "qiskit.transpiler.passes.RZXCalibrationBuilder.name")                                             | Return the name of the pass.                                       |
| [`rescale_cr_inst`](qiskit.transpiler.passes.RZXCalibrationBuilder.rescale_cr_inst#qiskit.transpiler.passes.RZXCalibrationBuilder.rescale_cr_inst "qiskit.transpiler.passes.RZXCalibrationBuilder.rescale_cr_inst") | **type instruction**`Play`                                         |
| [`run`](qiskit.transpiler.passes.RZXCalibrationBuilder.run#qiskit.transpiler.passes.RZXCalibrationBuilder.run "qiskit.transpiler.passes.RZXCalibrationBuilder.run")                                                 | Run the calibration adder pass on dag.                             |
| [`supported`](qiskit.transpiler.passes.RZXCalibrationBuilder.supported#qiskit.transpiler.passes.RZXCalibrationBuilder.supported "qiskit.transpiler.passes.RZXCalibrationBuilder.supported")                         | Determine if a given node supports the calibration.                |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
