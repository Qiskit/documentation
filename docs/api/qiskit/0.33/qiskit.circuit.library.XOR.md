# XOR

`XOR(num_qubits, amount=None, seed=None)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

An n\_qubit circuit for bitwise xor-ing the input with some integer `amount`.

The `amount` is xor-ed in bitstring form with the input.

This circuit can also represent addition by `amount` over the finite field GF(2).

Return a circuit implementing bitwise xor.

**Parameters**

*   **num\_qubits** (`int`) – the width of circuit.
*   **amount** (`Optional`\[`int`]) – the xor amount in decimal form.
*   **seed** (`Optional`\[`int`]) – random seed in case a random xor is requested.

**Raises**

**CircuitError** – if the xor bitstring exceeds available qubits.

**Reference Circuit:**

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
