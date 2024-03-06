---
title: InstructionSet
description: API reference for qiskit.circuit.InstructionSet
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.InstructionSet
---

# InstructionSet

<span id="qiskit.circuit.InstructionSet" />

`InstructionSet` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/circuit/instructionset.py "view source code")

Instruction collection, and their contexts.

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.

## Methods

### \_\_getitem\_\_

<span id="qiskit.circuit.InstructionSet.__getitem__" />

`InstructionSet.__getitem__(i)`

Return instruction at index

### \_\_len\_\_

<span id="qiskit.circuit.InstructionSet.__len__" />

`InstructionSet.__len__()`

Return number of instructions in set

### add

<span id="qiskit.circuit.InstructionSet.add" />

`InstructionSet.add(gate, qargs, cargs)`

Add an instruction and its context (where it is attached).

### c\_if

<span id="qiskit.circuit.InstructionSet.c_if" />

`InstructionSet.c_if(classical, val)`

Add condition on classical register to all instructions.

### inverse

<span id="qiskit.circuit.InstructionSet.inverse" />

`InstructionSet.inverse()`

Invert all instructions.

