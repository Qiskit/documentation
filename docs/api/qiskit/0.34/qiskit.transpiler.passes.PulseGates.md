# PulseGates[¶](#pulsegates "Permalink to this headline")

<span id="undefined" />

`PulseGates(inst_map)`

Bases: `qiskit.transpiler.passes.calibration.builders.CalibrationBuilder`

Pulse gate adding pass.

This pass adds gate calibrations from the supplied `InstructionScheduleMap` to a quantum circuit.

This pass checks each DAG circuit node and acquires a corresponding schedule from the instruction schedule map object that may be provided by the target backend. Because this map is a mutable object, the end-user can provide a configured backend to execute the circuit with customized gate implementations.

This mapping object returns a schedule with “publisher” metadata which is an integer Enum value representing who created the gate schedule. If the gate schedule is provided by end-users, this pass attaches the schedule to the DAG circuit as a calibration.

This pass allows users to easily override quantum circuit with custom gate definitions without directly dealing with those schedules.

**References**

*   \[1] OpenQASM 3: A broader and deeper quantum assembly language [https://arxiv.org/abs/2104.14722](https://arxiv.org/abs/2104.14722)

Create new pass.

**Parameters**

**inst\_map** (`InstructionScheduleMap`) – Instruction schedule map that user may override.

## Methods

|                                                                                                                                                                                    |                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`get_calibration`](qiskit.transpiler.passes.PulseGates.get_calibration#qiskit.transpiler.passes.PulseGates.get_calibration "qiskit.transpiler.passes.PulseGates.get_calibration") | Gets the calibrated schedule for the given instruction and qubits. |
| [`name`](qiskit.transpiler.passes.PulseGates.name#qiskit.transpiler.passes.PulseGates.name "qiskit.transpiler.passes.PulseGates.name")                                             | Return the name of the pass.                                       |
| [`run`](qiskit.transpiler.passes.PulseGates.run#qiskit.transpiler.passes.PulseGates.run "qiskit.transpiler.passes.PulseGates.run")                                                 | Run the calibration adder pass on dag.                             |
| [`supported`](qiskit.transpiler.passes.PulseGates.supported#qiskit.transpiler.passes.PulseGates.supported "qiskit.transpiler.passes.PulseGates.supported")                         | Determine if a given node supports the calibration.                |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
