# InstructionDurations

<span id="undefined" />

`InstructionDurations(instruction_durations=None, dt=None)`

Bases: `object`

Helper class to provide durations of instructions for scheduling.

It stores durations (gate lengths) and dt to be used at the scheduling stage of transpiling. It can be constructed from `backend` or `instruction_durations`, which is an argument of `transpile()`.

## Methods

|                                                                                                                                                                                 |                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`from_backend`](qiskit.transpiler.InstructionDurations.from_backend#qiskit.transpiler.InstructionDurations.from_backend "qiskit.transpiler.InstructionDurations.from_backend") | Construct an [`InstructionDurations`](#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object from the backend. |
| [`get`](qiskit.transpiler.InstructionDurations.get#qiskit.transpiler.InstructionDurations.get "qiskit.transpiler.InstructionDurations.get")                                     | Get the duration of the instruction with the name and the qubits.                                                                                |
| [`units_used`](qiskit.transpiler.InstructionDurations.units_used#qiskit.transpiler.InstructionDurations.units_used "qiskit.transpiler.InstructionDurations.units_used")         | Get the set of all units used in this instruction durations.                                                                                     |
| [`update`](qiskit.transpiler.InstructionDurations.update#qiskit.transpiler.InstructionDurations.update "qiskit.transpiler.InstructionDurations.update")                         | Update self with inst\_durations (inst\_durations overwrite self).                                                                               |
