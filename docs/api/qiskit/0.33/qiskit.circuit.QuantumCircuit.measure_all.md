# qiskit.circuit.QuantumCircuit.measure\_all

`QuantumCircuit.measure_all(inplace=True, add_bits=True)`

Adds measurement to all qubits.

By default, adds new classical bits in a [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") to store these measurements. If `add_bits=False`, the results of the measurements will instead be stored in the already existing classical bits, with qubit `n` being measured into classical bit `n`.

Returns a new circuit with measurements if `inplace=False`.

**Parameters**

*   **inplace** (*bool*) – All measurements inplace or return new circuit.
*   **add\_bits** (*bool*) – Whether to add new bits to store the results.

**Returns**

Returns circuit with measurements when `inplace=False`.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**CircuitError** – if `add_bits=False` but there are not enough classical bits.
