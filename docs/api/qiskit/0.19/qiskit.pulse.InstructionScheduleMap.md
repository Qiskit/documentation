---
title: InstructionScheduleMap
description: API reference for qiskit.pulse.InstructionScheduleMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.InstructionScheduleMap
---

# InstructionScheduleMap

<span id="qiskit.pulse.InstructionScheduleMap" />

`InstructionScheduleMap`

Mapping from [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") names and qubits to [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") s. In particular, the mapping is formatted as type:

```python
Dict[str, Dict[Tuple[int], Schedule]]
```

where the first key is the name of a circuit instruction (e.g. `'u1'`, `'measure'`), the second key is a tuple of qubit indices, and the final value is a Schedule implementing the requested instruction.

These can usually be seen as gate calibrations.

Initialize a circuit instruction to schedule mapper instance.

## Attributes

|                                                                                                                                              |                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`InstructionScheduleMap.instructions`](qiskit.pulse.InstructionScheduleMap.instructions "qiskit.pulse.InstructionScheduleMap.instructions") | Return all instructions which have definitions. |

## Methods

|                                                                                                                                                                                  |                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [`InstructionScheduleMap.add`](qiskit.pulse.InstructionScheduleMap.add "qiskit.pulse.InstructionScheduleMap.add")(instruction, …)                                                | Add a new known instruction for the given qubits and its mapping to a pulse schedule.                                         |
| [`InstructionScheduleMap.assert_has`](qiskit.pulse.InstructionScheduleMap.assert_has "qiskit.pulse.InstructionScheduleMap.assert_has")(…)                                        | Error if the given instruction is not defined.                                                                                |
| [`InstructionScheduleMap.get`](qiskit.pulse.InstructionScheduleMap.get "qiskit.pulse.InstructionScheduleMap.get")(instruction, …)                                                | Return the defined [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") for the given instruction on the given qubits. |
| [`InstructionScheduleMap.get_parameters`](qiskit.pulse.InstructionScheduleMap.get_parameters "qiskit.pulse.InstructionScheduleMap.get_parameters")(…)                            | Return the list of parameters taken by the given instruction on the given qubits.                                             |
| [`InstructionScheduleMap.has`](qiskit.pulse.InstructionScheduleMap.has "qiskit.pulse.InstructionScheduleMap.has")(instruction, qubits)                                           | Is the instruction defined for the given qubits?                                                                              |
| [`InstructionScheduleMap.pop`](qiskit.pulse.InstructionScheduleMap.pop "qiskit.pulse.InstructionScheduleMap.pop")(instruction, …)                                                | Remove and return the defined `Schedule` for the given instruction on the given qubits.                                       |
| [`InstructionScheduleMap.qubit_instructions`](qiskit.pulse.InstructionScheduleMap.qubit_instructions "qiskit.pulse.InstructionScheduleMap.qubit_instructions")(qubits)           | Return a list of the instruction names that are defined by the backend for the given qubit or qubits.                         |
| [`InstructionScheduleMap.qubits_with_instruction`](qiskit.pulse.InstructionScheduleMap.qubits_with_instruction "qiskit.pulse.InstructionScheduleMap.qubits_with_instruction")(…) | Return a list of the qubits for which the given instruction is defined.                                                       |
| [`InstructionScheduleMap.remove`](qiskit.pulse.InstructionScheduleMap.remove "qiskit.pulse.InstructionScheduleMap.remove")(instruction, …)                                       | Remove the given instruction from the listing of instructions defined in self.                                                |

