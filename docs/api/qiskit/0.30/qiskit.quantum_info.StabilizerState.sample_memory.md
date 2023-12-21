# qiskit.quantum\_info.StabilizerState.sample\_memory

`StabilizerState.sample_memory(shots, qargs=None)`

Sample a list of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

list of sampled counts if the order sampled.

**Return type**

np.array

Additional Information:

> This function implements the measurement [`measure()`](qiskit.quantum_info.StabilizerState.measure#qiskit.quantum_info.StabilizerState.measure "qiskit.quantum_info.StabilizerState.measure") method.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](qiskit.quantum_info.StabilizerState.seed#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed") method.
