---
title: SwapGate
description: API reference for qiskit.circuit.library.SwapGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.SwapGate
---

# SwapGate

<span id="qiskit.circuit.library.SwapGate" />

`SwapGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/circuit/library/standard_gates/swap.py "view source code")

The SWAP gate.

This is a symmetric and Clifford gate.

**Circuit symbol:**

```python
q_0: ─X─
      │
q_1: ─X─
```

**Matrix Representation:**

$$
\begin{split}SWAP =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 0 & 1
    \end{pmatrix}\end{split}
$$

The gate is equivalent to a state swap and is a classical logic gate.

$$
|a, b\rangle \rightarrow |b, a\rangle
$$

Create new SWAP gate.

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### label

<span id="qiskit.circuit.library.SwapGate.label" />

`str`

Return gate label

**Return type**

`str`

### params

return instruction params.

## Methods

### add\_decomposition

<span id="qiskit.circuit.library.SwapGate.add_decomposition" />

`SwapGate.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.SwapGate.assemble" />

`SwapGate.assemble()`

Assemble a QasmQobjInstruction

**Return type**

[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

### broadcast\_arguments

<span id="qiskit.circuit.library.SwapGate.broadcast_arguments" />

`SwapGate.broadcast_arguments(qargs, cargs)`

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

<span id="qiskit.circuit.library.SwapGate.c_if" />

`SwapGate.c_if(classical, val)`

Add classical condition on register classical and value val.

### control

<span id="qiskit.circuit.library.SwapGate.control" />

`SwapGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-SWAP gate.

One control returns a CSWAP (Fredkin) gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### copy

<span id="qiskit.circuit.library.SwapGate.copy" />

`SwapGate.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.library.SwapGate.inverse" />

`SwapGate.inverse()`

Return inverse Swap gate (itself).

### is\_parameterized

<span id="qiskit.circuit.library.SwapGate.is_parameterized" />

`SwapGate.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.circuit.library.SwapGate.mirror" />

`SwapGate.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### power

<span id="qiskit.circuit.library.SwapGate.power" />

`SwapGate.power(exponent)`

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

<span id="qiskit.circuit.library.SwapGate.qasm" />

`SwapGate.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.SwapGate.repeat" />

`SwapGate.repeat(n)`

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

<span id="qiskit.circuit.library.SwapGate.to_matrix" />

`SwapGate.to_matrix()`

Return a numpy.array for the SWAP gate.

