---
title: run
description: API reference for qiskit.transpiler.passes.Unroll3qOrMore.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.Unroll3qOrMore.run
---

# run

<span id="qiskit.transpiler.passes.Unroll3qOrMore.run" />

`Unroll3qOrMore.run(dag)`

Run the Unroll3qOrMore pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – input dag

**Returns**

output dag with maximum node degrees of 2

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

**QiskitError** – if a 3q+ gate is not decomposable

