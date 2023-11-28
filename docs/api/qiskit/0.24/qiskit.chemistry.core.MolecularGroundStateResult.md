<span id="qiskit-chemistry-core-moleculargroundstateresult" />

# qiskit.chemistry.core.MolecularGroundStateResult

<span id="undefined" />

`MolecularGroundStateResult(a_dict=None)`

Molecular Ground State Energy Result.

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                             |                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.core.MolecularGroundStateResult.__init__ "qiskit.chemistry.core.MolecularGroundStateResult.__init__")(\[a\_dict])            | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.chemistry.core.MolecularGroundStateResult.clear "qiskit.chemistry.core.MolecularGroundStateResult.clear")()                               | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.chemistry.core.MolecularGroundStateResult.combine "qiskit.chemistry.core.MolecularGroundStateResult.combine")(result)                   | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                                    |                                                                                                                                                                                                                      |
| `fromkeys`(iterable\[, value])                                                                                                                              |                                                                                                                                                                                                                      |
| [`get`](#qiskit.chemistry.core.MolecularGroundStateResult.get "qiskit.chemistry.core.MolecularGroundStateResult.get")(k\[,d])                               |                                                                                                                                                                                                                      |
| [`has_dipole`](#qiskit.chemistry.core.MolecularGroundStateResult.has_dipole "qiskit.chemistry.core.MolecularGroundStateResult.has_dipole")()                | Returns whether dipole moment is present in result or not                                                                                                                                                            |
| [`has_observables`](#qiskit.chemistry.core.MolecularGroundStateResult.has_observables "qiskit.chemistry.core.MolecularGroundStateResult.has_observables")() | Returns whether result has aux op observables such as spin, num particles                                                                                                                                            |
| [`items`](#qiskit.chemistry.core.MolecularGroundStateResult.items "qiskit.chemistry.core.MolecularGroundStateResult.items")()                               |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.chemistry.core.MolecularGroundStateResult.keys "qiskit.chemistry.core.MolecularGroundStateResult.keys")()                                  |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.chemistry.core.MolecularGroundStateResult.pop "qiskit.chemistry.core.MolecularGroundStateResult.pop")(key\[, default])                      | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.chemistry.core.MolecularGroundStateResult.popitem "qiskit.chemistry.core.MolecularGroundStateResult.popitem")()                         | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.chemistry.core.MolecularGroundStateResult.setdefault "qiskit.chemistry.core.MolecularGroundStateResult.setdefault")(k\[,d])          |                                                                                                                                                                                                                      |
| [`update`](#qiskit.chemistry.core.MolecularGroundStateResult.update "qiskit.chemistry.core.MolecularGroundStateResult.update")(\*args, \*\*kwargs)          | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.chemistry.core.MolecularGroundStateResult.values "qiskit.chemistry.core.MolecularGroundStateResult.values")()                            |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                                                        |                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [`algorithm_result`](#qiskit.chemistry.core.MolecularGroundStateResult.algorithm_result "qiskit.chemistry.core.MolecularGroundStateResult.algorithm_result")                                           | Returns raw algorithm result                                                       |
| [`computed_dipole_moment`](#qiskit.chemistry.core.MolecularGroundStateResult.computed_dipole_moment "qiskit.chemistry.core.MolecularGroundStateResult.computed_dipole_moment")                         | Returns computed electronic part of dipole moment                                  |
| [`computed_electronic_energy`](#qiskit.chemistry.core.MolecularGroundStateResult.computed_electronic_energy "qiskit.chemistry.core.MolecularGroundStateResult.computed_electronic_energy")             | Returns computed electronic part of ground state energy                            |
| [`dipole_moment`](#qiskit.chemistry.core.MolecularGroundStateResult.dipole_moment "qiskit.chemistry.core.MolecularGroundStateResult.dipole_moment")                                                    | Returns dipole moment                                                              |
| [`dipole_moment_in_debye`](#qiskit.chemistry.core.MolecularGroundStateResult.dipole_moment_in_debye "qiskit.chemistry.core.MolecularGroundStateResult.dipole_moment_in_debye")                         | Returns dipole moment in Debye                                                     |
| [`electronic_dipole_moment`](#qiskit.chemistry.core.MolecularGroundStateResult.electronic_dipole_moment "qiskit.chemistry.core.MolecularGroundStateResult.electronic_dipole_moment")                   | Returns electronic dipole moment                                                   |
| [`electronic_energy`](#qiskit.chemistry.core.MolecularGroundStateResult.electronic_energy "qiskit.chemistry.core.MolecularGroundStateResult.electronic_energy")                                        | Returns electronic part of ground state energy                                     |
| [`energy`](#qiskit.chemistry.core.MolecularGroundStateResult.energy "qiskit.chemistry.core.MolecularGroundStateResult.energy")                                                                         | Returns ground state energy if nuclear\_repulsion\_energy is available from driver |
| [`formatted`](#qiskit.chemistry.core.MolecularGroundStateResult.formatted "qiskit.chemistry.core.MolecularGroundStateResult.formatted")                                                                | Formatted result as a list of strings                                              |
| [`frozen_extracted_dipole_moment`](#qiskit.chemistry.core.MolecularGroundStateResult.frozen_extracted_dipole_moment "qiskit.chemistry.core.MolecularGroundStateResult.frozen_extracted_dipole_moment") | Returns frozen extracted part of dipole moment                                     |
| [`frozen_extracted_energy`](#qiskit.chemistry.core.MolecularGroundStateResult.frozen_extracted_energy "qiskit.chemistry.core.MolecularGroundStateResult.frozen_extracted_energy")                      | Returns frozen extracted part of ground state energy                               |
| [`hartree_fock_energy`](#qiskit.chemistry.core.MolecularGroundStateResult.hartree_fock_energy "qiskit.chemistry.core.MolecularGroundStateResult.hartree_fock_energy")                                  | Returns Hartree-Fock energy                                                        |
| [`magnetization`](#qiskit.chemistry.core.MolecularGroundStateResult.magnetization "qiskit.chemistry.core.MolecularGroundStateResult.magnetization")                                                    | Returns measured magnetization                                                     |
| [`nuclear_dipole_moment`](#qiskit.chemistry.core.MolecularGroundStateResult.nuclear_dipole_moment "qiskit.chemistry.core.MolecularGroundStateResult.nuclear_dipole_moment")                            | Returns nuclear dipole moment X,Y,Z components in A.U when available from driver   |
| [`nuclear_repulsion_energy`](#qiskit.chemistry.core.MolecularGroundStateResult.nuclear_repulsion_energy "qiskit.chemistry.core.MolecularGroundStateResult.nuclear_repulsion_energy")                   | Returns nuclear repulsion energy when available from driver                        |
| [`num_particles`](#qiskit.chemistry.core.MolecularGroundStateResult.num_particles "qiskit.chemistry.core.MolecularGroundStateResult.num_particles")                                                    | Returns measured number of particles                                               |
| [`ph_extracted_dipole_moment`](#qiskit.chemistry.core.MolecularGroundStateResult.ph_extracted_dipole_moment "qiskit.chemistry.core.MolecularGroundStateResult.ph_extracted_dipole_moment")             | Returns particle hole extracted part of dipole moment                              |
| [`ph_extracted_energy`](#qiskit.chemistry.core.MolecularGroundStateResult.ph_extracted_energy "qiskit.chemistry.core.MolecularGroundStateResult.ph_extracted_energy")                                  | Returns particle hole extracted part of ground state energy                        |
| [`reverse_dipole_sign`](#qiskit.chemistry.core.MolecularGroundStateResult.reverse_dipole_sign "qiskit.chemistry.core.MolecularGroundStateResult.reverse_dipole_sign")                                  | Returns if electronic dipole moment sign should be reversed when adding to nuclear |
| [`spin`](#qiskit.chemistry.core.MolecularGroundStateResult.spin "qiskit.chemistry.core.MolecularGroundStateResult.spin")                                                                               | Returns computed spin                                                              |
| [`total_angular_momentum`](#qiskit.chemistry.core.MolecularGroundStateResult.total_angular_momentum "qiskit.chemistry.core.MolecularGroundStateResult.total_angular_momentum")                         | Returns total angular momentum (S^2)                                               |
| [`total_dipole_moment`](#qiskit.chemistry.core.MolecularGroundStateResult.total_dipole_moment "qiskit.chemistry.core.MolecularGroundStateResult.total_dipole_moment")                                  | Returns total dipole of moment                                                     |
| [`total_dipole_moment_in_debye`](#qiskit.chemistry.core.MolecularGroundStateResult.total_dipole_moment_in_debye "qiskit.chemistry.core.MolecularGroundStateResult.total_dipole_moment_in_debye")       | Returns total dipole of moment in Debye                                            |

<span id="undefined" />

`property algorithm_result`

Returns raw algorithm result

**Return type**

`AlgorithmResult`

<span id="undefined" />

`clear()`

**Return type**

`None`

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`property computed_dipole_moment`

Returns computed electronic part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="undefined" />

`property computed_electronic_energy`

Returns computed electronic part of ground state energy

**Return type**

`float`

<span id="undefined" />

`property dipole_moment`

Returns dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="undefined" />

`property dipole_moment_in_debye`

Returns dipole moment in Debye

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="undefined" />

`property electronic_dipole_moment`

Returns electronic dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="undefined" />

`property electronic_energy`

Returns electronic part of ground state energy

**Return type**

`float`

<span id="undefined" />

`property energy`

Returns ground state energy if nuclear\_repulsion\_energy is available from driver

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`property formatted`

Formatted result as a list of strings

**Return type**

`List`\[`str`]

<span id="undefined" />

`property frozen_extracted_dipole_moment`

Returns frozen extracted part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="undefined" />

`property frozen_extracted_energy`

Returns frozen extracted part of ground state energy

**Return type**

`float`

<span id="undefined" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

<span id="undefined" />

`property hartree_fock_energy`

Returns Hartree-Fock energy

**Return type**

`float`

<span id="undefined" />

`has_dipole()`

Returns whether dipole moment is present in result or not

**Return type**

`bool`

<span id="undefined" />

`has_observables()`

Returns whether result has aux op observables such as spin, num particles

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

<span id="undefined" />

`property magnetization`

Returns measured magnetization

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`property nuclear_dipole_moment`

Returns nuclear dipole moment X,Y,Z components in A.U when available from driver

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="undefined" />

`property nuclear_repulsion_energy`

Returns nuclear repulsion energy when available from driver

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`property num_particles`

Returns measured number of particles

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`property ph_extracted_dipole_moment`

Returns particle hole extracted part of dipole moment

**Return type**

`Optional`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]

<span id="undefined" />

`property ph_extracted_energy`

Returns particle hole extracted part of ground state energy

**Return type**

`float`

<span id="undefined" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

<span id="undefined" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

<span id="undefined" />

`property reverse_dipole_sign`

Returns if electronic dipole moment sign should be reversed when adding to nuclear

**Return type**

`bool`

<span id="undefined" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

<span id="undefined" />

`property spin`

Returns computed spin

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`property total_angular_momentum`

Returns total angular momentum (S^2)

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`property total_dipole_moment`

Returns total dipole of moment

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`property total_dipole_moment_in_debye`

Returns total dipole of moment in Debye

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
