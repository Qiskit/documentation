---
title: MatrixEvolution
description: API reference for qiskit.aqua.operators.evolutions.MatrixEvolution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.MatrixEvolution
---

# MatrixEvolution

<span id="qiskit.aqua.operators.evolutions.MatrixEvolution" />

`MatrixEvolution`

Performs Evolution by classical matrix exponentiation, constructing a circuit with `UnitaryGates` or `HamiltonianGates` containing the exponentiation of the Operator.

## Methods

|                                                                                                                                                            |                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`MatrixEvolution.convert`](qiskit.aqua.operators.evolutions.MatrixEvolution.convert "qiskit.aqua.operators.evolutions.MatrixEvolution.convert")(operator) | Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing `UnitaryGates` or `HamiltonianGates` (if self.coeff is a `ParameterExpression`) equalling the exponentiation of -i \* operator. |

