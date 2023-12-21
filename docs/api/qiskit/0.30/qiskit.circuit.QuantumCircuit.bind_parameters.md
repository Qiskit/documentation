# qiskit.circuit.QuantumCircuit.bind\_parameters

`QuantumCircuit.bind_parameters(values, value_dict=None)`

Assign numeric parameters to values yielding a new circuit.

To assign new Parameter objects or bind the values in-place, without yielding a new circuit, use the [`assign_parameters()`](qiskit.circuit.QuantumCircuit.assign_parameters#qiskit.circuit.QuantumCircuit.assign_parameters "qiskit.circuit.QuantumCircuit.assign_parameters") method.

**Parameters**

*   **values** (*dict or iterable*) – \{parameter: value, …} or \[value1, value2, …]
*   **value\_dict** (*dict*) – Deprecated, use `values` instead.

**Raises**

*   **CircuitError** – If values is a dict and contains parameters not present in the circuit.
*   **TypeError** – If values contains a ParameterExpression.

**Returns**

copy of self with assignment substitution.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
