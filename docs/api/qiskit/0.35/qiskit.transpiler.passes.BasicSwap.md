# BasicSwap

<span id="undefined" />

`BasicSwap(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Map (with minimum effort) a DAGCircuit onto a coupling\_map adding swap gates.

The basic mapper is a minimum effort to insert swap gates to map the DAG onto a coupling map. When a cx is not in the coupling map possibilities, it inserts one or more swaps in front to make it compatible.

BasicSwap initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **fake\_run** (*bool*) – if true, it only pretend to do routing, i.e., no swap is effectively added.

## Methods

|                                                                                                                                     |                                |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`name`](qiskit.transpiler.passes.BasicSwap.name#qiskit.transpiler.passes.BasicSwap.name "qiskit.transpiler.passes.BasicSwap.name") | Return the name of the pass.   |
| [`run`](qiskit.transpiler.passes.BasicSwap.run#qiskit.transpiler.passes.BasicSwap.run "qiskit.transpiler.passes.BasicSwap.run")     | Run the BasicSwap pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
