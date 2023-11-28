---
title: CNOTUnitCircuit
description: API reference for qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit
---

# CNOTUnitCircuit

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit" />

`CNOTUnitCircuit(num_qubits, cnots, tol=0.0, name=None)`

Bases: [`qiskit.transpiler.synthesis.aqc.approximate.ApproximateCircuit`](qiskit.transpiler.synthesis.aqc.ApproximateCircuit "qiskit.transpiler.synthesis.aqc.approximate.ApproximateCircuit")

A class that represents an approximate circuit based on CNOT unit blocks.

**Parameters**

*   **num\_qubits** (`int`) – the number of qubits in this circuit.
*   **cnots** (`ndarray`) – an array of dimensions `(2, L)` indicating where the CNOT units will be placed.
*   **tol** (`Optional`\[`float`]) – angle parameter less or equal this (small) value is considered equal zero and corresponding gate is not inserted into the output circuit (because it becomes identity one in this case).
*   **name** (`Optional`\[`str`]) – name of this circuit

**Raises**

**ValueError** – if an unsupported parameter is passed.

## Methods Defined Here

### build

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.build" />

`CNOTUnitCircuit.build(thetas)`

#### Constructs a Qiskit quantum circuit out of the parameters (angles) of this circuit. If a

parameter value is less in absolute value than the specified tolerance then the corresponding rotation gate will be skipped in the circuit.

**Return type**

`None`

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.instances" />

### instances

`= 87`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.thetas" />

### thetas

Returns a vector of rotation angles used by CNOT units in this circuit.

**Return type**

`ndarray`

**Returns**

Parameters of the rotation gates in this circuit.

