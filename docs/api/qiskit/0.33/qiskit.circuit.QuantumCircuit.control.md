# qiskit.circuit.QuantumCircuit.control

`QuantumCircuit.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Control this circuit on `num_ctrl_qubits` qubits.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – The number of control qubits.
*   **label** (*str*) – An optional label to give the controlled operation for visualization.
*   **ctrl\_state** (*str or int*) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use `2**num_ctrl_qubits - 1`.

**Returns**

The controlled version of this circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**CircuitError** – If the circuit contains a non-unitary operation and cannot be controlled.
