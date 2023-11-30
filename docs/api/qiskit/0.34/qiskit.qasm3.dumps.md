# qiskit.qasm3.dumps

<span id="undefined" />

`dumps(circuit, **kwargs)`

Serialize a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") object in an OpenQASM3 string.

<Admonition title="Note" type="note">
  This is a quick interface to the main [`Exporter`](qiskit.qasm3.Exporter#qiskit.qasm3.Exporter "qiskit.qasm3.Exporter") interface. All keyword arguments to this function are inherited from the constructor of that class, and if you have multiple circuits to export, it will be faster to create an [`Exporter`](qiskit.qasm3.Exporter#qiskit.qasm3.Exporter "qiskit.qasm3.Exporter") instance, and use its [`Exporter.dumps`](qiskit.qasm3.Exporter.dumps#qiskit.qasm3.Exporter.dumps "qiskit.qasm3.Exporter.dumps") method.
</Admonition>

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Circuit to serialize.
*   **\*\*kwargs** – Arguments for the [`Exporter`](qiskit.qasm3.Exporter#qiskit.qasm3.Exporter "qiskit.qasm3.Exporter") constructor.

**Returns**

The OpenQASM3 serialization

**Return type**

str
