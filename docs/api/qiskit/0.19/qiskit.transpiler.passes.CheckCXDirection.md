---
title: CheckCXDirection
description: API reference for qiskit.transpiler.passes.CheckCXDirection
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CheckCXDirection
---

# CheckCXDirection

<span id="qiskit.transpiler.passes.CheckCXDirection" />

`CheckCXDirection(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/transpiler/passes/utils/check_cx_direction.py "view source code")

Check if the CNOTs follow the right direction with respect to the coupling map.

This pass checks if the CNOTs (or any other 2Q) in the DAG follow the right direction with respect to the coupling map.

CheckCXDirection initializer.

Checks if the CNOTs in DAGCircuit are in the allowed direction with respect to coupling\_map.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.

## Attributes

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.CheckCXDirection.name" />

`CheckCXDirection.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CheckCXDirection.run" />

`CheckCXDirection.run(dag)`

Run the CheckCXDirection pass on dag.

If dag is mapped and the direction is correct the property is\_direction\_mapped is set to True (or to False otherwise).

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to check.

