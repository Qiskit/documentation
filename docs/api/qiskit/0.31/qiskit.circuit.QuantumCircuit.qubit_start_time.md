# qiskit.circuit.QuantumCircuit.qubit\_start\_time

`QuantumCircuit.qubit_start_time(*qubits)`

Return the start time of the first instruction, excluding delays, over the supplied qubits. Its time unit is `self.unit`.

Return 0 if there are no instructions over qubits

**Parameters**

*   **\*qubits** – Qubits within `self` to include. Integers are allowed for qubits, indicating
*   **of self.qubits.** (*indices*) –

**Return type**

`float`

**Returns**

Return the start time of the first instruction, excluding delays, over the qubits

**Raises**

**CircuitError** – if `self` is a not-yet scheduled circuit.
