<span id="qiskit-circuit-parametervector" />

# qiskit.circuit.ParameterVector

<span id="undefined" />

`ParameterVector(name, length=0)`

ParameterVector class to quickly generate lists of parameters.

<span id="undefined" />

`__init__(name, length=0)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                   |                              |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`__init__`](#qiskit.circuit.ParameterVector.__init__ "qiskit.circuit.ParameterVector.__init__")(name\[, length]) | Initialize self.             |
| [`resize`](#qiskit.circuit.ParameterVector.resize "qiskit.circuit.ParameterVector.resize")(length)                | Resize the parameter vector. |

## Attributes

|                                                                                            |                                                        |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`name`](#qiskit.circuit.ParameterVector.name "qiskit.circuit.ParameterVector.name")       | Returns the name of the ParameterVector.               |
| [`params`](#qiskit.circuit.ParameterVector.params "qiskit.circuit.ParameterVector.params") | Returns the list of parameters in the ParameterVector. |

<span id="undefined" />

`property name`

Returns the name of the ParameterVector.

<span id="undefined" />

`property params`

Returns the list of parameters in the ParameterVector.

<span id="undefined" />

`resize(length)`

Resize the parameter vector.

If necessary, new elements are generated. If length is smaller than before, the previous elements are cached and not re-generated if the vector is enlargened again. This is to ensure that the parameter instances do not change.
