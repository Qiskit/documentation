# qiskit.chemistry.core.Hamiltonian.process\_algorithm\_result

`Hamiltonian.process_algorithm_result(algo_result)`

Takes the algorithm result and processes it as required, e.g. by combination of any parts that were classically computed, for the final result.

**Parameters**

**algo\_result** (`Union`\[`dict`, `MinimumEigensolverResult`, `EigensolverResult`]) – Result from algorithm

**Return type**

`Union`\[`Tuple`\[`List`\[`str`], `dict`], `MolecularGroundStateResult`, `MolecularExcitedStatesResult`]

**Returns**

Final chemistry result computed from the algorithm result
