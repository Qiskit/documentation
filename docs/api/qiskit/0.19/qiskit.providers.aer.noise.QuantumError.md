---
title: QuantumError
description: API reference for qiskit.providers.aer.noise.QuantumError
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.noise.QuantumError
---

# QuantumError

<span id="qiskit.providers.aer.noise.QuantumError" />

`QuantumError(noise_ops, number_of_qubits=None, standard_gates=True, atol=1e-08)`

Quantum error class for Qiskit Aer noise model

**WARNING: The init interface for this class is not finalized and may**

change in future releases. For maximum backwards compatibility use the QuantumError generating functions in the noise.errors module.

Create a quantum error for a noise model.

Noise ops may either be specified as list of Kraus operators for a general CPTP map, or as a list of `(circuit, p)` pairs where `circuit` is a qobj circuit for the noise, and `p` is the probability of the error circuit. If the input is Kraus operators they will be converted to the circuit format, with checks applied for determining if any Kraus operators are unitary matrices.

**Example**

An example noise\_ops for a bit-flip error with error probability `p = 0.1` is:

```python
noise_ops = [([{"name": "id", "qubits": 0}], 0.9),
             ([{"name": "x", "qubits": 0}], 0.1)]
```

The same error represented as a Kraus channel can be input as:

```python
noise_ops = [np.sqrt(0.9) * np.array([[1, 0], [0, 1]]),
             np.sqrt(0.1) * np.array([[0, 1], [1, 0]])]
```

**Parameters**

*   **noise\_ops** (*list*) – A list of noise ops. See additional information.
*   **number\_of\_qubits** (*int*) – specify the number of qubits for the error. If None this will be determined automatically (default None).
*   **standard\_gates** (*bool*) – Check if input matrices are standard gates.
*   **atol** (*double*) – Threshold for testing if probabilities are equal to 0 or 1 (Default: 1e-8).

**Raises**

**NoiseError** – If input noise\_ops are not a CPTP map.

## Attributes

|                                                                                                                                                        |                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`QuantumError.atol`](qiskit.providers.aer.noise.QuantumError.atol "qiskit.providers.aer.noise.QuantumError.atol")                                     | The default absolute tolerance parameter for float comparisons. |
| [`QuantumError.circuits`](qiskit.providers.aer.noise.QuantumError.circuits "qiskit.providers.aer.noise.QuantumError.circuits")                         | Return the list of error circuits.                              |
| [`QuantumError.number_of_qubits`](qiskit.providers.aer.noise.QuantumError.number_of_qubits "qiskit.providers.aer.noise.QuantumError.number_of_qubits") | Return the number of qubits for the error.                      |
| [`QuantumError.probabilities`](qiskit.providers.aer.noise.QuantumError.probabilities "qiskit.providers.aer.noise.QuantumError.probabilities")          | Return the list of error probabilities.                         |
| [`QuantumError.rtol`](qiskit.providers.aer.noise.QuantumError.rtol "qiskit.providers.aer.noise.QuantumError.rtol")                                     | The relative tolerance parameter for float comparisons.         |
| [`QuantumError.size`](qiskit.providers.aer.noise.QuantumError.size "qiskit.providers.aer.noise.QuantumError.size")                                     | Return the number of error circuit.                             |

## Methods

|                                                                                                                                                             |                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`QuantumError.__mul__`](qiskit.providers.aer.noise.QuantumError.__mul__ "qiskit.providers.aer.noise.QuantumError.__mul__")(other)                          |                                                                           |
| [`QuantumError.compose`](qiskit.providers.aer.noise.QuantumError.compose "qiskit.providers.aer.noise.QuantumError.compose")(other\[, front])                | Return the composition error channel other \* self.                       |
| [`QuantumError.copy`](qiskit.providers.aer.noise.QuantumError.copy "qiskit.providers.aer.noise.QuantumError.copy")()                                        | Make a copy of current QuantumError.                                      |
| [`QuantumError.dot`](qiskit.providers.aer.noise.QuantumError.dot "qiskit.providers.aer.noise.QuantumError.dot")(other)                                      | Return the composition error channel self \* other.                       |
| [`QuantumError.error_term`](qiskit.providers.aer.noise.QuantumError.error_term "qiskit.providers.aer.noise.QuantumError.error_term")(position)              | Return a single term from the error.                                      |
| [`QuantumError.expand`](qiskit.providers.aer.noise.QuantumError.expand "qiskit.providers.aer.noise.QuantumError.expand")(other)                             | Return the tensor product quantum error channel self ⊗ other.             |
| [`QuantumError.ideal`](qiskit.providers.aer.noise.QuantumError.ideal "qiskit.providers.aer.noise.QuantumError.ideal")()                                     | Return True if current error object is an identity                        |
| [`QuantumError.power`](qiskit.providers.aer.noise.QuantumError.power "qiskit.providers.aer.noise.QuantumError.power")(n)                                    | Return the compose of a error channel with itself n times.                |
| [`QuantumError.set_atol`](qiskit.providers.aer.noise.QuantumError.set_atol "qiskit.providers.aer.noise.QuantumError.set_atol")(value)                       | Set the class default absolute tolerance parameter for float comparisons. |
| [`QuantumError.set_rtol`](qiskit.providers.aer.noise.QuantumError.set_rtol "qiskit.providers.aer.noise.QuantumError.set_rtol")(value)                       | Set the class default relative tolerance parameter for float comparisons. |
| [`QuantumError.tensor`](qiskit.providers.aer.noise.QuantumError.tensor "qiskit.providers.aer.noise.QuantumError.tensor")(other)                             | Return the tensor product quantum error channel self ⊗ other.             |
| [`QuantumError.to_dict`](qiskit.providers.aer.noise.QuantumError.to_dict "qiskit.providers.aer.noise.QuantumError.to_dict")()                               | Return the current error as a dictionary.                                 |
| [`QuantumError.to_instruction`](qiskit.providers.aer.noise.QuantumError.to_instruction "qiskit.providers.aer.noise.QuantumError.to_instruction")()          | Convert the QuantumError to a circuit Instruction.                        |
| [`QuantumError.to_quantumchannel`](qiskit.providers.aer.noise.QuantumError.to_quantumchannel "qiskit.providers.aer.noise.QuantumError.to_quantumchannel")() | Convert the QuantumError to a SuperOp quantum channel.                    |

