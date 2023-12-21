# qiskit.pulse.transforms.AlignRight.align

`AlignRight.align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** (`Schedule`) – Schedule to align.

**Return type**

`Schedule`

**Returns**

Schedule with reallocated instructions.
