---
title: ScalarOp
description: API reference for qiskit.quantum_info.ScalarOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.ScalarOp
---

# ScalarOp

<span id="qiskit.quantum_info.ScalarOp" />

`ScalarOp(dims=None, coeff=1)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/quantum_info/operators/scalar_op.py "view source code")

Bases: `qiskit.quantum_info.operators.linear_op.LinearOp`

Scalar identity operator class.

This is a symbolic representation of an scalar identity operator on multiple subsystems. It may be used to initialize a symbolic scalar multiplication of an identity and then be implicitly converted to other kinds of operator subclasses by using the [`compose()`](qiskit.quantum_info.ScalarOp#compose "qiskit.quantum_info.ScalarOp.compose"), [`dot()`](qiskit.quantum_info.ScalarOp#dot "qiskit.quantum_info.ScalarOp.dot"), [`tensor()`](qiskit.quantum_info.ScalarOp#tensor "qiskit.quantum_info.ScalarOp.tensor"), [`expand()`](qiskit.quantum_info.ScalarOp#expand "qiskit.quantum_info.ScalarOp.expand") methods.

Initialize an operator object.

**Parameters**

*   **dims** (*int or tuple*) – subsystem dimensions.
*   **coeff** (*Number*) – scalar coefficient for the identity operator (Default: 1).

**Raises**

**QiskitError** – If the optional coefficient is invalid.

## Methods

### adjoint

<span id="qiskit.quantum_info.ScalarOp.adjoint" />

`ScalarOp.adjoint()`

Return the adjoint of the Operator.

### compose

<span id="qiskit.quantum_info.ScalarOp.compose" />

`ScalarOp.compose(other, qargs=None, front=False)`

Return the operator composition with another ScalarOp.

**Parameters**

*   **other** ([*ScalarOp*](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")) – a ScalarOp object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The composed ScalarOp.

**Return type**

[ScalarOp](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while `@` (equivalent to [`dot()`](qiskit.quantum_info.ScalarOp#dot "qiskit.quantum_info.ScalarOp.dot")) is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B @ A == B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.ScalarOp#dot "qiskit.quantum_info.ScalarOp.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

### conjugate

<span id="qiskit.quantum_info.ScalarOp.conjugate" />

`ScalarOp.conjugate()`

Return the conjugate of the ScalarOp.

### copy

<span id="qiskit.quantum_info.ScalarOp.copy" />

`ScalarOp.copy()`

Make a deep copy of current operator.

### dot

<span id="qiskit.quantum_info.ScalarOp.dot" />

`ScalarOp.dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).

**Returns**

The right matrix multiplied Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

<Admonition title="Note" type="note">
  The dot product can be obtained using the `@` binary operator. Hence `a.dot(b)` is equivalent to `a @ b`.
</Admonition>

### expand

<span id="qiskit.quantum_info.ScalarOp.expand" />

`ScalarOp.expand(other)`

Return the reverse-order tensor product with another ScalarOp.

**Parameters**

**other** ([*ScalarOp*](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")) – a ScalarOp object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current ScalarOp, and $b$ is the other ScalarOp.

**Return type**

[ScalarOp](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

### input\_dims

<span id="qiskit.quantum_info.ScalarOp.input_dims" />

`ScalarOp.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_unitary

<span id="qiskit.quantum_info.ScalarOp.is_unitary" />

`ScalarOp.is_unitary(atol=None, rtol=None)`

Return True if operator is a unitary matrix.

### output\_dims

<span id="qiskit.quantum_info.ScalarOp.output_dims" />

`ScalarOp.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.ScalarOp.power" />

`ScalarOp.power(n)`

Return the power of the ScalarOp.

**Parameters**

**n** (*float*) – the exponent for the scalar op.

**Returns**

the `coeff ** n` ScalarOp.

**Return type**

[ScalarOp](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

### reshape

<span id="qiskit.quantum_info.ScalarOp.reshape" />

`ScalarOp.reshape(input_dims=None, output_dims=None, num_qubits=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Parameters**

*   **input\_dims** (*None or tuple*) – new subsystem input dimensions. If None the original input dims will be preserved \[Default: None].
*   **output\_dims** (*None or tuple*) – new subsystem output dimensions. If None the original output dims will be preserved \[Default: None].
*   **num\_qubits** (*None or int*) – reshape to an N-qubit operator \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

### tensor

<span id="qiskit.quantum_info.ScalarOp.tensor" />

`ScalarOp.tensor(other)`

Return the tensor product with another ScalarOp.

**Parameters**

**other** ([*ScalarOp*](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")) – a ScalarOp object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current ScalarOp, and $b$ is the other ScalarOp.

**Return type**

[ScalarOp](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

### to\_matrix

<span id="qiskit.quantum_info.ScalarOp.to_matrix" />

`ScalarOp.to_matrix()`

Convert to a Numpy matrix.

### to\_operator

<span id="qiskit.quantum_info.ScalarOp.to_operator" />

`ScalarOp.to_operator()`

Convert to an Operator object.

### transpose

<span id="qiskit.quantum_info.ScalarOp.transpose" />

`ScalarOp.transpose()`

Return the transpose of the ScalarOp.

## Attributes

<span id="qiskit.quantum_info.ScalarOp.atol" />

### atol

`= 1e-08`

<span id="qiskit.quantum_info.ScalarOp.coeff" />

### coeff

Return the coefficient

<span id="qiskit.quantum_info.ScalarOp.dim" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="qiskit.quantum_info.ScalarOp.num_qubits" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="qiskit.quantum_info.ScalarOp.qargs" />

### qargs

Return the qargs for the operator.

<span id="qiskit.quantum_info.ScalarOp.rtol" />

### rtol

`= 1e-05`

