# qiskit.qasm3.dump[¶](#qiskit-qasm3-dump "Permalink to this headline")

<span id="undefined" />

`dump(circuit, stream, **kwargs)`

Serialize a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") object as a OpenQASM3 stream to file-like object.

<Admonition title="Note" type="note">
  This is a quick interface to the main [`Exporter`](qiskit.qasm3.Exporter#qiskit.qasm3.Exporter "qiskit.qasm3.Exporter") interface. All keyword arguments to this function are inherited from the constructor of that class, and if you have multiple circuits to export, it will be faster to create an [`Exporter`](qiskit.qasm3.Exporter#qiskit.qasm3.Exporter "qiskit.qasm3.Exporter") instance, and use its [`Exporter.dump`](qiskit.qasm3.Exporter.dump#qiskit.qasm3.Exporter.dump "qiskit.qasm3.Exporter.dump") method.
</Admonition>

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Circuit to serialize.
*   **stream** (*TextIOBase*) – stream-like object to dump the OpenQASM3 serialization
*   **\*\*kwargs** – Arguments for the [`Exporter`](qiskit.qasm3.Exporter#qiskit.qasm3.Exporter "qiskit.qasm3.Exporter") constructor.

**Return type**

`None`
