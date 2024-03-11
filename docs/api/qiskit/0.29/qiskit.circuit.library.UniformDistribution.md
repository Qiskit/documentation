---
title: UniformDistribution
description: API reference for qiskit.circuit.library.UniformDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.UniformDistribution
---

# UniformDistribution

<span id="qiskit.circuit.library.UniformDistribution" />

`UniformDistribution(num_qubits, name='P(X)')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/probability_distributions/uniform.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

A circuit to encode a discretized uniform distribution in qubit amplitudes.

This simply corresponds to applying Hadamard gates on all qubits.

The probability density function of the discretized uniform distribution on $N$ values is

$$
\mathbb{P}(X = x) = \frac{1}{N}.
$$

This circuit considers $N = 2^n$, where $n =$ `num_qubits` and prepares the state

$$
\mathcal{P}_X |0\rangle^{\otimes n} = \frac{1}{\sqrt{2^n}} \sum_{x=0}^{2^n - 1} |x\rangle
$$

**Examples**

```python
>>> circuit = UniformDistribution(3)
>>> circuit.decompose().draw()
     ┌───┐
q_0: ┤ H ├
     ├───┤
q_1: ┤ H ├
     ├───┤
q_2: ┤ H ├
     └───┘
```

**Parameters**

*   **num\_qubits** (`int`) – The number of qubits in the circuit, the distribution is uniform over `2 ** num_qubits` values.
*   **name** (`str`) – The name of the circuit.

## Attributes

<span id="qiskit.circuit.library.UniformDistribution.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.UniformDistribution.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="qiskit.circuit.library.UniformDistribution.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.UniformDistribution.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.UniformDistribution.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.UniformDistribution.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.UniformDistribution.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.UniformDistribution.instances" />

### instances

`= 16`

<span id="qiskit.circuit.library.UniformDistribution.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.UniformDistribution.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.UniformDistribution.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.UniformDistribution.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

<span id="qiskit.circuit.library.UniformDistribution.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.UniformDistribution.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

<span id="qiskit.circuit.library.UniformDistribution.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.UniformDistribution.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

