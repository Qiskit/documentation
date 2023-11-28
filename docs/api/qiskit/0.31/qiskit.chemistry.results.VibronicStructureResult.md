# VibronicStructureResult

<span id="undefined" />

`VibronicStructureResult(a_dict=None)`

Bases: `qiskit.chemistry.results.eigenstate_result.EigenstateResult`

The vibronic structure result.

## Methods

|                                                                                                                                                                                                       |                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.chemistry.results.VibronicStructureResult.clear#qiskit.chemistry.results.VibronicStructureResult.clear "qiskit.chemistry.results.VibronicStructureResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.chemistry.results.VibronicStructureResult.combine#qiskit.chemistry.results.VibronicStructureResult.combine "qiskit.chemistry.results.VibronicStructureResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.chemistry.results.VibronicStructureResult.copy#qiskit.chemistry.results.VibronicStructureResult.copy "qiskit.chemistry.results.VibronicStructureResult.copy")                         |                                                                                                                                                                                                                      |
| [`fromkeys`](qiskit.chemistry.results.VibronicStructureResult.fromkeys#qiskit.chemistry.results.VibronicStructureResult.fromkeys "qiskit.chemistry.results.VibronicStructureResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.chemistry.results.VibronicStructureResult.get#qiskit.chemistry.results.VibronicStructureResult.get "qiskit.chemistry.results.VibronicStructureResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.chemistry.results.VibronicStructureResult.items#qiskit.chemistry.results.VibronicStructureResult.items "qiskit.chemistry.results.VibronicStructureResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.chemistry.results.VibronicStructureResult.keys#qiskit.chemistry.results.VibronicStructureResult.keys "qiskit.chemistry.results.VibronicStructureResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.chemistry.results.VibronicStructureResult.pop#qiskit.chemistry.results.VibronicStructureResult.pop "qiskit.chemistry.results.VibronicStructureResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.chemistry.results.VibronicStructureResult.popitem#qiskit.chemistry.results.VibronicStructureResult.popitem "qiskit.chemistry.results.VibronicStructureResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.chemistry.results.VibronicStructureResult.setdefault#qiskit.chemistry.results.VibronicStructureResult.setdefault "qiskit.chemistry.results.VibronicStructureResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.chemistry.results.VibronicStructureResult.update#qiskit.chemistry.results.VibronicStructureResult.update "qiskit.chemistry.results.VibronicStructureResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.chemistry.results.VibronicStructureResult.values#qiskit.chemistry.results.VibronicStructureResult.values "qiskit.chemistry.results.VibronicStructureResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### algorithm\_result

Returns raw algorithm result

**Return type**

`AlgorithmResult`

<span id="undefined" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### computed\_vibronic\_energies

Returns computed electronic part of ground state energy

**Return type**

`ndarray`

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

### formatted

Formatted result as a list of strings

**Return type**

`List`\[`str`]

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

### num\_occupied\_modals\_per\_mode

Returns the number of occupied modal per mode

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### raw\_result

Returns the raw algorithm result.

**Return type**

`Optional`\[`AlgorithmResult`]
