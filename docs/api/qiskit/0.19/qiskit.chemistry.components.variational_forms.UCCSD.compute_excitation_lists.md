---
title: compute_excitation_lists
description: API reference for qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists
---

# compute\_excitation\_lists

<span id="qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists" />

`static UCCSD.compute_excitation_lists(num_particles, num_orbitals, active_occ_list=None, active_unocc_list=None, same_spin_doubles=True, method_singles='both', method_doubles='ucc', excitation_type='sd')`

Computes single and double excitation lists.

**Parameters**

*   **num\_particles** (*Union(list, int)*) – number of particles, if it is a tuple, the first number is alpha and the second number if beta.
*   **num\_orbitals** (*int*) – Total number of spin orbitals
*   **active\_occ\_list** (*list*) – List of occupied orbitals to include, indices are 0 to n where n is max(num\_alpha, num\_beta)
*   **active\_unocc\_list** (*list*) – List of unoccupied orbitals to include, indices are 0 to m where m is num\_orbitals // 2 - min(num\_alpha, num\_beta)
*   **same\_spin\_doubles** (*bool*) – True to include alpha,alpha and beta,beta double excitations as well as alpha,beta pairings. False includes only alpha,beta
*   **excitation\_type** (*str*) – choose ‘sd’, ‘s’, ‘d’ to compute q-UCCSD, q-UCCS, q-UCCD excitation lists
*   **method\_singles** (*str*) – specify type of single excitations, ‘alpha’, ‘beta’, ‘both’ only alpha or beta spin-orbital single excitations or both (all single excitations)
*   **method\_doubles** (*str*) – choose method for double excitations ‘ucc’ (conventional ucc), ‘succ’ (singlet ucc), ‘succ\_full’ (singlet ucc full), ‘pucc’ (pair ucc)

**Returns**

Single excitation list list: Double excitation list

**Return type**

list

**Raises**

*   **ValueError** – invalid setting of number of particles
*   **ValueError** – invalid setting of number of orbitals

