# qiskit.aqua.components.neural\_networks.QuantumGenerator.train

`QuantumGenerator.train(quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the generator’s parameters

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run the generator circuit.
*   **shots** (*int*) – Number of shots for hardware or qasm execution.

**Returns**

generator loss(float) and updated parameters (array).

**Return type**

dict
