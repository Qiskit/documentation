---
title: get_output
description: API reference for qiskit.aqua.components.neural_networks.QuantumGenerator.get_output
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.QuantumGenerator.get_output
---

# get\_output

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.get_output" />

`QuantumGenerator.get_output(quantum_instance, qc_state_in=None, params=None, shots=None)`

Get classical data samples from the generator. Running the quantum generator circuit results in a quantum state. To train this generator with a classical discriminator, we need to sample classical outputs by measuring the quantum state and mapping them to feature space defined by the training data.

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Quantum Instance, used to run the generator circuit.
*   **qc\_state\_in** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – deprecated
*   **params** (*numpy.ndarray*) – array or None, parameters which should be used to run the generator, if None use self.\_params
*   **shots** (*int*) – if not None use a number of shots that is different from the number set in quantum\_instance

**Returns**

generated samples, array: sample occurrence in percentage

**Return type**

list

