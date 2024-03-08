---
title: legacy
description: API reference for qiskit.aqua.operators.legacy
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.aqua.operators.legacy
---

<span id="module-qiskit.aqua.operators.legacy" />

<span id="qiskit-aqua-operators-legacy" />

# Legacy Operators

<span id="module-qiskit.aqua.operators.legacy" />

`qiskit.aqua.operators.legacy`

These are the Operators provided by Aqua up until the 0.6 release. These are being replaced by the operator flow function and we encourage you to use this.

<Admonition title="Note" type="note">
  At some future time this legacy operator logic will be deprecated and removed.
</Admonition>

# Legacy Operators

|                                                                                                                                                                  |                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.LegacyBaseOperator")                                        | Operators relevant for quantum applications. |
| [`WeightedPauliOperator`](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")                               | Weighted Pauli Operator                      |
| [`TPBGroupedWeightedPauliOperator`](qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator "qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator") | TPB Grouped Weighted Pauli Operator          |
| [`MatrixOperator`](qiskit.aqua.operators.legacy.MatrixOperator "qiskit.aqua.operators.legacy.MatrixOperator")                                                    | Operators relevant for quantum applications  |

# Legacy Operator support

|                                                                                                                                                                        |                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`evolution_instruction`](qiskit.aqua.operators.legacy.evolution_instruction "qiskit.aqua.operators.legacy.evolution_instruction")                                     | Construct the evolution circuit according to the supplied specification.                                                                                                                 |
| [`suzuki_expansion_slice_pauli_list`](qiskit.aqua.operators.legacy.suzuki_expansion_slice_pauli_list "qiskit.aqua.operators.legacy.suzuki_expansion_slice_pauli_list") | Compute the list of pauli terms for a single slice of the suzuki expansion following the paper [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf). |
| [`pauli_measurement`](qiskit.aqua.operators.legacy.pauli_measurement "qiskit.aqua.operators.legacy.pauli_measurement")                                                 | Add the proper post-rotation gate on the circuit.                                                                                                                                        |
| [`measure_pauli_z`](qiskit.aqua.operators.legacy.measure_pauli_z "qiskit.aqua.operators.legacy.measure_pauli_z")                                                       | Appropriate post-rotations on the state are assumed.                                                                                                                                     |
| [`covariance`](qiskit.aqua.operators.legacy.covariance "qiskit.aqua.operators.legacy.covariance")                                                                      | Compute the covariance matrix element between two Paulis, given the measurement outcome.                                                                                                 |
| [`row_echelon_F2`](qiskit.aqua.operators.legacy.row_echelon_F2 "qiskit.aqua.operators.legacy.row_echelon_F2")                                                          | Computes the row Echelon form of a binary matrix on the binary finite field                                                                                                              |
| [`kernel_F2`](qiskit.aqua.operators.legacy.kernel_F2 "qiskit.aqua.operators.legacy.kernel_F2")                                                                         | Computes the kernel of a binary matrix on the binary finite field                                                                                                                        |
| [`commutator`](qiskit.aqua.operators.legacy.commutator "qiskit.aqua.operators.legacy.commutator")                                                                      | Compute commutator of op\_a and op\_b or the symmetric double commutator of op\_a, op\_b and op\_c.                                                                                      |
| [`check_commutativity`](qiskit.aqua.operators.legacy.check_commutativity "qiskit.aqua.operators.legacy.check_commutativity")                                           | Check the (anti-)commutativity between two operators.                                                                                                                                    |
| [`PauliGraph`](qiskit.aqua.operators.legacy.PauliGraph "qiskit.aqua.operators.legacy.PauliGraph")                                                                      | Pauli Graph.                                                                                                                                                                             |
| [`Z2Symmetries`](qiskit.aqua.operators.legacy.Z2Symmetries "qiskit.aqua.operators.legacy.Z2Symmetries")                                                                | Z2 Symmetries                                                                                                                                                                            |

