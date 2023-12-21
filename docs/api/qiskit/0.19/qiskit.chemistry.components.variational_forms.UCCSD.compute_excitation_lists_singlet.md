---
title: compute_excitation_lists_singlet
description: API reference for qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists_singlet
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists_singlet
---

# compute\_excitation\_lists\_singlet

<span id="qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists_singlet" />

`static UCCSD.compute_excitation_lists_singlet(double_exc, num_orbitals)`

Outputs the list of lists of grouped excitation. A single list inside is controlled by the same parameter theta.

**Parameters**

*   **double\_exc** (*list*) – exc.group. \[\[0,1,2,3], \[…]]
*   **num\_orbitals** (*int*) – number of molecular orbitals

**Returns**

de\_groups grouped excitations

**Return type**

list

