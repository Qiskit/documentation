---
title: CSwapGate
description: API reference for qiskit.circuit.library.CSwapGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CSwapGate
---

# CSwapGate

<span id="qiskit.circuit.library.CSwapGate" />

`CSwapGate(label=None, ctrl_state=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/circuit/library/standard_gates/swap.py "view source code")

Controlled-X gate.

**Circuit symbol:**

```python
q_0: ─X─
      │
q_1: ─X─
      │
q_2: ─■─
```

**Matrix representation:**

$$
\begin{split}CSWAP\ q_0, q_1, q_2 =
    |0 \rangle \langle 0| \otimes I \otimes I +
    |1 \rangle \langle 1| \otimes SWAP =
    \begin{pmatrix}
        1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
        0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_2. Thus a textbook matrix for this gate will be:

  ```python
  q_0: ─■─
        │
  q_1: ─X─
        │
  q_2: ─X─
  ```

  $$
  \begin{split}CSWAP\ q_2, q_1, q_0 =
      |0 \rangle \langle 0| \otimes I \otimes I +
      |1 \rangle \langle 1| \otimes SWAP =
      \begin{pmatrix}
          1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
          0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
          0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
          0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
          0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
          0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
      \end{pmatrix}\end{split}
  $$
</Admonition>

In the computational basis, this gate swaps the states of the two target qubits if the control qubit is in the $|1\rangle$ state.

$$
|0, b, c\rangle \rightarrow |0, b, c\rangle
|1, b, c\rangle \rightarrow |1, c, b\rangle
$$

Create new CSWAP gate.

## Attributes

### ctrl\_state

<span id="qiskit.circuit.library.CSwapGate.ctrl_state" />

`int`

Return the control state of the gate as a decimal integer.

**Return type**

`int`

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.CSwapGate.definition" />

`List`

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

### label

<span id="qiskit.circuit.library.CSwapGate.label" />

`str`

Return gate label

**Return type**

`str`

### params

return instruction params.

## Methods

### add\_decomposition

<span id="qiskit.circuit.library.CSwapGate.add_decomposition" />

`CSwapGate.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.CSwapGate.assemble" />

`CSwapGate.assemble()`

Assemble a QasmQobjInstruction

**Return type**

[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

### broadcast\_arguments

<span id="qiskit.circuit.library.CSwapGate.broadcast_arguments" />

`CSwapGate.broadcast_arguments(qargs, cargs)`

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

<span id="qiskit.circuit.library.CSwapGate.c_if" />

`CSwapGate.c_if(classical, val)`

Add classical condition on register classical and value val.

### control

<span id="qiskit.circuit.library.CSwapGate.control" />

`CSwapGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

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

<span id="qiskit.circuit.library.CSwapGate.copy" />

`CSwapGate.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.library.CSwapGate.inverse" />

`CSwapGate.inverse()`

Return inverse CSwap gate (itself).

### is\_parameterized

<span id="qiskit.circuit.library.CSwapGate.is_parameterized" />

`CSwapGate.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.circuit.library.CSwapGate.mirror" />

`CSwapGate.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### power

<span id="qiskit.circuit.library.CSwapGate.power" />

`CSwapGate.power(exponent)`

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

<span id="qiskit.circuit.library.CSwapGate.qasm" />

`CSwapGate.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.CSwapGate.repeat" />

`CSwapGate.repeat(n)`

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

<span id="qiskit.circuit.library.CSwapGate.to_matrix" />

`CSwapGate.to_matrix()`

Return a numpy.array for the Fredkin (CSWAP) gate.

