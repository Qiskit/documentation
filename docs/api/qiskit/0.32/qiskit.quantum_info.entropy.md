# qiskit.quantum\_info.entropy

<span id="undefined" />

`entropy(state, base=2)`

Calculate the von-Neumann entropy of a quantum state.

The entropy $S$ is given by

$$
S(\rho) = - Tr[\rho \log(\rho)]
$$

**Parameters**

*   **state** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")  *or*[*DensityMatrix*](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a quantum state.
*   **base** (*int*) – the base of the logarithm \[Default: 2].

**Returns**

The von-Neumann entropy S(rho).

**Return type**

float

**Raises**

**QiskitError** – if the input state is not a valid QuantumState.
