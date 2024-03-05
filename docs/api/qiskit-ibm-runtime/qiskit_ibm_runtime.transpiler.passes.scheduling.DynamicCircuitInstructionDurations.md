---
title: DynamicCircuitInstructionDurations
description: API reference for qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations
---

# DynamicCircuitInstructionDurations

<span id="qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations" />

`DynamicCircuitInstructionDurations(instruction_durations=None, dt=None, enable_patching=True)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/transpiler/passes/scheduling/utils.py#L133-L359 "view source code")

For dynamic circuits the IBM Qiskit backend currently reports instruction durations that differ compared with those required for the legacy Qobj-based path. For now we use this class to report updated InstructionDurations. TODO: This would be mitigated by a specialized Backend/Target for dynamic circuit backends.

Dynamic circuit instruction durations.

## Attributes

<span id="qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations.MEASURE_PATCH_CYCLES" />

### MEASURE\_PATCH\_CYCLES

`= 160`

<span id="qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations.MEASURE_PATCH_ODD_OFFSET" />

### MEASURE\_PATCH\_ODD\_OFFSET

`= 64`

## Methods

### from\_backend

<span id="qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations.from_backend" />

`classmethod from_backend(backend)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/transpiler/passes/scheduling/utils.py#L155-L203 "view source code")

Construct a `DynamicInstructionDurations` object from the backend. :type backend: `Backend` :param backend: backend from which durations (gate lengths) and dt are extracted.

**Returns**

The InstructionDurations constructed from backend.

**Return type**

DynamicInstructionDurations

### from\_target

<span id="qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations.from_target" />

`classmethod from_target(target)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/transpiler/passes/scheduling/utils.py#L205-L222 "view source code")

Construct a `DynamicInstructionDurations` object from the target. :type target: `Target` :param target: target from which durations (gate lengths) and dt are extracted.

**Returns**

The InstructionDurations constructed from backend.

**Return type**

DynamicInstructionDurations

### get

<span id="qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations.get" />

`get(inst, qubits, unit='dt', parameters=None)`

Get the duration of the instruction with the name, qubits, and parameters.

Some instructions may have a parameter dependent duration.

**Parameters**

*   **inst** (*str | qiskit.circuit.Instruction*) – An instruction or its name to be queried.
*   **qubits** (*int | list\[int]*) – Qubit indices that the instruction acts on.
*   **unit** (*str*) – The unit of duration to be returned. It must be ‘s’ or ‘dt’.
*   **parameters** (*list\[float] | None*) – The value of the parameters of the desired instruction.

**Returns**

The duration of the instruction on the qubits.

**Return type**

float|int

**Raises**

**TranspilerError** – No duration is defined for the instruction.

### units\_used

<span id="qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations.units_used" />

`units_used()`

Get the set of all units used in this instruction durations.

**Return type**

`set`\[`str`]

**Returns**

Set of units used in this instruction durations.

### update

<span id="qiskit_ibm_runtime.transpiler.passes.scheduling.DynamicCircuitInstructionDurations.update" />

`update(inst_durations, dt=None)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/transpiler/passes/scheduling/utils.py#L224-L270 "view source code")

Update self with inst\_durations (inst\_durations overwrite self). Overrides the default durations for certain hardcoded instructions.

**Parameters**

*   **inst\_durations** (`Union`\[`List`\[`Tuple`\[`str`, `Optional`\[`Iterable`\[`int`]], `float`, `Optional`\[`Iterable`\[`float`]], `str`]], `List`\[`Tuple`\[`str`, `Optional`\[`Iterable`\[`int`]], `float`, `Optional`\[`Iterable`\[`float`]]]], `List`\[`Tuple`\[`str`, `Optional`\[`Iterable`\[`int`]], `float`, `str`]], `List`\[`Tuple`\[`str`, `Optional`\[`Iterable`\[`int`]], `float`]], `InstructionDurations`, `None`]) – Instruction durations to be merged into self (overwriting self).
*   **dt** (`Optional`\[`float`]) – Sampling duration in seconds of the target backend.

**Returns**

The updated InstructionDurations.

**Return type**

InstructionDurations

**Raises**

**TranspilerError** – If the format of instruction\_durations is invalid.

