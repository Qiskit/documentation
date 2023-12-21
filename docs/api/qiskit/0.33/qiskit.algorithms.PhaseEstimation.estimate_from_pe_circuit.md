# qiskit.algorithms.PhaseEstimation.estimate\_from\_pe\_circuit

`PhaseEstimation.estimate_from_pe_circuit(pe_circuit, num_unitary_qubits)`

Run the the phase estimation algorithm on a phase estimation circuit

**Parameters**

*   **pe\_circuit** (`QuantumCircuit`) – The phase estimation circuit.
*   **num\_unitary\_qubits** (`int`) – Must agree with the number of qubits in the unitary in pe\_circuit.

**Return type**

`PhaseEstimationResult`

**Returns**

An instance of qiskit.algorithms.phase\_estimator\_result.PhaseEstimationResult.
