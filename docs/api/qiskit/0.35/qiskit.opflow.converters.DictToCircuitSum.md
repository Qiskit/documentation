# DictToCircuitSum

<span id="undefined" />

`DictToCircuitSum(traverse=True, convert_dicts=True, convert_vectors=True)`

Bases: `qiskit.opflow.converters.converter_base.ConverterBase`

Converts `DictStateFns` or `VectorStateFns` to equivalent `CircuitStateFns` or sums thereof. The behavior of this class can be mostly replicated by calling `to_circuit_op` on an Operator, but with the added control of choosing whether to convert only `DictStateFns` or `VectorStateFns`, rather than both.

**Parameters**

*   **traverse** (`bool`) – Whether to recurse down into Operators with internal sub-operators for conversion.
*   **convert\_dicts** (`bool`) – Whether to convert VectorStateFn.
*   **convert\_vectors** (`bool`) – Whether to convert DictStateFns.

## Methods Defined Here

|                                                                                                                                                                      |                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.converters.DictToCircuitSum.convert#qiskit.opflow.converters.DictToCircuitSum.convert "qiskit.opflow.converters.DictToCircuitSum.convert") | Convert the Operator to `CircuitStateFns`, recursively if `traverse` is True. |
