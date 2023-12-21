---
title: ReadoutError
description: API reference for qiskit.providers.aer.noise.ReadoutError
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.noise.ReadoutError
---

# ReadoutError

<span id="qiskit.providers.aer.noise.ReadoutError" />

`ReadoutError(probabilities, atol=1e-08)`

Readout error class for Qiskit Aer noise model.

Create a readout error for a noise model.

For an N-qubit readout error probabilities are entered as vectors:

```python
probabilities[j] = [P(0|m), P(1|m), ..., P(2 ** N - 1|m)]
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

## Attributes

|                                                                                                                                                        |                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`ReadoutError.atol`](qiskit.providers.aer.noise.ReadoutError.atol "qiskit.providers.aer.noise.ReadoutError.atol")                                     | The default absolute tolerance parameter for float comparisons. |
| [`ReadoutError.number_of_qubits`](qiskit.providers.aer.noise.ReadoutError.number_of_qubits "qiskit.providers.aer.noise.ReadoutError.number_of_qubits") | Return the number of qubits for the error.                      |
| [`ReadoutError.probabilities`](qiskit.providers.aer.noise.ReadoutError.probabilities "qiskit.providers.aer.noise.ReadoutError.probabilities")          | Return the readout error probabilities matrix.                  |
| [`ReadoutError.rtol`](qiskit.providers.aer.noise.ReadoutError.rtol "qiskit.providers.aer.noise.ReadoutError.rtol")                                     | The relative tolerance parameter for float comparisons.         |

## Methods

|                                                                                                                                                    |                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`ReadoutError.__mul__`](qiskit.providers.aer.noise.ReadoutError.__mul__ "qiskit.providers.aer.noise.ReadoutError.__mul__")(other)                 |                                                                           |
| [`ReadoutError.compose`](qiskit.providers.aer.noise.ReadoutError.compose "qiskit.providers.aer.noise.ReadoutError.compose")(other\[, front])       | Return the composition readout error other \* self.                       |
| [`ReadoutError.copy`](qiskit.providers.aer.noise.ReadoutError.copy "qiskit.providers.aer.noise.ReadoutError.copy")()                               | Make a copy of current ReadoutError.                                      |
| [`ReadoutError.dot`](qiskit.providers.aer.noise.ReadoutError.dot "qiskit.providers.aer.noise.ReadoutError.dot")(other)                             | Return the composition readout error self \* other.                       |
| [`ReadoutError.expand`](qiskit.providers.aer.noise.ReadoutError.expand "qiskit.providers.aer.noise.ReadoutError.expand")(other)                    | Return the tensor product readout error self ⊗ other.                     |
| [`ReadoutError.ideal`](qiskit.providers.aer.noise.ReadoutError.ideal "qiskit.providers.aer.noise.ReadoutError.ideal")()                            | Return True if current error object is an identity                        |
| [`ReadoutError.power`](qiskit.providers.aer.noise.ReadoutError.power "qiskit.providers.aer.noise.ReadoutError.power")(n)                           | Return the compose of the readout error with itself n times.              |
| [`ReadoutError.set_atol`](qiskit.providers.aer.noise.ReadoutError.set_atol "qiskit.providers.aer.noise.ReadoutError.set_atol")(value)              | Set the class default absolute tolerance parameter for float comparisons. |
| [`ReadoutError.set_rtol`](qiskit.providers.aer.noise.ReadoutError.set_rtol "qiskit.providers.aer.noise.ReadoutError.set_rtol")(value)              | Set the class default relative tolerance parameter for float comparisons. |
| [`ReadoutError.tensor`](qiskit.providers.aer.noise.ReadoutError.tensor "qiskit.providers.aer.noise.ReadoutError.tensor")(other)                    | Return the tensor product readout error self ⊗ other.                     |
| [`ReadoutError.to_dict`](qiskit.providers.aer.noise.ReadoutError.to_dict "qiskit.providers.aer.noise.ReadoutError.to_dict")()                      | Return the current error as a dictionary.                                 |
| [`ReadoutError.to_instruction`](qiskit.providers.aer.noise.ReadoutError.to_instruction "qiskit.providers.aer.noise.ReadoutError.to_instruction")() | Convert the ReadoutError to a circuit Instruction.                        |

