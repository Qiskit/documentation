# StabilizerState

<span id="undefined" />

`StabilizerState(data, validate=True)`

Bases: `qiskit.quantum_info.states.quantum_state.QuantumState`

StabilizerState class. Stabilizer simulator using the convention from reference \[1]. Based on the internal class [`Clifford`](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford").

```python
from qiskit import QuantumCircuit
from qiskit.quantum_info import StabilizerState, Pauli

# Bell state generation circuit
qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)
stab = StabilizerState(qc)

# Print the StabilizerState
print(stab)

# Calculate the StabilizerState measurement probabilities dictionary
print (stab.probabilities_dict())

# Calculate expectation value of the StabilizerState
print (stab.expectation_value(Pauli('ZZ')))
```

```python
StabilizerState(StabilizerTable: ['+XX', '+ZZ'])
{'00': 0.5, '11': 0.5}
1
```

## References

1.  S. Aaronson, D. Gottesman, *Improved Simulation of Stabilizer Circuits*, Phys. Rev. A 70, 052328 (2004). [arXiv:quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196)

Initialize a StabilizerState object.

**Parameters**

*   \*\*(****StabilizerState**** or ****Clifford**** or ****Pauli**** or \*\***QuantumCircuit or** (*data*) – qiskit.circuit.Instruction): Data from which the stabilizer state can be constructed.
*   **validate** (*boolean*) – validate that the stabilizer state data is a valid Clifford.

## Methods

|                                                                                                                                                                                                |                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`conjugate`](qiskit.quantum_info.StabilizerState.conjugate#qiskit.quantum_info.StabilizerState.conjugate "qiskit.quantum_info.StabilizerState.conjugate")                                     | Return the conjugate of the operator.                                                                             |
| [`copy`](qiskit.quantum_info.StabilizerState.copy#qiskit.quantum_info.StabilizerState.copy "qiskit.quantum_info.StabilizerState.copy")                                                         | Make a copy of current operator.                                                                                  |
| [`dims`](qiskit.quantum_info.StabilizerState.dims#qiskit.quantum_info.StabilizerState.dims "qiskit.quantum_info.StabilizerState.dims")                                                         | Return tuple of input dimension for specified subsystems.                                                         |
| [`evolve`](qiskit.quantum_info.StabilizerState.evolve#qiskit.quantum_info.StabilizerState.evolve "qiskit.quantum_info.StabilizerState.evolve")                                                 | Evolve a stabilizer state by a Clifford operator.                                                                 |
| [`expand`](qiskit.quantum_info.StabilizerState.expand#qiskit.quantum_info.StabilizerState.expand "qiskit.quantum_info.StabilizerState.expand")                                                 | Return the tensor product stabilzier state other ⊗ self.                                                          |
| [`expectation_value`](qiskit.quantum_info.StabilizerState.expectation_value#qiskit.quantum_info.StabilizerState.expectation_value "qiskit.quantum_info.StabilizerState.expectation_value")     | Compute the expectation value of an operator.                                                                     |
| [`is_valid`](qiskit.quantum_info.StabilizerState.is_valid#qiskit.quantum_info.StabilizerState.is_valid "qiskit.quantum_info.StabilizerState.is_valid")                                         | Return True if a valid StabilizerState.                                                                           |
| [`measure`](qiskit.quantum_info.StabilizerState.measure#qiskit.quantum_info.StabilizerState.measure "qiskit.quantum_info.StabilizerState.measure")                                             | Measure subsystems and return outcome and post-measure state.                                                     |
| [`probabilities`](qiskit.quantum_info.StabilizerState.probabilities#qiskit.quantum_info.StabilizerState.probabilities "qiskit.quantum_info.StabilizerState.probabilities")                     | Return the subsystem measurement probability vector.                                                              |
| [`probabilities_dict`](qiskit.quantum_info.StabilizerState.probabilities_dict#qiskit.quantum_info.StabilizerState.probabilities_dict "qiskit.quantum_info.StabilizerState.probabilities_dict") | Return the subsystem measurement probability dictionary.                                                          |
| [`purity`](qiskit.quantum_info.StabilizerState.purity#qiskit.quantum_info.StabilizerState.purity "qiskit.quantum_info.StabilizerState.purity")                                                 | Return the purity of the quantum state, which equals to 1, since it is always a pure state.                       |
| [`reset`](qiskit.quantum_info.StabilizerState.reset#qiskit.quantum_info.StabilizerState.reset "qiskit.quantum_info.StabilizerState.reset")                                                     | Reset state or subsystems to the 0-state.                                                                         |
| [`sample_counts`](qiskit.quantum_info.StabilizerState.sample_counts#qiskit.quantum_info.StabilizerState.sample_counts "qiskit.quantum_info.StabilizerState.sample_counts")                     | Sample a dict of qubit measurement outcomes in the computational basis.                                           |
| [`sample_memory`](qiskit.quantum_info.StabilizerState.sample_memory#qiskit.quantum_info.StabilizerState.sample_memory "qiskit.quantum_info.StabilizerState.sample_memory")                     | Sample a list of qubit measurement outcomes in the computational basis.                                           |
| [`seed`](qiskit.quantum_info.StabilizerState.seed#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed")                                                         | Set the seed for the quantum state RNG.                                                                           |
| [`tensor`](qiskit.quantum_info.StabilizerState.tensor#qiskit.quantum_info.StabilizerState.tensor "qiskit.quantum_info.StabilizerState.tensor")                                                 | Return the tensor product stabilzier state self ⊗ other.                                                          |
| [`to_operator`](qiskit.quantum_info.StabilizerState.to_operator#qiskit.quantum_info.StabilizerState.to_operator "qiskit.quantum_info.StabilizerState.to_operator")                             | Convert state to matrix operator class                                                                            |
| [`trace`](qiskit.quantum_info.StabilizerState.trace#qiskit.quantum_info.StabilizerState.trace "qiskit.quantum_info.StabilizerState.trace")                                                     | Return the trace of the stabilizer state as a density matrix, which equals to 1, since it is always a pure state. |

## Attributes

<span id="undefined" />

### clifford

Return StabilizerState Clifford data

<span id="undefined" />

### dim

Return total state dimension.

<span id="undefined" />

### num\_qubits

Return the number of qubits if a N-qubit state or None otherwise.
