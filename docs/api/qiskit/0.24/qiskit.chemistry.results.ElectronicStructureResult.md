<span id="qiskit-chemistry-results-electronicstructureresult" />

# qiskit.chemistry.results.ElectronicStructureResult

<span id="undefined" />

`ElectronicStructureResult(a_dict=None)`

The electronic structure result.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                 |                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.results.ElectronicStructureResult.__init__ "qiskit.chemistry.results.ElectronicStructureResult.__init__")(\[a\_dict])            | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.chemistry.results.ElectronicStructureResult.clear "qiskit.chemistry.results.ElectronicStructureResult.clear")()                               | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.chemistry.results.ElectronicStructureResult.combine "qiskit.chemistry.results.ElectronicStructureResult.combine")(result)                   | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                                        |                                                                                                                                                                                                                      |
| `fromkeys`(iterable\[, value])                                                                                                                                  |                                                                                                                                                                                                                      |
| [`get`](#qiskit.chemistry.results.ElectronicStructureResult.get "qiskit.chemistry.results.ElectronicStructureResult.get")(k\[,d])                               |                                                                                                                                                                                                                      |
| [`has_dipole`](#qiskit.chemistry.results.ElectronicStructureResult.has_dipole "qiskit.chemistry.results.ElectronicStructureResult.has_dipole")()                | Returns whether dipole moment is present in result or not                                                                                                                                                            |
| [`has_observables`](#qiskit.chemistry.results.ElectronicStructureResult.has_observables "qiskit.chemistry.results.ElectronicStructureResult.has_observables")() | Returns whether result has aux op observables such as spin, num particles                                                                                                                                            |
| [`items`](#qiskit.chemistry.results.ElectronicStructureResult.items "qiskit.chemistry.results.ElectronicStructureResult.items")()                               |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.chemistry.results.ElectronicStructureResult.keys "qiskit.chemistry.results.ElectronicStructureResult.keys")()                                  |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.chemistry.results.ElectronicStructureResult.pop "qiskit.chemistry.results.ElectronicStructureResult.pop")(key\[, default])                      | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.chemistry.results.ElectronicStructureResult.popitem "qiskit.chemistry.results.ElectronicStructureResult.popitem")()                         | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.chemistry.results.ElectronicStructureResult.setdefault "qiskit.chemistry.results.ElectronicStructureResult.setdefault")(k\[,d])          |                                                                                                                                                                                                                      |
| [`update`](#qiskit.chemistry.results.ElectronicStructureResult.update "qiskit.chemistry.results.ElectronicStructureResult.update")(\*args, \*\*kwargs)          | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.chemistry.results.ElectronicStructureResult.values "qiskit.chemistry.results.ElectronicStructureResult.values")()                            |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                                                            |                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`aux_operator_eigenvalues`](#qiskit.chemistry.results.ElectronicStructureResult.aux_operator_eigenvalues "qiskit.chemistry.results.ElectronicStructureResult.aux_operator_eigenvalues")                   | return aux operator eigen values                                                   |
| [`computed_dipole_moment`](#qiskit.chemistry.results.ElectronicStructureResult.computed_dipole_moment "qiskit.chemistry.results.ElectronicStructureResult.computed_dipole_moment")                         | Returns computed electronic part of dipole moment                                  |
| [`computed_energies`](#qiskit.chemistry.results.ElectronicStructureResult.computed_energies "qiskit.chemistry.results.ElectronicStructureResult.computed_energies")                                        | Returns computed electronic part of ground state energy                            |
| [`dipole_moment`](#qiskit.chemistry.results.ElectronicStructureResult.dipole_moment "qiskit.chemistry.results.ElectronicStructureResult.dipole_moment")                                                    | Returns dipole moment                                                              |
| [`dipole_moment_in_debye`](#qiskit.chemistry.results.ElectronicStructureResult.dipole_moment_in_debye "qiskit.chemistry.results.ElectronicStructureResult.dipole_moment_in_debye")                         | Returns dipole moment in Debye                                                     |
| [`eigenenergies`](#qiskit.chemistry.results.ElectronicStructureResult.eigenenergies "qiskit.chemistry.results.ElectronicStructureResult.eigenenergies")                                                    | returns eigen energies                                                             |
| [`eigenstates`](#qiskit.chemistry.results.ElectronicStructureResult.eigenstates "qiskit.chemistry.results.ElectronicStructureResult.eigenstates")                                                          | returns eigen states                                                               |
| [`electronic_dipole_moment`](#qiskit.chemistry.results.ElectronicStructureResult.electronic_dipole_moment "qiskit.chemistry.results.ElectronicStructureResult.electronic_dipole_moment")                   | Returns electronic dipole moment                                                   |
| [`electronic_energies`](#qiskit.chemistry.results.ElectronicStructureResult.electronic_energies "qiskit.chemistry.results.ElectronicStructureResult.electronic_energies")                                  | Returns electronic part of ground state energy                                     |
| [`formatted`](#qiskit.chemistry.results.ElectronicStructureResult.formatted "qiskit.chemistry.results.ElectronicStructureResult.formatted")                                                                | Formatted result as a list of strings                                              |
| [`frozen_extracted_dipole_moment`](#qiskit.chemistry.results.ElectronicStructureResult.frozen_extracted_dipole_moment "qiskit.chemistry.results.ElectronicStructureResult.frozen_extracted_dipole_moment") | Returns frozen extracted part of dipole moment                                     |
| [`frozen_extracted_energy`](#qiskit.chemistry.results.ElectronicStructureResult.frozen_extracted_energy "qiskit.chemistry.results.ElectronicStructureResult.frozen_extracted_energy")                      | Returns frozen extracted part of ground state energy                               |
| [`groundenergy`](#qiskit.chemistry.results.ElectronicStructureResult.groundenergy "qiskit.chemistry.results.ElectronicStructureResult.groundenergy")                                                       | returns ground energy                                                              |
| [`groundstate`](#qiskit.chemistry.results.ElectronicStructureResult.groundstate "qiskit.chemistry.results.ElectronicStructureResult.groundstate")                                                          | returns ground state                                                               |
| [`hartree_fock_energy`](#qiskit.chemistry.results.ElectronicStructureResult.hartree_fock_energy "qiskit.chemistry.results.ElectronicStructureResult.hartree_fock_energy")                                  | Returns Hartree-Fock energy                                                        |
| [`magnetization`](#qiskit.chemistry.results.ElectronicStructureResult.magnetization "qiskit.chemistry.results.ElectronicStructureResult.magnetization")                                                    | Returns measured magnetization                                                     |
| [`nuclear_dipole_moment`](#qiskit.chemistry.results.ElectronicStructureResult.nuclear_dipole_moment "qiskit.chemistry.results.ElectronicStructureResult.nuclear_dipole_moment")                            | Returns nuclear dipole moment X,Y,Z components in A.U when available from driver   |
| [`nuclear_repulsion_energy`](#qiskit.chemistry.results.ElectronicStructureResult.nuclear_repulsion_energy "qiskit.chemistry.results.ElectronicStructureResult.nuclear_repulsion_energy")                   | Returns nuclear repulsion energy when available from driver                        |
| [`num_particles`](#qiskit.chemistry.results.ElectronicStructureResult.num_particles "qiskit.chemistry.results.ElectronicStructureResult.num_particles")                                                    | Returns measured number of particles                                               |
| [`ph_extracted_dipole_moment`](#qiskit.chemistry.results.ElectronicStructureResult.ph_extracted_dipole_moment "qiskit.chemistry.results.ElectronicStructureResult.ph_extracted_dipole_moment")             | Returns particle hole extracted part of dipole moment                              |
| [`ph_extracted_energy`](#qiskit.chemistry.results.ElectronicStructureResult.ph_extracted_energy "qiskit.chemistry.results.ElectronicStructureResult.ph_extracted_energy")                                  | Returns particle hole extracted part of ground state energy                        |
| [`raw_result`](#qiskit.chemistry.results.ElectronicStructureResult.raw_result "qiskit.chemistry.results.ElectronicStructureResult.raw_result")                                                             | Returns the raw algorithm result.                                                  |
| [`reverse_dipole_sign`](#qiskit.chemistry.results.ElectronicStructureResult.reverse_dipole_sign "qiskit.chemistry.results.ElectronicStructureResult.reverse_dipole_sign")                                  | Returns if electronic dipole moment sign should be reversed when adding to nuclear |
| [`spin`](#qiskit.chemistry.results.ElectronicStructureResult.spin "qiskit.chemistry.results.ElectronicStructureResult.spin")                                                                               | Returns computed spin                                                              |
| [`total_angular_momentum`](#qiskit.chemistry.results.ElectronicStructureResult.total_angular_momentum "qiskit.chemistry.results.ElectronicStructureResult.total_angular_momentum")                         | Returns total angular momentum (S^2)                                               |
| [`total_dipole_moment`](#qiskit.chemistry.results.ElectronicStructureResult.total_dipole_moment "qiskit.chemistry.results.ElectronicStructureResult.total_dipole_moment")                                  | Returns total dipole of moment                                                     |
| [`total_dipole_moment_in_debye`](#qiskit.chemistry.results.ElectronicStructureResult.total_dipole_moment_in_debye "qiskit.chemistry.results.ElectronicStructureResult.total_dipole_moment_in_debye")       | Returns total dipole of moment in Debye                                            |
| [`total_energies`](#qiskit.chemistry.results.ElectronicStructureResult.total_energies "qiskit.chemistry.results.ElectronicStructureResult.total_energies")                                                 | Returns ground state energy if nuclear\_repulsion\_energy is available from driver |

<span id="undefined" />

`property aux_operator_eigenvalues`

return aux operator eigen values

**Return type**

`Optional`\[`List`\[`float`]]

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

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

`property computed_energies`

Returns computed electronic part of ground state energy

**Return type**

`ndarray`

<span id="undefined" />

`property dipole_moment`

Returns dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

`property dipole_moment_in_debye`

Returns dipole moment in Debye

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

`property eigenenergies`

returns eigen energies

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

`property eigenstates`

returns eigen states

**Return type**

`Optional`\[`List`\[`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]]]

<span id="undefined" />

`property electronic_dipole_moment`

Returns electronic dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

`property electronic_energies`

Returns electronic part of ground state energy

**Return type**

`ndarray`

<span id="undefined" />

`property formatted`

Formatted result as a list of strings

**Return type**

`List`\[`str`]

<span id="undefined" />

`property frozen_extracted_dipole_moment`

Returns frozen extracted part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

<span id="undefined" />

`property frozen_extracted_energy`

Returns frozen extracted part of ground state energy

**Return type**

`float`

<span id="undefined" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

<span id="undefined" />

`property groundenergy`

returns ground energy

**Return type**

`Optional`\[`float`]

<span id="undefined" />

`property groundstate`

returns ground state

**Return type**

`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`, `None`]

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

`Optional`\[`List`\[`float`]]

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

`Optional`\[`List`\[`float`]]

<span id="undefined" />

`property ph_extracted_dipole_moment`

Returns particle hole extracted part of dipole moment

**Return type**

`Optional`\[`List`\[`Tuple`\[`Optional`\[`float`], `Optional`\[`float`], `Optional`\[`float`]]]]

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

`property raw_result`

Returns the raw algorithm result.

**Return type**

`Optional`\[`AlgorithmResult`]

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

`Optional`\[`List`\[`float`]]

<span id="undefined" />

`property total_angular_momentum`

Returns total angular momentum (S^2)

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

`property total_dipole_moment`

Returns total dipole of moment

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

`property total_dipole_moment_in_debye`

Returns total dipole of moment in Debye

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

`property total_energies`

Returns ground state energy if nuclear\_repulsion\_energy is available from driver

**Return type**

`ndarray`

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
