# qiskit.transpiler.passes.TrivialLayout

<span id="undefined" />

`TrivialLayout(*args, **kwargs)`

Choose a Layout by assigning `n` circuit qubits to device qubits `0, .., n-1`.

A pass for choosing a Layout of a circuit onto a Coupling graph, using a simple round-robin order.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit) in increasing order.

Does not assume any ancilla.

TrivialLayout initializer.

**Parameters**

**coupling\_map** (*Coupling*) – directed graph representing a coupling map.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if invalid options

<span id="undefined" />

`__init__(coupling_map)`

TrivialLayout initializer.

**Parameters**

**coupling\_map** (*Coupling*) – directed graph representing a coupling map.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if invalid options

## Methods

|                                                                                                                                 |                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.TrivialLayout.__init__ "qiskit.transpiler.passes.TrivialLayout.__init__")(coupling\_map) | TrivialLayout initializer.         |
| [`name`](#qiskit.transpiler.passes.TrivialLayout.name "qiskit.transpiler.passes.TrivialLayout.name")()                          | Return the name of the pass.       |
| [`run`](#qiskit.transpiler.passes.TrivialLayout.run "qiskit.transpiler.passes.TrivialLayout.run")(dag)                          | Run the TrivialLayout pass on dag. |

## Attributes

|                                                                                                                                                            |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.TrivialLayout.is_analysis_pass "qiskit.transpiler.passes.TrivialLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.TrivialLayout.is_transformation_pass "qiskit.transpiler.passes.TrivialLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

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

`run(dag)`

Run the TrivialLayout pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to find layout for.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if dag wider than self.coupling\_map
