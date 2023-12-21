# qiskit.circuit.QuantumCircuit.measure

`QuantumCircuit.measure(qubit, cbit)`

Measure quantum bit into classical bit (tuples).

**Parameters**

*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – qubit to measure.
*   **cbit** (`Union`\[`Clbit`, `ClassicalRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Clbit`, `int`]]]) – classical bit to place the measurement in.

**Returns**

handle to the added instructions.

**Return type**

[qiskit.circuit.InstructionSet](qiskit.circuit.InstructionSet#qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet")

**Raises**

**CircuitError** – if arguments have bad format.
