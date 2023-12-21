# qiskit.algorithms.FasterAmplitudeEstimation.construct\_circuit

`FasterAmplitudeEstimation.construct_circuit(estimation_problem, k, measurement=False)`

Construct the circuit $Q^k X |0\rangle>$.

The A operator is the unitary specifying the QAE problem and Q the associated Grover operator.

**Parameters**

*   **estimation\_problem** (`EstimationProblem`) – The estimation problem for which to construct the circuit.
*   **k** (`int`) – The power of the Q operator.
*   **measurement** (`bool`) – Boolean flag to indicate if measurements should be included in the circuits.

**Return type**

`Union`\[`QuantumCircuit`, `Tuple`\[`QuantumCircuit`, `List`\[`int`]]]

**Returns**

The circuit $Q^k X |0\rangle$.
