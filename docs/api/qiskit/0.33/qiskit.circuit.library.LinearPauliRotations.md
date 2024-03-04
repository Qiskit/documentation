---
title: LinearPauliRotations
description: API reference for qiskit.circuit.library.LinearPauliRotations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.LinearPauliRotations
---

# LinearPauliRotations

<span id="qiskit.circuit.library.LinearPauliRotations" />

`LinearPauliRotations(num_state_qubits=None, slope=1, offset=0, basis='Y', name='LinRot')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/arithmetic/linear_pauli_rotations.py "view source code")

Bases: `qiskit.circuit.library.arithmetic.functional_pauli_rotations.FunctionalPauliRotations`

Linearly-controlled X, Y or Z rotation.

For a register of state qubits $|x\rangle$, a target qubit $|0\rangle$ and the basis `'Y'` this circuit acts as:

```python
    q_0: ─────────────────────────■───────── ... ──────────────────────
                                  │
                                  .
                                  │
q_(n-1): ─────────────────────────┼───────── ... ───────────■──────────
          ┌────────────┐  ┌───────┴───────┐       ┌─────────┴─────────┐
    q_n: ─┤ RY(offset) ├──┤ RY(2^0 slope) ├  ...  ┤ RY(2^(n-1) slope) ├
          └────────────┘  └───────────────┘       └───────────────────┘
```

This can for example be used to approximate linear functions, with $a/2 =$ `slope` and $b/2 =$ `offset` and the basis `'Y'`:

$$
|x\rangle |0\rangle \mapsto \cos(ax + b)|x\rangle|0\rangle + \sin(ax + b)|x\rangle |1\rangle
$$

Since for small arguments $\sin(x) \approx x$ this operator can be used to approximate linear functions.

Create a new linear rotation circuit.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – The number of qubits representing the state $|x\rangle$.
*   **slope** (`float`) – The slope of the controlled rotation.
*   **offset** (`float`) – The offset of the controlled rotation.
*   **basis** (`str`) – The type of Pauli rotation (‘X’, ‘Y’, ‘Z’).
*   **name** (`str`) – The name of the circuit object.

## Attributes

<span id="qiskit.circuit.library.LinearPauliRotations.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.LinearPauliRotations.basis" />

### basis

The kind of Pauli rotation to be used.

Set the basis to ‘X’, ‘Y’ or ‘Z’ for controlled-X, -Y, or -Z rotations respectively.

**Return type**

`str`

**Returns**

The kind of Pauli rotation used in controlled rotation.

<span id="qiskit.circuit.library.LinearPauliRotations.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.LinearPauliRotations.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.LinearPauliRotations.data" />

### data

<span id="qiskit.circuit.library.LinearPauliRotations.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.LinearPauliRotations.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.LinearPauliRotations.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.LinearPauliRotations.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.LinearPauliRotations.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.LinearPauliRotations.num_ancilla_qubits" />

### num\_ancilla\_qubits

The minimum number of ancilla qubits in the circuit.

**Return type**

`int`

**Returns**

The minimal number of ancillas required.

<span id="qiskit.circuit.library.LinearPauliRotations.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.LinearPauliRotations.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.LinearPauliRotations.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.LinearPauliRotations.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.LinearPauliRotations.num_state_qubits" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.LinearPauliRotations.offset" />

### offset

The angle of the single qubit offset rotation on the target qubit.

Before applying the controlled rotations, a single rotation of angle `offset` is applied to the target qubit.

**Return type**

`float`

**Returns**

The offset angle.

<span id="qiskit.circuit.library.LinearPauliRotations.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.LinearPauliRotations.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.LinearPauliRotations.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.LinearPauliRotations.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="qiskit.circuit.library.LinearPauliRotations.slope" />

### slope

The multiplicative factor in the rotation angle of the controlled rotations.

The rotation angles are `slope * 2^0`, `slope * 2^1`, … , `slope * 2^(n-1)` where `n` is the number of state qubits.

**Return type**

`float`

**Returns**

The rotation angle common in all controlled rotations.

