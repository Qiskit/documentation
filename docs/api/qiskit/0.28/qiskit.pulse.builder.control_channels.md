# qiskit.pulse.builder.control\_channels

<span id="undefined" />

`control_channels(*qubits)`

Return `ControlChannel` for `qubit` on the active builder backend.

Return the secondary drive channel for the given qubit – typically utilized for controlling multi-qubit interactions.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()
with pulse.build(backend):
    assert pulse.control_channels(0, 1) == [pulse.ControlChannel(0)]
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Parameters**

**qubits** (`Iterable`\[`int`]) – Tuple or list of ordered qubits of the form (control\_qubit, target\_qubit).

**Return type**

`List`\[[`ControlChannel`](qiskit.pulse.channels#qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

**Returns**

List of control channels associated with the supplied ordered list of qubits.
