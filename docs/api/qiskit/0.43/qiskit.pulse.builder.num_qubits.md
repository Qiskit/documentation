---
title: num_qubits
description: API reference for qiskit.pulse.builder.num_qubits
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.builder.num_qubits
---

<span id="qiskit-pulse-builder-num-qubits" />

# qiskit.pulse.builder.num\_qubits

<span id="qiskit.pulse.builder.num_qubits" />

`num_qubits()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/pulse/builder.py "view source code")

Return number of qubits in the currently active backend.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    print(pulse.num_qubits())
```

```python
2
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

int

