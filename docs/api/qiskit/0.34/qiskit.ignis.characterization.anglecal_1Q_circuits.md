# qiskit.ignis.characterization.anglecal\_1Q\_circuits[¶](#qiskit-ignis-characterization-anglecal-1q-circuits "Permalink to this headline")

<span id="undefined" />

`anglecal_1Q_circuits(max_reps, qubits, angleerr=0.0)`

Generates circuit for measuring the angle error of the single qubit gate

Y90-(X90-X90-Y90-Y90)^n - X90

**Parameters**

*   **max\_reps** (*int*) – the maximum number of repetitions. Circuits will increment by 1 rep up to max\_rep
*   **qubits** (*list*) – a list of integers indices of the qubits to perform the calibration on
*   **angleerr** (*float*) – put in an artificial angle error (for testing)

**Returns**

**A tuple of the form (`circuits`, `xdata`) where**

`circuits` is a list of QuantumCircuit and `xdata` is a list of gate repetitions (number of u2 gates)

**Return type**

tuple
