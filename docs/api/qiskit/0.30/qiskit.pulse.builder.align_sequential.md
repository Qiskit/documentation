# qiskit.pulse.builder.align\_sequential[¶](#qiskit-pulse-builder-align-sequential "Permalink to this headline")

<span id="undefined" />

`align_sequential()`

Sequential alignment pulse scheduling context.

Pulse instructions within this context are scheduled sequentially in time such that no two instructions will be played at the same time.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build() as pulse_prog:
    with pulse.align_sequential():
        # this pulse will start at t=0
        pulse.play(pulse.Constant(100, 1.0), d0)
        # this pulse will also start at t=100
        pulse.play(pulse.Constant(20, 1.0), d1)
pulse_prog = pulse.transforms.block_to_schedule(pulse_prog)

assert pulse_prog.ch_stop_time(d0) == pulse_prog.ch_start_time(d1)
```

**Yields**

None

**Return type**

`AlignmentKind`
