---
title: VibronicStructureResult
description: API reference for qiskit.chemistry.results.VibronicStructureResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.results.VibronicStructureResult
---

# qiskit.chemistry.results.VibronicStructureResult

<span id="qiskit.chemistry.results.VibronicStructureResult" />

`VibronicStructureResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/results/vibronic_structure_result.py "view source code")

The vibronic structure result.

### \_\_init\_\_

<span id="qiskit.chemistry.results.VibronicStructureResult.__init__" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                    |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.results.VibronicStructureResult.__init__ "qiskit.chemistry.results.VibronicStructureResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.chemistry.results.VibronicStructureResult.clear "qiskit.chemistry.results.VibronicStructureResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.chemistry.results.VibronicStructureResult.combine "qiskit.chemistry.results.VibronicStructureResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                           |                                                                                                                                                                                                                      |
| `fromkeys`(iterable\[, value])                                                                                                                     |                                                                                                                                                                                                                      |
| [`get`](#qiskit.chemistry.results.VibronicStructureResult.get "qiskit.chemistry.results.VibronicStructureResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.chemistry.results.VibronicStructureResult.items "qiskit.chemistry.results.VibronicStructureResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.chemistry.results.VibronicStructureResult.keys "qiskit.chemistry.results.VibronicStructureResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.chemistry.results.VibronicStructureResult.pop "qiskit.chemistry.results.VibronicStructureResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.chemistry.results.VibronicStructureResult.popitem "qiskit.chemistry.results.VibronicStructureResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.chemistry.results.VibronicStructureResult.setdefault "qiskit.chemistry.results.VibronicStructureResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.chemistry.results.VibronicStructureResult.update "qiskit.chemistry.results.VibronicStructureResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.chemistry.results.VibronicStructureResult.values "qiskit.chemistry.results.VibronicStructureResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                                                  |                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| [`algorithm_result`](#qiskit.chemistry.results.VibronicStructureResult.algorithm_result "qiskit.chemistry.results.VibronicStructureResult.algorithm_result")                                     | Returns raw algorithm result                            |
| [`aux_operator_eigenvalues`](#qiskit.chemistry.results.VibronicStructureResult.aux_operator_eigenvalues "qiskit.chemistry.results.VibronicStructureResult.aux_operator_eigenvalues")             | return aux operator eigen values                        |
| [`computed_vibronic_energies`](#qiskit.chemistry.results.VibronicStructureResult.computed_vibronic_energies "qiskit.chemistry.results.VibronicStructureResult.computed_vibronic_energies")       | Returns computed electronic part of ground state energy |
| [`eigenenergies`](#qiskit.chemistry.results.VibronicStructureResult.eigenenergies "qiskit.chemistry.results.VibronicStructureResult.eigenenergies")                                              | returns eigen energies                                  |
| [`eigenstates`](#qiskit.chemistry.results.VibronicStructureResult.eigenstates "qiskit.chemistry.results.VibronicStructureResult.eigenstates")                                                    | returns eigen states                                    |
| [`formatted`](#qiskit.chemistry.results.VibronicStructureResult.formatted "qiskit.chemistry.results.VibronicStructureResult.formatted")                                                          | Formatted result as a list of strings                   |
| [`groundenergy`](#qiskit.chemistry.results.VibronicStructureResult.groundenergy "qiskit.chemistry.results.VibronicStructureResult.groundenergy")                                                 | returns ground energy                                   |
| [`groundstate`](#qiskit.chemistry.results.VibronicStructureResult.groundstate "qiskit.chemistry.results.VibronicStructureResult.groundstate")                                                    | returns ground state                                    |
| [`num_occupied_modals_per_mode`](#qiskit.chemistry.results.VibronicStructureResult.num_occupied_modals_per_mode "qiskit.chemistry.results.VibronicStructureResult.num_occupied_modals_per_mode") | Returns the number of occupied modal per mode           |
| [`raw_result`](#qiskit.chemistry.results.VibronicStructureResult.raw_result "qiskit.chemistry.results.VibronicStructureResult.raw_result")                                                       | Returns the raw algorithm result.                       |

### algorithm\_result

<span id="qiskit.chemistry.results.VibronicStructureResult.algorithm_result" />

`property algorithm_result`

Returns raw algorithm result

**Return type**

`AlgorithmResult`

### aux\_operator\_eigenvalues

<span id="qiskit.chemistry.results.VibronicStructureResult.aux_operator_eigenvalues" />

`property aux_operator_eigenvalues`

return aux operator eigen values

**Return type**

`Optional`\[`List`\[`float`]]

### clear

<span id="qiskit.chemistry.results.VibronicStructureResult.clear" />

`clear()`

**Return type**

`None`

### combine

<span id="qiskit.chemistry.results.VibronicStructureResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### computed\_vibronic\_energies

<span id="qiskit.chemistry.results.VibronicStructureResult.computed_vibronic_energies" />

`property computed_vibronic_energies`

Returns computed electronic part of ground state energy

**Return type**

`ndarray`

### eigenenergies

<span id="qiskit.chemistry.results.VibronicStructureResult.eigenenergies" />

`property eigenenergies`

returns eigen energies

**Return type**

`Optional`\[`ndarray`]

### eigenstates

<span id="qiskit.chemistry.results.VibronicStructureResult.eigenstates" />

`property eigenstates`

returns eigen states

**Return type**

`Optional`\[`List`\[`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]]]

### formatted

<span id="qiskit.chemistry.results.VibronicStructureResult.formatted" />

`property formatted`

Formatted result as a list of strings

**Return type**

`List`\[`str`]

### get

<span id="qiskit.chemistry.results.VibronicStructureResult.get" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### groundenergy

<span id="qiskit.chemistry.results.VibronicStructureResult.groundenergy" />

`property groundenergy`

returns ground energy

**Return type**

`Optional`\[`float`]

### groundstate

<span id="qiskit.chemistry.results.VibronicStructureResult.groundstate" />

`property groundstate`

returns ground state

**Return type**

`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`, `None`]

### items

<span id="qiskit.chemistry.results.VibronicStructureResult.items" />

`items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.chemistry.results.VibronicStructureResult.keys" />

`keys() → a set-like object providing a view on D’s keys`

### num\_occupied\_modals\_per\_mode

<span id="qiskit.chemistry.results.VibronicStructureResult.num_occupied_modals_per_mode" />

`property num_occupied_modals_per_mode`

Returns the number of occupied modal per mode

**Return type**

`Optional`\[`List`\[`float`]]

### pop

<span id="qiskit.chemistry.results.VibronicStructureResult.pop" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.chemistry.results.VibronicStructureResult.popitem" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### raw\_result

<span id="qiskit.chemistry.results.VibronicStructureResult.raw_result" />

`property raw_result`

Returns the raw algorithm result.

**Return type**

`Optional`\[`AlgorithmResult`]

### setdefault

<span id="qiskit.chemistry.results.VibronicStructureResult.setdefault" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.chemistry.results.VibronicStructureResult.update" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.chemistry.results.VibronicStructureResult.values" />

`values() → an object providing a view on D’s values`

