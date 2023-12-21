---
title: pickle_clifford_table
description: API reference for qiskit.ignis.verification.CliffordUtils.pickle_clifford_table
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.pickle_clifford_table
---

# pickle\_clifford\_table

<span id="qiskit.ignis.verification.CliffordUtils.pickle_clifford_table" />

`CliffordUtils.pickle_clifford_table(picklefile='cliffords2.pickle', num_qubits=2)`

Create pickled versions of the 1 or 2 qubit Clifford group tables.

**Parameters**

*   **picklefile** (*str*) – pickle file name.
*   **num\_qubits** (*int*) – number of qubits of the Clifford object.

**Raises**

**ValueError** – number of qubits bigger than 2 is not supported.

