---
title: QuantumError
description: API reference for qiskit_aer.noise.QuantumError
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.noise.QuantumError
---

# QuantumError

<span id="qiskit_aer.noise.QuantumError" />

`QuantumError(noise_ops, number_of_qubits=None, standard_gates=None, atol=None)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.11/qiskit_aer/noise/errors/quantum_error.py "view source code")

Bases: `qiskit.quantum_info.operators.base_operator.BaseOperator`, `qiskit.quantum_info.operators.mixins.tolerances.TolerancesMixin`

Quantum error class for Qiskit Aer noise model

<Admonition title="Warning" type="caution">
  The init interface for this class is not finalized and may change in future releases. For maximum backwards compatibility use the QuantumError generating functions in the noise.errors module.
</Admonition>

Create a quantum error for a noise model.

Noise ops may either be specified as a `QuantumChannel` for a general CPTP map, or as a list of `(circuit, p)` pairs where `circuit` is a circuit-like object for the noise, and `p` is the probability of the noise event. Any type of input will be converted to the probabilistic mixture of circuit format.

**Example**

An example noise\_ops for a bit-flip error with error probability `p = 0.1` is:

```python
noise_ops = [(IGate(), 0.9),
             (XGate(), 0.1)]
```

or specifying explicit qubit arguments,

```python
noise_ops = [((IGate(), [0]), 0.9),
             ((XGate(), [0]), 0.1)]
```

The same error represented as a Kraus channel can be input as:

```python
noise_ops = Kraus([np.sqrt(0.9) * np.array([[1, 0], [0, 1]]),
                   np.sqrt(0.1) * np.array([[0, 1], [1, 0]])])
```

**Parameters**

*   **noise\_ops** (*QuantumChannel or Iterable*) – Either a quantum channel or a list of `(circuit, p)` pairs, which represents a quantum error, where `circuit` is a circuit-like object for the noise, and `p` is the probability of the noise event. Circuit-like types include `QuantumCircuit`, `(Instruction, qargs)` and a list of `(Instruction, qargs)`. Note that `qargs` should be a list of integers and can be omitted (default qubits are used in that case). See also examples above.
*   **number\_of\_qubits** (*int*) – \[DEPRECATED] specify the number of qubits for the error. If None this will be determined automatically (default None).
*   **standard\_gates** (*bool*) – \[DEPRECATED] Check if input matrices are standard gates.
*   **atol** (*double*) – \[DEPRECATED] Threshold for testing if probabilities are equal to 0 or 1 (Default: `QuantumError.atol`).

**Raises**

**NoiseError** – If input noise\_ops is invalid, e.g. it’s not a CPTP map.

## Methods

### compose

<span id="qiskit_aer.noise.QuantumError.compose" />

`QuantumError.compose(other, qargs=None, front=False)`

Return the operator composition with another CLASS.

**Parameters**

*   **other** (*CLASS*) – a CLASS object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The composed CLASS.

**Return type**

CLASS

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while `@` (equivalent to [`dot()`](qiskit_aer.noise.QuantumError#dot "qiskit_aer.noise.QuantumError.dot")) is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B @ A == B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit_aer.noise.QuantumError#dot "qiskit_aer.noise.QuantumError.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

### copy

<span id="qiskit_aer.noise.QuantumError.copy" />

`QuantumError.copy()`

Make a copy of current QuantumError.

### dot

<span id="qiskit_aer.noise.QuantumError.dot" />

`QuantumError.dot(other, qargs=None)`

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

### error\_term

<span id="qiskit_aer.noise.QuantumError.error_term" />

`QuantumError.error_term(position)`

Return a single term from the error.

**Parameters**

**position** (*int*) – the position of the error term.

**Returns**

A pair (circuit, p) for error term at position \< size where p is the probability of the error term, and circuit is the list of qobj instructions for the error term.

**Return type**

tuple

**Raises**

*   **NoiseError** – If the position is greater than the size of
*   **the quantum error.** –

### expand

<span id="qiskit_aer.noise.QuantumError.expand" />

`QuantumError.expand(other)`

Return the reverse-order tensor product with another CLASS.

**Parameters**

**other** (*CLASS*) – a CLASS object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current CLASS, and $b$ is the other CLASS.

**Return type**

CLASS

### ideal

<span id="qiskit_aer.noise.QuantumError.ideal" />

`QuantumError.ideal()`

Return True if this error object is composed only of identity operations. Note that the identity check is best effort and up to global phase.

### input\_dims

<span id="qiskit_aer.noise.QuantumError.input_dims" />

`QuantumError.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### output\_dims

<span id="qiskit_aer.noise.QuantumError.output_dims" />

`QuantumError.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit_aer.noise.QuantumError.power" />

`QuantumError.power(n)`

Return the compose of a operator with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composed operator.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

### reshape

<span id="qiskit_aer.noise.QuantumError.reshape" />

`QuantumError.reshape(input_dims=None, output_dims=None, num_qubits=None)`

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

### set\_atol

<span id="qiskit_aer.noise.QuantumError.set_atol" />

`classmethod QuantumError.set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

### set\_rtol

<span id="qiskit_aer.noise.QuantumError.set_rtol" />

`classmethod QuantumError.set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

### tensor

<span id="qiskit_aer.noise.QuantumError.tensor" />

`QuantumError.tensor(other)`

Return the tensor product with another CLASS.

**Parameters**

**other** (*CLASS*) – a CLASS object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current CLASS, and $b$ is the other CLASS.

**Return type**

CLASS

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

### to\_dict

<span id="qiskit_aer.noise.QuantumError.to_dict" />

`QuantumError.to_dict()`

Return the current error as a dictionary.

### to\_instruction

<span id="qiskit_aer.noise.QuantumError.to_instruction" />

`QuantumError.to_instruction()`

Convert the QuantumError to a circuit Instruction.

### to\_quantumchannel

<span id="qiskit_aer.noise.QuantumError.to_quantumchannel" />

`QuantumError.to_quantumchannel()`

Convert the QuantumError to a SuperOp quantum channel. Required to enable SuperOp(QuantumError).

## Attributes

<span id="qiskit_aer.noise.QuantumError.atol" />

### atol

`= 1e-08`

<span id="qiskit_aer.noise.QuantumError.circuits" />

### circuits

Return the list of error circuits.

<span id="qiskit_aer.noise.QuantumError.dim" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="qiskit_aer.noise.QuantumError.id" />

### id

Return unique ID string for error

<span id="qiskit_aer.noise.QuantumError.num_qubits" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="qiskit_aer.noise.QuantumError.number_of_qubits" />

### number\_of\_qubits

Return the number of qubits for the error.

<span id="qiskit_aer.noise.QuantumError.probabilities" />

### probabilities

Return the list of error probabilities.

<span id="qiskit_aer.noise.QuantumError.qargs" />

### qargs

Return the qargs for the operator.

<span id="qiskit_aer.noise.QuantumError.rtol" />

### rtol

`= 1e-05`

<span id="qiskit_aer.noise.QuantumError.size" />

### size

Return the number of error circuit.

