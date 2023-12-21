# qiskit.quantum\_info.DensityMatrix.from\_label

`classmethod DensityMatrix.from_label(label)`

Return a tensor product of Pauli X,Y,Z eigenstates.

| Label | Statevector                                                 |
| ----- | ----------------------------------------------------------- |
| `"0"` | $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$              |
| `"1"` | $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$              |
| `"+"` | $\frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$   |
| `"-"` | $\frac{1}{2}\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$ |
| `"r"` | $\frac{1}{2}\begin{pmatrix} 1 & -i \\ i & 1 \end{pmatrix}$  |
| `"l"` | $\frac{1}{2}\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$  |

**Parameters**

**label** (*string*) – a eigenstate string ket label (see table for allowed values).

**Returns**

The N-qubit basis state density matrix.

**Return type**

[Statevector](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the label contains invalid characters, or the length of the label is larger than an explicitly specified num\_qubits.
