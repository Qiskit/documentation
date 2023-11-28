# qiskit.pulse.builder.set\_phase

<span id="undefined" />

`set_phase(phase, channel, name=None)`

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
*   **channel** (`PulseChannel`) – Channel to set phase of.
*   **name** (`Optional`\[`str`]) – Name of the instruction.
