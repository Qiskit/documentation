---
title: utils
description: API reference for qiskit.scheduler.utils
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.scheduler.utils
---

# utils

Scheduling utility functions.

**Functions**

|                                                                                                                  |                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`format_meas_map`](#qiskit.scheduler.utils.format_meas_map "qiskit.scheduler.utils.format_meas_map")(meas\_map) | Return a mapping from qubit label to measurement group given the nested list meas\_map returned by a backend configuration.                                         |
| [`measure`](#qiskit.scheduler.utils.measure "qiskit.scheduler.utils.measure")(qubits\[, backend, inst\_map, …])  | Return a schedule which measures the requested qubits according to the given instruction mapping and measure map, or by using the defaults provided by the backend. |
| [`measure_all`](#qiskit.scheduler.utils.measure_all "qiskit.scheduler.utils.measure_all")(backend)               | Return a Schedule which measures all qubits of the given backend.                                                                                                   |

### format\_meas\_map

<span id="qiskit.scheduler.utils.format_meas_map" />

`format_meas_map(meas_map)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/scheduler/utils.py "view source code")

Return a mapping from qubit label to measurement group given the nested list meas\_map returned by a backend configuration. (Qubits can not always be measured independently.) Sorts the measurement group for consistency.

**Parameters**

**meas\_map** (`List`\[`List`\[`int`]]) – Groups of qubits that get measured together, for example: \[\[0, 1], \[2, 3, 4]]

**Return type**

`Dict`\[`int`, `List`\[`int`]]

**Returns**

Measure map in map format

### measure

<span id="qiskit.scheduler.utils.measure" />

`measure(qubits, backend=None, inst_map=None, meas_map=None, qubit_mem_slots=None, measure_name='measure')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/scheduler/utils.py "view source code")

Return a schedule which measures the requested qubits according to the given instruction mapping and measure map, or by using the defaults provided by the backend.

By default, the measurement results for each qubit are trivially mapped to the qubit index. This behavior is overridden by qubit\_mem\_slots. For instance, to measure qubit 0 into MemorySlot(1), qubit\_mem\_slots can be provided as \{0: 1}.

**Parameters**

*   **qubits** (`List`\[`int`]) – List of qubits to be measured.
*   **backend** ([*BaseBackend*](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")) – A backend instance, which contains hardware-specific data required for scheduling.
*   **inst\_map** (`Optional`\[[`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.instruction_schedule_map.InstructionScheduleMap")]) – Mapping of circuit operations to pulse schedules. If None, defaults to the `instruction_schedule_map` of `backend`.
*   **meas\_map** (`Union`\[`List`\[`List`\[`int`]], `Dict`\[`int`, `List`\[`int`]], `None`]) – List of sets of qubits that must be measured together. If None, defaults to the `meas_map` of `backend`.
*   **qubit\_mem\_slots** (`Optional`\[`Dict`\[`int`, `int`]]) – Mapping of measured qubit index to classical bit index.
*   **measure\_name** (`str`) – Name of the measurement schedule.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

A measurement schedule corresponding to the inputs provided.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If both `inst_map` or `meas_map`, and `backend` is None.

### measure\_all

<span id="qiskit.scheduler.utils.measure_all" />

`measure_all(backend)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/scheduler/utils.py "view source code")

Return a Schedule which measures all qubits of the given backend.

**Parameters**

**backend** ([*BaseBackend*](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")) – A backend instance, which contains hardware-specific data required for scheduling.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

A schedule corresponding to the inputs provided.

