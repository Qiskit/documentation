---
title: u2
description: API reference for qiskit.pulse.builder.u2
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.builder.u2
---

# qiskit.pulse.builder.u2[¶](#qiskit-pulse-builder-u2 "Permalink to this headline")

<span id="qiskit.pulse.builder.u2" />

`u2(phi, lam, qubit)`

Call a `U2Gate` on the input physical qubit.

<Admonition title="Note" type="note">
  Calling gates directly within the pulse builder namespace will be deprecated in the future in favor of tight integration with a circuit builder interface which is under development.
</Admonition>

Examples:

```python
import math

from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    pulse.u2(0, math.pi, 1)
```

