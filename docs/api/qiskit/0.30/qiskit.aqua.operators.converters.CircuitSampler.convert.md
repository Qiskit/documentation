# qiskit.aqua.operators.converters.CircuitSampler.convert

`CircuitSampler.convert(operator, params=None)`

Converts the Operator to one in which the CircuitStateFns are replaced by DictStateFns or VectorStateFns. Extracts the CircuitStateFns out of the Operator, caches them, calls `sample_circuits` below to get their converted replacements, and replaces the CircuitStateFns in operator with the replacement StateFns.

**Parameters**

*   **operator** (`OperatorBase`) – The Operator to convert
*   **params** (`Optional`\[`Dict`\[`Parameter`, `Union`\[`float`, `List`\[`float`], `List`\[`List`\[`float`]]]]]) – A dictionary mapping parameters to either single binding values or lists of binding values.

**Return type**

`OperatorBase`

**Returns**

The converted Operator with CircuitStateFns replaced by DictStateFns or VectorStateFns.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if extracted circuits are empty.
