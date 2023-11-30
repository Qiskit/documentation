# MatrixEvolution

<span id="undefined" />

`MatrixEvolution`

Bases: `qiskit.aqua.operators.evolutions.evolution_base.EvolutionBase`

Performs Evolution by classical matrix exponentiation, constructing a circuit with `UnitaryGates` or `HamiltonianGates` containing the exponentiation of the Operator.

## Methods

|                                                                                                                                                                                           |                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.evolutions.MatrixEvolution.convert#qiskit.aqua.operators.evolutions.MatrixEvolution.convert "qiskit.aqua.operators.evolutions.MatrixEvolution.convert") | Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing `UnitaryGates` or `HamiltonianGates` (if self.coeff is a `ParameterExpression`) equalling the exponentiation of -i \* operator. |
