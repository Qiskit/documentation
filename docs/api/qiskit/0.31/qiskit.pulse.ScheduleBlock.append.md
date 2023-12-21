# qiskit.pulse.ScheduleBlock.append

`ScheduleBlock.append(block, name=None, inplace=True)`

Return a new schedule block with `block` appended to the context block. The execution time is automatically assigned when the block is converted into schedule.

**Parameters**

*   **block** (`Union`\[`ScheduleBlock`, `Instruction`]) – ScheduleBlock to be appended.
*   **name** (`Optional`\[`str`]) – Name of the new `Schedule`. Defaults to name of `self`.
*   **inplace** (`bool`) – Perform operation inplace on this schedule. Otherwise return a new `Schedule`.

**Return type**

`ScheduleBlock`

**Returns**

Schedule block with appended schedule.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When invalid schedule type is specified.
