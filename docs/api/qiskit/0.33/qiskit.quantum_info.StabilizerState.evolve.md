# qiskit.quantum\_info.StabilizerState.evolve

`StabilizerState.evolve(other, qargs=None)`

Evolve a stabilizer state by a Clifford operator.

**Parameters**

*   **other** ([*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – The Clifford operator to evolve by.
*   **qargs** (*list*) – a list of stabilizer subsystem positions to apply the operator on.

**Returns**

the output stabilizer state.

**Return type**

[StabilizerState](qiskit.quantum_info.StabilizerState#qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")

**Raises**

*   **QiskitError** – if other is not a StabilizerState.
*   **QiskitError** – if the operator dimension does not match the specified StabilizerState subsystem dimensions.
