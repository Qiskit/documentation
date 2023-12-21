# qiskit.aqua.operators.converters.CircuitSampler.sample\_circuits

`CircuitSampler.sample_circuits(circuit_sfns=None, param_bindings=None)`

Samples the CircuitStateFns and returns a dict associating their `id()` values to their replacement DictStateFn or VectorStateFn. If param\_bindings is provided, the CircuitStateFns are broken into their parameterizations, and a list of StateFns is returned in the dict for each circuit `id()`. Note that param\_bindings is provided here in a different format than in `convert`, and lists of parameters within the dict is not supported, and only binding dicts which are valid to be passed into Terra can be included in this list.

**Parameters**

*   **circuit\_sfns** (`Optional`\[`List`\[`CircuitStateFn`]]) – The list of CircuitStateFns to sample.
*   **param\_bindings** (`Optional`\[`List`\[`Dict`\[`Parameter`, `float`]]]) – The parameterizations to bind to each CircuitStateFn.

**Return type**

`Dict`\[`int`, `Union`\[`StateFn`, `List`\[`StateFn`]]]

**Returns**

The dictionary mapping ids of the CircuitStateFns to their replacement StateFns.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if extracted circuits are empty.
