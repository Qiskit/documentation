# qiskit.pulse.ScheduleBlock.insert

`ScheduleBlock.insert(start_time, block, name=None, inplace=True)`

This method will be removed. Temporarily added for backward compatibility.

<Admonition title="Note" type="note">
  This method is not supported and being deprecated.
</Admonition>

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule.
*   **block** (`Union`\[`Schedule`, `Instruction`]) – Schedule to insert.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to the name of self.
*   **inplace** (`bool`) – Perform operation inplace on this schedule. Otherwise return a new `Schedule`.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When this method is called. This method is not supported.
