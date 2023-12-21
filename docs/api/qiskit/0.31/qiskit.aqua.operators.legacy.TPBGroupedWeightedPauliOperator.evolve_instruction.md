# qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator.evolve\_instruction

`TPBGroupedWeightedPauliOperator.evolve_instruction(evo_time=0, num_time_slices=1, expansion_mode='trotter', expansion_order=1)`

Carry out the eoh evolution for the operator under supplied specifications.

**Parameters**

*   **evo\_time** (*Union(complex, float,* [*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*,* [*ParameterExpression*](qiskit.circuit.ParameterExpression#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*)*) – The evolution time
*   **num\_time\_slices** (*int*) – The number of time slices for the expansion
*   **expansion\_mode** (*str*) – The mode under which the expansion is to be done. Currently support ‘trotter’, which follows the expansion as discussed in [http://science.sciencemag.org/content/273/5278/1073](http://science.sciencemag.org/content/273/5278/1073), and ‘suzuki’, which corresponds to the discussion in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf)
*   **expansion\_order** (*int*) – The order for suzuki expansion

**Returns**

The constructed QuantumCircuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **ValueError** – Number of time slices should be a non-negative integer
*   **NotImplementedError** – expansion mode not supported
*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if operator is empty
