# RZXCalibrationBuilderNoEcho

<span id="undefined" />

`RZXCalibrationBuilderNoEcho(backend=None, instruction_schedule_map=None, qubit_channel_mapping=None)`

Bases: `qiskit.transpiler.passes.calibration.builders.RZXCalibrationBuilder`

Creates calibrations for RZXGate(theta) by stretching and compressing Gaussian square pulses in the CX gate.

The `RZXCalibrationBuilderNoEcho` is a variation of the [`RZXCalibrationBuilder`](qiskit.transpiler.passes.RZXCalibrationBuilder#qiskit.transpiler.passes.RZXCalibrationBuilder "qiskit.transpiler.passes.RZXCalibrationBuilder") pass that creates calibrations for the cross-resonance pulses without inserting the echo pulses in the pulse schedule. This enables exposing the echo in the cross-resonance sequence as gates so that the transpiler can simplify them. The `RZXCalibrationBuilderNoEcho` only supports the hardware-native direction of the CX gate.

Initializes a RZXGate calibration builder.

**Parameters**

*   **backend** (`Union`\[`BaseBackend`, `BackendV1`, `None`]) – DEPRECATED a backend object to build the calibrations for. Use of this argument is deprecated in favor of directly specifying `instruction_schedule_map` and `qubit_channel_map`.
*   **instruction\_schedule\_map** (`Optional`\[`InstructionScheduleMap`]) – The `InstructionScheduleMap` object representing the default pulse calibrations for the target backend
*   **qubit\_channel\_mapping** (`Optional`\[`List`\[`List`\[`str`]]]) – The list mapping qubit indices to the list of channel names that apply on that qubit.

**Raises**

**QiskitError** – if open pulse is not supported by the backend.

## Methods

|                                                                                                                                                                                                                                       |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`get_calibration`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.get_calibration#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.get_calibration "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.get_calibration") | Builds the calibration schedule for the RZXGate(theta) without echos. |
| [`name`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.name#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.name "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.name")                                             | Return the name of the pass.                                          |
| [`rescale_cr_inst`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.rescale_cr_inst#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.rescale_cr_inst "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.rescale_cr_inst") | **type instruction**`Play`                                            |
| [`run`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.run#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.run "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.run")                                                 | Run the calibration adder pass on dag.                                |
| [`supported`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.supported#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.supported "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.supported")                         | Determine if a given node supports the calibration.                   |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
