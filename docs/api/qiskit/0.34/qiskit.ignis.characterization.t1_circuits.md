# qiskit.ignis.characterization.t1\_circuits[¶](#qiskit-ignis-characterization-t1-circuits "Permalink to this headline")

<span id="undefined" />

`t1_circuits(num_of_gates, gate_time, qubits)`

Generate circuits for T1 measurement.

Each circuit consists of an X gate, followed by a sequence of identity gates.

**Parameters**

*   **num\_of\_gates** (`Union`\[`List`\[`int`], `array`]) – the number of identity gates in each circuit. Must be in an increasing order.
*   **gate\_time** (`float`) – time of running a single identity gate.
*   **qubits** (`List`\[`int`]) – indices of the qubits whose T1‘s are to be measured.

**Return type**

`Tuple`\[`List`\[`QuantumCircuit`], `array`]

**Returns**

*   Generated circuits
*   Delay times, i.e., gate\_time multiplied by the numbers in num\_of\_gates
