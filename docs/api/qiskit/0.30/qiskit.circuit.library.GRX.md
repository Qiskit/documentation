# GRX

<span id="undefined" />

`GRX(num_qubits, theta)`

Bases: `qiskit.circuit.library.generalized_gates.gr.GR`

Global RX gate.

**Circuit symbol:**

```python
     ┌──────────┐
q_0: ┤0         ├
     │          │
q_1: ┤1  GRX(ϴ) ├
     │          │
q_2: ┤2         ├
     └──────────┘
```

The global RX gate is native to atomic systems (ion traps, cold neutrals). The global RX can be applied to multiple qubits simultaneously.

In the one-qubit case, this is equivalent to an RX(theta) operations, and is thus reduced to the RXGate. The global RX gate is a direct sum of RX operations on all individual qubits.

$$
GRX(\theta) = \exp(-i \sum_{i=1}^{n} X_i \theta/2)
$$

**Expanded Circuit:**

Create a new Global RX (GRX) gate.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits.
*   **theta** (`float`) – rotation angle about x-axis

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
