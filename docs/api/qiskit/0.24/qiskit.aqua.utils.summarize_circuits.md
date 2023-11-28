<span id="qiskit-aqua-utils-summarize-circuits" />

# qiskit.aqua.utils.summarize\_circuits

<span id="undefined" />

`summarize_circuits(circuits)`

## Summarize circuits based on QuantumCircuit, and five metrics are summarized.

*   Number of qubits
*   Number of classical bits
*   Number of operations
*   Depth of circuits
*   Counts of different gate operations

The average statistic of the first four is provided if multiple circuits are provided.

**Parameters**

**circuits** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or \[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – the to-be-summarized circuits

**Returns**

a formatted string records the summary

**Return type**

str
