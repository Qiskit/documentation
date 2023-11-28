<span id="qiskit-aqua-operators-converters-converterbase" />

# qiskit.aqua.operators.converters.ConverterBase

<span id="undefined" />

`ConverterBase`

Converters take an Operator and return a new Operator, generally isomorphic in some way with the first, but with certain desired properties. For example, a converter may accept `CircuitOp` and return a `SummedOp` of `PauliOps` representing the circuit unitary. Converters may not have polynomial space or time scaling in their operations. On the contrary, many converters, such as a `MatrixExpectation` or `MatrixEvolution`, which convert `PauliOps` to `MatrixOps` internally, will require time or space exponential in the number of qubits unless a clever trick is known (such as the use of sparse matrices).

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                         |                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.converters.ConverterBase.__init__ "qiskit.aqua.operators.converters.ConverterBase.__init__")()      | Initialize self.                                      |
| [`convert`](#qiskit.aqua.operators.converters.ConverterBase.convert "qiskit.aqua.operators.converters.ConverterBase.convert")(operator) | Accept the Operator and return the converted Operator |

<span id="undefined" />

`abstract convert(operator)`

Accept the Operator and return the converted Operator

**Parameters**

**operator** (`OperatorBase`) – The Operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted Operator.
