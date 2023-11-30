# ParameterNamespace

<span id="undefined" />

`ParameterNamespace(params)`

Bases: `types.SimpleNamespace`

A namespace for program parameters with validation.

This class provides a namespace for program parameters with auto-completion and validation support.

ParameterNamespace constructor.

**Parameters**

**params** (`List`\[`ProgramParameter`]) – The program’s input parameters.

## Methods

|                                                                                                                                                                                               |                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`validate`](qiskit.providers.ibmq.runtime.ParameterNamespace.validate#qiskit.providers.ibmq.runtime.ParameterNamespace.validate "qiskit.providers.ibmq.runtime.ParameterNamespace.validate") | Validate program input values. |

## Attributes

<span id="undefined" />

### metadata

Returns the parameter metadata

**Return type**

`List`\[`ProgramParameter`]
