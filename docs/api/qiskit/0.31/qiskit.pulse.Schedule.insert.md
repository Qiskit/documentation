# qiskit.pulse.Schedule.insert

`Schedule.insert(start_time, schedule, name=None, inplace=False)`

Return a new schedule with `schedule` inserted into `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule.
*   **schedule** (`Union`\[`Schedule`, `Instruction`]) – Schedule to insert.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to the name of self.
*   **inplace** (`bool`) – Perform operation inplace on this schedule. Otherwise return a new `Schedule`.

**Return type**

`Schedule`
