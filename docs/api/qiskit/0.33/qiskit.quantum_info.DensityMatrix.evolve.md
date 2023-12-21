# qiskit.quantum\_info.DensityMatrix.evolve

`DensityMatrix.evolve(other, qargs=None)`

Evolve a quantum state by an operator.

**Parameters**

*   \*\*(****Operator**** or \*\***QuantumChannel** (*other*) – or Instruction or Circuit): The operator to evolve by.
*   **qargs** (*list*) – a list of QuantumState subsystem positions to apply the operator on.

**Returns**

the output quantum state.

**Return type**

QuantumState

**Raises**

**QiskitError** – if the operator dimension does not match the specified QuantumState subsystem dimensions.
