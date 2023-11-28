# qiskit.pulse.builder.active\_transpiler\_settings[¶](#qiskit-pulse-builder-active-transpiler-settings "Permalink to this headline")

<span id="undefined" />

`active_transpiler_settings()`

Return the current active builder context’s transpiler settings.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

transpiler_settings = {'optimization_level': 3}

with pulse.build(backend,
                 default_transpiler_settings=transpiler_settings):
    print(pulse.active_transpiler_settings())
```

```python
{'optimization_level': 3}
```

**Return type**

`Dict`\[`str`, `Any`]
