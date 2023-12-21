---
title: from_circuit
description: API reference for qiskit.quantum_info.Clifford.from_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Clifford.from_circuit
---

# from\_circuit

<span id="qiskit.quantum_info.Clifford.from_circuit" />

`static Clifford.from_circuit(circuit)`

Initialize from a QuantumCircuit or Instruction.

**Parameters**

**circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – instruction to initialize.

**Returns**

the Clifford object for the instruction.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

**Raises**

**QiskitError** – if the input instruction is non-Clifford or contains classical register instruction.

