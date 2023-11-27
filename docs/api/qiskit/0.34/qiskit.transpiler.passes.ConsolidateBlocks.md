# ConsolidateBlocks[¶](#consolidateblocks "Permalink to this headline")

<span id="undefined" />

`ConsolidateBlocks(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Replace each block of consecutive gates by a single Unitary node.

Pass to consolidate sequences of uninterrupted gates acting on the same qubits into a Unitary node, to be resynthesized later, to a potentially more optimal subcircuit.

## Notes

This pass assumes that the ‘blocks\_list’ property that it reads is given such that blocks are in topological order. The blocks are collected by a previous pass, such as Collect2qBlocks.

ConsolidateBlocks initializer.

**Parameters**

*   **kak\_basis\_gate** ([*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")) – Basis gate for KAK decomposition.
*   **force\_consolidate** (*bool*) – Force block consolidation
*   **basis\_gates** (*List(str)*) – Basis gates from which to choose a KAK gate.
*   **target** ([*Target*](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")) – The target object for the compilation target backend

## Methods

|                                                                                                                                                             |                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`name`](qiskit.transpiler.passes.ConsolidateBlocks.name#qiskit.transpiler.passes.ConsolidateBlocks.name "qiskit.transpiler.passes.ConsolidateBlocks.name") | Return the name of the pass.           |
| [`run`](qiskit.transpiler.passes.ConsolidateBlocks.run#qiskit.transpiler.passes.ConsolidateBlocks.run "qiskit.transpiler.passes.ConsolidateBlocks.run")     | Run the ConsolidateBlocks pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
