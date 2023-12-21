# qiskit.pulse.instructions.Call.assigned\_subroutine

`Call.assigned_subroutine()`

Returns this subroutine with the parameters assigned.

<Admonition title="Note" type="note">
  This function may be often called internally for class equality check despite its overhead of parameter assignment. The subroutine with parameter assigned is cached based on `.argument` hash. Once this argument is updated, new assigned instance will be returned. Note that this update is not mutable operation.
</Admonition>

**Returns**

Attached program.

**Return type**

program (Union\[[Schedule](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule"), [ScheduleBlock](qiskit.pulse.ScheduleBlock#qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")])
