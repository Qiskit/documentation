---
title: ElectronicStructureResult
description: API reference for qiskit.chemistry.results.ElectronicStructureResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.results.ElectronicStructureResult
---

# ElectronicStructureResult

<span id="qiskit.chemistry.results.ElectronicStructureResult" />

`ElectronicStructureResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/results/electronic_structure_result.py "view source code")

Bases: `qiskit.chemistry.results.eigenstate_result.EigenstateResult`

The electronic structure result.

## Methods

### clear

<span id="qiskit.chemistry.results.ElectronicStructureResult.clear" />

`ElectronicStructureResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.chemistry.results.ElectronicStructureResult.combine" />

`ElectronicStructureResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.chemistry.results.ElectronicStructureResult.copy" />

`ElectronicStructureResult.copy()`

### fromkeys

<span id="qiskit.chemistry.results.ElectronicStructureResult.fromkeys" />

`classmethod ElectronicStructureResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.chemistry.results.ElectronicStructureResult.get" />

`ElectronicStructureResult.get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### has\_dipole

<span id="qiskit.chemistry.results.ElectronicStructureResult.has_dipole" />

`ElectronicStructureResult.has_dipole()`

Returns whether dipole moment is present in result or not

**Return type**

`bool`

### has\_observables

<span id="qiskit.chemistry.results.ElectronicStructureResult.has_observables" />

`ElectronicStructureResult.has_observables()`

Returns whether result has aux op observables such as spin, num particles

### items

<span id="qiskit.chemistry.results.ElectronicStructureResult.items" />

`ElectronicStructureResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.chemistry.results.ElectronicStructureResult.keys" />

`ElectronicStructureResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.chemistry.results.ElectronicStructureResult.pop" />

`ElectronicStructureResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.chemistry.results.ElectronicStructureResult.popitem" />

`ElectronicStructureResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.chemistry.results.ElectronicStructureResult.setdefault" />

`ElectronicStructureResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.chemistry.results.ElectronicStructureResult.update" />

`ElectronicStructureResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.chemistry.results.ElectronicStructureResult.values" />

`ElectronicStructureResult.values() → an object providing a view on D’s values`

## Attributes

<span id="qiskit.chemistry.results.ElectronicStructureResult.aux_operator_eigenvalues" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`List`\[`float`]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.computed_dipole_moment" />

### computed\_dipole\_moment

Returns computed electronic part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.computed_energies" />

### computed\_energies

Returns computed electronic part of ground state energy

**Return type**

`ndarray`

<span id="qiskit.chemistry.results.ElectronicStructureResult.dipole_moment" />

### dipole\_moment

Returns dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.dipole_moment_in_debye" />

### dipole\_moment\_in\_debye

Returns dipole moment in Debye

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.eigenenergies" />

### eigenenergies

returns eigen energies

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.chemistry.results.ElectronicStructureResult.eigenstates" />

### eigenstates

returns eigen states

**Return type**

`Optional`\[`List`\[`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.electronic_dipole_moment" />

### electronic\_dipole\_moment

Returns electronic dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.electronic_energies" />

### electronic\_energies

Returns electronic part of ground state energy

**Return type**

`ndarray`

<span id="qiskit.chemistry.results.ElectronicStructureResult.formatted" />

### formatted

Formatted result as a list of strings

**Return type**

`List`\[`str`]

<span id="qiskit.chemistry.results.ElectronicStructureResult.frozen_extracted_dipole_moment" />

### frozen\_extracted\_dipole\_moment

Returns frozen extracted part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.frozen_extracted_energy" />

### frozen\_extracted\_energy

Returns frozen extracted part of ground state energy

**Return type**

`float`

<span id="qiskit.chemistry.results.ElectronicStructureResult.groundenergy" />

### groundenergy

returns ground energy

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.results.ElectronicStructureResult.groundstate" />

### groundstate

returns ground state

**Return type**

`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`, `None`]

<span id="qiskit.chemistry.results.ElectronicStructureResult.hartree_fock_energy" />

### hartree\_fock\_energy

Returns Hartree-Fock energy

**Return type**

`float`

<span id="qiskit.chemistry.results.ElectronicStructureResult.magnetization" />

### magnetization

Returns measured magnetization

**Return type**

`Optional`\[`List`\[`float`]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.nuclear_dipole_moment" />

### nuclear\_dipole\_moment

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.nuclear_repulsion_energy" />

### nuclear\_repulsion\_energy

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

<span id="qiskit.chemistry.results.ElectronicStructureResult.num_particles" />

### num\_particles

Returns measured number of particles

**Return type**

`Optional`\[`List`\[`float`]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.ph_extracted_dipole_moment" />

### ph\_extracted\_dipole\_moment

Returns particle hole extracted part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.ph_extracted_energy" />

### ph\_extracted\_energy

Returns particle hole extracted part of ground state energy

**Return type**

`float`

<span id="qiskit.chemistry.results.ElectronicStructureResult.raw_result" />

### raw\_result

Returns the raw algorithm result.

**Return type**

`Optional`\[`AlgorithmResult`]

<span id="qiskit.chemistry.results.ElectronicStructureResult.reverse_dipole_sign" />

### reverse\_dipole\_sign

Returns if electronic dipole moment sign should be reversed when adding to nuclear

**Return type**

`bool`

<span id="qiskit.chemistry.results.ElectronicStructureResult.spin" />

### spin

Returns computed spin

**Return type**

`Optional`\[`List`\[`float`]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.total_angular_momentum" />

### total\_angular\_momentum

Returns total angular momentum (S^2)

**Return type**

`Optional`\[`List`\[`float`]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.total_dipole_moment" />

### total\_dipole\_moment

Returns total dipole of moment

**Return type**

`Optional`\[`List`\[`float`]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.total_dipole_moment_in_debye" />

### total\_dipole\_moment\_in\_debye

Returns total dipole of moment in Debye

**Return type**

`Optional`\[`List`\[`float`]]

<span id="qiskit.chemistry.results.ElectronicStructureResult.total_energies" />

### total\_energies

Returns ground state energy if nuclear\_repulsion\_energy is available from driver

**Return type**

`ndarray`

