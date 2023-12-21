# qiskit.aqua.algorithms.IterativeAmplitudeEstimation.construct\_circuit

`IterativeAmplitudeEstimation.construct_circuit(k, measurement=False)`

Construct the circuit Q^k A |0>.

The A operator is the unitary specifying the QAE problem and Q the associated Grover operator.

**Parameters**

*   **k** (`int`) – The power of the Q operator.
*   **measurement** (`bool`) – Boolean flag to indicate if measurements should be included in the circuits.

**Return type**

`QuantumCircuit`

**Returns**

The circuit Q^k A |0>.
