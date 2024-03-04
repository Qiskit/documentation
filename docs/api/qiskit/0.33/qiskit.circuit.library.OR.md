---
title: OR
description: API reference for qiskit.circuit.library.OR
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.OR
---

# OR

<span id="qiskit.circuit.library.OR" />

`OR(num_variable_qubits, flags=None, mcx_mode='noancilla')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/boolean_logic/quantum_or.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

A circuit implementing the logical OR operation on a number of qubits.

For the OR operation the state $|1\rangle$ is interpreted as `True`. The result qubit is flipped, if the state of any variable qubit is `True`. The OR is implemented using a multi-open-controlled X gate (i.e. flips if the state is $|0\rangle$) and applying an X gate on the result qubit. Using a list of flags, qubits can be skipped or negated.

The OR gate without special flags:

Using flags we can negate qubits or skip them. For instance, if we have 5 qubits and want to return `True` if the first qubit is `False` or one of the last two are `True` we use the flags `[-1, 0, 0, 1, 1]`.

Create a new logical OR circuit.

**Parameters**

*   **num\_variable\_qubits** (`int`) – The qubits of which the OR is computed. The result will be written into an additional result qubit.
*   **flags** (`Optional`\[`List`\[`int`]]) – A list of +1/0/-1 marking negations or omissions of qubits.
*   **mcx\_mode** (`str`) – The mode to be used to implement the multi-controlled X gate.

## Attributes

<span id="qiskit.circuit.library.OR.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.OR.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.OR.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.OR.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.OR.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.OR.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.OR.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.OR.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.OR.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.OR.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.OR.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.OR.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.OR.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.OR.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.OR.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.OR.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

