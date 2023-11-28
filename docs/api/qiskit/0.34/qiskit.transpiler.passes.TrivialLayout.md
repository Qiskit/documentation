# TrivialLayout

<span id="undefined" />

`TrivialLayout(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Choose a Layout by assigning `n` circuit qubits to device qubits `0, .., n-1`.

A pass for choosing a Layout of a circuit onto a Coupling graph, using a simple round-robin order.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit) in increasing order.

Does not assume any ancilla.

TrivialLayout initializer.

**Parameters**

**coupling\_map** (*Coupling*) – directed graph representing a coupling map.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if invalid options

## Methods

|                                                                                                                                                 |                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`name`](qiskit.transpiler.passes.TrivialLayout.name#qiskit.transpiler.passes.TrivialLayout.name "qiskit.transpiler.passes.TrivialLayout.name") | Return the name of the pass.       |
| [`run`](qiskit.transpiler.passes.TrivialLayout.run#qiskit.transpiler.passes.TrivialLayout.run "qiskit.transpiler.passes.TrivialLayout.run")     | Run the TrivialLayout pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
