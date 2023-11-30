<span id="qiskit-providers-aer-noise-readouterror" />

# qiskit.providers.aer.noise.ReadoutError

<span id="undefined" />

`ReadoutError(probabilities, atol=1e-08)`

Readout error class for Qiskit Aer noise model.

Create a readout error for a noise model.

For an N-qubit readout error probabilities are entered as vectors:

```python
probabilities[m] = [P(0|m), P(1|m), ..., P(2 ** N - 1|m)]
```

where `P(j|m)` is the probability of recording a measurement outcome of `m` as the value `j`. Where `j` and `m` are integer representations of bit-strings.

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

<span id="undefined" />

`__init__(probabilities, atol=1e-08)`

Create a readout error for a noise model.

For an N-qubit readout error probabilities are entered as vectors:

```python
probabilities[m] = [P(0|m), P(1|m), ..., P(2 ** N - 1|m)]
```

where `P(j|m)` is the probability of recording a measurement outcome of `m` as the value `j`. Where `j` and `m` are integer representations of bit-strings.

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

|                                                                                                                                            |                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.aer.noise.ReadoutError.__init__ "qiskit.providers.aer.noise.ReadoutError.__init__")(probabilities\[, atol]) | Create a readout error for a noise model.                                 |
| [`compose`](#qiskit.providers.aer.noise.ReadoutError.compose "qiskit.providers.aer.noise.ReadoutError.compose")(other\[, front])           | Return the composition readout error other \* self.                       |
| [`copy`](#qiskit.providers.aer.noise.ReadoutError.copy "qiskit.providers.aer.noise.ReadoutError.copy")()                                   | Make a copy of current ReadoutError.                                      |
| [`dot`](#qiskit.providers.aer.noise.ReadoutError.dot "qiskit.providers.aer.noise.ReadoutError.dot")(other)                                 | Return the composition readout error self \* other.                       |
| [`expand`](#qiskit.providers.aer.noise.ReadoutError.expand "qiskit.providers.aer.noise.ReadoutError.expand")(other)                        | Return the tensor product readout error self ⊗ other.                     |
| [`ideal`](#qiskit.providers.aer.noise.ReadoutError.ideal "qiskit.providers.aer.noise.ReadoutError.ideal")()                                | Return True if current error object is an identity                        |
| [`power`](#qiskit.providers.aer.noise.ReadoutError.power "qiskit.providers.aer.noise.ReadoutError.power")(n)                               | Return the compose of the readout error with itself n times.              |
| [`set_atol`](#qiskit.providers.aer.noise.ReadoutError.set_atol "qiskit.providers.aer.noise.ReadoutError.set_atol")(value)                  | Set the class default absolute tolerance parameter for float comparisons. |
| [`set_rtol`](#qiskit.providers.aer.noise.ReadoutError.set_rtol "qiskit.providers.aer.noise.ReadoutError.set_rtol")(value)                  | Set the class default relative tolerance parameter for float comparisons. |
| [`tensor`](#qiskit.providers.aer.noise.ReadoutError.tensor "qiskit.providers.aer.noise.ReadoutError.tensor")(other)                        | Return the tensor product readout error self ⊗ other.                     |
| [`to_dict`](#qiskit.providers.aer.noise.ReadoutError.to_dict "qiskit.providers.aer.noise.ReadoutError.to_dict")()                          | Return the current error as a dictionary.                                 |
| [`to_instruction`](#qiskit.providers.aer.noise.ReadoutError.to_instruction "qiskit.providers.aer.noise.ReadoutError.to_instruction")()     | Convert the ReadoutError to a circuit Instruction.                        |

## Attributes

|                                                                                                                                            |                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`atol`](#qiskit.providers.aer.noise.ReadoutError.atol "qiskit.providers.aer.noise.ReadoutError.atol")                                     | The default absolute tolerance parameter for float comparisons. |
| [`number_of_qubits`](#qiskit.providers.aer.noise.ReadoutError.number_of_qubits "qiskit.providers.aer.noise.ReadoutError.number_of_qubits") | Return the number of qubits for the error.                      |
| [`probabilities`](#qiskit.providers.aer.noise.ReadoutError.probabilities "qiskit.providers.aer.noise.ReadoutError.probabilities")          | Return the readout error probabilities matrix.                  |
| [`rtol`](#qiskit.providers.aer.noise.ReadoutError.rtol "qiskit.providers.aer.noise.ReadoutError.rtol")                                     | The relative tolerance parameter for float comparisons.         |

<span id="undefined" />

`property atol`

The default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`compose(other, front=False)`

Return the composition readout error other \* self.

Note that for front=True this is equivalent to the [`ReadoutError.dot()`](#qiskit.providers.aer.noise.ReadoutError.dot "qiskit.providers.aer.noise.ReadoutError.dot") method.

**Parameters**

*   **other** ([*ReadoutError*](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.
*   **front** (*bool*) – If True return the reverse order composation self \* other instead \[default: False].

**Returns**

The composition readout error.

**Return type**

[ReadoutError](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

*   **NoiseError** – if other is not a ReadoutError or has incompatible
*   **dimensions.** –

<span id="undefined" />

`copy()`

Make a copy of current ReadoutError.

<span id="undefined" />

`dot(other)`

Return the composition readout error self \* other.

**Parameters**

**other** ([*ReadoutError*](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.

**Returns**

The composition readout error.

**Return type**

[ReadoutError](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

*   **NoiseError** – if other is not a ReadoutError or has incompatible
*   **dimensions.** –

<span id="undefined" />

`expand(other)`

Return the tensor product readout error self ⊗ other.

**Parameters**

**other** ([*ReadoutError*](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.

**Returns**

the tensor product readout error other ⊗ self.

**Return type**

[ReadoutError](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if other is not a ReadoutError.

<span id="undefined" />

`ideal()`

Return True if current error object is an identity

<span id="undefined" />

`property number_of_qubits`

Return the number of qubits for the error.

<span id="undefined" />

`power(n)`

Return the compose of the readout error with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composition channel.

**Return type**

[ReadoutError](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if the power is not a positive integer.

<span id="undefined" />

`property probabilities`

Return the readout error probabilities matrix.

<span id="undefined" />

`property rtol`

The relative tolerance parameter for float comparisons.

<span id="undefined" />

`classmethod set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`classmethod set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

<span id="undefined" />

`tensor(other)`

Return the tensor product readout error self ⊗ other.

**Parameters**

**other** ([*ReadoutError*](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.

**Returns**

the tensor product readout error self ⊗ other.

**Return type**

[ReadoutError](#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if other is not a ReadoutError.

<span id="undefined" />

`to_dict()`

Return the current error as a dictionary.

<span id="undefined" />

`to_instruction()`

Convert the ReadoutError to a circuit Instruction.
