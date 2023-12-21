# qiskit.quantum\_info.Operator.reverse\_qargs

`Operator.reverse_qargs()`

Return an Operator with reversed subsystem ordering.

For a tensor product operator this is equivalent to reversing the order of tensor product subsystems. For an operator $A = A_{n-1} \otimes ... \otimes A_0$ the returned operator will be $A_0 \otimes ... \otimes A_{n-1}$.

**Returns**

the operator with reversed subsystem order.

**Return type**

[Operator](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")
