# qiskit.pulse.transforms.block\_to\_schedule[¶](#qiskit-pulse-transforms-block-to-schedule "Permalink to this headline")

<span id="undefined" />

`block_to_schedule(block)`

Convert `ScheduleBlock` to `Schedule`.

**Parameters**

**block** (`ScheduleBlock`) – A `ScheduleBlock` to convert.

**Return type**

`Schedule`

**Returns**

Scheduled pulse program.

**Raises**

*   **UnassignedDurationError** – When any instruction duration is not assigned.
*   [**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When the alignment context duration is shorter than the schedule duration.

<Admonition title="Note" type="note">
  This transform may insert barriers in between contexts.
</Admonition>
