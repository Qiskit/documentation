# qiskit.aqua.operators.legacy.MatrixOperator.evolve

`MatrixOperator.evolve(state_in, evo_time=0, num_time_slices=0, expansion_mode='trotter', expansion_order=1)`

Carry out the eoh evolution for the operator under supplied specifications.

**Parameters**

*   **state\_in** (*Union(list,numpy.array)*) – A vector representing the initial state for the evolution
*   **evo\_time** (*Union(complex, float)*) – The evolution time
*   **num\_time\_slices** (*int*) – The number of time slices for the expansion
*   **expansion\_mode** (*str*) – The mode under which the expansion is to be done. Currently support ‘trotter’, which follows the expansion as discussed in [http://science.sciencemag.org/content/273/5278/1073](http://science.sciencemag.org/content/273/5278/1073), and ‘suzuki’, which corresponds to the discussion in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf)
*   **expansion\_order** (*int*) – The order for suzuki expansion

**Returns**

Return the matrix vector multiplication result.

**Return type**

numpy.array

**Raises**

*   **ValueError** – Invalid arguments
*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if Operator is empty
