# qiskit.opflow\.list\_ops.SummedOp.add

`SummedOp.add(other)`

Return Operator addition of `self` and `other`, overloaded by `+`.

<Admonition title="Note" type="note">
  This appends `other` to `self.oplist` without checking `other` is already included or not. If you want to simplify them, please use `simplify()`.
</Admonition>

**Parameters**

**other** (`OperatorBase`) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`SummedOp`

**Returns**

A `SummedOp` equivalent to the sum of self and other.
