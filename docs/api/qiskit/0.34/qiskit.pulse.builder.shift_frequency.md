# qiskit.pulse.builder.shift\_frequency[¶](#qiskit-pulse-builder-shift-frequency "Permalink to this headline")

<span id="undefined" />

`shift_frequency(frequency, channel, name=None)`

Shift the `frequency` of a pulse `channel`.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.shift_frequency(1e9, d0)
```

**Parameters**

*   **frequency** (`float`) – Frequency in Hz to shift channel frequency by.
*   **channel** (`PulseChannel`) – Channel to shift frequency of.
*   **name** (`Optional`\[`str`]) – Name of the instruction.
