---
title: PiecewiseLinearPauliRotations
description: API reference for qiskit.circuit.library.PiecewiseLinearPauliRotations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PiecewiseLinearPauliRotations
---

# PiecewiseLinearPauliRotations

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations" />

`PiecewiseLinearPauliRotations(num_state_qubits=None, breakpoints=None, slopes=None, offsets=None, basis='Y', name='pw_lin')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/circuit/library/arithmetic/piecewise_linear_pauli_rotations.py "view source code")

Bases: [`qiskit.circuit.library.arithmetic.functional_pauli_rotations.FunctionalPauliRotations`](qiskit.circuit.library.FunctionalPauliRotations "qiskit.circuit.library.arithmetic.functional_pauli_rotations.FunctionalPauliRotations")

Piecewise-linearly-controlled Pauli rotations.

For a piecewise linear (not necessarily continuous) function $f(x)$, which is defined through breakpoints, slopes and offsets as follows. Suppose the breakpoints $(x_0, ..., x_J)$ are a subset of $[0, 2^n-1]$, where $n$ is the number of state qubits. Further on, denote the corresponding slopes and offsets by $a_j$ and $b_j$ respectively. Then f(x) is defined as:

$$
\begin{split}f(x) = \begin{cases}
    0, x < x_0 \\
    a_j (x - x_j) + b_j, x_j \leq x < x_{j+1}
    \end{cases}\end{split}
$$

where we implicitly assume $x_{J+1} = 2^n$.

Construct piecewise-linearly-controlled Pauli rotations.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – The number of qubits representing the state.
*   **breakpoints** (`Optional`\[`List`\[`int`]]) – The breakpoints to define the piecewise-linear function. Defaults to `[0]`.
*   **slopes** (`Optional`\[`List`\[`float`]]) – The slopes for different segments of the piecewise-linear function. Defaults to `[1]`.
*   **offsets** (`Optional`\[`List`\[`float`]]) – The offsets for different segments of the piecewise-linear function. Defaults to `[0]`.
*   **basis** (`str`) – The type of Pauli rotation (`'X'`, `'Y'`, `'Z'`).
*   **name** (`str`) – The name of the circuit.

## Methods Defined Here

### evaluate

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.evaluate" />

`PiecewiseLinearPauliRotations.evaluate(x)`

Classically evaluate the piecewise linear rotation.

**Parameters**

**x** (`float`) – Value to be evaluated at.

**Return type**

`float`

**Returns**

Value of piecewise linear function at x.

## Attributes

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.basis" />

### basis

The kind of Pauli rotation to be used.

Set the basis to ‘X’, ‘Y’ or ‘Z’ for controlled-X, -Y, or -Z rotations respectively.

**Return type**

`str`

**Returns**

The kind of Pauli rotation used in controlled rotation.

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.breakpoints" />

### breakpoints

The breakpoints of the piecewise linear function.

The function is linear in the intervals `[point_i, point_{i+1}]` where the last point implicitly is `2**(num_state_qubits + 1)`.

**Return type**

`List`\[`int`]

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

**Return type**

`dict`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.contains_zero_breakpoint" />

### contains\_zero\_breakpoint

Whether 0 is the first breakpoint.

**Return type**

`bool`

**Returns**

True, if 0 is the first breakpoint, otherwise False.

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.data" />

### data

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.instances" />

### instances

`= 2331`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.mapped_offsets" />

### mapped\_offsets

The offsets mapped to the internal representation.

**Return type**

`List`\[`float`]

**Returns**

The mapped offsets.

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.mapped_slopes" />

### mapped\_slopes

The slopes mapped to the internal representation.

**Return type**

`List`\[`float`]

**Returns**

The mapped slopes.

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.num_ancilla_qubits" />

### num\_ancilla\_qubits

The minimum number of ancilla qubits in the circuit.

**Return type**

`int`

**Returns**

The minimal number of ancillas required.

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.num_state_qubits" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.offsets" />

### offsets

The breakpoints of the piecewise linear function.

The function is linear in the intervals `[point_i, point_{i+1}]` where the last point implicitly is `2**(num_state_qubits + 1)`.

**Return type**

`List`\[`float`]

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.slopes" />

### slopes

The breakpoints of the piecewise linear function.

The function is linear in the intervals `[point_i, point_{i+1}]` where the last point implicitly is `2**(num_state_qubits + 1)`.

**Return type**

`List`\[`int`]

