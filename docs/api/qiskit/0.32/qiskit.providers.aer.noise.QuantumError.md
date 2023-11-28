# QuantumError

<span id="undefined" />

`QuantumError(noise_ops, number_of_qubits=None, standard_gates=True, atol=1e-08)`

Bases: `object`

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

## Methods

|                                                                                                                                                                                                        |                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [`compose`](qiskit.providers.aer.noise.QuantumError.compose#qiskit.providers.aer.noise.QuantumError.compose "qiskit.providers.aer.noise.QuantumError.compose")                                         | Return the composition error channel other \* self.                       |
| [`copy`](qiskit.providers.aer.noise.QuantumError.copy#qiskit.providers.aer.noise.QuantumError.copy "qiskit.providers.aer.noise.QuantumError.copy")                                                     | Make a copy of current QuantumError.                                      |
| [`dot`](qiskit.providers.aer.noise.QuantumError.dot#qiskit.providers.aer.noise.QuantumError.dot "qiskit.providers.aer.noise.QuantumError.dot")                                                         | Return the composition error channel self \* other.                       |
| [`error_term`](qiskit.providers.aer.noise.QuantumError.error_term#qiskit.providers.aer.noise.QuantumError.error_term "qiskit.providers.aer.noise.QuantumError.error_term")                             | Return a single term from the error.                                      |
| [`expand`](qiskit.providers.aer.noise.QuantumError.expand#qiskit.providers.aer.noise.QuantumError.expand "qiskit.providers.aer.noise.QuantumError.expand")                                             | Return the tensor product quantum error channel self ⊗ other.             |
| [`ideal`](qiskit.providers.aer.noise.QuantumError.ideal#qiskit.providers.aer.noise.QuantumError.ideal "qiskit.providers.aer.noise.QuantumError.ideal")                                                 | Return True if current error object is an identity                        |
| [`power`](qiskit.providers.aer.noise.QuantumError.power#qiskit.providers.aer.noise.QuantumError.power "qiskit.providers.aer.noise.QuantumError.power")                                                 | Return the compose of a error channel with itself n times.                |
| [`set_atol`](qiskit.providers.aer.noise.QuantumError.set_atol#qiskit.providers.aer.noise.QuantumError.set_atol "qiskit.providers.aer.noise.QuantumError.set_atol")                                     | Set the class default absolute tolerance parameter for float comparisons. |
| [`set_rtol`](qiskit.providers.aer.noise.QuantumError.set_rtol#qiskit.providers.aer.noise.QuantumError.set_rtol "qiskit.providers.aer.noise.QuantumError.set_rtol")                                     | Set the class default relative tolerance parameter for float comparisons. |
| [`tensor`](qiskit.providers.aer.noise.QuantumError.tensor#qiskit.providers.aer.noise.QuantumError.tensor "qiskit.providers.aer.noise.QuantumError.tensor")                                             | Return the tensor product quantum error channel self ⊗ other.             |
| [`to_dict`](qiskit.providers.aer.noise.QuantumError.to_dict#qiskit.providers.aer.noise.QuantumError.to_dict "qiskit.providers.aer.noise.QuantumError.to_dict")                                         | Return the current error as a dictionary.                                 |
| [`to_instruction`](qiskit.providers.aer.noise.QuantumError.to_instruction#qiskit.providers.aer.noise.QuantumError.to_instruction "qiskit.providers.aer.noise.QuantumError.to_instruction")             | Convert the QuantumError to a circuit Instruction.                        |
| [`to_quantumchannel`](qiskit.providers.aer.noise.QuantumError.to_quantumchannel#qiskit.providers.aer.noise.QuantumError.to_quantumchannel "qiskit.providers.aer.noise.QuantumError.to_quantumchannel") | Convert the QuantumError to a SuperOp quantum channel.                    |

## Attributes

<span id="undefined" />

### atol

The default absolute tolerance parameter for float comparisons.

<span id="undefined" />

### circuits

Return the list of error circuits.

<span id="undefined" />

### number\_of\_qubits

Return the number of qubits for the error.

<span id="undefined" />

### probabilities

Return the list of error probabilities.

<span id="undefined" />

### rtol

The relative tolerance parameter for float comparisons.

<span id="undefined" />

### size

Return the number of error circuit.
