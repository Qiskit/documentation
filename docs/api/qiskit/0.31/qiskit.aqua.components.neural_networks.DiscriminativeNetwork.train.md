# qiskit.aqua.components.neural\_networks.DiscriminativeNetwork.train

`abstract DiscriminativeNetwork.train(data, weights, penalty=False, quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (`Iterable`) – Data batch.
*   **weights** (`Iterable`) – Data sample weights.
*   **penalty** (`bool`) – Indicate whether or not penalty function is applied to the loss function. Ignored if no penalty function defined.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run Quantum network. Ignored for a classical network.
*   **shots** (`Optional`\[`int`]) – Number of shots for hardware or qasm execution. Ignored for classical network

**Returns**

with discriminator loss and updated parameters.

**Return type**

dict

**Raises**

**NotImplementedError** – not implemented
