# qiskit.pulse.builder.play

<span id="undefined" />

`play(pulse, channel, name=None)`

Play a `pulse` on a `channel`.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.play(pulse.Constant(10, 1.0), d0)
```

**Parameters**

*   **pulse** (`Union`\[`Pulse`, `ndarray`]) – Pulse to play.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")) – Channel to play pulse on.
*   **name** (`Optional`\[`str`]) – Name of the pulse.
