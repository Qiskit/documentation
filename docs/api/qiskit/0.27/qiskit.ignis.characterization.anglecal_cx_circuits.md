# qiskit.ignis.characterization.anglecal\_cx\_circuits[¶](#qiskit-ignis-characterization-anglecal-cx-circuits "Permalink to this headline")

<span id="undefined" />

`anglecal_cx_circuits(max_reps, qubits, control_qubits, angleerr=0.0)`

Generates circuit for measuring the angle error of the cx gate

The cx gate is repeatedly applied and we look at the population of the target qubit in the xy axis (amplitude erorr amplification sequence)

X(control)-Y90(target)-(CX - Yp(target))^n - X90(target)

Note: the circuit may not behave as intended if the target-control pairs are not in the coupling map

**Parameters**

*   **max\_reps** (*int*) – the maximum number of repetitions. Circuits will increment by 1 rep up to max\_rep
*   **qubits** (*list*) – a list of integers indices of the qubits to perform the calibration on
*   **control\_qubits** (*list*) – a list of integer indices of the control qubits to perform the calibration on
*   **angleerr** (*float*) – put in an artificial angle error (for testing)

**Returns**

**A tuple of the form (`circuits`, `xdata`) where**

`circuits` is a list of QuantumCircuit and `xdata` is a list of gate repetitions (number of u2 gates)

**Return type**

tuple
