# qiskit.quantum\_info.Statevector.reverse\_qargs

`Statevector.reverse_qargs()`

Return a Statevector with reversed subsystem ordering.

For a tensor product state this is equivalent to reversing the order of tensor product subsystems. For a statevector $|\psi \rangle = |\psi_{n-1} \rangle \otimes ... \otimes |\psi_0 \rangle$ the returned statevector will be $|\psi_{0} \rangle \otimes ... \otimes |\psi_{n-1} \rangle$.

**Returns**

the Statevector with reversed subsystem order.

**Return type**

[Statevector](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")
