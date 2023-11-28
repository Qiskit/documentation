# MolecularChemistryResult

<span id="undefined" />

`MolecularChemistryResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Molecular chemistry Result

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

## Methods

|                                                                                                                                                                                                 |                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.chemistry.core.MolecularChemistryResult.clear#qiskit.chemistry.core.MolecularChemistryResult.clear "qiskit.chemistry.core.MolecularChemistryResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.chemistry.core.MolecularChemistryResult.combine#qiskit.chemistry.core.MolecularChemistryResult.combine "qiskit.chemistry.core.MolecularChemistryResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.chemistry.core.MolecularChemistryResult.copy#qiskit.chemistry.core.MolecularChemistryResult.copy "qiskit.chemistry.core.MolecularChemistryResult.copy")                         |                                                                                                                                                                                                                      |
| [`fromkeys`](qiskit.chemistry.core.MolecularChemistryResult.fromkeys#qiskit.chemistry.core.MolecularChemistryResult.fromkeys "qiskit.chemistry.core.MolecularChemistryResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.chemistry.core.MolecularChemistryResult.get#qiskit.chemistry.core.MolecularChemistryResult.get "qiskit.chemistry.core.MolecularChemistryResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.chemistry.core.MolecularChemistryResult.items#qiskit.chemistry.core.MolecularChemistryResult.items "qiskit.chemistry.core.MolecularChemistryResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.chemistry.core.MolecularChemistryResult.keys#qiskit.chemistry.core.MolecularChemistryResult.keys "qiskit.chemistry.core.MolecularChemistryResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.chemistry.core.MolecularChemistryResult.pop#qiskit.chemistry.core.MolecularChemistryResult.pop "qiskit.chemistry.core.MolecularChemistryResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.chemistry.core.MolecularChemistryResult.popitem#qiskit.chemistry.core.MolecularChemistryResult.popitem "qiskit.chemistry.core.MolecularChemistryResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.chemistry.core.MolecularChemistryResult.setdefault#qiskit.chemistry.core.MolecularChemistryResult.setdefault "qiskit.chemistry.core.MolecularChemistryResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.chemistry.core.MolecularChemistryResult.update#qiskit.chemistry.core.MolecularChemistryResult.update "qiskit.chemistry.core.MolecularChemistryResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.chemistry.core.MolecularChemistryResult.values#qiskit.chemistry.core.MolecularChemistryResult.values "qiskit.chemistry.core.MolecularChemistryResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### algorithm\_result

Returns raw algorithm result

**Return type**

`AlgorithmResult`

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
