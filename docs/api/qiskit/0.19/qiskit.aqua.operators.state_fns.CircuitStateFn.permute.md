---
title: permute
description: API reference for qiskit.aqua.operators.state_fns.CircuitStateFn.permute
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.CircuitStateFn.permute
---

# permute

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.permute" />

`CircuitStateFn.permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

[`CircuitStateFn`](qiskit.aqua.operators.state_fns.CircuitStateFn "qiskit.aqua.operators.state_fns.circuit_state_fn.CircuitStateFn")

**Returns**

A new CircuitStateFn containing the permuted circuit.

