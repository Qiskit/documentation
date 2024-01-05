---
title: InstructionSet
description: API reference for qiskit.circuit.InstructionSet
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.InstructionSet
---

# qiskit.circuit.InstructionSet

<span id="qiskit.circuit.InstructionSet" />

`InstructionSet`

Instruction collection, and their contexts.

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.

### \_\_init\_\_

<span id="qiskit.circuit.InstructionSet.__init__" />

`__init__()`

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.

## Methods

### add

<span id="qiskit.circuit.InstructionSet.add" />

`add(gate, qargs, cargs)`

Add an instruction and its context (where it is attached).

### c\_if

<span id="qiskit.circuit.InstructionSet.c_if" />

`c_if(classical, val)`

Add condition on classical register to all instructions.

### inverse

<span id="qiskit.circuit.InstructionSet.inverse" />

`inverse()`

Invert all instructions.

