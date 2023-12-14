# GRY



`GRY(num_qubits, theta)`

Bases: `qiskit.circuit.library.generalized_gates.gr.GR`

Global RY gate.

**Circuit symbol:**

```python
     ┌──────────┐
q_0: ┤0         ├
     │          │
q_1: ┤1  GRY(ϴ) ├
     │          │
q_2: ┤2         ├
     └──────────┘
```

The global RY gate is native to atomic systems (ion traps, cold neutrals). The global RY can be applied to multiple qubits simultaneously.

In the one-qubit case, this is equivalent to an RY(theta) operation, and is thus reduced to the RYGate. The global RY gate is a direct sum of RY operations on all individual qubits.

$$
GRY(\theta) = \exp(-i \sum_{i=1}^{n} Y_i \theta/2)
$$

**Expanded Circuit:**

Create a new Global RY (GRY) gate.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits.
*   **theta** (`float`) – rotation angle about y-axis

## Attributes



### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]



### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`



### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]



### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData



### extension\_lib

`= 'include "qelib1.inc";'`



### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]



### header

`= 'OPENQASM 2.0;'`



### instances

`= 9`



### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`



### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`



### num\_clbits

Return number of classical bits.

**Return type**

`int`



### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`



### num\_qubits

Return number of qubits.

**Return type**

`int`



### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`



### prefix

`= 'circuit'`



### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
