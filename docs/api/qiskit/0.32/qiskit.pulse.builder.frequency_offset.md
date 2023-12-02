# qiskit.pulse.builder.frequency\_offset

<span id="undefined" />

`frequency_offset(frequency, *channels, compensate_phase=False)`

Shift the frequency of inputs channels on entry into context and undo on exit.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build(backend) as pulse_prog:
    # shift frequency by 1GHz
    with pulse.frequency_offset(1e9, d0):
        pulse.play(pulse.Constant(10, 1.0), d0)

assert len(pulse_prog.instructions) == 3

with pulse.build(backend) as pulse_prog:
    # Shift frequency by 1GHz.
    # Undo accumulated phase in the shifted frequency frame
    # when exiting the context.
    with pulse.frequency_offset(1e9, d0, compensate_phase=True):
        pulse.play(pulse.Constant(10, 1.0), d0)

assert len(pulse_prog.instructions) == 4
```

**Parameters**

*   **frequency** (`float`) – Amount of frequency offset in Hz.
*   **channels** (`PulseChannel`) – Channels to offset frequency of.
*   **compensate\_phase** (`bool`) – Compensate for accumulated phase accumulated with respect to the channels’ frame at its initial frequency.

**Yields**

None

**Return type**

`AbstractContextManager`\[`None`]
