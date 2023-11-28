# PhaseEstimation

<span id="undefined" />

`PhaseEstimation(num_evaluation_qubits, unitary, iqft=None, name='QPE')`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Phase Estimation circuit.

In the Quantum Phase Estimation (QPE) algorithm \[1, 2, 3], the Phase Estimation circuit is used to estimate the phase $\phi$ of an eigenvalue $e^{2\pi i\phi}$ of a unitary operator $U$, provided with the corresponding eigenstate $|psi\rangle$. That is

$$
U|\psi\rangle = e^{2\pi i\phi} |\psi\rangle
$$

This estimation (and thereby this circuit) is a central routine to several well-known algorithms, such as Shor’s algorithm or Quantum Amplitude Estimation.

**References:**

**\[1]: Kitaev, A. Y. (1995). Quantum measurements and the Abelian Stabilizer Problem. 1–22.**

[quant-ph/9511026](http://arxiv.org/abs/quant-ph/9511026)

**\[2]: Michael A. Nielsen and Isaac L. Chuang. 2011.**

Quantum Computation and Quantum Information: 10th Anniversary Edition (10th ed.). Cambridge University Press, New York, NY, USA.

**\[3]: Qiskit**

[textbook](https://qiskit.org/textbook/ch-algorithms/quantum-phase-estimation.html)

**Parameters**

*   **num\_evaluation\_qubits** (`int`) – The number of evaluation qubits.
*   **unitary** (`QuantumCircuit`) – The unitary operation $U$ which will be repeated and controlled.
*   **iqft** (`Optional`\[`QuantumCircuit`]) – A inverse Quantum Fourier Transform, per default the inverse of [`QFT`](qiskit.circuit.library.QFT#qiskit.circuit.library.QFT "qiskit.circuit.library.QFT") is used. Note that the QFT should not include the usual swaps!
*   **name** (`str`) – The name of the circuit.

<Admonition title="Note" type="note">
  The inverse QFT should not include a swap of the qubit order.
</Admonition>

**Reference Circuit:**

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 9`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="undefined" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="undefined" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
