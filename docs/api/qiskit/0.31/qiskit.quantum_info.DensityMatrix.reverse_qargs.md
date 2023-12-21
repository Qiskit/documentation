# qiskit.quantum\_info.DensityMatrix.reverse\_qargs

`DensityMatrix.reverse_qargs()`

Return a DensityMatrix with reversed subsystem ordering.

For a tensor product state this is equivalent to reversing the order of tensor product subsystems. For a density matrix $\rho = \rho_{n-1} \otimes ... \otimes \rho_0$ the returned state will be $\rho_0 \otimes ... \otimes \rho_{n-1}$.

**Returns**

the state with reversed subsystem order.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")
