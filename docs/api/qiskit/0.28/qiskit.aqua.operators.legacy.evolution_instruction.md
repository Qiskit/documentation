# qiskit.aqua.operators.legacy.evolution\_instruction

<span id="undefined" />

`evolution_instruction(pauli_list, evo_time, num_time_slices, controlled=False, power=1, use_basis_gates=True, shallow_slicing=False, barrier=False)`

Construct the evolution circuit according to the supplied specification.

**Parameters**

*   **pauli\_list** (*list(\[\[complex,* [*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*]])*) – The list of pauli terms corresponding to a single time slice to be evolved
*   **evo\_time** (*Union(complex, float,* [*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*,* [*ParameterExpression*](qiskit.circuit.ParameterExpression#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*)*) – The evolution time
*   **num\_time\_slices** (*int*) – The number of time slices for the expansion
*   **controlled** (*bool, optional*) – Controlled circuit or not
*   **power** (*int, optional*) – The power to which the unitary operator is to be raised
*   **use\_basis\_gates** (*bool, optional*) – boolean flag for indicating only using basis gates when building circuit.
*   **shallow\_slicing** (*bool, optional*) – boolean flag for indicating using shallow qc.data reference repetition for slicing
*   **barrier** (*bool, optional*) – whether or not add barrier for every slice

**Returns**

The Instruction corresponding to specified evolution.

**Return type**

[Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – power must be an integer and greater or equal to 1
*   **ValueError** – Unrecognized pauli
