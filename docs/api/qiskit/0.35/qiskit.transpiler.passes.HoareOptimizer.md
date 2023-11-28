# HoareOptimizer

<span id="undefined" />

`HoareOptimizer(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

This is a transpiler pass using Hoare logic circuit optimization. The inner workings of this are detailed in: [https://arxiv.org/abs/1810.00375](https://arxiv.org/abs/1810.00375)

**Parameters**

**size** (*int*) – size of gate cache, in number of gates

**Raises**

**MissingOptionalLibraryError** – if unable to import z3 solver

## Methods

|                                                                                                                                                    |                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`name`](qiskit.transpiler.passes.HoareOptimizer.name#qiskit.transpiler.passes.HoareOptimizer.name "qiskit.transpiler.passes.HoareOptimizer.name") | Return the name of the pass.                       |
| [`run`](qiskit.transpiler.passes.HoareOptimizer.run#qiskit.transpiler.passes.HoareOptimizer.run "qiskit.transpiler.passes.HoareOptimizer.run")     | **param dag**the directed acyclic graph to run on. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
