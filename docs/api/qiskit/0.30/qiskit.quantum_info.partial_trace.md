# qiskit.quantum\_info.partial\_trace

<span id="undefined" />

`partial_trace(state, qargs)`

Return reduced density matrix by tracing out part of quantum state.

If all subsystems are traced over this returns the [`trace()`](qiskit.quantum_info.DensityMatrix.trace#qiskit.quantum_info.DensityMatrix.trace "qiskit.quantum_info.DensityMatrix.trace") of the input state.

**Parameters**

*   **state** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")  *or*[*DensityMatrix*](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – the input state.
*   **qargs** (*list*) – The subsystems to trace over.

**Returns**

The reduced density matrix.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

**Raises**

**QiskitError** – if input state is invalid.
