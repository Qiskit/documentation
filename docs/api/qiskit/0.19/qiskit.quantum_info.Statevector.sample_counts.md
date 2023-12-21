---
title: sample_counts
description: API reference for qiskit.quantum_info.Statevector.sample_counts
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Statevector.sample_counts
---

# sample\_counts

<span id="qiskit.quantum_info.Statevector.sample_counts" />

`Statevector.sample_counts(shots, qargs=None)`

Sample a dict of qubit measurement outcomes in the computational basis.

**Parameters**

*   **shots** (*int*) – number of samples to generate.
*   **qargs** (*None or list*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

sampled counts dictionary.

**Return type**

dict

Additional Information:

> This function *samples* measurement outcomes using the measure [`probabilities()`](qiskit.quantum_info.Statevector.probabilities "qiskit.quantum_info.Statevector.probabilities") for the current state and qargs. It does not actually implement the measurement so the current state is not modified.
>
> The seed for random number generator used for sampling can be set to a fixed value by using the stats [`seed()`](qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed") method.

