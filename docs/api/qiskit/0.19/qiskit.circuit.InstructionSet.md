---
title: InstructionSet
description: API reference for qiskit.circuit.InstructionSet
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.InstructionSet
---

# InstructionSet

<span id="qiskit.circuit.InstructionSet" />

`InstructionSet`

Instruction collection, and their contexts.

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.

## Methods

|                                                                                                                          |                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [`InstructionSet.__getitem__`](qiskit.circuit.InstructionSet.__getitem__ "qiskit.circuit.InstructionSet.__getitem__")(i) | Return instruction at index                                |
| [`InstructionSet.__len__`](qiskit.circuit.InstructionSet.__len__ "qiskit.circuit.InstructionSet.__len__")()              | Return number of instructions in set                       |
| [`InstructionSet.add`](qiskit.circuit.InstructionSet.add "qiskit.circuit.InstructionSet.add")(gate, qargs, cargs)        | Add an instruction and its context (where it is attached). |
| [`InstructionSet.c_if`](qiskit.circuit.InstructionSet.c_if "qiskit.circuit.InstructionSet.c_if")(classical, val)         | Add condition on classical register to all instructions.   |
| [`InstructionSet.inverse`](qiskit.circuit.InstructionSet.inverse "qiskit.circuit.InstructionSet.inverse")()              | Invert all instructions.                                   |

