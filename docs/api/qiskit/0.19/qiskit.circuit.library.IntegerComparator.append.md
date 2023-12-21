---
title: append
description: API reference for qiskit.circuit.library.IntegerComparator.append
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.IntegerComparator.append
---

# append

<span id="qiskit.circuit.library.IntegerComparator.append" />

`IntegerComparator.append(instruction, qargs=None, cargs=None)`

Append one or more instructions to the end of the circuit, modifying the circuit in place. Expands qargs and cargs.

**Parameters**

*   **instruction** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – Instruction instance to append
*   **qargs** (*list(argument)*) – qubits to attach instruction to
*   **cargs** (*list(argument)*) – clbits to attach instruction to

**Returns**

a handle to the instruction that was just added

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

