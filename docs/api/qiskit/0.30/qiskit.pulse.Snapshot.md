# Snapshot



`Snapshot(label, snapshot_type='statevector', name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

An instruction targeted for simulators, to capture a moment in the simulation.

Create new snapshot.

**Parameters**

*   **label** (`str`) – Snapshot label which is used to identify the snapshot in the output.
*   **snapshot\_type** (`str`) – Type of snapshot, e.g., “state” (take a snapshot of the quantum state). The types of snapshots offered are defined by the simulator used.
*   **name** (`Optional`\[`str`]) – Snapshot name which defaults to `label`. This parameter is only for display purposes and is not taken into account during comparison.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If snapshot label is invalid.

## Methods

|                                                                                                                                                  |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.Snapshot.append#qiskit.pulse.Snapshot.append "qiskit.pulse.Snapshot.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.Snapshot.assign_parameters#qiskit.pulse.Snapshot.assign_parameters "qiskit.pulse.Snapshot.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.Snapshot.ch_duration#qiskit.pulse.Snapshot.ch_duration "qiskit.pulse.Snapshot.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.Snapshot.ch_start_time#qiskit.pulse.Snapshot.ch_start_time "qiskit.pulse.Snapshot.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.Snapshot.ch_stop_time#qiskit.pulse.Snapshot.ch_stop_time "qiskit.pulse.Snapshot.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.Snapshot.draw#qiskit.pulse.Snapshot.draw "qiskit.pulse.Snapshot.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.Snapshot.flatten#qiskit.pulse.Snapshot.flatten "qiskit.pulse.Snapshot.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.Snapshot.insert#qiskit.pulse.Snapshot.insert "qiskit.pulse.Snapshot.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.Snapshot.is_parameterized#qiskit.pulse.Snapshot.is_parameterized "qiskit.pulse.Snapshot.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.Snapshot.shift#qiskit.pulse.Snapshot.shift "qiskit.pulse.Snapshot.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes



### channel

Return the `Channel` that this instruction is scheduled on; trivially, a `SnapshotChannel`.

**Return type**

`SnapshotChannel`



### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`SnapshotChannel`]



### duration

Duration of this instruction.

**Return type**

`int`



### id

Unique identifier for this instruction.

**Return type**

`int`



### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]



### label

Label of snapshot.

**Return type**

`str`



### name

Name of this instruction.

**Return type**

`str`



### operands

Return instruction operands.

**Return type**

`Tuple`



### parameters

Parameters which determine the instruction behavior.

**Return type**

`Set`



### start\_time

Relative begin time of this instruction.

**Return type**

`int`



### stop\_time

Relative end time of this instruction.

**Return type**

`int`



### type

Type of snapshot.

**Return type**

`str`
