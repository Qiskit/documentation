---
title: RemoveBarriers
description: API reference for qiskit.transpiler.passes.RemoveBarriers
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.RemoveBarriers
---

# RemoveBarriers

<span id="qiskit.transpiler.passes.RemoveBarriers" />

`RemoveBarriers(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/transpiler/passes/utils/remove_barriers.py "view source code")

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Return a circuit with any barrier removed.

This transformation is not semantics preserving.

**Example**

```python
from qiskit import QuantumCircuit
from qiskit.transpiler.passes import RemoveBarriers

circuit = QuantumCircuit(1)
circuit.x(0)
circuit.barrier()
circuit.h(0)

circuit = RemoveBarriers()(circuit)
circuit.draw('mpl')
```

![../\_images/qiskit-transpiler-passes-RemoveBarriers-1.png](/images/api/qiskit/0.41/qiskit-transpiler-passes-RemoveBarriers-1.png)

## Methods

### name

<span id="qiskit.transpiler.passes.RemoveBarriers.name" />

`RemoveBarriers.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.RemoveBarriers.run" />

`RemoveBarriers.run(dag)`

Run the RemoveBarriers pass on dag.

**Return type**

[`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.RemoveBarriers.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.RemoveBarriers.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

