# LieTrotter

<span id="undefined" />

`LieTrotter(reps=1, insert_barriers=False, cx_structure='chain', atomic_evolution=None)`

Bases: `qiskit.synthesis.evolution.product_formula.ProductFormula`

The Lie-Trotter product formula.

The Lie-Trotter formula approximates the exponential of two non-commuting operators with products of their exponentials up to a first order error:

$$
e^{A + B} \approx e^{A}e^{B}.
$$

In this implementation, the operators are provided as sum terms of a Pauli operator. For example, we approximate

$$
e^{-it(XX + ZZ)} = e^{-it XX}e^{-it ZZ} + \mathcal{O}(t).
$$

## References

\[1]: D. Berry, G. Ahokas, R. Cleve and B. Sanders, “Efficient quantum algorithms for simulating sparse Hamiltonians” (2006). [arXiv:quant-ph/0508139](https://arxiv.org/abs/quant-ph/0508139)

**Parameters**

*   **reps** (`int`) – The number of time steps.
*   **insert\_barriers** (`bool`) – Whether to insert barriers between the atomic evolutions.
*   **cx\_structure** (`str`) – How to arrange the CX gates for the Pauli evolutions, can be “chain”, where next neighbor connections are used, or “fountain”, where all qubits are connected to one.
*   **atomic\_evolution** (`Optional`\[`Callable`\[\[`Union`\[`Pauli`, `SparsePauliOp`], `float`], `QuantumCircuit`]]) – A function to construct the circuit for the evolution of single Pauli string. Per default, a single Pauli evolution is decomopsed in a CX chain and a single qubit Z rotation.

## Methods

|                                                                                                                                        |                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`synthesize`](qiskit.synthesis.LieTrotter.synthesize#qiskit.synthesis.LieTrotter.synthesize "qiskit.synthesis.LieTrotter.synthesize") | Synthesize an `qiskit.circuit.library.PauliEvolutionGate`. |

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
