---
title: ReadoutError
description: API reference for qiskit.providers.aer.noise.ReadoutError
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.noise.ReadoutError
---

# ReadoutError

<span id="qiskit.providers.aer.noise.ReadoutError" />

`ReadoutError(probabilities, atol=1e-08)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.8/qiskit/providers/aer/noise/errors/readout_error.py "view source code")

Bases: `object`

Readout error class for Qiskit Aer noise model.

Create a readout error for a noise model.

For an N-qubit readout error probabilities are entered as vectors:

```python
probabilities[m] = [P(0|m), P(1|m), ..., P(2 ** N - 1|m)]
```

where `P(n|m)` is the probability of recording a noisy measurement outcome as `n` given the true ideal measurement outcome was `m`, where `n` and `m` are integer representations of bit-strings.

**Example: 1-qubit**

```python
probabilities[0] = [P("0"|"0"), P("1"|"0")]
probabilities[1] = [P("0"|"1"), P("1"|"1")]
```

**Example: 2-qubit**

```python
probabilities[0] = [P("00"|"00"), P("01"|"00"), P("10"|"00"), P("11"|"00")]
probabilities[1] = [P("00"|"01"), P("01"|"01"), P("10"|"01"), P("11"|"01")]
probabilities[2] = [P("00"|"10"), P("01"|"10"), P("10"|"10"), P("11"|"10")]
probabilities[3] = [P("00"|"11"), P("01"|"11"), P("10"|"11"), P("11"|"11")]
```

**Parameters**

*   **probabilities** (*matrix*) – List of outcome assignment probabilities.
*   **atol** (*double*) – Threshold for checking probabilities are normalized (Default: 1e-8).

## Methods

### compose

<span id="qiskit.providers.aer.noise.ReadoutError.compose" />

`ReadoutError.compose(other, front=False)`

Return the composition readout error other \* self.

Note that for front=True this is equivalent to the [`ReadoutError.dot()`](qiskit.providers.aer.noise.ReadoutError#dot "qiskit.providers.aer.noise.ReadoutError.dot") method.

**Parameters**

*   **other** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.
*   **front** (*bool*) – If True return the reverse order composation self \* other instead \[default: False].

**Returns**

The composition readout error.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

*   **NoiseError** – if other is not a ReadoutError or has incompatible
*   **dimensions.** –

### copy

<span id="qiskit.providers.aer.noise.ReadoutError.copy" />

`ReadoutError.copy()`

Make a copy of current ReadoutError.

### dot

<span id="qiskit.providers.aer.noise.ReadoutError.dot" />

`ReadoutError.dot(other)`

Return the composition readout error self \* other.

**Parameters**

**other** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.

**Returns**

The composition readout error.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

*   **NoiseError** – if other is not a ReadoutError or has incompatible
*   **dimensions.** –

### expand

<span id="qiskit.providers.aer.noise.ReadoutError.expand" />

`ReadoutError.expand(other)`

Return the tensor product readout error self ⊗ other.

**Parameters**

**other** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.

**Returns**

the tensor product readout error other ⊗ self.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if other is not a ReadoutError.

### ideal

<span id="qiskit.providers.aer.noise.ReadoutError.ideal" />

`ReadoutError.ideal()`

Return True if current error object is an identity

### power

<span id="qiskit.providers.aer.noise.ReadoutError.power" />

`ReadoutError.power(n)`

Return the compose of the readout error with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composition channel.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if the power is not a positive integer.

### set\_atol

<span id="qiskit.providers.aer.noise.ReadoutError.set_atol" />

`classmethod ReadoutError.set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

### set\_rtol

<span id="qiskit.providers.aer.noise.ReadoutError.set_rtol" />

`classmethod ReadoutError.set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

### tensor

<span id="qiskit.providers.aer.noise.ReadoutError.tensor" />

`ReadoutError.tensor(other)`

Return the tensor product readout error self ⊗ other.

**Parameters**

**other** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.

**Returns**

the tensor product readout error self ⊗ other.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if other is not a ReadoutError.

### to\_dict

<span id="qiskit.providers.aer.noise.ReadoutError.to_dict" />

`ReadoutError.to_dict()`

Return the current error as a dictionary.

### to\_instruction

<span id="qiskit.providers.aer.noise.ReadoutError.to_instruction" />

`ReadoutError.to_instruction()`

Convert the ReadoutError to a circuit Instruction.

## Attributes

<span id="qiskit.providers.aer.noise.ReadoutError.atol" />

### atol

The default absolute tolerance parameter for float comparisons.

<span id="qiskit.providers.aer.noise.ReadoutError.number_of_qubits" />

### number\_of\_qubits

Return the number of qubits for the error.

<span id="qiskit.providers.aer.noise.ReadoutError.probabilities" />

### probabilities

Return the readout error probabilities matrix.

<span id="qiskit.providers.aer.noise.ReadoutError.rtol" />

### rtol

The relative tolerance parameter for float comparisons.

