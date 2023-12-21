# qiskit.pulse.Schedule.append

`Schedule.append(schedule, name=None, inplace=False)`

Return a new schedule with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

$$
t = \textrm{max}(\texttt{x.stop_time} |\texttt{x} \in
    \texttt{self.channels} \cap \texttt{schedule.channels})
$$

**Parameters**

*   **schedule** (`Union`\[`Schedule`, `Instruction`]) – Schedule to be appended.
*   **name** (`Optional`\[`str`]) – Name of the new `Schedule`. Defaults to name of `self`.
*   **inplace** (`bool`) – Perform operation inplace on this schedule. Otherwise return a new `Schedule`.

**Return type**

`Schedule`
