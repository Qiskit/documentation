# GMS

<span id="undefined" />

`GMS(num_qubits, theta)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Global Mølmer–Sørensen gate.

**Circuit symbol:**

```python
     ┌───────────┐
q_0: ┤0          ├
     │           │
q_1: ┤1   GMS    ├
     │           │
q_2: ┤2          ├
     └───────────┘
```

**Expanded Circuit:**

The Mølmer–Sørensen gate is native to ion-trap systems. The global MS can be applied to multiple ions to entangle multiple qubits simultaneously \[1].

In the two-qubit case, this is equivalent to an XX(theta) interaction, and is thus reduced to the RXXGate. The global MS gate is a sum of XX interactions on all pairs \[2].

$$
GMS(\chi_{12}, \chi_{13}, ..., \chi_{n-1 n}) =
exp(-i \sum_{i=1}^{n} \sum_{j=i+1}^{n} X{\otimes}X \frac{\chi_{ij}}{2})
$$

**References:**

\[1] Sørensen, A. and Mølmer, K., Multi-particle entanglement of hot trapped ions. Physical Review Letters. 82 (9): 1835–1838. [arXiv:9810040](https://arxiv.org/abs/quant-ph/9810040)

\[2] Maslov, D. and Nam, Y., Use of global interactions in efficient quantum circuit constructions. New Journal of Physics, 20(3), p.033018. [arXiv:1707.06356](https://arxiv.org/abs/1707.06356)

Create a new Global Mølmer–Sørensen (GMS) gate.

**Parameters**

*   **num\_qubits** (`int`) – width of gate.
*   **theta** (`Union`\[`List`\[`List`\[`float`]], `ndarray`]) – a num\_qubits x num\_qubits symmetric matrix of interaction angles for each qubit pair. The upper triangle is considered.

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

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

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 16`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="undefined" />

### num\_clbits

Return number of classical bits.

<span id="undefined" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

<span id="undefined" />

### num\_qubits

Return number of qubits.

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.
