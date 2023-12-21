---
title: sample_circuits
description: API reference for qiskit.aqua.operators.converters.CircuitSampler.sample_circuits
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.CircuitSampler.sample_circuits
---

# sample\_circuits

<span id="qiskit.aqua.operators.converters.CircuitSampler.sample_circuits" />

`CircuitSampler.sample_circuits(circuit_sfns=None, param_bindings=None)`

Samples the CircuitStateFns and returns a dict associating their `id()` values to their replacement DictStateFn or VectorStateFn. If param\_bindings is provided, the CircuitStateFns are broken into their parameterizations, and a list of StateFns is returned in the dict for each circuit `id()`. Note that param\_bindings is provided here in a different format than in `convert`, and lists of parameters within the dict is not supported, and only binding dicts which are valid to be passed into Terra can be included in this list.

**Parameters**

*   **circuit\_sfns** (`Optional`\[`List`\[[`CircuitStateFn`](qiskit.aqua.operators.state_fns.CircuitStateFn "qiskit.aqua.operators.state_fns.circuit_state_fn.CircuitStateFn")]]) – The list of CircuitStateFns to sample.
*   **param\_bindings** (`Optional`\[`List`\[`Dict`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `List`\[`float`]]]]) – The parameterizations to bind to each CircuitStateFn.

**Return type**

`Dict`\[`int`, `Union`\[[`StateFn`](qiskit.aqua.operators.state_fns.StateFn "qiskit.aqua.operators.state_fns.state_fn.StateFn"), `List`\[[`StateFn`](qiskit.aqua.operators.state_fns.StateFn "qiskit.aqua.operators.state_fns.state_fn.StateFn")]]]

**Returns**

The dictionary mapping ids of the CircuitStateFns to their replacement StateFns.

