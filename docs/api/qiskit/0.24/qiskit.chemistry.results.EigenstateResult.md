<span id="qiskit-chemistry-results-eigenstateresult" />

# qiskit.chemistry.results.EigenstateResult

<span id="undefined" />

`EigenstateResult(a_dict=None)`

The eigenstate result interface.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                      |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.results.EigenstateResult.__init__ "qiskit.chemistry.results.EigenstateResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.chemistry.results.EigenstateResult.clear "qiskit.chemistry.results.EigenstateResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.chemistry.results.EigenstateResult.combine "qiskit.chemistry.results.EigenstateResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                             |                                                                                                                                                                                                                      |
| `fromkeys`(iterable\[, value])                                                                                                       |                                                                                                                                                                                                                      |
| [`get`](#qiskit.chemistry.results.EigenstateResult.get "qiskit.chemistry.results.EigenstateResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.chemistry.results.EigenstateResult.items "qiskit.chemistry.results.EigenstateResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.chemistry.results.EigenstateResult.keys "qiskit.chemistry.results.EigenstateResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.chemistry.results.EigenstateResult.pop "qiskit.chemistry.results.EigenstateResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.chemistry.results.EigenstateResult.popitem "qiskit.chemistry.results.EigenstateResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.chemistry.results.EigenstateResult.setdefault "qiskit.chemistry.results.EigenstateResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.chemistry.results.EigenstateResult.update "qiskit.chemistry.results.EigenstateResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.chemistry.results.EigenstateResult.values "qiskit.chemistry.results.EigenstateResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                        |                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`aux_operator_eigenvalues`](#qiskit.chemistry.results.EigenstateResult.aux_operator_eigenvalues "qiskit.chemistry.results.EigenstateResult.aux_operator_eigenvalues") | return aux operator eigen values  |
| [`eigenenergies`](#qiskit.chemistry.results.EigenstateResult.eigenenergies "qiskit.chemistry.results.EigenstateResult.eigenenergies")                                  | returns eigen energies            |
| [`eigenstates`](#qiskit.chemistry.results.EigenstateResult.eigenstates "qiskit.chemistry.results.EigenstateResult.eigenstates")                                        | returns eigen states              |
| [`groundenergy`](#qiskit.chemistry.results.EigenstateResult.groundenergy "qiskit.chemistry.results.EigenstateResult.groundenergy")                                     | returns ground energy             |
| [`groundstate`](#qiskit.chemistry.results.EigenstateResult.groundstate "qiskit.chemistry.results.EigenstateResult.groundstate")                                        | returns ground state              |
| [`raw_result`](#qiskit.chemistry.results.EigenstateResult.raw_result "qiskit.chemistry.results.EigenstateResult.raw_result")                                           | Returns the raw algorithm result. |

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

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

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

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
