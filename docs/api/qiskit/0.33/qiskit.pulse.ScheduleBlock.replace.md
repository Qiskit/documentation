# qiskit.pulse.ScheduleBlock.replace

`ScheduleBlock.replace(old, new, inplace=True)`

Return a `ScheduleBlock` with the `old` component replaced with a `new` component.

**Parameters**

*   **old** (`Union`\[`ScheduleBlock`, `Instruction`]) – Schedule block component to replace.
*   **new** (`Union`\[`ScheduleBlock`, `Instruction`]) – Schedule block component to replace with.
*   **inplace** (`bool`) – Replace instruction by mutably modifying this `ScheduleBlock`.

**Return type**

`ScheduleBlock`

**Returns**

The modified schedule block with `old` replaced by `new`.
