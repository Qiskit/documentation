# ReadoutError

<span id="undefined" />

`ReadoutError(probabilities, atol=1e-08)`

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

|                                                                                                                                                                                            |                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [`compose`](qiskit.providers.aer.noise.ReadoutError.compose#qiskit.providers.aer.noise.ReadoutError.compose "qiskit.providers.aer.noise.ReadoutError.compose")                             | Return the composition readout error other \* self.                       |
| [`copy`](qiskit.providers.aer.noise.ReadoutError.copy#qiskit.providers.aer.noise.ReadoutError.copy "qiskit.providers.aer.noise.ReadoutError.copy")                                         | Make a copy of current ReadoutError.                                      |
| [`dot`](qiskit.providers.aer.noise.ReadoutError.dot#qiskit.providers.aer.noise.ReadoutError.dot "qiskit.providers.aer.noise.ReadoutError.dot")                                             | Return the composition readout error self \* other.                       |
| [`expand`](qiskit.providers.aer.noise.ReadoutError.expand#qiskit.providers.aer.noise.ReadoutError.expand "qiskit.providers.aer.noise.ReadoutError.expand")                                 | Return the tensor product readout error self ⊗ other.                     |
| [`ideal`](qiskit.providers.aer.noise.ReadoutError.ideal#qiskit.providers.aer.noise.ReadoutError.ideal "qiskit.providers.aer.noise.ReadoutError.ideal")                                     | Return True if current error object is an identity                        |
| [`power`](qiskit.providers.aer.noise.ReadoutError.power#qiskit.providers.aer.noise.ReadoutError.power "qiskit.providers.aer.noise.ReadoutError.power")                                     | Return the compose of the readout error with itself n times.              |
| [`set_atol`](qiskit.providers.aer.noise.ReadoutError.set_atol#qiskit.providers.aer.noise.ReadoutError.set_atol "qiskit.providers.aer.noise.ReadoutError.set_atol")                         | Set the class default absolute tolerance parameter for float comparisons. |
| [`set_rtol`](qiskit.providers.aer.noise.ReadoutError.set_rtol#qiskit.providers.aer.noise.ReadoutError.set_rtol "qiskit.providers.aer.noise.ReadoutError.set_rtol")                         | Set the class default relative tolerance parameter for float comparisons. |
| [`tensor`](qiskit.providers.aer.noise.ReadoutError.tensor#qiskit.providers.aer.noise.ReadoutError.tensor "qiskit.providers.aer.noise.ReadoutError.tensor")                                 | Return the tensor product readout error self ⊗ other.                     |
| [`to_dict`](qiskit.providers.aer.noise.ReadoutError.to_dict#qiskit.providers.aer.noise.ReadoutError.to_dict "qiskit.providers.aer.noise.ReadoutError.to_dict")                             | Return the current error as a dictionary.                                 |
| [`to_instruction`](qiskit.providers.aer.noise.ReadoutError.to_instruction#qiskit.providers.aer.noise.ReadoutError.to_instruction "qiskit.providers.aer.noise.ReadoutError.to_instruction") | Convert the ReadoutError to a circuit Instruction.                        |

## Attributes

<span id="undefined" />

### atol

The default absolute tolerance parameter for float comparisons.

<span id="undefined" />

### number\_of\_qubits

Return the number of qubits for the error.

<span id="undefined" />

### probabilities

Return the readout error probabilities matrix.

<span id="undefined" />

### rtol

The relative tolerance parameter for float comparisons.
