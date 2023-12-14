# qiskit.circuit.InstructionSet



`InstructionSet`

Instruction collection, and their contexts.

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.



`__init__()`

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.

## Methods

|                                                                                                     |                                                            |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`__init__`](#qiskit.circuit.InstructionSet.__init__ "qiskit.circuit.InstructionSet.__init__")()    | New collection of instructions.                            |
| [`add`](#qiskit.circuit.InstructionSet.add "qiskit.circuit.InstructionSet.add")(gate, qargs, cargs) | Add an instruction and its context (where it is attached). |
| [`c_if`](#qiskit.circuit.InstructionSet.c_if "qiskit.circuit.InstructionSet.c_if")(classical, val)  | Add condition on classical register to all instructions.   |
| [`inverse`](#qiskit.circuit.InstructionSet.inverse "qiskit.circuit.InstructionSet.inverse")()       | Invert all instructions.                                   |



`add(gate, qargs, cargs)`

Add an instruction and its context (where it is attached).



`c_if(classical, val)`

Add condition on classical register to all instructions.



`inverse()`

Invert all instructions.
