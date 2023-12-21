# qiskit.opflow\.converters.PauliBasisChange.get\_cob\_circuit

`PauliBasisChange.get_cob_circuit(origin)`

Construct an Operator which maps the +1 and -1 eigenvectors of the origin Pauli to the +1 and -1 eigenvectors of the destination Pauli. It does so by

1.  converting any |i+⟩ or |i+⟩ eigenvector bits in the origin to |+⟩ and |-⟩ with S†s, then
2.  converting any |+⟩ or |+⟩ eigenvector bits in the converted origin to |0⟩ and |1⟩ with Hs, then
3.  writing the parity of the significant (Z-measured, rather than I) bits in the origin to a single “origin anchor bit,” using cnots, which will hold the parity of these bits,
4.  swapping the parity of the pauli anchor bit into a destination anchor bit using a swap gate (only if they are different, if there are any bits which are significant in both origin and dest, we set both anchors to one of these bits to avoid a swap).
5.  writing the parity of the destination anchor bit into the other significant bits of the destination,
6.  converting the |0⟩ and |1⟩ significant eigenvector bits to |+⟩ and |-⟩ eigenvector bits in the destination where the destination demands it (e.g. pauli.x == true for a bit), using Hs 8) converting the |+⟩ and |-⟩ significant eigenvector bits to |i+⟩ and |i-⟩ eigenvector bits in the destination where the destination demands it (e.g. pauli.x == true and pauli.z == true for a bit), using Ss

**Parameters**

**origin** (`Union`\[`Pauli`, `PauliOp`]) – The `Pauli` or `PauliOp` to map.

**Return type**

`Tuple`\[`PrimitiveOp`, `PauliOp`]

**Returns**

A tuple of a `PrimitiveOp` which equals the basis change mapping and a `PauliOp` which equals the destination basis.

**Raises**

*   **TypeError** – Attempting to convert from non-Pauli origin.
*   **ValueError** – Attempting to change a non-identity Pauli to an identity Pauli, or vice versa.
