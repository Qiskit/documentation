# qiskit.algorithms.PhaseEstimationScale.from\_pauli\_sum

`classmethod PhaseEstimationScale.from_pauli_sum(pauli_sum)`

Create a PhaseEstimationScale from a SummedOp representing a sum of Pauli Operators.

It is assumed that the `pauli_sum` is the sum of `PauliOp` objects. The bound on the absolute value of the eigenvalues of the sum is obtained as the sum of the absolute values of the coefficients of the terms. This is the best bound available in the generic case. A `PhaseEstimationScale` object is instantiated using this bound.

**Parameters**

**pauli\_sum** (`SummedOp`) – A `SummedOp` whose terms are `PauliOp` objects.

**Raises**

**ValueError** – if `pauli_sum` is not a sum of Pauli operators.

**Return type**

`PhaseEstimationScale`

**Returns**

A `PhaseEstimationScale` object
