# qiskit.quantum\_info.Statevector.equiv

`Statevector.equiv(other, rtol=None, atol=None)`

Return True if other is equivalent as a statevector up to global phase.

<Admonition title="Note" type="note">
  If other is not a Statevector, but can be used to initialize a statevector object, this will check that Statevector(other) is equivalent to the current statevector up to global phase.
</Admonition>

**Parameters**

*   **other** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – an object from which a `Statevector` can be constructed.
*   **rtol** (*float*) – relative tolerance value for comparison.
*   **atol** (*float*) – absolute tolerance value for comparison.

**Returns**

True if statevectors are equivalent up to global phase.

**Return type**

bool
