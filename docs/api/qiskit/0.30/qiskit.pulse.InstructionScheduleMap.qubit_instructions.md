# qiskit.pulse.InstructionScheduleMap.qubit\_instructions

`InstructionScheduleMap.qubit_instructions(qubits)`

Return a list of the instruction names that are defined by the backend for the given qubit or qubits.

**Parameters**

**qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – A qubit index, or a list or tuple of indices.

**Return type**

`List`\[`str`]

**Returns**

All the instructions which are defined on the qubits.

For 1 qubit, all the 1Q instructions defined. For multiple qubits, all the instructions which apply to that whole set of qubits (e.g. `qubits=[0, 1]` may return `['cx']`).
