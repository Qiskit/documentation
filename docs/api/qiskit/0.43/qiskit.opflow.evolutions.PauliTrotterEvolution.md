---
title: PauliTrotterEvolution
description: API reference for qiskit.opflow.evolutions.PauliTrotterEvolution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.PauliTrotterEvolution
---

# PauliTrotterEvolution

<span id="qiskit.opflow.evolutions.PauliTrotterEvolution" />

`PauliTrotterEvolution(trotter_mode='trotter', reps=1)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/evolutions/pauli_trotter_evolution.py "view source code")

Bases: [`EvolutionBase`](qiskit.opflow.evolutions.EvolutionBase "qiskit.opflow.evolutions.evolution_base.EvolutionBase")

Deprecated: An Evolution algorithm replacing exponentiated sums of Paulis by changing them each to the Z basis, rotating with an rZ, changing back, and Trotterizing.

More specifically, we compute basis change circuits for each Pauli into a single-qubit Z, evolve the Z by the desired evolution time with an rZ gate, and change the basis back using the adjoint of the original basis change circuit. For sums of Paulis, the individual Pauli evolution circuits are composed together by Trotterization scheme.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.evolutions.pauli_trotter_evolution.PauliTrotterEvolution` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **trotter\_mode** (*str |* [*TrotterizationBase*](qiskit.opflow.evolutions.TrotterizationBase "qiskit.opflow.evolutions.trotterizations.trotterization_base.TrotterizationBase") *| None*) – A string (‘trotter’, ‘suzuki’, or ‘qdrift’) to pass to the TrotterizationFactory, or a TrotterizationBase, indicating how to combine individual Pauli evolution circuits to equal the exponentiation of the Pauli sum.
*   **reps** (*int | None*) – How many Trotterization repetitions to make, to improve the approximation accuracy.
*   **evolution.** (*# TODO uncomment when we implement Abelian grouped*) –
*   **group\_paulis** (*#*) – Whether to group Pauli sums into Abelian
*   **sub-groups** (*#*) –
*   **group** (*so a single diagonalization circuit can be used for each*) –
*   **Pauli.** (*# rather than each*) –

**Methods Defined Here**

|                                                                                                                                                                                                   |                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.evolutions.PauliTrotterEvolution#convert "qiskit.opflow.evolutions.PauliTrotterEvolution.convert")                                                                      | Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing Trotterized evolutions equalling the exponentiation of -i \* operator. |
| [`evolution_for_abelian_paulisum`](qiskit.opflow.evolutions.PauliTrotterEvolution#evolution_for_abelian_paulisum "qiskit.opflow.evolutions.PauliTrotterEvolution.evolution_for_abelian_paulisum") | Evolution for abelian pauli sum                                                                                                                   |
| [`evolution_for_pauli`](qiskit.opflow.evolutions.PauliTrotterEvolution#evolution_for_pauli "qiskit.opflow.evolutions.PauliTrotterEvolution.evolution_for_pauli")                                  | Compute evolution Operator for a single Pauli using a `PauliBasisChange`.                                                                         |

## Attributes

<span id="qiskit.opflow.evolutions.PauliTrotterEvolution.trotter" />

### trotter

TrotterizationBase used to evolve SummedOps.

