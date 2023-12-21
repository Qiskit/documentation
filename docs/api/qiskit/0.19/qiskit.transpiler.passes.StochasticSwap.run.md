---
title: run
description: API reference for qiskit.transpiler.passes.StochasticSwap.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.StochasticSwap.run
---

# run

<span id="qiskit.transpiler.passes.StochasticSwap.run" />

`StochasticSwap.run(dag)`

Run the StochasticSwap pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

A mapped DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the coupling map or the layout are not
*   **compatible with the DAG** –

