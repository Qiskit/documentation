# EvolutionBase

<span id="undefined" />

`EvolutionBase`

Bases: `qiskit.aqua.operators.converters.converter_base.ConverterBase`

A base for Evolution converters. Evolutions are converters which traverse an Operator tree, replacing any `EvolvedOp` e with a Schrodinger equation-style evolution `CircuitOp` equalling or approximating the matrix exponential of -i \* the Operator contained inside (e.primitive). The Evolutions are essentially implementations of Hamiltonian Simulation algorithms, including various methods for Trotterization.

## Methods

|                                                                                                                                                                                     |                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.evolutions.EvolutionBase.convert#qiskit.aqua.operators.evolutions.EvolutionBase.convert "qiskit.aqua.operators.evolutions.EvolutionBase.convert") | Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`. |
