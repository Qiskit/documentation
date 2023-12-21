# qiskit.quantum\_info.Statevector.inner

`Statevector.inner(other)`

Return the inner product of self and other as $\langle self| other \rangle$.

**Parameters**

**other** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – a quantum state object.

**Returns**

the inner product of self and other, $\langle self| other \rangle$.

**Return type**

np.complex128

**Raises**

**QiskitError** – if other is not a quantum state or has different dimension.
