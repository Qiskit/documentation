---
title: ApproximateCircuit
description: API reference for qiskit.transpiler.synthesis.aqc.ApproximateCircuit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.ApproximateCircuit
---

# ApproximateCircuit

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit" />

`ApproximateCircuit(num_qubits, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/transpiler/synthesis/aqc/approximate.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`, `abc.ABC`

A base class that represents an approximate circuit.

**Parameters**

*   **num\_qubits** (`int`) – number of qubit this circuit will span.
*   **name** (`Optional`\[`str`]) – a name of the circuit.

## Methods Defined Here

### build

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.build" />

`abstract ApproximateCircuit.build(thetas)`

#### Constructs this circuit out of the parameters(thetas). Parameter values must be set before

constructing the circuit.

**Parameters**

**thetas** (`ndarray`) – a vector of parameters to be set in this circuit.

**Return type**

`None`

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.instances" />

### instances

`= 9`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.thetas" />

### thetas

The property is not implemented and raises a `NotImplementedException` exception.

**Return type**

`ndarray`

**Returns**

a vector of parameters of this circuit.

