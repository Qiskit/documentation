# RZXCalibrationBuilderNoEcho

<span id="undefined" />

`RZXCalibrationBuilderNoEcho(backend)`

Bases: `qiskit.transpiler.passes.scheduling.calibration_creators.RZXCalibrationBuilder`

Creates calibrations for RZXGate(theta) by stretching and compressing Gaussian square pulses in the CX gate.

The `RZXCalibrationBuilderNoEcho` is a variation of the [`RZXCalibrationBuilder`](qiskit.transpiler.passes.RZXCalibrationBuilder#qiskit.transpiler.passes.RZXCalibrationBuilder "qiskit.transpiler.passes.RZXCalibrationBuilder") pass that creates calibrations for the cross-resonance pulses without inserting the echo pulses in the pulse schedule. This enables exposing the echo in the cross-resonance sequence as gates so that the transpiler can simplify them. The `RZXCalibrationBuilderNoEcho` only supports the hardware-native direction of the CX gate.

Initializes a RZXGate calibration builder.

**Parameters**

**backend** (*\<module 'qiskit.providers.basebackend' from '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.7/site-packages/qiskit/providers/basebackend.py'>*) – Backend for which to construct the gates.

**Raises**

**QiskitError** – if open pulse is not supported by the backend.

## Methods

|                                                                                                                                                                                                                                       |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`get_calibration`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.get_calibration#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.get_calibration "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.get_calibration") | Builds the calibration schedule for the RZXGate(theta) without echos. |
| [`name`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.name#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.name "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.name")                                             | Return the name of the pass.                                          |
| [`rescale_cr_inst`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.rescale_cr_inst#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.rescale_cr_inst "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.rescale_cr_inst") | **type instruction**`Play`                                            |
| [`run`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.run#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.run "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.run")                                                 | Run the calibration adder pass on dag.                                |
| [`supported`](qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.supported#qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.supported "qiskit.transpiler.passes.RZXCalibrationBuilderNoEcho.supported")                         | **type node\_op**`DAGNode`                                            |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
