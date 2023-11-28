# ProductFormula

<span id="undefined" />

`ProductFormula(order, reps=1, insert_barriers=False, cx_structure='chain', atomic_evolution=None)`

Bases: `qiskit.synthesis.evolution.evolution_synthesis.EvolutionSynthesis`

Product formula base class for the decomposition of non-commuting operator exponentials.

[`LieTrotter`](qiskit.synthesis.LieTrotter#qiskit.synthesis.LieTrotter "qiskit.synthesis.LieTrotter") and [`SuzukiTrotter`](qiskit.synthesis.SuzukiTrotter#qiskit.synthesis.SuzukiTrotter "qiskit.synthesis.SuzukiTrotter") inherit from this class.

**Parameters**

*   **order** (`int`) – The order of the product formula.
*   **reps** (`int`) – The number of time steps.
*   **insert\_barriers** (`bool`) – Whether to insert barriers between the atomic evolutions.
*   **cx\_structure** (`str`) – How to arrange the CX gates for the Pauli evolutions, can be “chain”, where next neighbor connections are used, or “fountain”, where all qubits are connected to one.
*   **atomic\_evolution** (`Optional`\[`Callable`\[\[`Union`\[`Pauli`, `SparsePauliOp`], `float`], `QuantumCircuit`]]) – A function to construct the circuit for the evolution of single Pauli string. Per default, a single Pauli evolution is decomopsed in a CX chain and a single qubit Z rotation.

## Methods

|                                                                                                                                                    |                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`synthesize`](qiskit.synthesis.ProductFormula.synthesize#qiskit.synthesis.ProductFormula.synthesize "qiskit.synthesis.ProductFormula.synthesize") | Synthesize an `qiskit.circuit.library.PauliEvolutionGate`. |

## Attributes

<span id="undefined" />

### settings

Return the settings in a dictionary, which can be used to reconstruct the object.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

A dictionary containing the settings of this product formula.

**Raises**

**NotImplementedError** – If a custom atomic evolution is set, which cannot be serialized.
