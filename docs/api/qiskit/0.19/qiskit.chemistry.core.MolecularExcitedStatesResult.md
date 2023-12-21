---
title: MolecularExcitedStatesResult
description: API reference for qiskit.chemistry.core.MolecularExcitedStatesResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.MolecularExcitedStatesResult
---

# MolecularExcitedStatesResult

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult" />

`MolecularExcitedStatesResult(a_dict=None)`

Molecular Excited States Result

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

## Attributes

|                                                                                                                                                                                                                      |                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`MolecularExcitedStatesResult.algorithm_result`](qiskit.chemistry.core.MolecularExcitedStatesResult.algorithm_result "qiskit.chemistry.core.MolecularExcitedStatesResult.algorithm_result")                         | Returns raw algorithm result                                                     |
| [`MolecularExcitedStatesResult.energies`](qiskit.chemistry.core.MolecularExcitedStatesResult.energies "qiskit.chemistry.core.MolecularExcitedStatesResult.energies")                                                 | Returns ground state energy                                                      |
| [`MolecularExcitedStatesResult.hartree_fock_energy`](qiskit.chemistry.core.MolecularExcitedStatesResult.hartree_fock_energy "qiskit.chemistry.core.MolecularExcitedStatesResult.hartree_fock_energy")                | Returns Hartree-Fock energy                                                      |
| [`MolecularExcitedStatesResult.nuclear_dipole_moment`](qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_dipole_moment "qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_dipole_moment")          | Returns nuclear dipole moment X,Y,Z components in A.U when available from driver |
| [`MolecularExcitedStatesResult.nuclear_repulsion_energy`](qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_repulsion_energy "qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_repulsion_energy") | Returns nuclear repulsion energy when available from driver                      |

## Methods

|                                                                                                                                                                                    |                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`MolecularExcitedStatesResult.__getitem__`](qiskit.chemistry.core.MolecularExcitedStatesResult.__getitem__ "qiskit.chemistry.core.MolecularExcitedStatesResult.__getitem__")(key) |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.__len__`](qiskit.chemistry.core.MolecularExcitedStatesResult.__len__ "qiskit.chemistry.core.MolecularExcitedStatesResult.__len__")()                |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.clear`](qiskit.chemistry.core.MolecularExcitedStatesResult.clear "qiskit.chemistry.core.MolecularExcitedStatesResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.combine`](qiskit.chemistry.core.MolecularExcitedStatesResult.combine "qiskit.chemistry.core.MolecularExcitedStatesResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`MolecularExcitedStatesResult.copy`](qiskit.chemistry.core.MolecularExcitedStatesResult.copy "qiskit.chemistry.core.MolecularExcitedStatesResult.copy")()                         |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.fromkeys`](qiskit.chemistry.core.MolecularExcitedStatesResult.fromkeys "qiskit.chemistry.core.MolecularExcitedStatesResult.fromkeys")(iterable)     |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.get`](qiskit.chemistry.core.MolecularExcitedStatesResult.get "qiskit.chemistry.core.MolecularExcitedStatesResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.items`](qiskit.chemistry.core.MolecularExcitedStatesResult.items "qiskit.chemistry.core.MolecularExcitedStatesResult.items")()                      |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.keys`](qiskit.chemistry.core.MolecularExcitedStatesResult.keys "qiskit.chemistry.core.MolecularExcitedStatesResult.keys")()                         |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.pop`](qiskit.chemistry.core.MolecularExcitedStatesResult.pop "qiskit.chemistry.core.MolecularExcitedStatesResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`MolecularExcitedStatesResult.popitem`](qiskit.chemistry.core.MolecularExcitedStatesResult.popitem "qiskit.chemistry.core.MolecularExcitedStatesResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.setdefault`](qiskit.chemistry.core.MolecularExcitedStatesResult.setdefault "qiskit.chemistry.core.MolecularExcitedStatesResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.update`](qiskit.chemistry.core.MolecularExcitedStatesResult.update "qiskit.chemistry.core.MolecularExcitedStatesResult.update")(\*args, …)          | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`MolecularExcitedStatesResult.values`](qiskit.chemistry.core.MolecularExcitedStatesResult.values "qiskit.chemistry.core.MolecularExcitedStatesResult.values")()                   |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.__len__`](qiskit.chemistry.core.MolecularExcitedStatesResult.__len__ "qiskit.chemistry.core.MolecularExcitedStatesResult.__len__")()                |                                                                                                                                                                                                                      |
| [`MolecularExcitedStatesResult.__getitem__`](qiskit.chemistry.core.MolecularExcitedStatesResult.__getitem__ "qiskit.chemistry.core.MolecularExcitedStatesResult.__getitem__")(key) |                                                                                                                                                                                                                      |

