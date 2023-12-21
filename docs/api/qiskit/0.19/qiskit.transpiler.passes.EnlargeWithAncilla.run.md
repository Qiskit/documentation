---
title: run
description: API reference for qiskit.transpiler.passes.EnlargeWithAncilla.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.EnlargeWithAncilla.run
---

# run

<span id="qiskit.transpiler.passes.EnlargeWithAncilla.run" />

`EnlargeWithAncilla.run(dag)`

Run the EnlargeWithAncilla pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to extend.

**Returns**

An extended DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If there is not layout in the property set or not set at init time.

