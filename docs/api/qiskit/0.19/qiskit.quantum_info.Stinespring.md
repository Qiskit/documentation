---
title: Stinespring
description: API reference for qiskit.quantum_info.Stinespring
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Stinespring
---

# Stinespring

<span id="qiskit.quantum_info.Stinespring" />

`Stinespring(data, input_dims=None, output_dims=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/quantum_info/operators/channel/stinespring.py "view source code")

Stinespring representation of a quantum channel.

The Stinespring representation of a quantum channel $\mathcal{E}$ is a rectangular matrix $A$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(ρ) = \mbox{Tr}_2\left[A ρ A^\dagger\right]
$$

where $\mbox{Tr}_2$ is the [`partial_trace()`](qiskit.quantum_info.partial_trace "qiskit.quantum_info.partial_trace") over subsystem 2.

A general operator map $\mathcal{G}$ can also be written using the generalized Stinespring representation which is given by two matrices $A$, $B$ such that

$$
\mathcal{G}(ρ) = \mbox{Tr}_2\left[A ρ B^\dagger\right]
$$

See reference \[1] for further details.

**References**

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Stinespring operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a a list of Kraus matrices.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. This can fail for the Stinespring operator if the output dimension cannot be automatically determined.

## Attributes

### atol

The default absolute tolerance parameter for float comparisons.

### data

Return data.

### dim

Return tuple (input\_shape, output\_shape).

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

### qargs

Return the qargs for the operator.

### rtol

The relative tolerance parameter for float comparisons.

## Methods

### \_\_call\_\_

<span id="qiskit.quantum_info.Stinespring.__call__" />

`Stinespring.__call__(qargs)`

Return a clone with qargs set

### \_\_mul\_\_

<span id="qiskit.quantum_info.Stinespring.__mul__" />

`Stinespring.__mul__(other)`

### add

<span id="qiskit.quantum_info.Stinespring.add" />

`Stinespring.add(other)`

Return the linear operator self + other.

DEPRECATED: use `operator + other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self + other.

**Return type**

BaseOperator

### adjoint

<span id="qiskit.quantum_info.Stinespring.adjoint" />

`Stinespring.adjoint()`

Return the adjoint of the operator.

### compose

<span id="qiskit.quantum_info.Stinespring.compose" />

`Stinespring.compose(other, qargs=None, front=False)`

Return the composed quantum channel self @ other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The quantum channel self @ other.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if other cannot be converted to a Stinespring or has incompatible dimensions.

#### Additional Information:

Composition (`@`) is defined as left matrix multiplication for [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") matrices. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](qiskit.quantum_info.Stinespring#dot "qiskit.quantum_info.Stinespring.dot") method.

### conjugate

<span id="qiskit.quantum_info.Stinespring.conjugate" />

`Stinespring.conjugate()`

Return the conjugate of the QuantumChannel.

### copy

<span id="qiskit.quantum_info.Stinespring.copy" />

`Stinespring.copy()`

Make a deep copy of current operator.

### dot

<span id="qiskit.quantum_info.Stinespring.dot" />

`Stinespring.dot(other, qargs=None)`

Return the right multiplied quantum channel self \* other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The quantum channel self \* other.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if other cannot be converted to a Stinespring or has incompatible dimensions.

### expand

<span id="qiskit.quantum_info.Stinespring.expand" />

`Stinespring.expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel subclass.

**Returns**

the tensor product channel other ⊗ self as a Stinespring object.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### input\_dims

<span id="qiskit.quantum_info.Stinespring.input_dims" />

`Stinespring.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_cp

<span id="qiskit.quantum_info.Stinespring.is_cp" />

`Stinespring.is_cp(atol=None, rtol=None)`

Test if Choi-matrix is completely-positive (CP)

### is\_cptp

<span id="qiskit.quantum_info.Stinespring.is_cptp" />

`Stinespring.is_cptp(atol=None, rtol=None)`

Return True if completely-positive trace-preserving.

### is\_tp

<span id="qiskit.quantum_info.Stinespring.is_tp" />

`Stinespring.is_tp(atol=None, rtol=None)`

Test if a channel is completely-positive (CP)

### is\_unitary

<span id="qiskit.quantum_info.Stinespring.is_unitary" />

`Stinespring.is_unitary(atol=None, rtol=None)`

Return True if QuantumChannel is a unitary channel.

### multiply

<span id="qiskit.quantum_info.Stinespring.multiply" />

`Stinespring.multiply(other)`

Return the linear operator other \* self.

DEPRECATED: use `other * operator` instead.

**Parameters**

**other** (*complex*) – a complex number.

**Returns**

the linear operator other \* self.

**Return type**

BaseOperator

**Raises**

**NotImplementedError** – if subclass does not support multiplication.

### output\_dims

<span id="qiskit.quantum_info.Stinespring.output_dims" />

`Stinespring.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.Stinespring.power" />

`Stinespring.power(n)`

The matrix power of the channel.

**Parameters**

**n** (*int*) – compute the matrix power of the superoperator matrix.

**Returns**

the matrix power of the SuperOp converted to a Stinespring channel.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if the input and output dimensions of the QuantumChannel are not equal, or the power is not an integer.

### reshape

<span id="qiskit.quantum_info.Stinespring.reshape" />

`Stinespring.reshape(input_dims=None, output_dims=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

#### Arg:

#### input\_dims (None or tuple): new subsystem input dimensions.

If None the original input dims will be preserved \[Default: None].

#### output\_dims (None or tuple): new subsystem output dimensions.

If None the original output dims will be preserved \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

### set\_atol

<span id="qiskit.quantum_info.Stinespring.set_atol" />

`classmethod Stinespring.set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

### set\_rtol

<span id="qiskit.quantum_info.Stinespring.set_rtol" />

`classmethod Stinespring.set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

### subtract

<span id="qiskit.quantum_info.Stinespring.subtract" />

`Stinespring.subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `operator - other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self - other.

**Return type**

BaseOperator

### tensor

<span id="qiskit.quantum_info.Stinespring.tensor" />

`Stinespring.tensor(other)`

Return the tensor product channel self ⊗ other.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel subclass.

**Returns**

the tensor product channel other ⊗ self as a Stinespring object.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### to\_instruction

<span id="qiskit.quantum_info.Stinespring.to_instruction" />

`Stinespring.to_instruction()`

Convert to a Kraus or UnitaryGate circuit instruction.

If the channel is unitary it will be added as a unitary gate, otherwise it will be added as a kraus simulator instruction.

**Returns**

A kraus instruction for the channel.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**QiskitError** – if input data is not an N-qubit CPTP quantum channel.

### to\_operator

<span id="qiskit.quantum_info.Stinespring.to_operator" />

`Stinespring.to_operator()`

Try to convert channel to a unitary representation Operator.

### transpose

<span id="qiskit.quantum_info.Stinespring.transpose" />

`Stinespring.transpose()`

Return the transpose of the QuantumChannel.

