---
title: MolecularChemistryResult
description: API reference for qiskit.chemistry.core.MolecularChemistryResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.MolecularChemistryResult
---

# MolecularChemistryResult

<span id="qiskit.chemistry.core.MolecularChemistryResult" />

`MolecularChemistryResult(a_dict=None)`

Molecular chemistry Result

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

## Attributes

|                                                                                                                                                                                                          |                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`MolecularChemistryResult.algorithm_result`](qiskit.chemistry.core.MolecularChemistryResult.algorithm_result "qiskit.chemistry.core.MolecularChemistryResult.algorithm_result")                         | Returns raw algorithm result                                                     |
| [`MolecularChemistryResult.hartree_fock_energy`](qiskit.chemistry.core.MolecularChemistryResult.hartree_fock_energy "qiskit.chemistry.core.MolecularChemistryResult.hartree_fock_energy")                | Returns Hartree-Fock energy                                                      |
| [`MolecularChemistryResult.nuclear_dipole_moment`](qiskit.chemistry.core.MolecularChemistryResult.nuclear_dipole_moment "qiskit.chemistry.core.MolecularChemistryResult.nuclear_dipole_moment")          | Returns nuclear dipole moment X,Y,Z components in A.U when available from driver |
| [`MolecularChemistryResult.nuclear_repulsion_energy`](qiskit.chemistry.core.MolecularChemistryResult.nuclear_repulsion_energy "qiskit.chemistry.core.MolecularChemistryResult.nuclear_repulsion_energy") | Returns nuclear repulsion energy when available from driver                      |

## Methods

|                                                                                                                                                                        |                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`MolecularChemistryResult.__getitem__`](qiskit.chemistry.core.MolecularChemistryResult.__getitem__ "qiskit.chemistry.core.MolecularChemistryResult.__getitem__")(key) |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.__len__`](qiskit.chemistry.core.MolecularChemistryResult.__len__ "qiskit.chemistry.core.MolecularChemistryResult.__len__")()                |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.clear`](qiskit.chemistry.core.MolecularChemistryResult.clear "qiskit.chemistry.core.MolecularChemistryResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`MolecularChemistryResult.combine`](qiskit.chemistry.core.MolecularChemistryResult.combine "qiskit.chemistry.core.MolecularChemistryResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`MolecularChemistryResult.copy`](qiskit.chemistry.core.MolecularChemistryResult.copy "qiskit.chemistry.core.MolecularChemistryResult.copy")()                         |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.fromkeys`](qiskit.chemistry.core.MolecularChemistryResult.fromkeys "qiskit.chemistry.core.MolecularChemistryResult.fromkeys")(iterable)     |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.get`](qiskit.chemistry.core.MolecularChemistryResult.get "qiskit.chemistry.core.MolecularChemistryResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.items`](qiskit.chemistry.core.MolecularChemistryResult.items "qiskit.chemistry.core.MolecularChemistryResult.items")()                      |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.keys`](qiskit.chemistry.core.MolecularChemistryResult.keys "qiskit.chemistry.core.MolecularChemistryResult.keys")()                         |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.pop`](qiskit.chemistry.core.MolecularChemistryResult.pop "qiskit.chemistry.core.MolecularChemistryResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`MolecularChemistryResult.popitem`](qiskit.chemistry.core.MolecularChemistryResult.popitem "qiskit.chemistry.core.MolecularChemistryResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`MolecularChemistryResult.setdefault`](qiskit.chemistry.core.MolecularChemistryResult.setdefault "qiskit.chemistry.core.MolecularChemistryResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.update`](qiskit.chemistry.core.MolecularChemistryResult.update "qiskit.chemistry.core.MolecularChemistryResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`MolecularChemistryResult.values`](qiskit.chemistry.core.MolecularChemistryResult.values "qiskit.chemistry.core.MolecularChemistryResult.values")()                   |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.__len__`](qiskit.chemistry.core.MolecularChemistryResult.__len__ "qiskit.chemistry.core.MolecularChemistryResult.__len__")()                |                                                                                                                                                                                                                      |
| [`MolecularChemistryResult.__getitem__`](qiskit.chemistry.core.MolecularChemistryResult.__getitem__ "qiskit.chemistry.core.MolecularChemistryResult.__getitem__")(key) |                                                                                                                                                                                                                      |

