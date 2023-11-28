# qiskit.aqua.operators.evolutions.MatrixEvolution

<span id="undefined" />

`MatrixEvolution`

Performs Evolution by classical matrix exponentiation, constructing a circuit with `UnitaryGates` or `HamiltonianGates` containing the exponentiation of the Operator.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                             |                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.evolutions.MatrixEvolution.__init__ "qiskit.aqua.operators.evolutions.MatrixEvolution.__init__")()      | Initialize self.                                                                                                                                                                                           |
| [`convert`](#qiskit.aqua.operators.evolutions.MatrixEvolution.convert "qiskit.aqua.operators.evolutions.MatrixEvolution.convert")(operator) | Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing `UnitaryGates` or `HamiltonianGates` (if self.coeff is a `ParameterExpression`) equalling the exponentiation of -i \* operator. |

<span id="undefined" />

`convert(operator)`

Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing `UnitaryGates` or `HamiltonianGates` (if self.coeff is a `ParameterExpression`) equalling the exponentiation of -i \* operator. This is done by converting the `EvolvedOp.primitive` to a `MatrixOp` and simply calling `.exp_i()` on that.

**Parameters**

**operator** (`OperatorBase`) – The Operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted operator.
