<span id="qiskit-aqua-circuits-statevectorcircuit" />

# qiskit.aqua.circuits.StateVectorCircuit

<span id="undefined" />

`StateVectorCircuit(state_vector)`

Arbitrary State-Vector Circuit.

Constructor.

**Parameters**

**state\_vector** (*numpy.ndarray*) – vector representation of the desired quantum state

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

<span id="undefined" />

`__init__(state_vector)`

Constructor.

**Parameters**

**state\_vector** (*numpy.ndarray*) – vector representation of the desired quantum state

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

|                                                                                                                                                                     |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.circuits.StateVectorCircuit.__init__ "qiskit.aqua.circuits.StateVectorCircuit.__init__")(state\_vector)                                   | Constructor.                                                 |
| [`construct_circuit`](#qiskit.aqua.circuits.StateVectorCircuit.construct_circuit "qiskit.aqua.circuits.StateVectorCircuit.construct_circuit")(\[circuit, register]) | Construct the circuit representing the desired state vector. |

<span id="undefined" />

`construct_circuit(circuit=None, register=None)`

Construct the circuit representing the desired state vector.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The optional circuit to extend from.
*   **register** (*Union(*[*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") *, list\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*])*) – The optional qubits to construct the circuit with.

**Returns**

quantum circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input
