<span id="qiskit-transpiler-passes-asapschedule" />

# qiskit.transpiler.passes.ASAPSchedule

<span id="undefined" />

`ASAPSchedule(*args, **kwargs)`

ASAP Scheduling.

ASAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling

<span id="undefined" />

`__init__(durations)`

ASAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling

## Methods

|                                                                                                                           |                                   |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.ASAPSchedule.__init__ "qiskit.transpiler.passes.ASAPSchedule.__init__")(durations) | ASAPSchedule initializer.         |
| [`name`](#qiskit.transpiler.passes.ASAPSchedule.name "qiskit.transpiler.passes.ASAPSchedule.name")()                      | Return the name of the pass.      |
| [`run`](#qiskit.transpiler.passes.ASAPSchedule.run "qiskit.transpiler.passes.ASAPSchedule.run")(dag\[, time\_unit])       | Run the ASAPSchedule pass on dag. |

## Attributes

|                                                                                                                                                          |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.ASAPSchedule.is_analysis_pass "qiskit.transpiler.passes.ASAPSchedule.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.ASAPSchedule.is_transformation_pass "qiskit.transpiler.passes.ASAPSchedule.is_transformation_pass") | Check if the pass is a transformation pass. |

<span id="undefined" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

<span id="undefined" />

`name()`

Return the name of the pass.

<span id="undefined" />

`run(dag, time_unit=None)`

Run the ASAPSchedule pass on dag.

**Parameters**

*   **dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.
*   **time\_unit** (*str*) – Time unit to be used in scheduling: ‘dt’ or ‘s’.

**Returns**

A scheduled DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the circuit is not mapped on physical qubits.
