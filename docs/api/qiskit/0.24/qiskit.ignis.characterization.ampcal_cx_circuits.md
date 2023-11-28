<span id="qiskit-ignis-characterization-ampcal-cx-circuits" />

# qiskit.ignis.characterization.ampcal\_cx\_circuits

<span id="undefined" />

`ampcal_cx_circuits(max_reps, qubits, control_qubits)`

Generates circuit for measuring the amplitude error of the cx gate

The cx gate is repeatedly applied and we look at the population of the target qubit in the xy axis (amplitude erorr amplification sequence)

X(control)-X90(target)-(CX)^n

Note: the circuit may not behave as intended if the target-control pairs are not in the coupling map

**Parameters**

*   **max\_reps** (*int*) – the maximum number of repetitions. Circuits will increment by 1 rep up to max\_rep
*   **qubits** (*list*) – a list of integer indices of the qubits to perform the calibration on
*   **control\_qubits** (*list*) – a list of integer indices of the control qubits to perform the calibration on

**Returns**

**A tuple of the form (`circuits`, `xdata`) where**

`circuits` is a list of QuantumCircuit and `xdata` is a list of gate repetitions (number of u2 gates)

**Return type**

tuple
