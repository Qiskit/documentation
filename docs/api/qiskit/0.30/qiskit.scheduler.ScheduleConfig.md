# ScheduleConfig[¶](#scheduleconfig "Permalink to this headline")

<span id="undefined" />

`ScheduleConfig(inst_map, meas_map, dt)`

Bases: `object`

Configuration for pulse scheduling.

Container for information needed to schedule a QuantumCircuit into a pulse Schedule.

**Parameters**

*   **inst\_map** (`InstructionScheduleMap`) – The schedule definition of all gates supported on a backend.
*   **meas\_map** (`List`\[`List`\[`int`]]) – A list of groups of qubits which have to be measured together.
*   **dt** (`float`) – Sample duration.
