---
title: FourierChecking
description: API reference for qiskit.circuit.library.FourierChecking
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.FourierChecking
---

# FourierChecking

<span id="qiskit.circuit.library.FourierChecking" />

`FourierChecking(f, g)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/fourier_checking.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Fourier checking circuit.

The circuit for the Fourier checking algorithm, introduced in \[1], involves a layer of Hadamards, the function $f$, another layer of Hadamards, the function $g$, followed by a final layer of Hadamards. The functions $f$ and $g$ are classical functions realized as phase oracles (diagonal operators with \{-1, 1} on the diagonal).

The probability of observing the all-zeros string is $p(f,g)$. The algorithm solves the promise Fourier checking problem, which decides if f is correlated with the Fourier transform of g, by testing if $p(f,g) <= 0.01$ or $p(f,g) >= 0.05$, promised that one or the other of these is true.

The functions $f$ and $g$ are currently implemented from their truth tables but could be represented concisely and implemented efficiently for special classes of functions.

Fourier checking is a special case of $k$-fold forrelation \[2].

**Reference:**

\[1] S. Aaronson, BQP and the Polynomial Hierarchy, 2009 (Section 3.2). [arXiv:0910.4698](https://arxiv.org/abs/0910.4698)

\[2] S. Aaronson, A. Ambainis, Forrelation: a problem that optimally separates quantum from classical computing, 2014. [arXiv:1411.5729](https://arxiv.org/abs/1411.5729)

Create Fourier checking circuit.

**Parameters**

*   **f** (`List`\[`int`]) – truth table for f, length 2\*\*n list of \{1,-1}.
*   **g** (`List`\[`int`]) – truth table for g, length 2\*\*n list of \{1,-1}.

**Raises**

**CircuitError** – if the inputs f and g are not valid.

**Reference Circuit:**

## Attributes

<span id="qiskit.circuit.library.FourierChecking.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.FourierChecking.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.FourierChecking.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.FourierChecking.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.FourierChecking.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.FourierChecking.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.FourierChecking.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.FourierChecking.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.FourierChecking.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.FourierChecking.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.FourierChecking.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.FourierChecking.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.FourierChecking.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.FourierChecking.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.FourierChecking.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.FourierChecking.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

