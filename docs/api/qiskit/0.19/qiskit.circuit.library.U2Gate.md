---
title: U2Gate
description: API reference for qiskit.circuit.library.U2Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.U2Gate
---

# U2Gate

<span id="qiskit.circuit.library.U2Gate" />

`U2Gate(phi, lam, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/circuit/library/standard_gates/u2.py "view source code")

Single-qubit rotation about the X+Z axis.

Implemented using one X90 pulse on IBM Quantum systems:

$$
U2(\phi, \lambda) = RZ(\phi+\pi/2).RX(\frac{\pi}{2}).RZ(\lambda-\pi/2)
$$

**Circuit symbol:**

```python
     ┌─────────┐
q_0: ┤ U2(φ,λ) ├
     └─────────┘
```

**Matrix Representation:**

$$
\begin{split}U2(\phi, \lambda) = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1          & -e^{i\lambda} \\
        e^{i\phi} & e^{i(\phi+\lambda)}
    \end{pmatrix}\end{split}
$$

**Examples:**

$$
U2(0, \pi) = H
$$

<Admonition title="See also" type="note">
  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.
</Admonition>

Create new U2 gate.

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### label

<span id="qiskit.circuit.library.U2Gate.label" />

`str`

Return gate label

**Return type**

`str`

### params

return instruction params.

## Methods

### add\_decomposition

<span id="qiskit.circuit.library.U2Gate.add_decomposition" />

`U2Gate.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.U2Gate.assemble" />

`U2Gate.assemble()`

Assemble a QasmQobjInstruction

**Return type**

[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

### broadcast\_arguments

<span id="qiskit.circuit.library.U2Gate.broadcast_arguments" />

`U2Gate.broadcast_arguments(qargs, cargs)`

Validation and handling of the arguments and its relationship.

For example, `cx([q[0],q[1]], q[2])` means `cx(q[0], q[2]); cx(q[1], q[2])`. This method yields the arguments in the right grouping. In the given example:

```python
in: [[q[0],q[1]], q[2]],[]
outs: [q[0], q[2]], []
      [q[1], q[2]], []
```

The general broadcasting rules are:

> *   If len(qargs) == 1:
>
>     ```python
>     [q[0], q[1]] -> [q[0]],[q[1]]
>     ```
>
> *   If len(qargs) == 2:
>
>     ```python
>     [[q[0], q[1]], [r[0], r[1]]] -> [q[0], r[0]], [q[1], r[1]]
>     [[q[0]], [r[0], r[1]]]       -> [q[0], r[0]], [q[0], r[1]]
>     [[q[0], q[1]], [r[0]]]       -> [q[0], r[0]], [q[1], r[0]]
>     ```
>
> *   If len(qargs) >= 3:
>
>     ```python
>     [q[0], q[1]], [r[0], r[1]],  ...] -> [q[0], r[0], ...], [q[1], r[1], ...]
>     ```

**Parameters**

*   **qargs** (`List`) – List of quantum bit arguments.
*   **cargs** (`List`) – List of classical bit arguments.

**Return type**

`Tuple`\[`List`, `List`]

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.circuit.library.U2Gate.c_if" />

`U2Gate.c_if(classical, val)`

Add classical condition on register classical and value val.

### control

<span id="qiskit.circuit.library.U2Gate.control" />

`U2Gate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (`Optional`\[`int`]) – number of controls to add to gate (default=1)
*   **label** (`Optional`\[`str`]) – optional gate label
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

### copy

<span id="qiskit.circuit.library.U2Gate.copy" />

`U2Gate.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.library.U2Gate.inverse" />

`U2Gate.inverse()`

Return inverted U2 gate.

$U2(\phi, \lambda)^{\dagger} =U2(-\lambda-\pi, -\phi+\pi)$)

### is\_parameterized

<span id="qiskit.circuit.library.U2Gate.is_parameterized" />

`U2Gate.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.circuit.library.U2Gate.mirror" />

`U2Gate.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### power

<span id="qiskit.circuit.library.U2Gate.power" />

`U2Gate.power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

### qasm

<span id="qiskit.circuit.library.U2Gate.qasm" />

`U2Gate.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.U2Gate.repeat" />

`U2Gate.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

### to\_matrix

<span id="qiskit.circuit.library.U2Gate.to_matrix" />

`U2Gate.to_matrix()`

Return a Numpy.array for the U2 gate.

