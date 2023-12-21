---
title: run
description: API reference for qiskit.transpiler.passes.ApplyLayout.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.ApplyLayout.run
---

# run

<span id="qiskit.transpiler.passes.ApplyLayout.run" />

`ApplyLayout.run(dag)`

Run the ApplyLayout pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

A mapped DAG (with physical qubits).

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if no layout is found in property\_set or no full physical qubits.

