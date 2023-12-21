---
title: append
description: API reference for qiskit.circuit.QuantumCircuit.append
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.QuantumCircuit.append
---

# append

<span id="qiskit.circuit.QuantumCircuit.append" />

`QuantumCircuit.append(instruction, qargs=None, cargs=None)`

Append one or more instructions to the end of the circuit, modifying the circuit in place. Expands qargs and cargs.

**Parameters**

*   **instruction** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – Instruction instance to append
*   **qargs** (*list(argument)*) – qubits to attach instruction to
*   **cargs** (*list(argument)*) – clbits to attach instruction to

**Returns**

a handle to the instruction that was just added

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

