---
title: run
description: API reference for qiskit.transpiler.passes.TrivialLayout.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.TrivialLayout.run
---

# run

<span id="qiskit.transpiler.passes.TrivialLayout.run" />

`TrivialLayout.run(dag)`

Run the TrivialLayout pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to find layout for.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if dag wider than self.coupling\_map

