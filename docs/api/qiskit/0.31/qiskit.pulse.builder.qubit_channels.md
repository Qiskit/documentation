# qiskit.pulse.builder.qubit\_channels

<span id="undefined" />

`qubit_channels(qubit)`

Returns the set of channels associated with a qubit.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    print(pulse.qubit_channels(0))
```

```python
{ControlChannel(1), AcquireChannel(0), ControlChannel(0), DriveChannel(0), MeasureChannel(0)}
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

<Admonition title="Note" type="note">
  A channel may still be associated with another qubit in this list such as in the case where significant crosstalk exists.
</Admonition>

**Return type**

`Set`\[`Channel`]
