---
title: run
description: API reference for qiskit.transpiler.passes.LookaheadSwap.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.LookaheadSwap.run
---

# run

<span id="qiskit.transpiler.passes.LookaheadSwap.run" />

`LookaheadSwap.run(dag)`

Run the LookaheadSwap pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the directed acyclic graph to be mapped

**Returns**

**A dag mapped to be compatible with the coupling\_map in**

the property\_set.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the coupling map or the layout are not
*   **compatible with the DAG** –

