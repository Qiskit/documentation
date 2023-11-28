<span id="qiskit-pulse-builder-shift-phase" />

# qiskit.pulse.builder.shift\_phase

<span id="undefined" />

`shift_phase(phase, channel)`

Shift the `phase` of a pulse `channel`.

Examples:

```python
import math

from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.shift_phase(math.pi, d0)
```

**Parameters**

*   **phase** (`float`) – Phase in radians to shift channel carrier signal by.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#PulseChannel "qiskit.pulse.channels.PulseChannel")) – Channel to shift phase of.
