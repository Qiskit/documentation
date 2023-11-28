# qiskit.converters.circuit\_to\_gate

<span id="undefined" />

`circuit_to_gate(circuit, parameter_map=None, equivalence_library=None, label=None)`

Build a [`Gate`](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate") object from a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

The gate is anonymous (not tied to a named quantum register), and so can be inserted into another circuit. The gate will have the same string name as the circuit.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the input circuit.
*   **parameter\_map** (*dict*) – For parameterized circuits, a mapping from parameters in the circuit to parameters to be used in the gate. If None, existing circuit parameters will also parameterize the Gate.
*   **equivalence\_library** ([*EquivalenceLibrary*](qiskit.circuit.EquivalenceLibrary#qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")) – Optional equivalence library where the converted gate will be registered.
*   **label** (*str*) – Optional gate label.

**Raises**

**QiskitError** – if circuit is non-unitary or if parameter\_map is not compatible with circuit

**Returns**

a Gate equivalent to the action of the input circuit. Upon decomposition, this gate will yield the components comprising the original circuit.

**Return type**

[Gate](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")
