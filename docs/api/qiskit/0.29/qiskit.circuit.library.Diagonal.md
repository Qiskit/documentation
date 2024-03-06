---
title: Diagonal
description: API reference for qiskit.circuit.library.Diagonal
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Diagonal
---

# Diagonal

<span id="qiskit.circuit.library.Diagonal" />

`Diagonal(diag)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/generalized_gates/diagonal.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Diagonal circuit.

Circuit symbol:

```python
     ┌───────────┐
q_0: ┤0          ├
     │           │
q_1: ┤1 Diagonal ├
     │           │
q_2: ┤2          ├
     └───────────┘
```

Matrix form:

$$
\begin{split}\text{DiagonalGate}\ q_0, q_1, .., q_{n-1} =
    \begin{pmatrix}
        D[0]    & 0         & \dots     & 0 \\
        0       & D[1]      & \dots     & 0 \\
        \vdots  & \vdots    & \ddots    & 0 \\
        0       & 0         & \dots     & D[n-1]
    \end{pmatrix}\end{split}
$$

Diagonal gates are useful as representations of Boolean functions, as they can map from \{0,1}^2\*\*n to \{0,1}^2\*\*n space. For example a phase oracle can be seen as a diagonal gate with \{+1, -1} on the diagonals. Such an oracle will induce a +1 or -1 phase on the amplitude of any corresponding basis state.

Diagonal gates appear in many classically hard oracular problems such as Forrelation or Hidden Shift circuits.

Diagonal gates are represented and simulated more efficiently than a dense 2\*\*n x 2\*\*n unitary matrix.

The reference implementation is via the method described in Theorem 7 of \[1]. The code is based on Emanuel Malvetti’s semester thesis at ETH in 2018, supervised by Raban Iten and Prof. Renato Renner.

**Reference:**

\[1] Shende et al., Synthesis of Quantum Logic Circuits, 2009 [arXiv:0406176](https://arxiv.org/pdf/quant-ph/0406176.pdf)

Create a new Diagonal circuit.

**Parameters**

**diag** (`Union`\[`List`, `array`]) – list of the 2^k diagonal entries (for a diagonal gate on k qubits).

**Raises**

**CircuitError** – if the list of the diagonal entries or the qubit list is in bad format; if the number of diagonal entries is not 2^k, where k denotes the number of qubits

## Attributes

<span id="qiskit.circuit.library.Diagonal.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.Diagonal.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="qiskit.circuit.library.Diagonal.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.Diagonal.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.Diagonal.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.Diagonal.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.Diagonal.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.Diagonal.instances" />

### instances

`= 16`

<span id="qiskit.circuit.library.Diagonal.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.Diagonal.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.Diagonal.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.Diagonal.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

<span id="qiskit.circuit.library.Diagonal.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.Diagonal.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

<span id="qiskit.circuit.library.Diagonal.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.Diagonal.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

