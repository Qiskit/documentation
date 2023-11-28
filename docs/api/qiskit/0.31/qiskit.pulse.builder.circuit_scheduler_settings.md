# qiskit.pulse.builder.circuit\_scheduler\_settings

<span id="undefined" />

`circuit_scheduler_settings(**settings)`

Set the currently active circuit scheduler settings for this context.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    print(pulse.active_circuit_scheduler_settings())
    with pulse.circuit_scheduler_settings(method='alap'):
        print(pulse.active_circuit_scheduler_settings())
```

```python
{}
{'method': 'alap'}
```

**Return type**

`AbstractContextManager`\[`None`]
