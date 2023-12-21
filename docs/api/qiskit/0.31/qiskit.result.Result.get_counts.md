# qiskit.result.Result.get\_counts

`Result.get_counts(experiment=None)`

Get the histogram data of an experiment.

**Parameters**

**experiment** (*str or* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or int or None*) – the index of the experiment, as specified by `data([experiment])`.

**Returns**

a dictionary or a list of dictionaries. A dictionary has the counts for each qubit with the keys containing a string in binary format and separated according to the registers in circuit (e.g. `0100 1110`). The string is little-endian (cr\[0] on the right hand side).

**Return type**

dict\[str, int] or list\[dict\[str, int]]

**Raises**

**QiskitError** – if there are no counts for the experiment.
