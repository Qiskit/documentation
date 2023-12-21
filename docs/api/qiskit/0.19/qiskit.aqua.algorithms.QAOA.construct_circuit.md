---
title: construct_circuit
description: API reference for qiskit.aqua.algorithms.QAOA.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.QAOA.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.algorithms.QAOA.construct_circuit" />

`QAOA.construct_circuit(parameter)`

Generate the ansatz circuit and expectation value measurement, and return their runnable composition.

**Parameters**

**parameter** (`Union`\[`List`\[`float`], `List`\[[`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.parameter.Parameter")], `ndarray`]) – Parameters for the ansatz circuit.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The Operator equalling the measurement of the ansatz `StateFn` by the Observable’s expectation `StateFn`.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If no operator has been provided.

