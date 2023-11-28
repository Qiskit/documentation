# qiskit.pulse.builder.set\_frequency[¶](#qiskit-pulse-builder-set-frequency "Permalink to this headline")

<span id="undefined" />

`set_frequency(frequency, channel, name=None)`

Set the `frequency` of a pulse `channel`.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.set_frequency(1e9, d0)
```

**Parameters**

*   **frequency** (`float`) – Frequency in Hz to set channel to.
*   **channel** (`PulseChannel`) – Channel to set frequency of.
*   **name** (`Optional`\[`str`]) – Name of the instruction.
