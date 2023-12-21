---
title: fermion_mode_freezing
description: API reference for qiskit.chemistry.FermionicOperator.fermion_mode_freezing
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.FermionicOperator.fermion_mode_freezing
---

# fermion\_mode\_freezing

<span id="qiskit.chemistry.FermionicOperator.fermion_mode_freezing" />

`FermionicOperator.fermion_mode_freezing(fermion_mode_array)`

Freezing modes and extracting its energy.

Generate a fermionic operator with the modes in fermion\_mode\_array deleted and provide the shifted energy after freezing.

**Parameters**

**fermion\_mode\_array** (*list*) – orbital index for freezing

**Returns**

Fermionic Hamiltonian and energy of frozen modes

**Return type**

tuple([FermionicOperator](qiskit.chemistry.FermionicOperator "qiskit.chemistry.FermionicOperator"), float)

