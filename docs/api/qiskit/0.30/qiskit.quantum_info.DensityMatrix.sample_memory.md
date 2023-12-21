# qiskit.quantum\_info.DensityMatrix.sample\_memory

`DensityMatrix.sample_memory(shots, qargs=None)`

Sample a list of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

list of sampled counts if the order sampled.

**Return type**

np.array

Additional Information:

> This function *samples* measurement outcomes using the measure [`probabilities()`](qiskit.quantum_info.DensityMatrix.probabilities#qiskit.quantum_info.DensityMatrix.probabilities "qiskit.quantum_info.DensityMatrix.probabilities") for the current state and qargs. It does not actually implement the measurement so the current state is not modified.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](qiskit.quantum_info.DensityMatrix.seed#qiskit.quantum_info.DensityMatrix.seed "qiskit.quantum_info.DensityMatrix.seed") method.
