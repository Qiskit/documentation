---
title: run
description: API reference for qiskit.transpiler.passes.CheckCXDirection.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.CheckCXDirection.run
---

# run

<span id="qiskit.transpiler.passes.CheckCXDirection.run" />

`CheckCXDirection.run(dag)`

Run the CheckCXDirection pass on dag.

If dag is mapped and the direction is correct the property is\_direction\_mapped is set to True (or to False otherwise).

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to check.

