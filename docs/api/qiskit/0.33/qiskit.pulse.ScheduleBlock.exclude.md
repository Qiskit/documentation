# qiskit.pulse.ScheduleBlock.exclude

`ScheduleBlock.exclude(*filter_funcs, channels=None, instruction_types=None, time_ranges=None, intervals=None, check_subroutine=True)`

Return a `Schedule` with only the instructions from this Schedule *failing* at least one of the provided filters. This method is the complement of py:meth:\~self.filter, so that:

```python
self.filter(args) | self.exclude(args) == self
```

<Admonition title="Note" type="note">
  This method is currently not supported. Support will be soon added please create an issue if you believe this must be prioritized.
</Admonition>

**Parameters**

*   **filter\_funcs** (`List`\[`Callable`]) – A list of Callables which take a (int, Union\[‘Schedule’, Instruction]) tuple and return a bool.
*   **channels** (`Optional`\[`Iterable`\[[`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – For example, `[DriveChannel(0), AcquireChannel(0)]`.
*   **instruction\_types** (`Union`\[`Iterable`\[`ABCMeta`], `ABCMeta`, `None`]) – For example, `[PulseInstruction, AcquireInstruction]`.
*   **time\_ranges** (`Optional`\[`Iterable`\[`Tuple`\[`int`, `int`]]]) – For example, `[(0, 5), (6, 10)]`.
*   **intervals** (`Optional`\[`Iterable`\[`Tuple`\[`int`, `int`]]]) – For example, `[(0, 5), (6, 10)]`.
*   **check\_subroutine** (`bool`) – Set True to individually filter instructions inside of a subroutine defined by the [`Call`](qiskit.pulse.instructions.Call#qiskit.pulse.instructions.Call "qiskit.pulse.instructions.Call") instruction.

**Returns**

`Schedule` consisting of instructions that are not match with filtering condition.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When this method is called. This method will be supported soon.
