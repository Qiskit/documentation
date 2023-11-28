---
title: active_circuit_scheduler_settings
description: API reference for qiskit.pulse.builder.active_circuit_scheduler_settings
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.builder.active_circuit_scheduler_settings
---

# qiskit.pulse.builder.active\_circuit\_scheduler\_settings[¶](#qiskit-pulse-builder-active-circuit-scheduler-settings "Permalink to this headline")

<span id="qiskit.pulse.builder.active_circuit_scheduler_settings" />

`active_circuit_scheduler_settings()`

Return the current active builder context’s circuit scheduler settings.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

circuit_scheduler_settings = {'method': 'alap'}

with pulse.build(
        backend,
        default_circuit_scheduler_settings=circuit_scheduler_settings):
    print(pulse.active_circuit_scheduler_settings())
```

```python
{'method': 'alap'}
```

**Return type**

`Dict`\[`str`, `Any`]

