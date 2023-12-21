# qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.expectation\_value

`CTMPExpvalMeasMitigator.expectation_value(counts, diagonal=None, qubits=None, clbits=None)`

Compute the mitigated expectation value of a diagonal observable.

This computes the mitigated estimator of $\langle O \rangle = \mbox{Tr}[\rho. O]$ of a diagonal observable $O = \sum_{x\in\{0, 1\}^n} O(x)|x\rangle\!\langle x|$.

**Parameters**

*   **counts** (`Dict`) – counts object
*   **diagonal** (`Optional`\[`ndarray`]) – Optional, the vector of diagonal values for summing the expectation value. If `None` the the default value is $[1, -1]^\otimes n$.
*   **qubits** (`Optional`\[`List`\[`int`]]) – Optional, the measured physical qubits the count bitstrings correspond to. If None qubits are assumed to be $[0, ..., n-1]$.
*   **clbits** (`Optional`\[`List`\[`int`]]) – Optional, if not None marginalize counts to the specified bits.

**Returns**

the expectation value and standard deviation.

**Return type**

(float, float)

## Additional Information:

The diagonal observable $O$ is input using the `diagonal` kwarg as a list or Numpy array $[O(0), ..., O(2^n -1)]$. If no diagonal is specified the diagonal of the Pauli operator :math\`O = mbox\{diag}(Z^\{otimes n}) = \[1, -1]^\{otimes n}\` is used.

The `clbits` kwarg is used to marginalize the input counts dictionary over the specified bit-values, and the `qubits` kwarg is used to specify which physical qubits these bit-values correspond to as `circuit.measure(qubits, clbits)`.
