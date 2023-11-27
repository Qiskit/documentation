---
title: AND
description: API reference for qiskit.circuit.library.AND
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.AND
---

# AND[¶](#and "Permalink to this headline")

<span id="qiskit.circuit.library.AND" />

`AND(num_variable_qubits, flags=None, mcx_mode='noancilla')`

Bases: [`qiskit.circuit.quantumcircuit.QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

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

<span id="qiskit.circuit.library.AND.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.AND.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.AND.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.AND.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.AND.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.AND.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.AND.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.AND.instances" />

### instances

`= 87`

<span id="qiskit.circuit.library.AND.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.AND.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.AND.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.AND.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.AND.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.AND.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.AND.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.AND.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.AND.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

