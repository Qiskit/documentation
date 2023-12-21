# qiskit.algorithms.IterativePhaseEstimation.construct\_circuit

`IterativePhaseEstimation.construct_circuit(unitary, state_preparation, k, omega=0, measurement=False)`

Construct the kth iteration Quantum Phase Estimation circuit.

For details of parameters, see Fig. 2 in [https://arxiv.org/pdf/quant-ph/0610214.pdf](https://arxiv.org/pdf/quant-ph/0610214.pdf).

**Parameters**

*   **unitary** (`QuantumCircuit`) – The circuit representing the unitary operator whose eigenvalue (via phase) will be measured.
*   **state\_preparation** (`QuantumCircuit`) – The circuit that prepares the state whose eigenphase will be measured. If this parameter is omitted, no preparation circuit will be run and input state will be the all-zero state in the computational basis.
*   **k** (`int`) – the iteration idx.
*   **omega** (`float`) – the feedback angle.
*   **measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the quantum circuit per iteration

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
