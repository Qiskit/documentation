---
title: run
description: API reference for qiskit.transpiler.passes.DenseLayout.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.DenseLayout.run
---

# run

<span id="qiskit.transpiler.passes.DenseLayout.run" />

`DenseLayout.run(dag)`

Run the DenseLayout pass on dag.

Pick a convenient layout depending on the best matching qubit connectivity, and set the property layout.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to find layout for.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if dag wider than self.coupling\_map

