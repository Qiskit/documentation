# CollectMultiQBlocks[¶](#collectmultiqblocks "Permalink to this headline")

<span id="undefined" />

`CollectMultiQBlocks(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Collect sequences of uninterrupted gates acting on groups of qubits. max\_block\_size specifies the maximum number of qubits that can be acted upon by any single group of gates

Traverse the DAG and find blocks of gates that act consecutively on groups of qubits. Write the blocks to propert\_set as a list of blocks of the form:

```python
[[g0, g1, g2], [g4, g5]]
```

Blocks are reported in a valid topological order. Further, the gates within each block are also reported in topological order Some gates may not be present in any block (e.g. if the number of operands is greater than max\_block\_size)

A Disjont Set Union data structure (DSU) is used to maintain blocks as gates are processed. This data structure points each qubit to a set at all times and the sets correspond to current blocks. These change over time and the data structure allows these changes to be done quickly.

## Methods

|                                                                                                                                                                                       |                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [`find_set`](qiskit.transpiler.passes.CollectMultiQBlocks.find_set#qiskit.transpiler.passes.CollectMultiQBlocks.find_set "qiskit.transpiler.passes.CollectMultiQBlocks.find_set")     | DSU function for finding root of set of items If my parent is myself, I am the root. |
| [`name`](qiskit.transpiler.passes.CollectMultiQBlocks.name#qiskit.transpiler.passes.CollectMultiQBlocks.name "qiskit.transpiler.passes.CollectMultiQBlocks.name")                     | Return the name of the pass.                                                         |
| [`run`](qiskit.transpiler.passes.CollectMultiQBlocks.run#qiskit.transpiler.passes.CollectMultiQBlocks.run "qiskit.transpiler.passes.CollectMultiQBlocks.run")                         | Run the CollectMultiQBlocks pass on dag.                                             |
| [`union_set`](qiskit.transpiler.passes.CollectMultiQBlocks.union_set#qiskit.transpiler.passes.CollectMultiQBlocks.union_set "qiskit.transpiler.passes.CollectMultiQBlocks.union_set") | DSU function for unioning two sets together Find the roots of each set.              |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
