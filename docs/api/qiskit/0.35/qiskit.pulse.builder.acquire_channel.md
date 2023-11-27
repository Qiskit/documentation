# qiskit.pulse.builder.acquire\_channel[¶](#qiskit-pulse-builder-acquire-channel "Permalink to this headline")

<span id="undefined" />

`acquire_channel(qubit)`

Return `AcquireChannel` for `qubit` on the active builder backend.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    assert pulse.acquire_channel(0) == pulse.AcquireChannel(0)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

[`AcquireChannel`](qiskit.pulse.channels.AcquireChannel#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")
