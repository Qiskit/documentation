---
title: ScheduleConfig
description: API reference for qiskit.scheduler.ScheduleConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.scheduler.ScheduleConfig
---

# qiskit.scheduler.ScheduleConfig

<span id="qiskit.scheduler.ScheduleConfig" />

`ScheduleConfig(inst_map, meas_map, dt)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/scheduler/config.py "view source code")

Configuration for pulse scheduling.

Container for information needed to schedule a QuantumCircuit into a pulse Schedule.

**Parameters**

*   **inst\_map** (`InstructionScheduleMap`) – The schedule definition of all gates supported on a backend.
*   **meas\_map** (`List`\[`List`\[`int`]]) – A list of groups of qubits which have to be measured together.
*   **dt** (`float`) – Sample duration.

### \_\_init\_\_

<span id="qiskit.scheduler.ScheduleConfig.__init__" />

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

