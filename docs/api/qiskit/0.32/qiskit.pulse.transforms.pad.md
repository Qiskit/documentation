# qiskit.pulse.transforms.pad

<span id="undefined" />

`pad(schedule, channels=None, until=None, inplace=False)`

Pad the input Schedule with `Delay``s on all unoccupied timeslots until ``schedule.duration` or `until` if not `None`.

**Parameters**

*   **schedule** (`Schedule`) – Schedule to pad.
*   **channels** (`Optional`\[`Iterable`\[`Channel`]]) – Channels to pad. Defaults to all channels in `schedule` if not provided. If the supplied channel is not a member of `schedule` it will be added.
*   **until** (`Optional`\[`int`]) – Time to pad until. Defaults to `schedule.duration` if not provided.
*   **inplace** (`bool`) – Pad this schedule by mutating rather than returning a new schedule.

**Return type**

`Schedule`

**Returns**

The padded schedule.
