---
title: to_instruction
description: API reference for qiskit.circuit.library.Permutation.to_instruction
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.Permutation.to_instruction
---

# to\_instruction

<span id="qiskit.circuit.library.Permutation.to_instruction" />

`Permutation.to_instruction(parameter_map=None)`

Create an Instruction out of this circuit.

**Parameters**

**parameter\_map** (*dict*) – For parameterized circuits, a mapping from parameters in the circuit to parameters to be used in the instruction. If None, existing circuit parameters will also parameterize the instruction.

**Returns**

a composite instruction encapsulating this circuit (can be decomposed back)

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

