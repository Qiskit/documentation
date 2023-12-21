# qiskit.ignis.verification.CNOTDihedral.from\_circuit

`CNOTDihedral.from_circuit(circuit)`

Initialize from a QuantumCircuit or Instruction.

**Parameters**

**circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – instruction to initialize.

**Returns**

the CNOTDihedral object for the circuit.

**Return type**

[CNOTDihedral](qiskit.ignis.verification.CNOTDihedral#qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")

**Raises**

**QiskitError** – if the input instruction is not CNOTDihedral or contains classical register instruction.
