<span id="qiskit-pulse-builder-active-circuit-scheduler-settings" />

# qiskit.pulse.builder.active\_circuit\_scheduler\_settings

<span id="undefined" />

`active_circuit_scheduler_settings()`

Return the current active builder context’s circuit scheduler settings.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

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
