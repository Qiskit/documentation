---
title: process_algorithm_result
description: API reference for qiskit.chemistry.core.Hamiltonian.process_algorithm_result
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.core.Hamiltonian.process_algorithm_result
---

# process\_algorithm\_result

<span id="qiskit.chemistry.core.Hamiltonian.process_algorithm_result" />

`Hamiltonian.process_algorithm_result(algo_result)`

Takes the algorithm result and processes it as required, e.g. by combination of any parts that were classically computed, for the final result.

**Parameters**

**algo\_result** (`Union`\[`dict`, [`MinimumEigensolverResult`](qiskit.aqua.algorithms.MinimumEigensolverResult "qiskit.aqua.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolverResult"), `EigensolverResult`]) – Result from algorithm

**Return type**

`Union`\[`Tuple`\[`List`\[`str`], `dict`], [`MolecularGroundStateResult`](qiskit.chemistry.core.MolecularGroundStateResult "qiskit.chemistry.core.chemistry_operator.MolecularGroundStateResult"), [`MolecularExcitedStatesResult`](qiskit.chemistry.core.MolecularExcitedStatesResult "qiskit.chemistry.core.chemistry_operator.MolecularExcitedStatesResult")]

**Returns**

Final chemistry result computed from the algorithm result

