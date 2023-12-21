# qiskit.circuit.QuantumCircuit.size

`QuantumCircuit.size(filter_function=<function QuantumCircuit.<lambda>>)`

Returns total number of instructions in circuit.

**Parameters**

**filter\_function** (*callable*) – a function to filter out some instructions. Should take as input a tuple of (Instruction, list(Qubit), list(Clbit)). By default filters out “directives”, such as barrier or snapshot.

**Returns**

Total number of gate operations.

**Return type**

int
