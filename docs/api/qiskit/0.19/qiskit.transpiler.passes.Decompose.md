---
title: Decompose
description: API reference for qiskit.transpiler.passes.Decompose
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Decompose
---

# Decompose

<span id="qiskit.transpiler.passes.Decompose" />

`Decompose(gate=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/transpiler/passes/basis/decompose.py "view source code")

Expand a gate in a circuit using its decomposition rules.

Decompose initializer.

**Parameters**

**gate** (`Optional`\[`Type`\[[`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")]]) – gate to decompose.

## Attributes

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.Decompose.name" />

`Decompose.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Decompose.run" />

`Decompose.run(dag)`

Run the Decompose pass on dag.

**Parameters**

**dag** ([`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")) – input dag.

**Return type**

[`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")

**Returns**

output dag where `gate` was expanded.

