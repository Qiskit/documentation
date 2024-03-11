---
title: LinearAmplitudeFunction
description: API reference for qiskit.circuit.library.LinearAmplitudeFunction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.LinearAmplitudeFunction
---

# LinearAmplitudeFunction

<span id="qiskit.circuit.library.LinearAmplitudeFunction" />

`LinearAmplitudeFunction(num_state_qubits, slope, offset, domain, image, rescaling_factor=1, breakpoints=None, name='F')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/arithmetic/linear_amplitude_function.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

A circuit implementing a (piecewise) linear function on qubit amplitudes.

An amplitude function $F$ of a function $f$ is a mapping

$$
F|x\rangle|0\rangle = \sqrt{1 - \hat{f}(x)} |x\rangle|0\rangle + \sqrt{\hat{f}(x)}
    |x\rangle|1\rangle.
$$

for a function $\hat{f}: \{ 0, ..., 2^n - 1 \} \rightarrow [0, 1]$, where $|x\rangle$ is a $n$ qubit state.

This circuit implements $F$ for piecewise linear functions $\hat{f}$. In this case, the mapping $F$ can be approximately implemented using a Taylor expansion and linearly controlled Pauli-Y rotations, see \[1, 2] for more detail. This approximation uses a `rescaling_factor` to determine the accuracy of the Taylor expansion.

In general, the function of interest $f$ is defined from some interval $[a,b]$, the `domain` to $[c,d]$, the `image`, instead of $\{ 1, ..., N \}$ to $[0, 1]$. Using an affine transformation we can rescale $f$ to $\hat{f}$:

$$
\hat{f}(x) = \frac{f(\phi(x)) - c}{d - c}
$$

with

$$
\phi(x) = a + \frac{b - a}{2^n - 1} x.
$$

If $f$ is a piecewise linear function on $m$ intervals $[p_{i-1}, p_i], i \in \{1, ..., m\}$ with slopes $\alpha_i$ and offsets $\beta_i$ it can be written as

$$
f(x) = \sum_{i=1}^m 1_{[p_{i-1}, p_i]}(x) (\alpha_i x + \beta_i)
$$

where $1_{[a, b]}$ is an indication function that is 1 if the argument is in the interval $[a, b]$ and otherwise 0. The breakpoints $p_i$ can be specified by the `breakpoints` argument.

**References**

**\[1]: Woerner, S., & Egger, D. J. (2018).**

Quantum Risk Analysis. [arXiv:1806.06893](http://arxiv.org/abs/1806.06893)

**\[2]: Gacon, J., Zoufal, C., & Woerner, S. (2020).**

Quantum-Enhanced Simulation-Based Optimization. [arXiv:2005.10780](http://arxiv.org/abs/2005.10780)

**Parameters**

*   **num\_state\_qubits** (`int`) – The number of qubits used to encode the variable $x$.
*   **slope** (`Union`\[`float`, `List`\[`float`]]) – The slope of the linear function. Can be a list of slopes if it is a piecewise linear function.
*   **offset** (`Union`\[`float`, `List`\[`float`]]) – The offset of the linear function. Can be a list of offsets if it is a piecewise linear function.
*   **domain** (`Tuple`\[`float`, `float`]) – The domain of the function as tuple $(x_\min{}, x_\max{})$.
*   **image** (`Tuple`\[`float`, `float`]) – The image of the function as tuple $(f_\min{}, f_\max{})$.
*   **rescaling\_factor** (`float`) – The rescaling factor to adjust the accuracy in the Taylor approximation.
*   **breakpoints** (`Optional`\[`List`\[`float`]]) – The breakpoints if the function is piecewise linear. If None, the function is not piecewise.
*   **name** (`str`) – Name of the circuit.

## Methods Defined Here

### post\_processing

<span id="qiskit.circuit.library.LinearAmplitudeFunction.post_processing" />

`LinearAmplitudeFunction.post_processing(scaled_value)`

Map the function value of the approximated $\hat{f}$ to $f$.

**Parameters**

**scaled\_value** (`float`) – A function value from the Taylor expansion of $\hat{f}(x)$.

**Return type**

`float`

**Returns**

The `scaled_value` mapped back to the domain of $f$, by first inverting the transformation used for the Taylor approximation and then mapping back from $[0, 1]$ to the original domain.

## Attributes

<span id="qiskit.circuit.library.LinearAmplitudeFunction.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="qiskit.circuit.library.LinearAmplitudeFunction.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.LinearAmplitudeFunction.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.LinearAmplitudeFunction.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.LinearAmplitudeFunction.instances" />

### instances

`= 16`

<span id="qiskit.circuit.library.LinearAmplitudeFunction.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

<span id="qiskit.circuit.library.LinearAmplitudeFunction.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.LinearAmplitudeFunction.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

