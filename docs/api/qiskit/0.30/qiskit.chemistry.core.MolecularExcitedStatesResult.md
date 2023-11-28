# MolecularExcitedStatesResult

<span id="undefined" />

`MolecularExcitedStatesResult(a_dict=None)`

Bases: `qiskit.chemistry.core.chemistry_operator.MolecularChemistryResult`

Molecular Excited States Result

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

## Methods

|                                                                                                                                                                                                             |                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.chemistry.core.MolecularExcitedStatesResult.clear#qiskit.chemistry.core.MolecularExcitedStatesResult.clear "qiskit.chemistry.core.MolecularExcitedStatesResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.chemistry.core.MolecularExcitedStatesResult.combine#qiskit.chemistry.core.MolecularExcitedStatesResult.combine "qiskit.chemistry.core.MolecularExcitedStatesResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.chemistry.core.MolecularExcitedStatesResult.copy#qiskit.chemistry.core.MolecularExcitedStatesResult.copy "qiskit.chemistry.core.MolecularExcitedStatesResult.copy")                         |                                                                                                                                                                                                                      |
| [`fromkeys`](qiskit.chemistry.core.MolecularExcitedStatesResult.fromkeys#qiskit.chemistry.core.MolecularExcitedStatesResult.fromkeys "qiskit.chemistry.core.MolecularExcitedStatesResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.chemistry.core.MolecularExcitedStatesResult.get#qiskit.chemistry.core.MolecularExcitedStatesResult.get "qiskit.chemistry.core.MolecularExcitedStatesResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.chemistry.core.MolecularExcitedStatesResult.items#qiskit.chemistry.core.MolecularExcitedStatesResult.items "qiskit.chemistry.core.MolecularExcitedStatesResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.chemistry.core.MolecularExcitedStatesResult.keys#qiskit.chemistry.core.MolecularExcitedStatesResult.keys "qiskit.chemistry.core.MolecularExcitedStatesResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.chemistry.core.MolecularExcitedStatesResult.pop#qiskit.chemistry.core.MolecularExcitedStatesResult.pop "qiskit.chemistry.core.MolecularExcitedStatesResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.chemistry.core.MolecularExcitedStatesResult.popitem#qiskit.chemistry.core.MolecularExcitedStatesResult.popitem "qiskit.chemistry.core.MolecularExcitedStatesResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.chemistry.core.MolecularExcitedStatesResult.setdefault#qiskit.chemistry.core.MolecularExcitedStatesResult.setdefault "qiskit.chemistry.core.MolecularExcitedStatesResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.chemistry.core.MolecularExcitedStatesResult.update#qiskit.chemistry.core.MolecularExcitedStatesResult.update "qiskit.chemistry.core.MolecularExcitedStatesResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.chemistry.core.MolecularExcitedStatesResult.values#qiskit.chemistry.core.MolecularExcitedStatesResult.values "qiskit.chemistry.core.MolecularExcitedStatesResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### algorithm\_result

Returns raw algorithm result

**Return type**

`AlgorithmResult`

<span id="undefined" />

### energies

Returns ground state energy

**Return type**

`Tuple`

<span id="undefined" />

### hartree\_fock\_energy

Returns Hartree-Fock energy

**Return type**

`float`

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
