# qiskit.pulse.builder.delay\_qubits[¶](#qiskit-pulse-builder-delay-qubits "Permalink to this headline")

<span id="undefined" />

`delay_qubits(duration, *qubits)`

Insert delays on all of the `channels.Channel`s that correspond to the input `qubits` at the same time.

Examples:

```python
from qiskit import pulse
from qiskit.test.mock import FakeOpenPulse3Q

backend = FakeOpenPulse3Q()

with pulse.build(backend) as pulse_prog:
    # Delay for 100 cycles on qubits 0, 1 and 2.
    regs = pulse.delay_qubits(100, 0, 1, 2)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Parameters**

*   **duration** (`int`) – Duration to delay for.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – Physical qubits to delay on. Delays will be inserted based on the channels returned by `pulse.qubit_channels()`.
