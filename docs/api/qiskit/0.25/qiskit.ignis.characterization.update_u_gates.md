# qiskit.ignis.characterization.update\_u\_gates[¶](#qiskit-ignis-characterization-update-u-gates "Permalink to this headline")

<span id="undefined" />

`update_u_gates(drag_params, pi2_pulse_schedules=None, qubits=None, inst_map=None, drives=None)`

Update the cmd\_def with new single qubit gate values

Will update U2, U3

**Parameters**

*   **drag\_params** (*list*) – list of drag params
*   **pi2\_pulse\_schedules** (*list*) – list of new pi/2 gate as a pulse schedule will use the drag\_params if this is None.
*   **qubits** (*list*) – list of qubits to update
*   **inst\_map** ([*InstructionScheduleMap*](qiskit.pulse.InstructionScheduleMap#qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap")) – InstructionScheduleMap providing circuit instruction to schedule definitions.
*   **drives** (*list*) – List of drive chs
