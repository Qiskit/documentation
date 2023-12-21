---
title: get_output
description: API reference for qiskit.aqua.components.neural_networks.GenerativeNetwork.get_output
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.GenerativeNetwork.get_output
---

# get\_output

<span id="qiskit.aqua.components.neural_networks.GenerativeNetwork.get_output" />

`abstract GenerativeNetwork.get_output(quantum_instance, qc_state_in, params, shots)`

Apply quantum/classical neural network to given input and get the respective output

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Quantum Instance, used to run the generator circuit.
*   **qc\_state\_in** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or vector*) – corresponding to the network input state
*   **params** (*numpy.ndarray*) – parameters which should be used to run the generator, if None use self.\_params
*   **shots** (*int*) – if not None use a number of shots that is different from the number set in quantum\_instance

**Returns**

Neural network output

**Raises**

**NotImplementedError** – not implemented

