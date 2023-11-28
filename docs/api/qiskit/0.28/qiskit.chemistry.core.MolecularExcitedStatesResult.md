# qiskit.chemistry.core.MolecularExcitedStatesResult

<span id="undefined" />

`MolecularExcitedStatesResult(a_dict=None)`

Molecular Excited States Result

Energies are in Hartree and dipole moments in A.U unless otherwise stated.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                        |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.core.MolecularExcitedStatesResult.__init__ "qiskit.chemistry.core.MolecularExcitedStatesResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.chemistry.core.MolecularExcitedStatesResult.clear "qiskit.chemistry.core.MolecularExcitedStatesResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.chemistry.core.MolecularExcitedStatesResult.combine "qiskit.chemistry.core.MolecularExcitedStatesResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                               |                                                                                                                                                                                                                      |
| `fromkeys`(iterable\[, value])                                                                                                                         |                                                                                                                                                                                                                      |
| [`get`](#qiskit.chemistry.core.MolecularExcitedStatesResult.get "qiskit.chemistry.core.MolecularExcitedStatesResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.chemistry.core.MolecularExcitedStatesResult.items "qiskit.chemistry.core.MolecularExcitedStatesResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.chemistry.core.MolecularExcitedStatesResult.keys "qiskit.chemistry.core.MolecularExcitedStatesResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.chemistry.core.MolecularExcitedStatesResult.pop "qiskit.chemistry.core.MolecularExcitedStatesResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.chemistry.core.MolecularExcitedStatesResult.popitem "qiskit.chemistry.core.MolecularExcitedStatesResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.chemistry.core.MolecularExcitedStatesResult.setdefault "qiskit.chemistry.core.MolecularExcitedStatesResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.chemistry.core.MolecularExcitedStatesResult.update "qiskit.chemistry.core.MolecularExcitedStatesResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.chemistry.core.MolecularExcitedStatesResult.values "qiskit.chemistry.core.MolecularExcitedStatesResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                                          |                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`algorithm_result`](#qiskit.chemistry.core.MolecularExcitedStatesResult.algorithm_result "qiskit.chemistry.core.MolecularExcitedStatesResult.algorithm_result")                         | Returns raw algorithm result                                                     |
| [`energies`](#qiskit.chemistry.core.MolecularExcitedStatesResult.energies "qiskit.chemistry.core.MolecularExcitedStatesResult.energies")                                                 | Returns ground state energy                                                      |
| [`hartree_fock_energy`](#qiskit.chemistry.core.MolecularExcitedStatesResult.hartree_fock_energy "qiskit.chemistry.core.MolecularExcitedStatesResult.hartree_fock_energy")                | Returns Hartree-Fock energy                                                      |
| [`nuclear_dipole_moment`](#qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_dipole_moment "qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_dipole_moment")          | Returns nuclear dipole moment X,Y,Z components in A.U when available from driver |
| [`nuclear_repulsion_energy`](#qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_repulsion_energy "qiskit.chemistry.core.MolecularExcitedStatesResult.nuclear_repulsion_energy") | Returns nuclear repulsion energy when available from driver                      |

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

`property energies`

Returns ground state energy

**Return type**

`Tuple`

<span id="undefined" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

<span id="undefined" />

`property hartree_fock_energy`

Returns Hartree-Fock energy

**Return type**

`float`

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

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

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
