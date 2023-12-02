# qiskit.aqua.utils.tensorproduct

<span id="undefined" />

`tensorproduct(*args)`

Calculate tensor product.

m = tensorproduct(a,b,c,…) returns the kronecker product of its arguments. Each argument should either be a tensor, or a tuple containing a tensor and an integer, and tensor is put in zero-index slot. In the latter case, the integer specifies the repeat count for the tensor, e.g. tensorproduct(a,(b,3),c) = tensorproduct(a,b,b,b,c).

**Parameters**

**args** (*-*) –

**Returns**

the tensor product

**Return type**

np.ndarray
