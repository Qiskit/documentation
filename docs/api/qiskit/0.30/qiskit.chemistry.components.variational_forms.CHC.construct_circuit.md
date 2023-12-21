# qiskit.chemistry.components.variational\_forms.CHC.construct\_circuit

`CHC.construct_circuit(parameters, q=None)`

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (`Union`\[`ndarray`, `List`\[`Parameter`], `ParameterVector`]) – circuit parameters
*   **q** (`Optional`\[`QuantumRegister`]) – Quantum Register for the circuit.

**Returns**

a quantum circuit with given parameters

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **ValueError** – the number of parameters is incorrect.
*   **ValueError** – if num\_qubits has not been set and is still None
*   **ValueError** – only supports single and double excitations at the moment.
