# qiskit.pulse.Schedule.replace

`Schedule.replace(old, new, inplace=False)`

Return a `Schedule` with the `old` instruction replaced with a `new` instruction.

The replacement matching is based on an instruction equality check.

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

sched = pulse.Schedule()

old = pulse.Play(pulse.Constant(100, 1.0), d0)
new = pulse.Play(pulse.Constant(100, 0.1), d0)

sched += old

sched = sched.replace(old, new)

assert sched == pulse.Schedule(new)
```

Only matches at the top-level of the schedule tree. If you wish to perform this replacement over all instructions in the schedule tree. Flatten the schedule prior to running:

```python
.. jupyter-execute::
```

> sched = pulse.Schedule()
>
> sched += pulse.Schedule(old)
>
> sched = sched.flatten()
>
> sched = sched.replace(old, new)
>
> assert sched == pulse.Schedule(new)

**Parameters**

*   **old** (`Union`\[`Schedule`, `Instruction`]) – Instruction to replace.
*   **new** (`Union`\[`Schedule`, `Instruction`]) – Instruction to replace with.
*   **inplace** (`bool`) – Replace instruction by mutably modifying this `Schedule`.

**Return type**

`Schedule`

**Returns**

The modified schedule with `old` replaced by `new`.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the `Schedule` after replacements will has a timing overlap.
