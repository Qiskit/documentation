# qiskit.chemistry.components.variational\_forms.UVCC.construct\_circuit

`UVCC.construct_circuit(parameters, q=None)`

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (`Union`\[`ndarray`, `List`\[`Parameter`], `ParameterVector`]) – circuit parameters
*   **q** (`Optional`\[`QuantumRegister`]) – Quantum Register for the circuit.

**Return type**

`QuantumCircuit`

**Returns**

Quantum Circuit a quantum circuit with given parameters

**Raises**

*   **ValueError** – the number of parameters is incorrect.
*   **ValueError** – if num\_qubits has not been set and is still None
