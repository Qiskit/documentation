# qiskit.pulse.builder.measure\_channel[¶](#qiskit-pulse-builder-measure-channel "Permalink to this headline")

<span id="undefined" />

`measure_channel(qubit)`

Return `MeasureChannel` for `qubit` on the active builder backend.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    assert pulse.measure_channel(0) == pulse.MeasureChannel(0)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

[`MeasureChannel`](qiskit.pulse.channels.MeasureChannel#qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")
