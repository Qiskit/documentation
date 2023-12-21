# qiskit.circuit.QuantumCircuit.measure

`QuantumCircuit.measure(qubit, cbit)`

Measure quantum bit into classical bit (tuples).

**Parameters**

*   **qubit** (*QuantumRegister|list|tuple*) – quantum register
*   **cbit** (*ClassicalRegister|list|tuple*) – classical register

**Returns**

the attached measure instruction.

**Return type**

qiskit.Instruction

**Raises**

**CircuitError** – if qubit is not in this circuit or bad format; if cbit is not in this circuit or not creg.
