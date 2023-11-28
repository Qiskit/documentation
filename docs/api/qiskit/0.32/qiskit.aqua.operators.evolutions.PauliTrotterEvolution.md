# PauliTrotterEvolution

<span id="undefined" />

`PauliTrotterEvolution(trotter_mode='trotter', reps=1)`

Bases: `qiskit.aqua.operators.evolutions.evolution_base.EvolutionBase`

An Evolution algorithm replacing exponentiated sums of Paulis by changing them each to the Z basis, rotating with an rZ, changing back, and trotterizing.

More specifically, we compute basis change circuits for each Pauli into a single-qubit Z, evolve the Z by the desired evolution time with an rZ gate, and change the basis back using the adjoint of the original basis change circuit. For sums of Paulis, the individual Pauli evolution circuits are composed together by Trotterization scheme.

**Parameters**

*   **trotter\_mode** (`Union`\[`str`, `TrotterizationBase`, `None`]) – A string (‘trotter’, ‘suzuki’, or ‘qdrift’) to pass to the TrotterizationFactory, or a TrotterizationBase, indicating how to combine individual Pauli evolution circuits to equal the exponentiation of the Pauli sum.
*   **reps** (`Optional`\[`int`]) – How many Trotterization repetitions to make, to improve the approximation accuracy.
*   **TODO uncomment when we implement Abelian grouped evolution.** (*#*) –
*   **group\_paulis** (*#*) – Whether to group Pauli sums into Abelian
*   **sub-groups** (*#*) –
*   **a single diagonalization circuit can be used for each group** (*so*) –
*   **rather than each Pauli.** (*#*) –

## Methods

|                                                                                                                                                                                                                                                                                                         |                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.evolutions.PauliTrotterEvolution.convert#qiskit.aqua.operators.evolutions.PauliTrotterEvolution.convert "qiskit.aqua.operators.evolutions.PauliTrotterEvolution.convert")                                                                                             | Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing trotterized evolutions equalling the exponentiation of -i \* operator. |
| [`evolution_for_abelian_paulisum`](qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_abelian_paulisum#qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_abelian_paulisum "qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_abelian_paulisum") | Evolution for abelian pauli sum                                                                                                                   |
| [`evolution_for_pauli`](qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_pauli#qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_pauli "qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_pauli")                                             | Compute evolution Operator for a single Pauli using a `PauliBasisChange`.                                                                         |

## Attributes

<span id="undefined" />

### trotter

TrotterizationBase used to evolve SummedOps.

**Return type**

`TrotterizationBase`
