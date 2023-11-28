<span id="qiskit-pulse-builder-set-phase" />

# qiskit.pulse.builder.set\_phase

<span id="undefined" />

`set_phase(phase, channel)`

Set the `phase` of a pulse `channel`.

Examples:

```python
import math

from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.set_phase(math.pi, d0)
```

**Parameters**

*   **phase** (`float`) – Phase in radians to set channel carrier signal to.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#PulseChannel "qiskit.pulse.channels.PulseChannel")) – Channel to set phase of.
