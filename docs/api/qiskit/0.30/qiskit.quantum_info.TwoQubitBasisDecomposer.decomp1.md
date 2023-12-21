# qiskit.quantum\_info.TwoQubitBasisDecomposer.decomp1

`TwoQubitBasisDecomposer.decomp1(target)`

Decompose target \~Ud(x, y, z) with 1 uses of the basis gate \~Ud(a, b, c). Result Ur has trace: .. math:

```python
|Tr(Ur.Utarget^dag)| = 4|cos(x-a)cos(y-b)cos(z-c) + j sin(x-a)sin(y-b)sin(z-c)|
```

which is optimal for all targets and bases with z==0 or c==0
