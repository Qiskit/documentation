---
title: commutes
description: API reference for qiskit.quantum_info.StabilizerTable.commutes
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.StabilizerTable.commutes
---

# commutes

<span id="qiskit.quantum_info.StabilizerTable.commutes" />

`StabilizerTable.commutes(pauli)`

Return list of commutation properties for each row with a Pauli.

The returned vector is the same length as the size of the table and contains True for rows that commute with the Pauli, and False for the rows that anti-commute.

**Parameters**

**pauli** ([*PauliTable*](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – a single Pauli row.

**Returns**

The boolean vector of which rows commute or anti-commute.

**Return type**

array

**Raises**

**QiskitError** – if input is not a single Pauli row.

