# qiskit.providers.ibmq.runtime.ParameterNamespace

<span id="undefined" />

`ParameterNamespace(params)`

A namespace for program parameters with validation.

This class provides a namespace for program parameters with auto-completion and validation support.

ParameterNamespace constructor.

**Parameters**

**params** (`List`\[`ProgramParameter`]) – The program’s input parameters.

<span id="undefined" />

`__init__(params)`

ParameterNamespace constructor.

**Parameters**

**params** (`List`\[`ProgramParameter`]) – The program’s input parameters.

## Methods

|                                                                                                                                              |                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.runtime.ParameterNamespace.__init__ "qiskit.providers.ibmq.runtime.ParameterNamespace.__init__")(params) | ParameterNamespace constructor. |
| [`validate`](#qiskit.providers.ibmq.runtime.ParameterNamespace.validate "qiskit.providers.ibmq.runtime.ParameterNamespace.validate")()       | Validate program input values.  |

## Attributes

|                                                                                                                                      |                                |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| [`metadata`](#qiskit.providers.ibmq.runtime.ParameterNamespace.metadata "qiskit.providers.ibmq.runtime.ParameterNamespace.metadata") | Returns the parameter metadata |

<span id="undefined" />

`property metadata`

Returns the parameter metadata

**Return type**

`List`\[`ProgramParameter`]

<span id="undefined" />

`validate()`

Validate program input values.

<Admonition title="Note" type="note">
  This method only verifies that required parameters have values. It does not fail the validation if the namepsace has extraneous parameters.
</Admonition>

**Raises**

**IBMQInputValueError if validation fails** –

**Return type**

`None`
