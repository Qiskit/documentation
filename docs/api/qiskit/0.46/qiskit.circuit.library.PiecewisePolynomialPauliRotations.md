---
title: PiecewisePolynomialPauliRotations
description: API reference for qiskit.circuit.library.PiecewisePolynomialPauliRotations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PiecewisePolynomialPauliRotations
---

# PiecewisePolynomialPauliRotations

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations" />

`qiskit.circuit.library.PiecewisePolynomialPauliRotations(num_state_qubits=None, breakpoints=None, coeffs=None, basis='Y', name='pw_poly')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/circuit/library/arithmetic/piecewise_polynomial_pauli_rotations.py "view source code")

Bases: [`FunctionalPauliRotations`](qiskit.circuit.library.FunctionalPauliRotations "qiskit.circuit.library.arithmetic.functional_pauli_rotations.FunctionalPauliRotations")

Piecewise-polynomially-controlled Pauli rotations.

This class implements a piecewise polynomial (not necessarily continuous) function, $f(x)$, on qubit amplitudes, which is defined through breakpoints and coefficients as follows. Suppose the breakpoints $(x_0, ..., x_J)$ are a subset of $[0, 2^n-1]$, where $n$ is the number of state qubits. Further on, denote the corresponding coefficients by $[a_{j,1},...,a_{j,d}]$, where $d$ is the highest degree among all polynomials.

Then $f(x)$ is defined as:

$$
f(x) = \begin{cases}
    0, x < x_0 \\
    \sum_{i=0}^{i=d}a_{j,i}/2 x^i, x_j \leq x < x_{j+1}
    \end{cases}
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

**\[2]: Carrera Vazquez, A., Hiptmair, R., & Woerner, S. (2022).**

Enhancing the Quantum Linear Systems Algorithm using Richardson Extrapolation. [ACM Transactions on Quantum Computing 3, 1, Article 2](https://doi.org/10.1145/3490631)

**Parameters**

*   **num\_state\_qubits** (*Optional\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – The number of qubits representing the state.
*   **breakpoints** (*Optional\[List\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]]*) – The breakpoints to define the piecewise-linear function. Defaults to `[0]`.
*   **coeffs** (*Optional\[List\[List\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*]]]*) – The coefficients of the polynomials for different segments of the
*   **x** (*piecewise-linear function. coeffs\[j]\[i] is the coefficient of the i-th power of*) –
*   **polynomial.** (*for the j-th*) – Defaults to linear: `[[1]]`.
*   **basis** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The type of Pauli rotation (`'X'`, `'Y'`, `'Z'`).
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The name of the circuit.

## Attributes

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.basis" />

### basis

The kind of Pauli rotation to be used.

Set the basis to ‘X’, ‘Y’ or ‘Z’ for controlled-X, -Y, or -Z rotations respectively.

**Returns**

The kind of Pauli rotation used in controlled rotation.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.breakpoints" />

### breakpoints

The breakpoints of the piecewise polynomial function.

The function is polynomial in the intervals `[point_i, point_{i+1}]` where the last point implicitly is `2**(num_state_qubits + 1)`.

**Returns**

The list of breakpoints.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.coeffs" />

### coeffs

The coefficients of the polynomials.

**Returns**

The polynomial coefficients per interval as nested lists.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.contains_zero_breakpoint" />

### contains\_zero\_breakpoint

Whether 0 is the first breakpoint.

**Returns**

True, if 0 is the first breakpoint, otherwise False.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.data" />

### data

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.global_phase" />

### global\_phase

Return the global phase of the current circuit scope in radians.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.instances" />

### instances

`= 250`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.layout" />

### layout

Return any associated layout information about the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](compiler#qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](compiler#qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.mapped_coeffs" />

### mapped\_coeffs

The coefficients mapped to the internal representation, since we only compare x>=breakpoint.

**Returns**

The mapped coefficients.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_ancilla_qubits" />

### num\_ancilla\_qubits

The minimum number of ancilla qubits in the circuit.

**Returns**

The minimal number of ancillas required.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_parameters" />

### num\_parameters

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.num_state_qubits" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – When circuit is not scheduled.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.parameters" />

### parameters

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.qregs" />

### qregs

`list[QuantumRegister]`

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

## Methods

### evaluate

<span id="qiskit.circuit.library.PiecewisePolynomialPauliRotations.evaluate" />

`evaluate(x)`

Classically evaluate the piecewise polynomial rotation.

**Parameters**

**x** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Value to be evaluated at.

**Returns**

Value of piecewise polynomial function at x.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

