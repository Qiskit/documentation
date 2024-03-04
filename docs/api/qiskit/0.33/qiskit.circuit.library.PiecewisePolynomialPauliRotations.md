---
title: PiecewisePolynomialPauliRotations
description: API reference for qiskit.circuit.library.PiecewisePolynomialPauliRotations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PiecewisePolynomialPauliRotations
---

# PiecewisePolynomialPauliRotations

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations" />

`PiecewisePolynomialPauliRotations(num_state_qubits=None, breakpoints=None, coeffs=None, basis='Y', name='pw_poly')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/arithmetic/piecewise_polynomial_pauli_rotations.py "view source code")

Bases: `qiskit.circuit.library.arithmetic.functional_pauli_rotations.FunctionalPauliRotations`

Piecewise-polynomially-controlled Pauli rotations.

This class implements a piecewise polynomial (not necessarily continuous) function, $f(x)$, on qubit amplitudes, which is defined through breakpoints and coefficients as follows. Suppose the breakpoints $(x_0, ..., x_J)$ are a subset of $[0, 2^n-1]$, where $n$ is the number of state qubits. Further on, denote the corresponding coefficients by $[a_{j,1},...,a_{j,d}]$, where $d$ is the highest degree among all polynomials.

Then $f(x)$ is defined as:

$$
\begin{split}f(x) = \begin{cases}
    0, x < x_0 \\
    \sum_{i=0}^{i=d}a_{j,i}/2 x^i, x_j \leq x < x_{j+1}
    \end{cases}\end{split}
$$

where if given the same number of breakpoints as polynomials, we implicitly assume $x_{J+1} = 2^n$.

<Admonition title="Note" type="note">
  Note the $1/2$ factor in the coefficients of $f(x)$, this is consistent with Qiskit’s Pauli rotations.
</Admonition>

**Examples**

```python
>>> from qiskit import QuantumCircuit
>>> from qiskit.circuit.library.arithmetic.piecewise_polynomial_pauli_rotations import\
... PiecewisePolynomialPauliRotations
>>> qubits, breakpoints, coeffs = (2, [0, 2], [[0, -1.2],[-1, 1, 3]])
>>> poly_r = PiecewisePolynomialPauliRotations(num_state_qubits=qubits,
...breakpoints=breakpoints, coeffs=coeffs)
>>>
>>> qc = QuantumCircuit(poly_r.num_qubits)
>>> qc.h(list(range(qubits)));
>>> qc.append(poly_r.to_instruction(), list(range(qc.num_qubits)));
>>> qc.draw()
     ┌───┐┌──────────┐
q_0: ┤ H ├┤0         ├
     ├───┤│          │
q_1: ┤ H ├┤1         ├
     └───┘│          │
q_2: ─────┤2         ├
          │  pw_poly │
q_3: ─────┤3         ├
          │          │
q_4: ─────┤4         ├
          │          │
q_5: ─────┤5         ├
          └──────────┘
```

**References**

**\[1]: Haener, T., Roetteler, M., & Svore, K. M. (2018).**

Optimizing Quantum Circuits for Arithmetic. [arXiv:1805.12445](http://arxiv.org/abs/1805.12445)

**\[2]: Carrera Vazquez, A., Hiptmair, R., & Woerner, S. (2020).**

Enhancing the Quantum Linear Systems Algorithm using Richardson Extrapolation. [arXiv:2009.04484](http://arxiv.org/abs/2009.04484)

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – The number of qubits representing the state.
*   **breakpoints** (`Optional`\[`List`\[`int`]]) – The breakpoints to define the piecewise-linear function. Defaults to `[0]`.
*   **coeffs** (`Optional`\[`List`\[`List`\[`float`]]]) – The coefficients of the polynomials for different segments of the
*   **function. coeffs**\*\*\[****j****]\*\*\*\*\[****i****] \*\***is the coefficient of the i-th power of x** (*piecewise-linear*) –
*   **the j-th polynomial.** (*for*) – Defaults to linear: `[[1]]`.
*   **basis** (`str`) – The type of Pauli rotation (`'X'`, `'Y'`, `'Z'`).
*   **name** (`str`) – The name of the circuit.

## Methods Defined Here

### evaluate

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.evaluate" />

`PiecewisePolynomialPauliRotations.evaluate(x)`

Classically evaluate the piecewise polynomial rotation.

**Parameters**

**x** (`float`) – Value to be evaluated at.

**Return type**

`float`

**Returns**

Value of piecewise polynomial function at x.

## Attributes

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.basis" />

### basis

The kind of Pauli rotation to be used.

Set the basis to ‘X’, ‘Y’ or ‘Z’ for controlled-X, -Y, or -Z rotations respectively.

**Return type**

`str`

**Returns**

The kind of Pauli rotation used in controlled rotation.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.breakpoints" />

### breakpoints

The breakpoints of the piecewise polynomial function.

The function is polynomial in the intervals `[point_i, point_{i+1}]` where the last point implicitly is `2**(num_state_qubits + 1)`.

**Return type**

`List`\[`int`]

**Returns**

The list of breakpoints.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.coeffs" />

### coeffs

The coefficients of the polynomials.

**Return type**

`List`\[`List`\[`float`]]

**Returns**

The polynomial coefficients per interval as nested lists.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.contains_zero_breakpoint" />

### contains\_zero\_breakpoint

Whether 0 is the first breakpoint.

**Return type**

`bool`

**Returns**

True, if 0 is the first breakpoint, otherwise False.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.data" />

### data

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.mapped_coeffs" />

### mapped\_coeffs

The coefficients mapped to the internal representation, since we only compare x>=breakpoint.

**Return type**

`List`\[`List`\[`float`]]

**Returns**

The mapped coefficients.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_ancilla_qubits" />

### num\_ancilla\_qubits

The minimum number of ancilla qubits in the circuit.

**Return type**

`int`

**Returns**

The minimal number of ancillas required.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_state_qubits" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

