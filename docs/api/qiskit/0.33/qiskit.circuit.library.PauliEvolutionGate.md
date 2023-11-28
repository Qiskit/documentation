# PauliEvolutionGate

<span id="undefined" />

`PauliEvolutionGate(operator, time=1.0, label=None, synthesis=None)`

Bases: `qiskit.circuit.gate.Gate`

Time-evolution of an operator consisting of Paulis.

For an operator $H$ consisting of Pauli terms and (real) evolution time $t$ this gate implements

$$
U(t) = e^{-itH}.
$$

This gate serves as a high-level definition of the evolution and can be synthesized into a circuit using different algorithms.

The evolution gates are related to the Pauli rotation gates by a factor of 2. For example the time evolution of the Pauli $X$ operator is connected to the Pauli $X$ rotation $R_X$ by

$$
U(t) = e^{-itX} = R_X(2t).
$$

**References:**

\[1] G. Li et al. Paulihedral: A Generalized Block-Wise Compiler Optimization Framework For Quantum Simulation Kernels (2021). \[[arXiv:2109.03371](https://arxiv.org/abs/2109.03371)]

**Parameters**

*   **operator** (*Pauli | PauliOp | SparsePauliOp | PauliSumOp | list*) – The operator to evolve. Can also be provided as list of non-commuting operators where the elements are sums of commuting operators. For example: `[XY + YX, ZZ + ZI + IZ, YY]`.
*   **time** (`Union`\[`int`, `float`, `ParameterExpression`]) – The evolution time.
*   **label** (`Optional`\[`str`]) – A label for the gate to display in visualizations.
*   **synthesis** (`Optional`\[`EvolutionSynthesis`]) – A synthesis strategy. If None, the default synthesis is the Lie-Trotter product formula with a single repetition.

## Methods Defined Here

|                                                                                                                                                                                                                  |                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`inverse`](qiskit.circuit.library.PauliEvolutionGate.inverse#qiskit.circuit.library.PauliEvolutionGate.inverse "qiskit.circuit.library.PauliEvolutionGate.inverse")                                             | Invert this instruction.                                     |
| [`validate_parameter`](qiskit.circuit.library.PauliEvolutionGate.validate_parameter#qiskit.circuit.library.PauliEvolutionGate.validate_parameter "qiskit.circuit.library.PauliEvolutionGate.validate_parameter") | Gate parameters should be int, float, or ParameterExpression |

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### time

Return the evolution time as stored in the gate parameters.

**Return type**

`Union`\[`float`, `ParameterExpression`]

**Returns**

The evolution time.

<span id="undefined" />

### unit

Get the time unit of duration.
