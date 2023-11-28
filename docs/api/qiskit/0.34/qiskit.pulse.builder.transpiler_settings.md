# qiskit.pulse.builder.transpiler\_settings

<span id="undefined" />

`transpiler_settings(**settings)`

Set the currently active transpiler settings for this context.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    print(pulse.active_transpiler_settings())
    with pulse.transpiler_settings(optimization_level=3):
        print(pulse.active_transpiler_settings())
```

```python
{}
{'optimization_level': 3}
```

**Return type**

`AbstractContextManager`\[`None`]
