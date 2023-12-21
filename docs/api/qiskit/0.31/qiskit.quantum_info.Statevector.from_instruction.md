# qiskit.quantum\_info.Statevector.from\_instruction

`classmethod Statevector.from_instruction(instruction)`

Return the output statevector of an instruction.

The statevector is initialized in the state $|{0,\ldots,0}\rangle$ of the same number of qubits as the input instruction or circuit, evolved by the input instruction, and the output statevector returned.

**Parameters**

**instruction** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – instruction or circuit

**Returns**

The final statevector.

**Return type**

[Statevector](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the instruction contains invalid instructions for the statevector simulation.
