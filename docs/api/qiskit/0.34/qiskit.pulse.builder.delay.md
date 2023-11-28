# qiskit.pulse.builder.delay

<span id="undefined" />

`delay(duration, channel, name=None)`

Delay on a `channel` for a `duration`.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.delay(10, d0)
```

**Parameters**

*   **duration** (`int`) – Number of cycles to delay for on `channel`.
*   **channel** ([`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Channel to delay on.
*   **name** (`Optional`\[`str`]) – Name of the instruction.
