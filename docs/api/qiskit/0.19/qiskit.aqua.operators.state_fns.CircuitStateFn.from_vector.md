---
title: from_vector
description: API reference for qiskit.aqua.operators.state_fns.CircuitStateFn.from_vector
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.CircuitStateFn.from_vector
---

# from\_vector

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.from_vector" />

`static CircuitStateFn.from_vector(statevector)`

Construct the CircuitStateFn from a vector representing the statevector.

**Parameters**

**statevector** (`ndarray`) – The statevector representing the desired state.

**Return type**

[`CircuitStateFn`](qiskit.aqua.operators.state_fns.CircuitStateFn "qiskit.aqua.operators.state_fns.circuit_state_fn.CircuitStateFn")

**Returns**

The CircuitStateFn created from the vector.

**Raises**

*   **ValueError** – If a vector with complex values is passed, which the Initializer cannot
*   **handle.** –

