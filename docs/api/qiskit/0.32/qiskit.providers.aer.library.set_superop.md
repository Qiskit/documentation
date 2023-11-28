# qiskit.providers.aer.library.set\_superop

<span id="undefined" />

`set_superop(self, state)`

Set the superop state of the simulator.

**Parameters**

**state** (*QuantumChannel*) – A CPTP quantum channel.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **ExtensionError** – If the state is the incorrect size for the current circuit.
*   **ExtensionError** – if the input QuantumChannel is not CPTP.
