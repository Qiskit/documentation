---
title: MolecularExcitedStatesResult
description: API reference for qiskit.chemistry.core.MolecularExcitedStatesResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.MolecularExcitedStatesResult
---

# MolecularExcitedStatesResult

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult" />

`MolecularExcitedStatesResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/chemistry/core/chemistry_operator.py "view source code")

Molecular Excited States Result

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

## Attributes

### algorithm\_result

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.algorithm_result" />

`qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Returns raw algorithm result

**Return type**

`AlgorithmResult`

### energies

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.energies" />

`Tuple`

Returns ground state energy

**Return type**

`Tuple`

### hartree\_fock\_energy

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.hartree_fock_energy" />

`float`

Returns Hartree-Fock energy

**Return type**

`float`

### nuclear\_dipole\_moment

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_dipole_moment" />

`Optional[Tuple[Optional[float], Optional[float], Optional[float]]]`

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### nuclear\_repulsion\_energy

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_repulsion_energy" />

`Optional[float]`

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

## Methods

### \_\_getitem\_\_

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.__getitem__" />

`MolecularExcitedStatesResult.__getitem__(key)`

### \_\_len\_\_

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.__len__" />

`MolecularExcitedStatesResult.__len__()`

### clear

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.clear" />

`MolecularExcitedStatesResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.combine" />

`MolecularExcitedStatesResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.copy" />

`MolecularExcitedStatesResult.copy()`

### fromkeys

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.fromkeys" />

`classmethod MolecularExcitedStatesResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.get" />

`MolecularExcitedStatesResult.get(k[, d]) → D[k] if k in D, else d.  d defaults to None.`

### items

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.items" />

`MolecularExcitedStatesResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.keys" />

`MolecularExcitedStatesResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.pop" />

`MolecularExcitedStatesResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.popitem" />

`MolecularExcitedStatesResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.setdefault" />

`MolecularExcitedStatesResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.update" />

`MolecularExcitedStatesResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.chemistry.core.MolecularExcitedStatesResult.values" />

`MolecularExcitedStatesResult.values() → an object providing a view on D’s values`

