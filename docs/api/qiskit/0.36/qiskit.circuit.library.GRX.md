---
title: GRX
description: API reference for qiskit.circuit.library.GRX
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.GRX
---

# GRX[¶](#grx "Permalink to this headline")

<span id="qiskit.circuit.library.GRX" />

`GRX(num_qubits, theta)`

Bases: [`qiskit.circuit.library.generalized_gates.gr.GR`](qiskit.circuit.library.GR "qiskit.circuit.library.generalized_gates.gr.GR")

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

<span id="qiskit.circuit.library.GRX.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.GRX.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.GRX.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.GRX.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.GRX.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.GRX.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.GRX.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.GRX.instances" />

### instances

`= 87`

<span id="qiskit.circuit.library.GRX.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.GRX.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRX.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRX.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.GRX.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRX.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.GRX.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.GRX.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.GRX.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

