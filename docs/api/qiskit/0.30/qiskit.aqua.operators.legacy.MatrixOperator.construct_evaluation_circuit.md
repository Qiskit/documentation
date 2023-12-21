# qiskit.aqua.operators.legacy.MatrixOperator.construct\_evaluation\_circuit

`MatrixOperator.construct_evaluation_circuit(wave_function, statevector_mode=True, use_simulator_snapshot_mode=None, circuit_name_prefix='')`

Construct the circuits for evaluation.

**Parameters**

*   **wave\_function** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the quantum circuit.
*   **statevector\_mode** (*bool*) – mode
*   **use\_simulator\_snapshot\_mode** (*bool*) – uses simulator operator mode
*   **circuit\_name\_prefix** (*str, optional*) – a prefix of circuit name

**Returns**

**the circuits for computing the expectation of the operator over**

the wavefunction evaluation.

**Return type**

list\[[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")]
