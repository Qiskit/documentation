# qiskit.pulse.InstructionScheduleMap.qubits\_with\_instruction

`InstructionScheduleMap.qubits_with_instruction(instruction)`

Return a list of the qubits for which the given instruction is defined. Single qubit instructions return a flat list, and multiqubit instructions return a list of ordered tuples.

**Parameters**

**instruction** (`Union`\[`str`, `Instruction`]) – The name of the circuit instruction.

**Return type**

`List`\[`Union`\[`int`, `Tuple`\[`int`]]]

**Returns**

Qubit indices which have the given instruction defined. This is a list of tuples if the instruction has an arity greater than 1, or a flat list of ints otherwise.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the instruction is not found.
