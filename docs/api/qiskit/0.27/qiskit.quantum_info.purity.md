# qiskit.quantum\_info.purity

<span id="undefined" />

`purity(state, validate=True)`

Calculate the purity of a quantum state.

The purity of a density matrix $\rho$ is

$$
\text{Purity}(\rho) = Tr[\rho^2]
$$

**Parameters**

*   **state** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")  *or*[*DensityMatrix*](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a quantum state.
*   **validate** (*bool*) – check if input state is valid \[Default: True]

**Returns**

the purity $Tr[\rho^2]$.

**Return type**

float

**Raises**

**QiskitError** – if the input isn’t a valid quantum state.
