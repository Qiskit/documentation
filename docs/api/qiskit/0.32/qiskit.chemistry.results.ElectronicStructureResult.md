# ElectronicStructureResult

<span id="undefined" />

`ElectronicStructureResult(a_dict=None)`

Bases: `qiskit.chemistry.results.eigenstate_result.EigenstateResult`

The electronic structure result.

## Methods

|                                                                                                                                                                                                                                 |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.chemistry.results.ElectronicStructureResult.clear#qiskit.chemistry.results.ElectronicStructureResult.clear "qiskit.chemistry.results.ElectronicStructureResult.clear")                                         | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.chemistry.results.ElectronicStructureResult.combine#qiskit.chemistry.results.ElectronicStructureResult.combine "qiskit.chemistry.results.ElectronicStructureResult.combine")                                 | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.chemistry.results.ElectronicStructureResult.copy#qiskit.chemistry.results.ElectronicStructureResult.copy "qiskit.chemistry.results.ElectronicStructureResult.copy")                                             |                                                                                                                                                                                                                      |
| [`fromkeys`](qiskit.chemistry.results.ElectronicStructureResult.fromkeys#qiskit.chemistry.results.ElectronicStructureResult.fromkeys "qiskit.chemistry.results.ElectronicStructureResult.fromkeys")                             |                                                                                                                                                                                                                      |
| [`get`](qiskit.chemistry.results.ElectronicStructureResult.get#qiskit.chemistry.results.ElectronicStructureResult.get "qiskit.chemistry.results.ElectronicStructureResult.get")                                                 |                                                                                                                                                                                                                      |
| [`has_dipole`](qiskit.chemistry.results.ElectronicStructureResult.has_dipole#qiskit.chemistry.results.ElectronicStructureResult.has_dipole "qiskit.chemistry.results.ElectronicStructureResult.has_dipole")                     | Returns whether dipole moment is present in result or not                                                                                                                                                            |
| [`has_observables`](qiskit.chemistry.results.ElectronicStructureResult.has_observables#qiskit.chemistry.results.ElectronicStructureResult.has_observables "qiskit.chemistry.results.ElectronicStructureResult.has_observables") | Returns whether result has aux op observables such as spin, num particles                                                                                                                                            |
| [`items`](qiskit.chemistry.results.ElectronicStructureResult.items#qiskit.chemistry.results.ElectronicStructureResult.items "qiskit.chemistry.results.ElectronicStructureResult.items")                                         |                                                                                                                                                                                                                      |
| [`keys`](qiskit.chemistry.results.ElectronicStructureResult.keys#qiskit.chemistry.results.ElectronicStructureResult.keys "qiskit.chemistry.results.ElectronicStructureResult.keys")                                             |                                                                                                                                                                                                                      |
| [`pop`](qiskit.chemistry.results.ElectronicStructureResult.pop#qiskit.chemistry.results.ElectronicStructureResult.pop "qiskit.chemistry.results.ElectronicStructureResult.pop")                                                 | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.chemistry.results.ElectronicStructureResult.popitem#qiskit.chemistry.results.ElectronicStructureResult.popitem "qiskit.chemistry.results.ElectronicStructureResult.popitem")                                 | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.chemistry.results.ElectronicStructureResult.setdefault#qiskit.chemistry.results.ElectronicStructureResult.setdefault "qiskit.chemistry.results.ElectronicStructureResult.setdefault")                     |                                                                                                                                                                                                                      |
| [`update`](qiskit.chemistry.results.ElectronicStructureResult.update#qiskit.chemistry.results.ElectronicStructureResult.update "qiskit.chemistry.results.ElectronicStructureResult.update")                                     | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.chemistry.results.ElectronicStructureResult.values#qiskit.chemistry.results.ElectronicStructureResult.values "qiskit.chemistry.results.ElectronicStructureResult.values")                                     |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### computed\_dipole\_moment

Returns computed electronic part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

### computed\_energies

Returns computed electronic part of ground state energy

**Return type**

`ndarray`

<span id="undefined" />

### dipole\_moment

Returns dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

### dipole\_moment\_in\_debye

Returns dipole moment in Debye

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

### eigenenergies

returns eigen energies

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### eigenstates

returns eigen states

**Return type**

`Optional`\[`List`\[`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]]]

<span id="undefined" />

### electronic\_dipole\_moment

Returns electronic dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

### electronic\_energies

Returns electronic part of ground state energy

**Return type**

`ndarray`

<span id="undefined" />

### formatted

Formatted result as a list of strings

**Return type**

`List`\[`str`]

<span id="undefined" />

### frozen\_extracted\_dipole\_moment

Returns frozen extracted part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

### frozen\_extracted\_energy

Returns frozen extracted part of ground state energy

**Return type**

`float`

<span id="undefined" />

### groundenergy

returns ground energy

**Return type**

`Optional`\[`float`]

<span id="undefined" />

### groundstate

returns ground state

**Return type**

`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`, `None`]

<span id="undefined" />

### hartree\_fock\_energy

Returns Hartree-Fock energy

**Return type**

`float`

<span id="undefined" />

### magnetization

Returns measured magnetization

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### nuclear\_dipole\_moment

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="undefined" />

### nuclear\_repulsion\_energy

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

<span id="undefined" />

### num\_particles

Returns measured number of particles

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### ph\_extracted\_dipole\_moment

Returns particle hole extracted part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

### ph\_extracted\_energy

Returns particle hole extracted part of ground state energy

**Return type**

`float`

<span id="undefined" />

### raw\_result

Returns the raw algorithm result.

**Return type**

`Optional`\[`AlgorithmResult`]

<span id="undefined" />

### reverse\_dipole\_sign

Returns if electronic dipole moment sign should be reversed when adding to nuclear

**Return type**

`bool`

<span id="undefined" />

### spin

Returns computed spin

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### total\_angular\_momentum

Returns total angular momentum (S^2)

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### total\_dipole\_moment

Returns total dipole of moment

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### total\_dipole\_moment\_in\_debye

Returns total dipole of moment in Debye

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### total\_energies

Returns ground state energy if nuclear\_repulsion\_energy is available from driver

**Return type**

`ndarray`
