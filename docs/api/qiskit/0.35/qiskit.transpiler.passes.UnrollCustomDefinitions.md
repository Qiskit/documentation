# UnrollCustomDefinitions[¶](#unrollcustomdefinitions "Permalink to this headline")

<span id="undefined" />

`UnrollCustomDefinitions(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Unrolls instructions with custom definitions.

Unrolls instructions with custom definitions.

**Parameters**

*   **equivalence\_library** ([*EquivalenceLibrary*](qiskit.circuit.EquivalenceLibrary#qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")) – The equivalence library which will be used by the BasisTranslator pass. (Instructions in this library will not be unrolled by this pass.)
*   **basis\_gates** (*list\[str]*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’].

## Methods

|                                                                                                                                                                               |                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`name`](qiskit.transpiler.passes.UnrollCustomDefinitions.name#qiskit.transpiler.passes.UnrollCustomDefinitions.name "qiskit.transpiler.passes.UnrollCustomDefinitions.name") | Return the name of the pass.                 |
| [`run`](qiskit.transpiler.passes.UnrollCustomDefinitions.run#qiskit.transpiler.passes.UnrollCustomDefinitions.run "qiskit.transpiler.passes.UnrollCustomDefinitions.run")     | Run the UnrollCustomDefinitions pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
