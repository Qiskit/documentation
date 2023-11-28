# qiskit.pulse.builder.num\_qubits

<span id="undefined" />

`num_qubits()`

Return number of qubits in the currently active backend.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

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

`int`
