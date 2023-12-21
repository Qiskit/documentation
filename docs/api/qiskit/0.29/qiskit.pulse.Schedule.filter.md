# qiskit.pulse.Schedule.filter

`Schedule.filter(*filter_funcs, channels=None, instruction_types=None, time_ranges=None, intervals=None, check_subroutine=True)`

Return a new `Schedule` with only the instructions from this `Schedule` which pass though the provided filters; i.e. an instruction will be retained iff every function in `filter_funcs` returns `True`, the instruction occurs on a channel type contained in `channels`, the instruction type is contained in `instruction_types`, and the period over which the instruction operates is *fully* contained in one specified in `time_ranges` or `intervals`.

If no arguments are provided, `self` is returned.

**Parameters**

*   **filter\_funcs** (`Callable`) – A list of Callables which take a (int, Union\[‘Schedule’, Instruction]) tuple and return a bool.
*   **channels** (`Optional`\[`Iterable`\[`Channel`]]) – For example, `[DriveChannel(0), AcquireChannel(0)]`.
*   **instruction\_types** (`Union`\[`Iterable`\[`ABCMeta`], `ABCMeta`, `None`]) – For example, `[PulseInstruction, AcquireInstruction]`.
*   **time\_ranges** (`Optional`\[`Iterable`\[`Tuple`\[`int`, `int`]]]) – For example, `[(0, 5), (6, 10)]`.
*   **intervals** (`Optional`\[`Iterable`\[`Tuple`\[`int`, `int`]]]) – For example, `[(0, 5), (6, 10)]`.
*   **check\_subroutine** (`bool`) – Set True to individually filter instructions inside of a subroutine defined by the [`Call`](qiskit.pulse.instructions.Call#qiskit.pulse.instructions.Call "qiskit.pulse.instructions.Call") instruction.

**Return type**

`Schedule`
