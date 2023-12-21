# qiskit.aqua.components.neural\_networks.GenerativeNetwork.get\_output

`abstract GenerativeNetwork.get_output(quantum_instance, params, shots)`

Apply quantum/classical neural network to given input and get the respective output

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Quantum Instance, used to run the generator circuit.
*   **params** (*numpy.ndarray*) – parameters which should be used to run the generator, if None use self.\_params
*   **shots** (*int*) – if not None use a number of shots that is different from the number set in quantum\_instance

**Returns**

Neural network output

**Raises**

**NotImplementedError** – not implemented
