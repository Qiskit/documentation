# CNOTUnitCircuit

<span id="undefined" />

`CNOTUnitCircuit(num_qubits, cnots, tol=0.0, name=None)`

Bases: `qiskit.transpiler.synthesis.aqc.approximate.ApproximateCircuit`

A class that represents an approximate circuit based on CNOT unit blocks.

**Parameters**

*   **num\_qubits** (`int`) – the number of qubits in this circuit.
*   **cnots** (`ndarray`) – an array of dimensions `(2, L)` indicating where the CNOT units will be placed.
*   **tol** (`Optional`\[`float`]) – angle parameter less or equal this (small) value is considered equal zero and corresponding gate is not inserted into the output circuit (because it becomes identity one in this case).
*   **name** (`Optional`\[`str`]) – name of this circuit

**Raises**

**ValueError** – if an unsupported parameter is passed.

## Methods Defined Here

|                                                                                                                                                                                |                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [`build`](qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.build#qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.build "qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.build") | Constructs a Qiskit quantum circuit out of the parameters (angles) of this circuit. If a |

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

<span id="undefined" />

### thetas

Returns a vector of rotation angles used by CNOT units in this circuit.

**Return type**

`ndarray`

**Returns**

Parameters of the rotation gates in this circuit.
