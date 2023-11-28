# InstructionSet

<span id="undefined" />

`InstructionSet`

Bases: `object`

Instruction collection, and their contexts.

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.

## Methods

|                                                                                                                                  |                                                            |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`add`](qiskit.circuit.InstructionSet.add#qiskit.circuit.InstructionSet.add "qiskit.circuit.InstructionSet.add")                 | Add an instruction and its context (where it is attached). |
| [`c_if`](qiskit.circuit.InstructionSet.c_if#qiskit.circuit.InstructionSet.c_if "qiskit.circuit.InstructionSet.c_if")             | Add condition on classical register to all instructions.   |
| [`inverse`](qiskit.circuit.InstructionSet.inverse#qiskit.circuit.InstructionSet.inverse "qiskit.circuit.InstructionSet.inverse") | Invert all instructions.                                   |
