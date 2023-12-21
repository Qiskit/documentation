# MolecularGroundStateResult

`MolecularGroundStateResult(a_dict=None)`

Bases: `qiskit.chemistry.core.chemistry_operator.MolecularChemistryResult`

Molecular Ground State Energy Result.

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

## Methods

|                                                                                                                                                                                                                           |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.chemistry.core.MolecularGroundStateResult.clear#qiskit.chemistry.core.MolecularGroundStateResult.clear "qiskit.chemistry.core.MolecularGroundStateResult.clear")                                         | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.chemistry.core.MolecularGroundStateResult.combine#qiskit.chemistry.core.MolecularGroundStateResult.combine "qiskit.chemistry.core.MolecularGroundStateResult.combine")                                 | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.chemistry.core.MolecularGroundStateResult.copy#qiskit.chemistry.core.MolecularGroundStateResult.copy "qiskit.chemistry.core.MolecularGroundStateResult.copy")                                             |                                                                                                                                                                                                                      |
| [`fromkeys`](qiskit.chemistry.core.MolecularGroundStateResult.fromkeys#qiskit.chemistry.core.MolecularGroundStateResult.fromkeys "qiskit.chemistry.core.MolecularGroundStateResult.fromkeys")                             |                                                                                                                                                                                                                      |
| [`get`](qiskit.chemistry.core.MolecularGroundStateResult.get#qiskit.chemistry.core.MolecularGroundStateResult.get "qiskit.chemistry.core.MolecularGroundStateResult.get")                                                 |                                                                                                                                                                                                                      |
| [`has_dipole`](qiskit.chemistry.core.MolecularGroundStateResult.has_dipole#qiskit.chemistry.core.MolecularGroundStateResult.has_dipole "qiskit.chemistry.core.MolecularGroundStateResult.has_dipole")                     | Returns whether dipole moment is present in result or not                                                                                                                                                            |
| [`has_observables`](qiskit.chemistry.core.MolecularGroundStateResult.has_observables#qiskit.chemistry.core.MolecularGroundStateResult.has_observables "qiskit.chemistry.core.MolecularGroundStateResult.has_observables") | Returns whether result has aux op observables such as spin, num particles                                                                                                                                            |
| [`items`](qiskit.chemistry.core.MolecularGroundStateResult.items#qiskit.chemistry.core.MolecularGroundStateResult.items "qiskit.chemistry.core.MolecularGroundStateResult.items")                                         |                                                                                                                                                                                                                      |
| [`keys`](qiskit.chemistry.core.MolecularGroundStateResult.keys#qiskit.chemistry.core.MolecularGroundStateResult.keys "qiskit.chemistry.core.MolecularGroundStateResult.keys")                                             |                                                                                                                                                                                                                      |
| [`pop`](qiskit.chemistry.core.MolecularGroundStateResult.pop#qiskit.chemistry.core.MolecularGroundStateResult.pop "qiskit.chemistry.core.MolecularGroundStateResult.pop")                                                 | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.chemistry.core.MolecularGroundStateResult.popitem#qiskit.chemistry.core.MolecularGroundStateResult.popitem "qiskit.chemistry.core.MolecularGroundStateResult.popitem")                                 | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.chemistry.core.MolecularGroundStateResult.setdefault#qiskit.chemistry.core.MolecularGroundStateResult.setdefault "qiskit.chemistry.core.MolecularGroundStateResult.setdefault")                     |                                                                                                                                                                                                                      |
| [`update`](qiskit.chemistry.core.MolecularGroundStateResult.update#qiskit.chemistry.core.MolecularGroundStateResult.update "qiskit.chemistry.core.MolecularGroundStateResult.update")                                     | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.chemistry.core.MolecularGroundStateResult.values#qiskit.chemistry.core.MolecularGroundStateResult.values "qiskit.chemistry.core.MolecularGroundStateResult.values")                                     |                                                                                                                                                                                                                      |

## Attributes

### algorithm\_result

Returns raw algorithm result

**Return type**

`AlgorithmResult`

### computed\_dipole\_moment

Returns computed electronic part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### computed\_electronic\_energy

Returns computed electronic part of ground state energy

**Return type**

`float`

### dipole\_moment

Returns dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### dipole\_moment\_in\_debye

Returns dipole moment in Debye

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### electronic\_dipole\_moment

Returns electronic dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### electronic\_energy

Returns electronic part of ground state energy

**Return type**

`float`

### energy

Returns ground state energy if nuclear\_repulsion\_energy is available from driver

**Return type**

`Optional`\[`float`]

### formatted

Formatted result as a list of strings

**Return type**

`List`\[`str`]

### frozen\_extracted\_dipole\_moment

Returns frozen extracted part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### frozen\_extracted\_energy

Returns frozen extracted part of ground state energy

**Return type**

`float`

### hartree\_fock\_energy

Returns Hartree-Fock energy

**Return type**

`float`

### magnetization

Returns measured magnetization

**Return type**

`Optional`\[`float`]

### nuclear\_dipole\_moment

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### nuclear\_repulsion\_energy

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

### num\_particles

Returns measured number of particles

**Return type**

`Optional`\[`float`]

### ph\_extracted\_dipole\_moment

Returns particle hole extracted part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

### ph\_extracted\_energy

Returns particle hole extracted part of ground state energy

**Return type**

`float`

### reverse\_dipole\_sign

Returns if electronic dipole moment sign should be reversed when adding to nuclear

**Return type**

`bool`

### spin

Returns computed spin

**Return type**

`Optional`\[`float`]

### total\_angular\_momentum

Returns total angular momentum (S^2)

**Return type**

`Optional`\[`float`]

### total\_dipole\_moment

Returns total dipole of moment

**Return type**

`Optional`\[`float`]

### total\_dipole\_moment\_in\_debye

Returns total dipole of moment in Debye

**Return type**

`Optional`\[`float`]
