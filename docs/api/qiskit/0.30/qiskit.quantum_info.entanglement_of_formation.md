# qiskit.quantum\_info.entanglement\_of\_formation[¶](#qiskit-quantum-info-entanglement-of-formation "Permalink to this headline")

<span id="undefined" />

`entanglement_of_formation(state)`

Calculate the entanglement of formation of quantum state.

The input quantum state must be either a bipartite state vector, or a 2-qubit density matrix.

**Parameters**

**state** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")  *or*[*DensityMatrix*](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a 2-qubit quantum state.

**Returns**

The entanglement of formation.

**Return type**

float

**Raises**

*   **QiskitError** – if the input state is not a valid QuantumState.
*   **QiskitError** – if input is not a bipartite QuantumState.
*   **QiskitError** – if density matrix input is not a 2-qubit state.
