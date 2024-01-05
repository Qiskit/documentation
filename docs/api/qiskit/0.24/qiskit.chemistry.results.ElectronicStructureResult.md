---
title: ElectronicStructureResult
description: API reference for qiskit.chemistry.results.ElectronicStructureResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.results.ElectronicStructureResult
---

<span id="qiskit-chemistry-results-electronicstructureresult" />

# qiskit.chemistry.results.ElectronicStructureResult

<span id="qiskit.chemistry.results.ElectronicStructureResult" />

`ElectronicStructureResult(a_dict=None)`

The electronic structure result.

### \_\_init\_\_

<span id="qiskit.chemistry.results.ElectronicStructureResult.__init__" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### aux\_operator\_eigenvalues

<span id="qiskit.chemistry.results.ElectronicStructureResult.aux_operator_eigenvalues" />

`property aux_operator_eigenvalues`

return aux operator eigen values

**Return type**

`Optional`\[`List`\[`float`]]

### clear

<span id="qiskit.chemistry.results.ElectronicStructureResult.clear" />

`clear()`

**Return type**

`None`

### combine

<span id="qiskit.chemistry.results.ElectronicStructureResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### computed\_dipole\_moment

<span id="qiskit.chemistry.results.ElectronicStructureResult.computed_dipole_moment" />

`property computed_dipole_moment`

Returns computed electronic part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

### computed\_energies

<span id="qiskit.chemistry.results.ElectronicStructureResult.computed_energies" />

`property computed_energies`

Returns computed electronic part of ground state energy

**Return type**

`ndarray`

### dipole\_moment

<span id="qiskit.chemistry.results.ElectronicStructureResult.dipole_moment" />

`property dipole_moment`

Returns dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

### dipole\_moment\_in\_debye

<span id="qiskit.chemistry.results.ElectronicStructureResult.dipole_moment_in_debye" />

`property dipole_moment_in_debye`

Returns dipole moment in Debye

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

### eigenenergies

<span id="qiskit.chemistry.results.ElectronicStructureResult.eigenenergies" />

`property eigenenergies`

returns eigen energies

**Return type**

`Optional`\[`ndarray`]

### eigenstates

<span id="qiskit.chemistry.results.ElectronicStructureResult.eigenstates" />

`property eigenstates`

returns eigen states

**Return type**

`Optional`\[`List`\[`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]]]

### electronic\_dipole\_moment

<span id="qiskit.chemistry.results.ElectronicStructureResult.electronic_dipole_moment" />

`property electronic_dipole_moment`

Returns electronic dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

### electronic\_energies

<span id="qiskit.chemistry.results.ElectronicStructureResult.electronic_energies" />

`property electronic_energies`

Returns electronic part of ground state energy

**Return type**

`ndarray`

### formatted

<span id="qiskit.chemistry.results.ElectronicStructureResult.formatted" />

`property formatted`

Formatted result as a list of strings

**Return type**

`List`\[`str`]

### frozen\_extracted\_dipole\_moment

<span id="qiskit.chemistry.results.ElectronicStructureResult.frozen_extracted_dipole_moment" />

`property frozen_extracted_dipole_moment`

Returns frozen extracted part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

### frozen\_extracted\_energy

<span id="qiskit.chemistry.results.ElectronicStructureResult.frozen_extracted_energy" />

`property frozen_extracted_energy`

Returns frozen extracted part of ground state energy

**Return type**

`float`

### get

<span id="qiskit.chemistry.results.ElectronicStructureResult.get" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### groundenergy

<span id="qiskit.chemistry.results.ElectronicStructureResult.groundenergy" />

`property groundenergy`

returns ground energy

**Return type**

`Optional`\[`float`]

### groundstate

<span id="qiskit.chemistry.results.ElectronicStructureResult.groundstate" />

`property groundstate`

returns ground state

**Return type**

`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`, `None`]

### hartree\_fock\_energy

<span id="qiskit.chemistry.results.ElectronicStructureResult.hartree_fock_energy" />

`property hartree_fock_energy`

Returns Hartree-Fock energy

**Return type**

`float`

### has\_dipole

<span id="qiskit.chemistry.results.ElectronicStructureResult.has_dipole" />

`has_dipole()`

Returns whether dipole moment is present in result or not

**Return type**

`bool`

### has\_observables

<span id="qiskit.chemistry.results.ElectronicStructureResult.has_observables" />

`has_observables()`

Returns whether result has aux op observables such as spin, num particles

### items

<span id="qiskit.chemistry.results.ElectronicStructureResult.items" />

`items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.chemistry.results.ElectronicStructureResult.keys" />

`keys() → a set-like object providing a view on D’s keys`

### magnetization

<span id="qiskit.chemistry.results.ElectronicStructureResult.magnetization" />

`property magnetization`

Returns measured magnetization

**Return type**

`Optional`\[`List`\[`float`]]

### nuclear\_dipole\_moment

<span id="qiskit.chemistry.results.ElectronicStructureResult.nuclear_dipole_moment" />

`property nuclear_dipole_moment`

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### nuclear\_repulsion\_energy

<span id="qiskit.chemistry.results.ElectronicStructureResult.nuclear_repulsion_energy" />

`property nuclear_repulsion_energy`

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

### num\_particles

<span id="qiskit.chemistry.results.ElectronicStructureResult.num_particles" />

`property num_particles`

Returns measured number of particles

**Return type**

`Optional`\[`List`\[`float`]]

### ph\_extracted\_dipole\_moment

<span id="qiskit.chemistry.results.ElectronicStructureResult.ph_extracted_dipole_moment" />

`property ph_extracted_dipole_moment`

Returns particle hole extracted part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

### ph\_extracted\_energy

<span id="qiskit.chemistry.results.ElectronicStructureResult.ph_extracted_energy" />

`property ph_extracted_energy`

Returns particle hole extracted part of ground state energy

**Return type**

`float`

### pop

<span id="qiskit.chemistry.results.ElectronicStructureResult.pop" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.chemistry.results.ElectronicStructureResult.popitem" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### raw\_result

<span id="qiskit.chemistry.results.ElectronicStructureResult.raw_result" />

`property raw_result`

Returns the raw algorithm result.

**Return type**

`Optional`\[`AlgorithmResult`]

### reverse\_dipole\_sign

<span id="qiskit.chemistry.results.ElectronicStructureResult.reverse_dipole_sign" />

`property reverse_dipole_sign`

Returns if electronic dipole moment sign should be reversed when adding to nuclear

**Return type**

`bool`

### setdefault

<span id="qiskit.chemistry.results.ElectronicStructureResult.setdefault" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### spin

<span id="qiskit.chemistry.results.ElectronicStructureResult.spin" />

`property spin`

Returns computed spin

**Return type**

`Optional`\[`List`\[`float`]]

### total\_angular\_momentum

<span id="qiskit.chemistry.results.ElectronicStructureResult.total_angular_momentum" />

`property total_angular_momentum`

Returns total angular momentum (S^2)

**Return type**

`Optional`\[`List`\[`float`]]

### total\_dipole\_moment

<span id="qiskit.chemistry.results.ElectronicStructureResult.total_dipole_moment" />

`property total_dipole_moment`

Returns total dipole of moment

**Return type**

`Optional`\[`List`\[`float`]]

### total\_dipole\_moment\_in\_debye

<span id="qiskit.chemistry.results.ElectronicStructureResult.total_dipole_moment_in_debye" />

`property total_dipole_moment_in_debye`

Returns total dipole of moment in Debye

**Return type**

`Optional`\[`List`\[`float`]]

### total\_energies

<span id="qiskit.chemistry.results.ElectronicStructureResult.total_energies" />

`property total_energies`

Returns ground state energy if nuclear\_repulsion\_energy is available from driver

**Return type**

`ndarray`

### update

<span id="qiskit.chemistry.results.ElectronicStructureResult.update" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.chemistry.results.ElectronicStructureResult.values" />

`values() → an object providing a view on D’s values`

