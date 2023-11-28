# qiskit.pulse.transforms.target\_qobj\_transform

<span id="undefined" />

`target_qobj_transform(sched, remove_directives=True)`

A basic pulse program transformation for OpenPulse API execution.

**Parameters**

*   **sched** (`Union`\[`ScheduleBlock`, `Schedule`, `Tuple`\[`int`, `Instruction`], `Instruction`, `Iterable`\[`Union`\[`Tuple`\[`int`, `Instruction`], `Instruction`]]]) – Input program to transform.
*   **remove\_directives** (`bool`) – Set True to remove compiler directives.

**Return type**

`Schedule`

**Returns**

Transformed program for execution.
