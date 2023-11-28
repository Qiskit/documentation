# EigenstateResult

<span id="undefined" />

`EigenstateResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

The eigenstate result interface.

## Methods

|                                                                                                                                                                                  |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.chemistry.results.EigenstateResult.clear#qiskit.chemistry.results.EigenstateResult.clear "qiskit.chemistry.results.EigenstateResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.chemistry.results.EigenstateResult.combine#qiskit.chemistry.results.EigenstateResult.combine "qiskit.chemistry.results.EigenstateResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.chemistry.results.EigenstateResult.copy#qiskit.chemistry.results.EigenstateResult.copy "qiskit.chemistry.results.EigenstateResult.copy")                         |                                                                                                                                                                                                                      |
| [`fromkeys`](qiskit.chemistry.results.EigenstateResult.fromkeys#qiskit.chemistry.results.EigenstateResult.fromkeys "qiskit.chemistry.results.EigenstateResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.chemistry.results.EigenstateResult.get#qiskit.chemistry.results.EigenstateResult.get "qiskit.chemistry.results.EigenstateResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.chemistry.results.EigenstateResult.items#qiskit.chemistry.results.EigenstateResult.items "qiskit.chemistry.results.EigenstateResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.chemistry.results.EigenstateResult.keys#qiskit.chemistry.results.EigenstateResult.keys "qiskit.chemistry.results.EigenstateResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.chemistry.results.EigenstateResult.pop#qiskit.chemistry.results.EigenstateResult.pop "qiskit.chemistry.results.EigenstateResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.chemistry.results.EigenstateResult.popitem#qiskit.chemistry.results.EigenstateResult.popitem "qiskit.chemistry.results.EigenstateResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.chemistry.results.EigenstateResult.setdefault#qiskit.chemistry.results.EigenstateResult.setdefault "qiskit.chemistry.results.EigenstateResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.chemistry.results.EigenstateResult.update#qiskit.chemistry.results.EigenstateResult.update "qiskit.chemistry.results.EigenstateResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.chemistry.results.EigenstateResult.values#qiskit.chemistry.results.EigenstateResult.values "qiskit.chemistry.results.EigenstateResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`List`\[`float`]]

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

### raw\_result

Returns the raw algorithm result.

**Return type**

`Optional`\[`AlgorithmResult`]
