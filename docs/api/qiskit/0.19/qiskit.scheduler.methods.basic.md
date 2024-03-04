---
title: basic
description: API reference for qiskit.scheduler.methods.basic
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.scheduler.methods.basic
---

# basic

The most straightforward scheduling methods: scheduling **as early** or **as late** as possible.

**Functions**

|                                                                                                                                                                             |                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [`as_late_as_possible`](#qiskit.scheduler.methods.basic.as_late_as_possible "qiskit.scheduler.methods.basic.as_late_as_possible")(circuit, schedule\_config)                | Return the pulse Schedule which implements the input circuit using an “as late as possible” (alap) scheduling policy. |
| [`as_soon_as_possible`](#qiskit.scheduler.methods.basic.as_soon_as_possible "qiskit.scheduler.methods.basic.as_soon_as_possible")(circuit, schedule\_config)                | Return the pulse Schedule which implements the input circuit using an “as soon as possible” (asap) scheduling policy. |
| [`translate_gates_to_pulse_defs`](#qiskit.scheduler.methods.basic.translate_gates_to_pulse_defs "qiskit.scheduler.methods.basic.translate_gates_to_pulse_defs")(circuit, …) | Return a list of Schedules and the qubits they operate on, for each element encountered in th input circuit.          |

**Classes**

|                                                                                                                                         |                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [`CircuitPulseDef`](#qiskit.scheduler.methods.basic.CircuitPulseDef "qiskit.scheduler.methods.basic.CircuitPulseDef")(schedule, qubits) | Create new instance of CircuitPulseDef(schedule, qubits) |

<span id="qiskit.scheduler.methods.basic.CircuitPulseDef" />

`CircuitPulseDef(schedule, qubits)`

Create new instance of CircuitPulseDef(schedule, qubits)

### count

<span id="qiskit.scheduler.methods.basic.CircuitPulseDef.count" />

`count(value, /)`

Return number of occurrences of value.

### index

<span id="qiskit.scheduler.methods.basic.CircuitPulseDef.index" />

`index(value, start=0, stop=9223372036854775807, /)`

Return first index of value.

Raises ValueError if the value is not present.

Alias for field number 1

Alias for field number 0

### as\_late\_as\_possible

<span id="qiskit.scheduler.methods.basic.as_late_as_possible" />

`as_late_as_possible(circuit, schedule_config)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/scheduler/methods/basic.py "view source code")

Return the pulse Schedule which implements the input circuit using an “as late as possible” (alap) scheduling policy.

Circuit instructions are first each mapped to equivalent pulse Schedules according to the command definition given by the schedule\_config. Then, this circuit instruction-equivalent Schedule is appended at the latest time that it can be without allowing unnecessary time between instructions or allowing instructions with common qubits to overlap.

This method should improves the outcome fidelity over ASAP scheduling, because we may maximize the time that the qubit remains in the ground state.

**Parameters**

*   **circuit** ([`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")) – The quantum circuit to translate.
*   **schedule\_config** ([`ScheduleConfig`](qiskit.scheduler.ScheduleConfig "qiskit.scheduler.config.ScheduleConfig")) – Backend specific parameters used for building the Schedule.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

A schedule corresponding to the input `circuit` with pulses occurring as late as possible.

### as\_soon\_as\_possible

<span id="qiskit.scheduler.methods.basic.as_soon_as_possible" />

`as_soon_as_possible(circuit, schedule_config)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/scheduler/methods/basic.py "view source code")

Return the pulse Schedule which implements the input circuit using an “as soon as possible” (asap) scheduling policy.

Circuit instructions are first each mapped to equivalent pulse Schedules according to the command definition given by the schedule\_config. Then, this circuit instruction-equivalent Schedule is appended at the earliest time at which all qubits involved in the instruction are available.

**Parameters**

*   **circuit** ([`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")) – The quantum circuit to translate.
*   **schedule\_config** ([`ScheduleConfig`](qiskit.scheduler.ScheduleConfig "qiskit.scheduler.config.ScheduleConfig")) – Backend specific parameters used for building the Schedule.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

A schedule corresponding to the input `circuit` with pulses occurring as early as possible.

### translate\_gates\_to\_pulse\_defs

<span id="qiskit.scheduler.methods.basic.translate_gates_to_pulse_defs" />

`translate_gates_to_pulse_defs(circuit, schedule_config)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/scheduler/methods/basic.py "view source code")

Return a list of Schedules and the qubits they operate on, for each element encountered in th input circuit.

Without concern for the final schedule, extract and return a list of Schedules and the qubits they operate on, for each element encountered in the input circuit. Measures are grouped when possible, so `qc.measure(q0, c0)` or `qc.measure(q1, c1)` will generate a synchronous measurement pulse.

**Parameters**

*   **circuit** ([`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")) – The quantum circuit to translate.
*   **schedule\_config** ([`ScheduleConfig`](qiskit.scheduler.ScheduleConfig "qiskit.scheduler.config.ScheduleConfig")) – Backend specific parameters used for building the Schedule.

**Returns**

the pulse definition for each circuit element.

**Return type**

A list of CircuitPulseDefs

**Raises**

**QiskitError** – If circuit uses a command that isn’t defined in config.inst\_map.

