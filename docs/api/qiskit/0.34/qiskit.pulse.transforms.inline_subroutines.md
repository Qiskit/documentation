# qiskit.pulse.transforms.inline\_subroutines

<span id="undefined" />

`inline_subroutines(program)`

Recursively remove call instructions and inline the respective subroutine instructions.

Assigned parameter values, which are stored in the parameter table, are also applied. The subroutine is copied before the parameter assignment to avoid mutation problem.

**Parameters**

**program** (`Union`\[`Schedule`, `ScheduleBlock`]) – A program which may contain the subroutine, i.e. `Call` instruction.

**Return type**

`Union`\[`Schedule`, `ScheduleBlock`]

**Returns**

A schedule without subroutine.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When input program is not valid data format.
