# qiskit.opflow\.list\_ops.SummedOp.equals

`SummedOp.equals(other)`

Check if other is equal to self.

<Admonition title="Note" type="note">
  This is not a mathematical check for equality. If `self` and `other` implement the same operation but differ in the representation (e.g. different type of summands) `equals` will evaluate to `False`.
</Admonition>

**Parameters**

**other** (`OperatorBase`) – The other operator to check for equality.

**Return type**

`bool`

**Returns**

True, if other and self are equal, otherwise False.

## Examples

```python
>>> from qiskit.opflow import X, Z
>>> 2 * X == X + X
True
>>> X + Z == Z + X
True
```
