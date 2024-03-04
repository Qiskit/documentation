---
title: MolecularChemistryResult
description: API reference for qiskit.chemistry.core.MolecularChemistryResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.MolecularChemistryResult
---

# MolecularChemistryResult

<span id="qiskit.chemistry.core.MolecularChemistryResult" />

`MolecularChemistryResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/chemistry/core/chemistry_operator.py "view source code")

Molecular chemistry Result

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

## Attributes

### algorithm\_result

<span id="qiskit.chemistry.core.MolecularChemistryResult.algorithm_result" />

`qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Returns raw algorithm result

**Return type**

`AlgorithmResult`

### hartree\_fock\_energy

<span id="qiskit.chemistry.core.MolecularChemistryResult.hartree_fock_energy" />

`float`

Returns Hartree-Fock energy

**Return type**

`float`

### nuclear\_dipole\_moment

<span id="qiskit.chemistry.core.MolecularChemistryResult.nuclear_dipole_moment" />

`Optional[Tuple[Optional[float], Optional[float], Optional[float]]]`

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### nuclear\_repulsion\_energy

<span id="qiskit.chemistry.core.MolecularChemistryResult.nuclear_repulsion_energy" />

`Optional[float]`

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

## Methods

### \_\_getitem\_\_

<span id="qiskit.chemistry.core.MolecularChemistryResult.__getitem__" />

`MolecularChemistryResult.__getitem__(key)`

### \_\_len\_\_

<span id="qiskit.chemistry.core.MolecularChemistryResult.__len__" />

`MolecularChemistryResult.__len__()`

### clear

<span id="qiskit.chemistry.core.MolecularChemistryResult.clear" />

`MolecularChemistryResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.chemistry.core.MolecularChemistryResult.combine" />

`MolecularChemistryResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.chemistry.core.MolecularChemistryResult.copy" />

`MolecularChemistryResult.copy()`

### fromkeys

<span id="qiskit.chemistry.core.MolecularChemistryResult.fromkeys" />

`classmethod MolecularChemistryResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.chemistry.core.MolecularChemistryResult.get" />

`MolecularChemistryResult.get(k[, d]) → D[k] if k in D, else d.  d defaults to None.`

### items

<span id="qiskit.chemistry.core.MolecularChemistryResult.items" />

`MolecularChemistryResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.chemistry.core.MolecularChemistryResult.keys" />

`MolecularChemistryResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.chemistry.core.MolecularChemistryResult.pop" />

`MolecularChemistryResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.chemistry.core.MolecularChemistryResult.popitem" />

`MolecularChemistryResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.chemistry.core.MolecularChemistryResult.setdefault" />

`MolecularChemistryResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.chemistry.core.MolecularChemistryResult.update" />

`MolecularChemistryResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.chemistry.core.MolecularChemistryResult.values" />

`MolecularChemistryResult.values() → an object providing a view on D’s values`

