---
title: run
description: API reference for qiskit.transpiler.passes.CommutativeCancellation.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.CommutativeCancellation.run
---

# run

<span id="qiskit.transpiler.passes.CommutativeCancellation.run" />

`CommutativeCancellation.run(dag)`

Run the CommutativeCancellation pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – when the 1-qubit rotation gates are not found

