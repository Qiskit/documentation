<span id="qiskit-pulse-builder-measure-all" />

# qiskit.pulse.builder.measure\_all

<span id="undefined" />

`measure_all()`

Measure all qubits within the currently active builder context.

A simple macro function to measure all of the qubits in the device at the same time. This is useful for handling device `meas_map` and single measurement constraints.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    # Measure all qubits and return associated registers.
    regs = pulse.measure_all()
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

`List`\[[`MemorySlot`](qiskit.pulse.channels#MemorySlot "qiskit.pulse.channels.MemorySlot")]

**Returns**

The `register`s the qubit measurement results will be stored in.
