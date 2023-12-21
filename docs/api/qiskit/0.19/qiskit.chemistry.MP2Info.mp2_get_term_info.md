---
title: mp2_get_term_info
description: API reference for qiskit.chemistry.MP2Info.mp2_get_term_info
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.MP2Info.mp2_get_term_info
---

# mp2\_get\_term\_info

<span id="qiskit.chemistry.MP2Info.mp2_get_term_info" />

`MP2Info.mp2_get_term_info(excitation_list, freeze_core=False, orbital_reduction=None)`

With a reduced active space the set of used excitations can be less than allowing all available excitations. Given a (sub)set of excitations in the space this will return a list of correlation coefficients and a list of correlation energies ordered as per the excitation list provided.

**Parameters**

*   **excitation\_list** (*list*) – A list of excitations for which to get the coeff and e\_delta
*   **freeze\_core** (*bool*) – Whether core orbitals are frozen or not
*   **orbital\_reduction** (*list*) – An optional list of ints indicating removed orbitals

**Returns**

List of coefficients and list of energy deltas

**Return type**

Tuple(list, list)

**Raises**

**ValueError** – Excitation not present in mp2 terms

