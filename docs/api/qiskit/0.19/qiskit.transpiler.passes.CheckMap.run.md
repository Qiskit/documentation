---
title: run
description: API reference for qiskit.transpiler.passes.CheckMap.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.CheckMap.run
---

# run

<span id="qiskit.transpiler.passes.CheckMap.run" />

`CheckMap.run(dag)`

Run the CheckMap pass on dag.

If dag is mapped to coupling\_map, the property is\_swap\_mapped is set to True (or to False otherwise).

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

