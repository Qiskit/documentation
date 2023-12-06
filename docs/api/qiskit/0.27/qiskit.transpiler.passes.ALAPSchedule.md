# qiskit.transpiler.passes.ALAPSchedule



`ALAPSchedule(*args, **kwargs)`

ALAP Scheduling.

ALAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling



`__init__(durations)`

ALAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling

## Methods

|                                                                                                                           |                                   |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.ALAPSchedule.__init__ "qiskit.transpiler.passes.ALAPSchedule.__init__")(durations) | ALAPSchedule initializer.         |
| [`name`](#qiskit.transpiler.passes.ALAPSchedule.name "qiskit.transpiler.passes.ALAPSchedule.name")()                      | Return the name of the pass.      |
| [`run`](#qiskit.transpiler.passes.ALAPSchedule.run "qiskit.transpiler.passes.ALAPSchedule.run")(dag)                      | Run the ALAPSchedule pass on dag. |

## Attributes

|                                                                                                                                                          |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.ALAPSchedule.is_analysis_pass "qiskit.transpiler.passes.ALAPSchedule.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.ALAPSchedule.is_transformation_pass "qiskit.transpiler.passes.ALAPSchedule.is_transformation_pass") | Check if the pass is a transformation pass. |



`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.



`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).



`name()`

Return the name of the pass.



`run(dag)`

Run the ALAPSchedule pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.

**Returns**

A scheduled DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the circuit is not mapped on physical qubits.
