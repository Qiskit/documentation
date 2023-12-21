---
title: manage_hopping_operators
description: API reference for qiskit.chemistry.components.variational_forms.UCCSD.manage_hopping_operators
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.components.variational_forms.UCCSD.manage_hopping_operators
---

# manage\_hopping\_operators

<span id="qiskit.chemistry.components.variational_forms.UCCSD.manage_hopping_operators" />

`UCCSD.manage_hopping_operators()`

Triggers the adaptive behavior of this UCCSD instance. This function is used by the Adaptive VQE algorithm. It stores the full list of available hopping operators in a so called “excitation pool” and clears the previous list to be empty. Furthermore, the depth is asserted to be 1 which is required by the Adaptive VQE algorithm.

