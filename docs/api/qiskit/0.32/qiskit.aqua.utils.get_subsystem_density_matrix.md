# qiskit.aqua.utils.get\_subsystem\_density\_matrix

<span id="undefined" />

`get_subsystem_density_matrix(statevector, trace_systems)`

Compute the reduced density matrix of a quantum subsystem.

**Parameters**

*   **statevector** (*list|array*) – The state vector of the complete system
*   **trace\_systems** (*list|range*) – The indices of the qubits to be traced out.

**Returns**

The reduced density matrix for the desired subsystem

**Return type**

numpy.ndarray
