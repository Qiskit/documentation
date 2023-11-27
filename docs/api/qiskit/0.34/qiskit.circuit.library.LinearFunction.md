# LinearFunction[¶](#linearfunction "Permalink to this headline")

<span id="undefined" />

`LinearFunction(linear, validate_input=False)`

Bases: `qiskit.circuit.gate.Gate`

A linear reversible circuit on n qubits.

Internally, a linear function acting on n qubits is represented as a n x n matrix of 0s and 1s in numpy array format.

A linear function can be synthesized into CX and SWAP gates using the Patel–Markov–Hayes algorithm, as implemented in `cnot_synth()` based on reference \[1].

For efficiency, the internal n x n matrix is stored in the format expected by cnot\_synth, which is the big-endian (and not the little-endian) bit-ordering convention.

**Example:** the circuit

```python
q_0: ──■──
     ┌─┴─┐
q_1: ┤ X ├
     └───┘
q_2: ─────
```

is represented by a 3x3 linear matrix

$$
\begin{split}\begin{pmatrix}
    1 & 0 & 0 \\
    1 & 1 & 0 \\
    0 & 0 & 1
\end{pmatrix}\end{split}
$$

**References:**

\[1] Ketan N. Patel, Igor L. Markov, and John P. Hayes, Optimal synthesis of linear reversible circuits, Quantum Inf. Comput. 8(3) (2008). [Online at umich.edu.](https://web.eecs.umich.edu/~imarkov/pubs/jour/qic08-cnot.pdf)

Create a new linear function.

**Parameters**

*   **linear** (*list\[list] or ndarray\[bool] or* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – either an n x n matrix, describing the linear function, or a quantum circuit composed of linear gates only (currently supported gates are CX and SWAP).
*   **validate\_input** (`Optional`\[`bool`]) – if True, performs more expensive input validation checks, such as checking that a given n x n matrix is invertible.

**Raises**

**CircuitError** – if the input is invalid: either a matrix is non \{square, invertible}, or a quantum circuit contains non-linear gates.

## Methods Defined Here

|                                                                                                                                                                                                          |                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [`is_permutation`](qiskit.circuit.library.LinearFunction.is_permutation#qiskit.circuit.library.LinearFunction.is_permutation "qiskit.circuit.library.LinearFunction.is_permutation")                     | Returns whether this linear function is a permutation, that is whether every row and every column of the n x n matrix has exactly one 1. |
| [`permutation_pattern`](qiskit.circuit.library.LinearFunction.permutation_pattern#qiskit.circuit.library.LinearFunction.permutation_pattern "qiskit.circuit.library.LinearFunction.permutation_pattern") | This method first checks if a linear function is a permutation and raises a qiskit.circuit.exceptions.CircuitError if not.               |
| [`synthesize`](qiskit.circuit.library.LinearFunction.synthesize#qiskit.circuit.library.LinearFunction.synthesize "qiskit.circuit.library.LinearFunction.synthesize")                                     | Synthesizes the linear function into a quantum circuit.                                                                                  |
| [`validate_parameter`](qiskit.circuit.library.LinearFunction.validate_parameter#qiskit.circuit.library.LinearFunction.validate_parameter "qiskit.circuit.library.LinearFunction.validate_parameter")     | Parameter validation                                                                                                                     |

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

### linear

Returns the n x n matrix representing this linear function

<span id="undefined" />

### name

Return the name.

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### original\_circuit

Returns the original circuit used to construct this linear function (including None, when the linear function is not constructed from a circuit).

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
