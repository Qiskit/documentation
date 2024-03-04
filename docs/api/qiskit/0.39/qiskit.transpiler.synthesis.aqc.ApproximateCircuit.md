---
title: ApproximateCircuit
description: API reference for qiskit.transpiler.synthesis.aqc.ApproximateCircuit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.ApproximateCircuit
---

# ApproximateCircuit

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit" />

`ApproximateCircuit(num_qubits, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/transpiler/synthesis/aqc/approximate.py "view source code")

Bases: [`qiskit.circuit.quantumcircuit.QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `abc.ABC`

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

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

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

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.instances" />

### instances

`= 94`

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

The number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.parameters" />

### parameters

The parameters defined in the circuit.

This attribute returns the [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit sorted alphabetically. Note that parameters instantiated with a [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector") are still sorted numerically.

**Examples**

The snippet below shows that insertion order of parameters does not matter.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> a, b, elephant = Parameter("a"), Parameter("b"), Parameter("elephant")
>>> circuit = QuantumCircuit(1)
>>> circuit.rx(b, 0)
>>> circuit.rz(elephant, 0)
>>> circuit.ry(a, 0)
>>> circuit.parameters  # sorted alphabetically!
ParameterView([Parameter(a), Parameter(b), Parameter(elephant)])
```

Bear in mind that alphabetical sorting might be unituitive when it comes to numbers. The literal “10” comes before “2” in strict alphabetical sorting.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> angles = [Parameter("angle_1"), Parameter("angle_2"), Parameter("angle_10")]
>>> circuit = QuantumCircuit(1)
>>> circuit.u(*angles, 0)
>>> circuit.draw()
   ┌─────────────────────────────┐
q: ┤ U(angle_1,angle_2,angle_10) ├
   └─────────────────────────────┘
>>> circuit.parameters
ParameterView([Parameter(angle_1), Parameter(angle_10), Parameter(angle_2)])
```

To respect numerical sorting, a [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector") can be used.

```python
```

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter, ParameterVector
>>> x = ParameterVector("x", 12)
>>> circuit = QuantumCircuit(1)
>>> for x_i in x:
...     circuit.rx(x_i, 0)
>>> circuit.parameters
ParameterView([
    ParameterVectorElement(x[0]), ParameterVectorElement(x[1]),
    ParameterVectorElement(x[2]), ParameterVectorElement(x[3]),
    ..., ParameterVectorElement(x[11])
])
```

**Return type**

`ParameterView`

**Returns**

The sorted [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit.

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

<span id="qiskit.transpiler.synthesis.aqc.ApproximateCircuit.thetas" />

### thetas

The property is not implemented and raises a `NotImplementedException` exception.

**Return type**

`ndarray`

**Returns**

a vector of parameters of this circuit.

