# qiskit.pulse.builder.u3

<span id="undefined" />

`u3(theta, phi, lam, qubit)`

Call a `U3Gate` on the input physical qubit.

<Admonition title="Note" type="note">
  Calling gates directly within the pulse builder namespace will be deprecated in the future in favor of tight integration with a circuit builder interface which is under development.
</Admonition>

Examples:

```python
import math

from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    pulse.u3(math.pi, 0, math.pi, 1)
```
