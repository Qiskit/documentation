# qiskit.pulse.builder.pad

<span id="undefined" />

`pad(*chs)`

Pad all available timeslots with delays upon exiting context.

**Parameters**

**chs** ([`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Channels to pad with delays. Defaults to all channels in context if none are supplied.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build() as pulse_prog:
    with pulse.pad():
        with pulse.align_right():
            # this pulse will start at t=0
            pulse.play(pulse.Constant(100, 1.0), d0)
            # this pulse will start at t=80
            # a delay will be inserted from t=0 to t=80
            pulse.play(pulse.Constant(20, 1.0), d1)
assert pulse_prog.ch_start_time(d0) == pulse_prog.ch_start_time(d1)
assert pulse_prog.ch_stop_time(d0) == pulse_prog.ch_stop_time(d1)
```

**Return type**

`AbstractContextManager`\[`None`]
