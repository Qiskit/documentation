# MatrixEvolution

<span id="undefined" />

`MatrixEvolution`

Bases: `qiskit.opflow.evolutions.evolution_base.EvolutionBase`

Performs Evolution by classical matrix exponentiation, constructing a circuit with `UnitaryGates` or `HamiltonianGates` containing the exponentiation of the Operator.

## Methods Defined Here

|                                                                                                                                                                   |                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.evolutions.MatrixEvolution.convert#qiskit.opflow.evolutions.MatrixEvolution.convert "qiskit.opflow.evolutions.MatrixEvolution.convert") | Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing `UnitaryGates` or `HamiltonianGates` (if self.coeff is a `ParameterExpression`) equalling the exponentiation of -i \* operator. |
