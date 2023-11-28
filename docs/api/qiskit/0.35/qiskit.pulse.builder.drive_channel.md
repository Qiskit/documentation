# qiskit.pulse.builder.drive\_channel

<span id="undefined" />

`drive_channel(qubit)`

Return `DriveChannel` for `qubit` on the active builder backend.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    assert pulse.drive_channel(0) == pulse.DriveChannel(0)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

[`DriveChannel`](qiskit.pulse.channels.DriveChannel#qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")
