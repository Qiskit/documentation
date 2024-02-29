---
title: MolecularGroundStateResult
description: API reference for qiskit.chemistry.core.MolecularGroundStateResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.MolecularGroundStateResult
---

# MolecularGroundStateResult

<span id="qiskit.chemistry.core.MolecularGroundStateResult" />

`MolecularGroundStateResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/core/chemistry_operator.py "view source code")

Bases: `qiskit.chemistry.core.chemistry_operator.MolecularChemistryResult`

Molecular Ground State Energy Result.

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

## Methods

### clear

<span id="qiskit.chemistry.core.MolecularGroundStateResult.clear" />

`MolecularGroundStateResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.chemistry.core.MolecularGroundStateResult.combine" />

`MolecularGroundStateResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.chemistry.core.MolecularGroundStateResult.copy" />

`MolecularGroundStateResult.copy()`

### fromkeys

<span id="qiskit.chemistry.core.MolecularGroundStateResult.fromkeys" />

`classmethod MolecularGroundStateResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.chemistry.core.MolecularGroundStateResult.get" />

`MolecularGroundStateResult.get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### has\_dipole

<span id="qiskit.chemistry.core.MolecularGroundStateResult.has_dipole" />

`MolecularGroundStateResult.has_dipole()`

Returns whether dipole moment is present in result or not

**Return type**

`bool`

### has\_observables

<span id="qiskit.chemistry.core.MolecularGroundStateResult.has_observables" />

`MolecularGroundStateResult.has_observables()`

Returns whether result has aux op observables such as spin, num particles

### items

<span id="qiskit.chemistry.core.MolecularGroundStateResult.items" />

`MolecularGroundStateResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.chemistry.core.MolecularGroundStateResult.keys" />

`MolecularGroundStateResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.chemistry.core.MolecularGroundStateResult.pop" />

`MolecularGroundStateResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.chemistry.core.MolecularGroundStateResult.popitem" />

`MolecularGroundStateResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.chemistry.core.MolecularGroundStateResult.setdefault" />

`MolecularGroundStateResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.chemistry.core.MolecularGroundStateResult.update" />

`MolecularGroundStateResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.chemistry.core.MolecularGroundStateResult.values" />

`MolecularGroundStateResult.values() → an object providing a view on D’s values`

## Attributes

<span id="qiskit.chemistry.core.MolecularGroundStateResult.algorithm_result" />

### algorithm\_result

Returns raw algorithm result

**Return type**

`AlgorithmResult`

<span id="qiskit.chemistry.core.MolecularGroundStateResult.computed_dipole_moment" />

### computed\_dipole\_moment

Returns computed electronic part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.computed_electronic_energy" />

### computed\_electronic\_energy

Returns computed electronic part of ground state energy

**Return type**

`float`

<span id="qiskit.chemistry.core.MolecularGroundStateResult.dipole_moment" />

### dipole\_moment

Returns dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.dipole_moment_in_debye" />

### dipole\_moment\_in\_debye

Returns dipole moment in Debye

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.electronic_dipole_moment" />

### electronic\_dipole\_moment

Returns electronic dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.electronic_energy" />

### electronic\_energy

Returns electronic part of ground state energy

**Return type**

`float`

<span id="qiskit.chemistry.core.MolecularGroundStateResult.energy" />

### energy

Returns ground state energy if nuclear\_repulsion\_energy is available from driver

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.formatted" />

### formatted

Formatted result as a list of strings

**Return type**

`List`\[`str`]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.frozen_extracted_dipole_moment" />

### frozen\_extracted\_dipole\_moment

Returns frozen extracted part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.frozen_extracted_energy" />

### frozen\_extracted\_energy

Returns frozen extracted part of ground state energy

**Return type**

`float`

<span id="qiskit.chemistry.core.MolecularGroundStateResult.hartree_fock_energy" />

### hartree\_fock\_energy

Returns Hartree-Fock energy

**Return type**

`float`

<span id="qiskit.chemistry.core.MolecularGroundStateResult.magnetization" />

### magnetization

Returns measured magnetization

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.nuclear_dipole_moment" />

### nuclear\_dipole\_moment

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.nuclear_repulsion_energy" />

### nuclear\_repulsion\_energy

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.num_particles" />

### num\_particles

Returns measured number of particles

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.ph_extracted_dipole_moment" />

### ph\_extracted\_dipole\_moment

Returns particle hole extracted part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.ph_extracted_energy" />

### ph\_extracted\_energy

Returns particle hole extracted part of ground state energy

**Return type**

`float`

<span id="qiskit.chemistry.core.MolecularGroundStateResult.reverse_dipole_sign" />

### reverse\_dipole\_sign

Returns if electronic dipole moment sign should be reversed when adding to nuclear

**Return type**

`bool`

<span id="qiskit.chemistry.core.MolecularGroundStateResult.spin" />

### spin

Returns computed spin

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.total_angular_momentum" />

### total\_angular\_momentum

Returns total angular momentum (S^2)

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.total_dipole_moment" />

### total\_dipole\_moment

Returns total dipole of moment

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.core.MolecularGroundStateResult.total_dipole_moment_in_debye" />

### total\_dipole\_moment\_in\_debye

Returns total dipole of moment in Debye

**Return type**

`Optional`\[`float`]

