# qiskit.opflow\.converters.AbelianGrouper.convert

`AbelianGrouper.convert(operator)`

Check if operator is a SummedOp, in which case covert it into a sum of mutually commuting sums, or if the Operator contains sub-Operators and `traverse` is True, attempt to convert any sub-Operators.

**Parameters**

**operator** (`OperatorBase`) – The Operator to attempt to convert.

**Return type**

`OperatorBase`

**Returns**

The converted Operator.
