# qiskit.chemistry.transformations.Transformation.build\_hopping\_operators

`abstract Transformation.build_hopping_operators(excitations='sd')`

Builds the product of raising and lowering operators (basic excitation operators)

**Parameters**

**excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) – The excitations to be included in the eom pseudo-eigenvalue problem. If a string (‘s’, ‘d’ or ‘sd’) then all excitations of the given type will be used. Otherwise a list of custom excitations can directly be provided.

Returns:

**Return type**

`Tuple`\[`Dict`\[`str`, `WeightedPauliOperator`], `Dict`\[`str`, `List`\[`bool`]], `Dict`\[`str`, `List`\[`Any`]]]
