# qiskit.ignis.characterization.ampcal\_1Q\_circuits[¶](#qiskit-ignis-characterization-ampcal-1q-circuits "Permalink to this headline")

<span id="undefined" />

`ampcal_1Q_circuits(max_reps, qubits)`

Generates circuit for measuring the amplitude error of the single qubit gates

The U2 gate is repeatedly applied (in groups of 2) and we look at the population of the qubit in the xy axis (amplitude erorr amplification sequence)

Y90-(Y90-Y90)^n

**Parameters**

*   **max\_reps** (*int*) – the maximum number of repetitions. Circuits will increment by 1 rep up to max\_rep
*   **qubits** (*list*) – a list of integers indices of the qubits to perform the calibration on

**Returns**

**A tuple of the form (`circuits`, `xdata`) where**

`circuits` is a list of QuantumCircuit and `xdata` is a list of gate repetitions (number of u2 gates)

**Return type**

tuple
