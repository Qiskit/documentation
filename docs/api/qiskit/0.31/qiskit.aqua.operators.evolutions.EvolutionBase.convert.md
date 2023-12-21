# qiskit.aqua.operators.evolutions.EvolutionBase.convert

`EvolutionBase.convert(operator)`

Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`.

> ## Args:
>
> operator: The Operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted Operator, with `EvolutionOps` replaced by `CircuitOps`.
