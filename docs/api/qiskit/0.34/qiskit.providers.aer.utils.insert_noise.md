# qiskit.providers.aer.utils.insert\_noise[¶](#qiskit-providers-aer-utils-insert-noise "Permalink to this headline")

<span id="undefined" />

`insert_noise(circuits, noise_model, transpile=False)`

Return a noisy version of a QuantumCircuit.

**Parameters**

*   **circuits** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or list\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – Input noise-free circuits.
*   **noise\_model** ([*NoiseModel*](qiskit.providers.aer.noise.NoiseModel#qiskit.providers.aer.noise.NoiseModel "qiskit.providers.aer.noise.NoiseModel")) – The noise model containing the errors to add
*   **transpile** (*Boolean*) – Should the circuit be transpiled into the noise model basis gates

**Returns**

The new circuit with the Kraus noise instructions inserted.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

## Additional Information:

The noisy circuit return by this function will consist of the original circuit with `Kraus` instructions inserted after all instructions referenced in the `noise_model`. The resulting circuit cannot be ran on a quantum computer but can be executed on the [`QasmSimulator`](qiskit.providers.aer.QasmSimulator#qiskit.providers.aer.QasmSimulator "qiskit.providers.aer.QasmSimulator").
