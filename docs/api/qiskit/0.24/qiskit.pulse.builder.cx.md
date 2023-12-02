<span id="qiskit-pulse-builder-cx" />

# qiskit.pulse.builder.cx

<span id="undefined" />

`cx(control, target)`

Call a `CXGate` on the input physical qubits.

<Admonition title="Note" type="note">
  Calling gates directly within the pulse builder namespace will be deprecated in the future in favour of tight integration with a circuit builder interface which is under development.
</Admonition>

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    pulse.cx(0, 1)
```
