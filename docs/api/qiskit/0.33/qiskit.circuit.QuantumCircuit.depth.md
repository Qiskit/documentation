# qiskit.circuit.QuantumCircuit.depth

`QuantumCircuit.depth(filter_function=<function QuantumCircuit.<lambda>>)`

Return circuit depth (i.e., length of critical path).

**Parameters**

**filter\_function** (*callable*) – a function to filter out some instructions. Should take as input a tuple of (Instruction, list(Qubit), list(Clbit)). By default filters out “directives”, such as barrier or snapshot.

**Returns**

Depth of circuit.

**Return type**

int

## Notes

The circuit depth and the DAG depth need not be the same.
