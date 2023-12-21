---
title: PauliTrotterEvolution
description: API reference for qiskit.aqua.operators.evolutions.PauliTrotterEvolution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.PauliTrotterEvolution
---

# PauliTrotterEvolution

<span id="qiskit.aqua.operators.evolutions.PauliTrotterEvolution" />

`PauliTrotterEvolution(trotter_mode='trotter', reps=1)`

An Evolution algorithm replacing exponentiated sums of Paulis by changing them each to the Z basis, rotating with an rZ, changing back, and trotterizing.

More specifically, we compute basis change circuits for each Pauli into a single-qubit Z, evolve the Z by the desired evolution time with an rZ gate, and change the basis back using the adjoint of the original basis change circuit. For sums of Paulis, the individual Pauli evolution circuits are composed together by Trotterization scheme.

**Parameters**

*   **trotter\_mode** (`Union`\[`str`, [`TrotterizationBase`](qiskit.aqua.operators.evolutions.TrotterizationBase "qiskit.aqua.operators.evolutions.trotterizations.trotterization_base.TrotterizationBase"), `None`]) – A string (‘trotter’, ‘suzuki’, or ‘qdrift’) to pass to the TrotterizationFactory, or a TrotterizationBase, indicating how to combine individual Pauli evolution circuits to equal the exponentiation of the Pauli sum.
*   **reps** (`Optional`\[`int`]) – How many Trotterization repetitions to make, to improve the approximation accuracy.
*   **evolution.** (*# TODO uncomment when we implement Abelian grouped*) –
*   **group\_paulis** (*#*) – Whether to group Pauli sums into Abelian
*   **sub-groups** (*#*) –
*   **group** (*so a single diagonalization circuit can be used for each*) –
*   **Pauli.** (*# rather than each*) –

## Attributes

|                                                                                                                                                                    |                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| [`PauliTrotterEvolution.trotter`](qiskit.aqua.operators.evolutions.PauliTrotterEvolution.trotter "qiskit.aqua.operators.evolutions.PauliTrotterEvolution.trotter") | TrotterizationBase used to evolve SummedOps. |

## Methods

|                                                                                                                                                                                                                                                  |                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`PauliTrotterEvolution.convert`](qiskit.aqua.operators.evolutions.PauliTrotterEvolution.convert "qiskit.aqua.operators.evolutions.PauliTrotterEvolution.convert")(operator)                                                                     | Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing trotterized evolutions equalling the exponentiation of -i \* operator. |
| [`PauliTrotterEvolution.evolution_for_abelian_paulisum`](qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_abelian_paulisum "qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_abelian_paulisum")(op\_sum) | Evolution for abelian pauli sum                                                                                                                   |
| [`PauliTrotterEvolution.evolution_for_pauli`](qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_pauli "qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_pauli")(…)                                        | Compute evolution Operator for a single Pauli using a `PauliBasisChange`.                                                                         |

