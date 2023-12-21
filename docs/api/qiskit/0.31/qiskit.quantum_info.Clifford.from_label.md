# qiskit.quantum\_info.Clifford.from\_label

`static Clifford.from_label(label)`

Return a tensor product of single-qubit Clifford gates.

**Parameters**

**label** (*string*) – single-qubit operator string.

**Returns**

The N-qubit Clifford operator.

**Return type**

[Clifford](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

**Raises**

**QiskitError** – if the label contains invalid characters.

## Additional Information:

The labels correspond to the single-qubit Cliffords are

*   *   Label
    *   Stabilizer
    *   Destabilizer
*   *   `"I"`
    *   +Z
    *   +X
*   *   `"X"`
    *   -Z
    *   +X
*   *   `"Y"`
    *   -Z
    *   -X
*   *   `"Z"`
    *   +Z
    *   -X
*   *   `"H"`
    *   +X
    *   +Z
*   *   `"S"`
    *   +Z
    *   +Y
