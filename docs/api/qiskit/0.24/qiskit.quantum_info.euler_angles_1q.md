<span id="qiskit-quantum-info-euler-angles-1q" />

# qiskit.quantum\_info.euler\_angles\_1q

<span id="undefined" />

`euler_angles_1q(unitary_matrix)`

DEPRECATED: Compute Euler angles for a single-qubit gate.

Find angles (theta, phi, lambda) such that unitary\_matrix = phase \* Rz(phi) \* Ry(theta) \* Rz(lambda)

**Parameters**

**unitary\_matrix** (*ndarray*) – 2x2 unitary matrix

**Returns**

(theta, phi, lambda) Euler angles of SU(2)

**Return type**

tuple

**Raises**

**QiskitError** – if unitary\_matrix not 2x2, or failure
