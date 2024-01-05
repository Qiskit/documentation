---
title: MolecularChemistryResult
description: API reference for qiskit.chemistry.core.MolecularChemistryResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.MolecularChemistryResult
---

# qiskit.chemistry.core.MolecularChemistryResult

<span id="qiskit.chemistry.core.MolecularChemistryResult" />

`MolecularChemistryResult(a_dict=None)`

Molecular chemistry Result

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

### \_\_init\_\_

<span id="qiskit.chemistry.core.MolecularChemistryResult.__init__" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### algorithm\_result

<span id="qiskit.chemistry.core.MolecularChemistryResult.algorithm_result" />

`property algorithm_result`

Returns raw algorithm result

**Return type**

`AlgorithmResult`

### clear

<span id="qiskit.chemistry.core.MolecularChemistryResult.clear" />

`clear()`

**Return type**

`None`

### combine

<span id="qiskit.chemistry.core.MolecularChemistryResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### get

<span id="qiskit.chemistry.core.MolecularChemistryResult.get" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### hartree\_fock\_energy

<span id="qiskit.chemistry.core.MolecularChemistryResult.hartree_fock_energy" />

`property hartree_fock_energy`

Returns Hartree-Fock energy

**Return type**

`float`

### items

<span id="qiskit.chemistry.core.MolecularChemistryResult.items" />

`items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.chemistry.core.MolecularChemistryResult.keys" />

`keys() → a set-like object providing a view on D’s keys`

### nuclear\_dipole\_moment

<span id="qiskit.chemistry.core.MolecularChemistryResult.nuclear_dipole_moment" />

`property nuclear_dipole_moment`

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### nuclear\_repulsion\_energy

<span id="qiskit.chemistry.core.MolecularChemistryResult.nuclear_repulsion_energy" />

`property nuclear_repulsion_energy`

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

### pop

<span id="qiskit.chemistry.core.MolecularChemistryResult.pop" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.chemistry.core.MolecularChemistryResult.popitem" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.chemistry.core.MolecularChemistryResult.setdefault" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.chemistry.core.MolecularChemistryResult.update" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.chemistry.core.MolecularChemistryResult.values" />

`values() → an object providing a view on D’s values`

