# qiskit.pulse.transforms.block\_to\_dag

<span id="undefined" />

`block_to_dag(block)`

Convert schedule block instruction into DAG.

`ScheduleBlock` can be represented as a DAG as needed. For example, equality of two programs are efficiently checked on DAG representation.

```python
with pulse.build() as sched1:
    with pulse.align_left():
        pulse.play(my_gaussian0, pulse.DriveChannel(0))
        pulse.shift_phase(1.57, pulse.DriveChannel(2))
        pulse.play(my_gaussian1, pulse.DriveChannel(1))

with pulse.build() as sched2:
    with pulse.align_left():
        pulse.shift_phase(1.57, pulse.DriveChannel(2))
        pulse.play(my_gaussian1, pulse.DriveChannel(1))
        pulse.play(my_gaussian0, pulse.DriveChannel(0))
```

Here the `sched1 `` and ``sched2` are different implementations of the same program, but it is difficult to confirm on the list representation.

Another example is instruction optimization.

```python
with pulse.build() as sched:
    with pulse.align_left():
        pulse.shift_phase(1.57, pulse.DriveChannel(1))
        pulse.play(my_gaussian0, pulse.DriveChannel(0))
        pulse.shift_phase(-1.57, pulse.DriveChannel(1))
```

In above program two `shift_phase` instructions can be cancelled out because they are consecutive on the same drive channel. This can be easily found on the DAG representation.

**Parameters**

**block** (`ScheduleBlock`) – A schedule block to be converted.

**Return type**

`PyDAG`

**Returns**

Instructions in DAG representation.
