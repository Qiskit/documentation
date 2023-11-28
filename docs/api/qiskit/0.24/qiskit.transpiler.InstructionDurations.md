<span id="qiskit-transpiler-instructiondurations" />

# qiskit.transpiler.InstructionDurations

<span id="undefined" />

`InstructionDurations(instruction_durations=None, dt=None)`

Helper class to provide durations of instructions for scheduling.

It stores durations (gate lengths) and dt to be used at the scheduling stage of transpiling. It can be constructed from `backend` or `instruction_durations`, which is an argument of `transpile()`.

<span id="undefined" />

`__init__(instruction_durations=None, dt=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                 |                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.transpiler.InstructionDurations.__init__ "qiskit.transpiler.InstructionDurations.__init__")(\[instruction\_durations, dt]) | Initialize self.                                                                                                                                 |
| [`from_backend`](#qiskit.transpiler.InstructionDurations.from_backend "qiskit.transpiler.InstructionDurations.from_backend")(backend)           | Construct an [`InstructionDurations`](#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object from the backend. |
| [`get`](#qiskit.transpiler.InstructionDurations.get "qiskit.transpiler.InstructionDurations.get")(inst, qubits\[, unit])                        | Get the duration of the instruction with the name and the qubits.                                                                                |
| [`units_used`](#qiskit.transpiler.InstructionDurations.units_used "qiskit.transpiler.InstructionDurations.units_used")()                        | Get the set of all units used in this instruction durations.                                                                                     |
| [`update`](#qiskit.transpiler.InstructionDurations.update "qiskit.transpiler.InstructionDurations.update")(inst\_durations\[, dt])              | Update self with inst\_durations (inst\_durations overwrite self).                                                                               |

<span id="undefined" />

`classmethod from_backend(backend)`

Construct an [`InstructionDurations`](#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object from the backend.

**Parameters**

**backend** (`BaseBackend`) – backend from which durations (gate lengths) and dt are extracted.

**Returns**

The InstructionDurations constructed from backend.

**Return type**

[InstructionDurations](#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If dt and dtm is different in the backend.

<span id="undefined" />

`get(inst, qubits, unit='dt')`

Get the duration of the instruction with the name and the qubits.

**Parameters**

*   **inst** (`Union`\[`str`, `Instruction`]) – An instruction or its name to be queried.
*   **qubits** (`Union`\[`int`, `List`\[`int`], `Qubit`, `List`\[`Qubit`]]) – Qubits or its indices that the instruction acts on.
*   **unit** (`str`) – The unit of duration to be returned. It must be ‘s’ or ‘dt’.

**Returns**

The duration of the instruction on the qubits.

**Return type**

float|int

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – No duration is defined for the instruction.

<span id="undefined" />

`units_used()`

Get the set of all units used in this instruction durations.

**Return type**

`Set`\[`str`]

**Returns**

Set of units used in this instruction durations.

<span id="undefined" />

`update(inst_durations, dt=None)`

Update self with inst\_durations (inst\_durations overwrite self).

**Parameters**

*   **inst\_durations** (`Optional`\[`Union`\[`List`\[`Tuple`\[`str`, `Optional`\[`Iterable`\[`int`]], `Union`\[`float`, `int`], `str`]], `List`\[`Tuple`\[`str`, `Optional`\[`Iterable`\[`int`]], `Union`\[`float`, `int`]]], `InstructionDurations`]]) – Instruction durations to be merged into self (overwriting self).
*   **dt** (`Optional`\[`float`]) – Sampling duration in seconds of the target backend.

**Returns**

The updated InstructionDurations.

**Return type**

[InstructionDurations](#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If the format of instruction\_durations is invalid.
