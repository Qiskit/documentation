# qiskit.algorithms.IterativeAmplitudeEstimation.construct\_circuit

`IterativeAmplitudeEstimation.construct_circuit(estimation_problem, k=0, measurement=False)`

Construct the circuit $\mathcal{Q}^k \mathcal{A} |0\rangle$.

The A operator is the unitary specifying the QAE problem and Q the associated Grover operator.

**Parameters**

*   **estimation\_problem** (`EstimationProblem`) – The estimation problem for which to construct the QAE circuit.
*   **k** (`int`) – The power of the Q operator.
*   **measurement** (`bool`) – Boolean flag to indicate if measurements should be included in the circuits.

**Return type**

`QuantumCircuit`

**Returns**

The circuit implementing $\mathcal{Q}^k \mathcal{A} |0\rangle$.
