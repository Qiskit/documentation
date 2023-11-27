# QuantumError[¶](#quantumerror "Permalink to this headline")

<span id="undefined" />

`QuantumError(noise_ops, number_of_qubits=None, standard_gates=None, atol=None)`

Bases: `qiskit.quantum_info.operators.base_operator.BaseOperator`, `qiskit.quantum_info.operators.mixins.tolerances.TolerancesMixin`

Quantum error class for Qiskit Aer noise model

**WARNING: The init interface for this class is not finalized and may**

change in future releases. For maximum backwards compatibility use the QuantumError generating functions in the noise.errors module.

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

|                                                                                                                                                                                                        |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [`compose`](qiskit.providers.aer.noise.QuantumError.compose#qiskit.providers.aer.noise.QuantumError.compose "qiskit.providers.aer.noise.QuantumError.compose")                                         | Return the operator composition with another CLASS.                        |
| [`copy`](qiskit.providers.aer.noise.QuantumError.copy#qiskit.providers.aer.noise.QuantumError.copy "qiskit.providers.aer.noise.QuantumError.copy")                                                     | Make a copy of current QuantumError.                                       |
| [`dot`](qiskit.providers.aer.noise.QuantumError.dot#qiskit.providers.aer.noise.QuantumError.dot "qiskit.providers.aer.noise.QuantumError.dot")                                                         | Return the right multiplied operator self \* other.                        |
| [`error_term`](qiskit.providers.aer.noise.QuantumError.error_term#qiskit.providers.aer.noise.QuantumError.error_term "qiskit.providers.aer.noise.QuantumError.error_term")                             | Return a single term from the error.                                       |
| [`expand`](qiskit.providers.aer.noise.QuantumError.expand#qiskit.providers.aer.noise.QuantumError.expand "qiskit.providers.aer.noise.QuantumError.expand")                                             | Return the reverse-order tensor product with another CLASS.                |
| [`ideal`](qiskit.providers.aer.noise.QuantumError.ideal#qiskit.providers.aer.noise.QuantumError.ideal "qiskit.providers.aer.noise.QuantumError.ideal")                                                 | Return True if this error object is composed only of identity operations.  |
| [`input_dims`](qiskit.providers.aer.noise.QuantumError.input_dims#qiskit.providers.aer.noise.QuantumError.input_dims "qiskit.providers.aer.noise.QuantumError.input_dims")                             | Return tuple of input dimension for specified subsystems.                  |
| [`output_dims`](qiskit.providers.aer.noise.QuantumError.output_dims#qiskit.providers.aer.noise.QuantumError.output_dims "qiskit.providers.aer.noise.QuantumError.output_dims")                         | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.providers.aer.noise.QuantumError.power#qiskit.providers.aer.noise.QuantumError.power "qiskit.providers.aer.noise.QuantumError.power")                                                 | Return the compose of a operator with itself n times.                      |
| [`reshape`](qiskit.providers.aer.noise.QuantumError.reshape#qiskit.providers.aer.noise.QuantumError.reshape "qiskit.providers.aer.noise.QuantumError.reshape")                                         | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`set_atol`](qiskit.providers.aer.noise.QuantumError.set_atol#qiskit.providers.aer.noise.QuantumError.set_atol "qiskit.providers.aer.noise.QuantumError.set_atol")                                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`set_rtol`](qiskit.providers.aer.noise.QuantumError.set_rtol#qiskit.providers.aer.noise.QuantumError.set_rtol "qiskit.providers.aer.noise.QuantumError.set_rtol")                                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`tensor`](qiskit.providers.aer.noise.QuantumError.tensor#qiskit.providers.aer.noise.QuantumError.tensor "qiskit.providers.aer.noise.QuantumError.tensor")                                             | Return the tensor product with another CLASS.                              |
| [`to_dict`](qiskit.providers.aer.noise.QuantumError.to_dict#qiskit.providers.aer.noise.QuantumError.to_dict "qiskit.providers.aer.noise.QuantumError.to_dict")                                         | Return the current error as a dictionary.                                  |
| [`to_instruction`](qiskit.providers.aer.noise.QuantumError.to_instruction#qiskit.providers.aer.noise.QuantumError.to_instruction "qiskit.providers.aer.noise.QuantumError.to_instruction")             | Convert the QuantumError to a circuit Instruction.                         |
| [`to_quantumchannel`](qiskit.providers.aer.noise.QuantumError.to_quantumchannel#qiskit.providers.aer.noise.QuantumError.to_quantumchannel "qiskit.providers.aer.noise.QuantumError.to_quantumchannel") | Convert the QuantumError to a SuperOp quantum channel.                     |

## Attributes

<span id="undefined" />

### atol

`= 1e-08`

<span id="undefined" />

### circuits

Return the list of error circuits.

<span id="undefined" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

### id

Return unique ID string for error

<span id="undefined" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

### number\_of\_qubits

Return the number of qubits for the error.

<span id="undefined" />

### probabilities

Return the list of error probabilities.

<span id="undefined" />

### qargs

Return the qargs for the operator.

<span id="undefined" />

### rtol

`= 1e-05`

<span id="undefined" />

### size

Return the number of error circuit.
