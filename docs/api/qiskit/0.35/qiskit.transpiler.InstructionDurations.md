# InstructionDurations

<span id="undefined" />

`InstructionDurations(instruction_durations=None, dt=None)`

Bases: `object`

Helper class to provide durations of instructions for scheduling.

It stores durations (gate lengths) and dt to be used at the scheduling stage of transpiling. It can be constructed from `backend` or `instruction_durations`, which is an argument of `transpile()`. The duration of an instruction depends on the instruction (given by name), the qubits, and optionally the parameters of the instruction. Note that these fields are used as keys in dictionaries that are used to retrieve the instruction durations. Therefore, users must use the exact same parameter value to retrieve an instruction duration as the value with which it was added.

## Methods

|                                                                                                                                                                                 |                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`from_backend`](qiskit.transpiler.InstructionDurations.from_backend#qiskit.transpiler.InstructionDurations.from_backend "qiskit.transpiler.InstructionDurations.from_backend") | Construct an [`InstructionDurations`](#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object from the backend. |
| [`get`](qiskit.transpiler.InstructionDurations.get#qiskit.transpiler.InstructionDurations.get "qiskit.transpiler.InstructionDurations.get")                                     | Get the duration of the instruction with the name, qubits, and parameters.                                                                       |
| [`units_used`](qiskit.transpiler.InstructionDurations.units_used#qiskit.transpiler.InstructionDurations.units_used "qiskit.transpiler.InstructionDurations.units_used")         | Get the set of all units used in this instruction durations.                                                                                     |
| [`update`](qiskit.transpiler.InstructionDurations.update#qiskit.transpiler.InstructionDurations.update "qiskit.transpiler.InstructionDurations.update")                         | Update self with inst\_durations (inst\_durations overwrite self).                                                                               |
