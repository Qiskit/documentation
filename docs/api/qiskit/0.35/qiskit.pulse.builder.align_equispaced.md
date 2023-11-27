# qiskit.pulse.builder.align\_equispaced[¶](#qiskit-pulse-builder-align-equispaced "Permalink to this headline")

<span id="undefined" />

`align_equispaced(duration)`

Equispaced alignment pulse scheduling context.

Pulse instructions within this context are scheduled with the same interval spacing such that the total length of the context block is `duration`. If the total free `duration` cannot be evenly divided by the number of instructions within the context, the modulo is split and then prepended and appended to the returned schedule. Delay instructions are automatically inserted in between pulses.

This context is convenient to write a schedule for periodical dynamic decoupling or the Hahn echo sequence.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
x90 = pulse.Gaussian(10, 0.1, 3)
x180 = pulse.Gaussian(10, 0.2, 3)

with pulse.build() as hahn_echo:
    with pulse.align_equispaced(duration=100):
        pulse.play(x90, d0)
        pulse.play(x180, d0)
        pulse.play(x90, d0)

hahn_echo.draw()
```

![../\_images/qiskit.pulse.builder.align\_equispaced\_0\_0.png](/images/api/qiskit/0.35/qiskit.pulse.builder.align_equispaced_0_0.png)

**Parameters**

**duration** (`Union`\[`int`, `ParameterExpression`]) – Duration of this context. This should be larger than the schedule duration.

**Yields**

None

## Notes

The scheduling is performed for sub-schedules within the context rather than channel-wise. If you want to apply the equispaced context for each channel, you should use the context independently for channels.

**Return type**

`AlignmentKind`
