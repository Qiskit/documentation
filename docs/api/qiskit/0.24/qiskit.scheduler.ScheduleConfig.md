<span id="qiskit-scheduler-scheduleconfig" />

# qiskit.scheduler.ScheduleConfig

<span id="undefined" />

`ScheduleConfig(inst_map, meas_map, dt)`

Configuration for pulse scheduling.

Container for information needed to schedule a QuantumCircuit into a pulse Schedule.

**Parameters**

*   **inst\_map** (`InstructionScheduleMap`) – The schedule definition of all gates supported on a backend.
*   **meas\_map** (`List`\[`List`\[`int`]]) – A list of groups of qubits which have to be measured together.
*   **dt** (`float`) – Sample duration.

<span id="undefined" />

`__init__(inst_map, meas_map, dt)`

Container for information needed to schedule a QuantumCircuit into a pulse Schedule.

**Parameters**

*   **inst\_map** (`InstructionScheduleMap`) – The schedule definition of all gates supported on a backend.
*   **meas\_map** (`List`\[`List`\[`int`]]) – A list of groups of qubits which have to be measured together.
*   **dt** (`float`) – Sample duration.

## Methods

|                                                                                                                              |                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.scheduler.ScheduleConfig.__init__ "qiskit.scheduler.ScheduleConfig.__init__")(inst\_map, meas\_map, dt) | Container for information needed to schedule a QuantumCircuit into a pulse Schedule. |
