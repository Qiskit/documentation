---
title: get_ghz_mqc_para
description: API reference for qiskit.ignis.verification.get_ghz_mqc_para
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.ignis.verification.get_ghz_mqc_para
---

# qiskit.ignis.verification.get\_ghz\_mqc\_para

<span id="qiskit.ignis.verification.get_ghz_mqc_para" />

`get_ghz_mqc_para(n, full_measurement=True)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.6/qiskit/ignis/verification/entanglement/linear.py "view source code")

This function creates an MQC circuit with n qubits, where the middle phase rotation around the z axis is parameterized

**Parameters**

*   **n** (`int`) – number of qubits
*   **full\_measurement** (`bool`) – Whether to append full measurement, or only on the first qubit.

**Return type**

`Tuple`\[`QuantumCircuit`, `Parameter`]

**Returns**

An mqc circuit and its Delta parameter

