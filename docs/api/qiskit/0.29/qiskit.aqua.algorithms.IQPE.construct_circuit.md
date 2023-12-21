# qiskit.aqua.algorithms.IQPE.construct\_circuit

`IQPE.construct_circuit(k=None, omega=0, measurement=False)`

Construct the kth iteration Quantum Phase Estimation circuit.

For details of parameters, please see Fig. 2 in [https://arxiv.org/pdf/quant-ph/0610214.pdf](https://arxiv.org/pdf/quant-ph/0610214.pdf).

**Parameters**

*   **k** (`Optional`\[`int`]) – the iteration idx.
*   **omega** (`float`) – the feedback angle.
*   **measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the quantum circuit per iteration

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
