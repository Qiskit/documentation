---
title: run
description: API reference for qiskit.transpiler.passes.Optimize1qGates.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.Optimize1qGates.run
---

# run

<span id="qiskit.transpiler.passes.Optimize1qGates.run" />

`Optimize1qGates.run(dag)`

Run the Optimize1qGates pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if YZY and ZYZ angles do not give same rotation matrix.

