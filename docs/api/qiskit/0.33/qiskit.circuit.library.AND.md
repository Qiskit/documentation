# AND[¶](#and "Permalink to this headline")

<span id="undefined" />

`AND(num_variable_qubits, flags=None, mcx_mode='noancilla')`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

A circuit implementing the logical AND operation on a number of qubits.

For the AND operation the state $|1\rangle$ is interpreted as `True`. The result qubit is flipped, if the state of all variable qubits is `True`. In this format, the AND operation equals a multi-controlled X gate, which is controlled on all variable qubits. Using a list of flags however, qubits can be skipped or negated. Practically, the flags allow to skip controls or to apply pre- and post-X gates to the negated qubits.

The AND gate without special flags equals the multi-controlled-X gate:

Using flags we can negate qubits or skip them. For instance, if we have 5 qubits and want to return `True` if the first qubit is `False` and the last two are `True` we use the flags `[-1, 0, 0, 1, 1]`.

Create a new logical AND circuit.

**Parameters**

*   **num\_variable\_qubits** (`int`) – The qubits of which the OR is computed. The result will be written into an additional result qubit.
*   **flags** (`Optional`\[`List`\[`int`]]) – A list of +1/0/-1 marking negations or omissions of qubits.
*   **mcx\_mode** (`str`) – The mode to be used to implement the multi-controlled X gate.

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
