# qiskit.circuit.classicalfunction.BooleanExpression.synth

`BooleanExpression.synth(registerless=True, synthesizer=None)`

Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

**Parameters**

*   **registerless** (`bool`) – Default `True`. If `False` uses the parameter names to create registers with those names. Otherwise, creates a circuit with a flat quantum register.
*   **synthesizer** (`Optional`\[`Callable`\[\[`BooleanExpression`], `QuantumCircuit`]]) – A callable that takes self and returns a Tweedledum circuit.

**Returns**

A circuit implementing the logic network.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
