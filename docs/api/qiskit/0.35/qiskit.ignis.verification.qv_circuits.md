# qiskit.ignis.verification.qv\_circuits[¶](#qiskit-ignis-verification-qv-circuits "Permalink to this headline")

<span id="undefined" />

`qv_circuits(qubit_lists, ntrials=1, qr=None, cr=None, seed=None)`

Return a list of square quantum volume circuits (depth=width)

The qubit\_lists is specified as a list of qubit lists. For each set of qubits, circuits the depth as the number of qubits in the list are generated

**Parameters**

*   **qubit\_lists** (*list*) – list of list of qubits to apply qv circuits to. Assume the list is ordered in increasing number of qubits
*   **ntrials** (*int*) – number of random iterations
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – quantum register to act on (if None one is created)
*   **cr** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")) – classical register to measure to (if None one is created)
*   **seed** (*int*) – An optional RNG seed to use for the generated circuit

**Returns**

**A tuple of the type (`circuits`, `circuits_nomeas`) wheere:**

`circuits` is a list of lists of circuits for the qv sequences (separate list for each trial) and \`\` circuitss\_nomeas\`\` is the same circuits but with no measurements for the ideal simulation

**Return type**

tuple
