# InstructionScheduleMap

<span id="undefined" />

`InstructionScheduleMap`

Bases: `object`

Mapping from [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") names and qubits to [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") s. In particular, the mapping is formatted as type:

```python
Dict[str, Dict[Tuple[int], Schedule]]
```

where the first key is the name of a circuit instruction (e.g. `'u1'`, `'measure'`), the second key is a tuple of qubit indices, and the final value is a Schedule implementing the requested instruction.

These can usually be seen as gate calibrations.

Initialize a circuit instruction to schedule mapper instance.

## Methods

|                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`add`](qiskit.pulse.InstructionScheduleMap.add#qiskit.pulse.InstructionScheduleMap.add "qiskit.pulse.InstructionScheduleMap.add")                                                                                 | Add a new known instruction for the given qubits and its mapping to a pulse schedule.                                                                                                                                                                        |
| [`assert_has`](qiskit.pulse.InstructionScheduleMap.assert_has#qiskit.pulse.InstructionScheduleMap.assert_has "qiskit.pulse.InstructionScheduleMap.assert_has")                                                     | Error if the given instruction is not defined.                                                                                                                                                                                                               |
| [`get`](qiskit.pulse.InstructionScheduleMap.get#qiskit.pulse.InstructionScheduleMap.get "qiskit.pulse.InstructionScheduleMap.get")                                                                                 | Return the defined [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") or [`ScheduleBlock`](qiskit.pulse.ScheduleBlock#qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock") for the given instruction on the given qubits. |
| [`get_parameters`](qiskit.pulse.InstructionScheduleMap.get_parameters#qiskit.pulse.InstructionScheduleMap.get_parameters "qiskit.pulse.InstructionScheduleMap.get_parameters")                                     | Return the list of parameters taken by the given instruction on the given qubits.                                                                                                                                                                            |
| [`has`](qiskit.pulse.InstructionScheduleMap.has#qiskit.pulse.InstructionScheduleMap.has "qiskit.pulse.InstructionScheduleMap.has")                                                                                 | Is the instruction defined for the given qubits?                                                                                                                                                                                                             |
| [`has_custom_gate`](qiskit.pulse.InstructionScheduleMap.has_custom_gate#qiskit.pulse.InstructionScheduleMap.has_custom_gate "qiskit.pulse.InstructionScheduleMap.has_custom_gate")                                 | Return `True` if the map has user provided instruction.                                                                                                                                                                                                      |
| [`pop`](qiskit.pulse.InstructionScheduleMap.pop#qiskit.pulse.InstructionScheduleMap.pop "qiskit.pulse.InstructionScheduleMap.pop")                                                                                 | Remove and return the defined schedule for the given instruction on the given qubits.                                                                                                                                                                        |
| [`qubit_instructions`](qiskit.pulse.InstructionScheduleMap.qubit_instructions#qiskit.pulse.InstructionScheduleMap.qubit_instructions "qiskit.pulse.InstructionScheduleMap.qubit_instructions")                     | Return a list of the instruction names that are defined by the backend for the given qubit or qubits.                                                                                                                                                        |
| [`qubits_with_instruction`](qiskit.pulse.InstructionScheduleMap.qubits_with_instruction#qiskit.pulse.InstructionScheduleMap.qubits_with_instruction "qiskit.pulse.InstructionScheduleMap.qubits_with_instruction") | Return a list of the qubits for which the given instruction is defined.                                                                                                                                                                                      |
| [`remove`](qiskit.pulse.InstructionScheduleMap.remove#qiskit.pulse.InstructionScheduleMap.remove "qiskit.pulse.InstructionScheduleMap.remove")                                                                     | Remove the given instruction from the listing of instructions defined in self.                                                                                                                                                                               |

## Attributes

<span id="undefined" />

### instructions

Return all instructions which have definitions.

By default, these are typically the basis gates along with other instructions such as measure and reset.

**Return type**

`List`\[`str`]

**Returns**

The names of all the circuit instructions which have Schedule definitions in this.
