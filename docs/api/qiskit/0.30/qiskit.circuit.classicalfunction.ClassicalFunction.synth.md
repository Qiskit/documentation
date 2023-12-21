# qiskit.circuit.classicalfunction.ClassicalFunction.synth

`ClassicalFunction.synth(registerless=True, synthesizer=None)`

Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

**Parameters**

*   **registerless** (`bool`) – Default `True`. If `False` uses the parameter names to create
*   **with those names. Otherwise** (*registers*) –
*   **a circuit with a flat quantum register.** (*creates*) –
*   **synthesizer** (`Optional`\[`Callable`\[\[`ClassicalElement`], `QuantumCircuit`]]) – Optional. If None tweedledum’s pkrm\_synth is used.

**Returns**

A circuit implementing the logic network.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
