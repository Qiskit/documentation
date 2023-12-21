# qiskit.opflow\.list\_ops.TensoredOp.eval

`TensoredOp.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

ListOp’s eval recursively evaluates each Operator in `oplist`, and combines the results using the recombination function `combo_fn`.

**Parameters**

**front** (`Union`\[`str`, `dict`, `ndarray`, `OperatorBase`, `Statevector`, `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function.

**Return type**

`Union`\[`OperatorBase`, `complex`]

**Returns**

The output of the `oplist` Operators’ evaluation function, combined with the `combo_fn`. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

**Raises**

*   **NotImplementedError** – Raised if called for a subclass which is not distributive.
*   **TypeError** – Operators with mixed hierarchies, such as a ListOp containing both PrimitiveOps and ListOps, are not supported.
*   **NotImplementedError** – Attempting to call ListOp’s eval from a non-distributive subclass.
