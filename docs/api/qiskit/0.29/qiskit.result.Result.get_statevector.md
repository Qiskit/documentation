# qiskit.result.Result.get\_statevector

`Result.get_statevector(experiment=None, decimals=None)`

Get the final statevector of an experiment.

**Parameters**

*   **experiment** (*str or* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or int or None*) – the index of the experiment, as specified by `data()`.
*   **decimals** (*int*) – the number of decimals in the statevector. If None, does not round.

**Returns**

list of 2^num\_qubits complex amplitudes.

**Return type**

list\[complex]

**Raises**

**QiskitError** – if there is no statevector for the experiment.
