# PhaseEstimationResult[¶](#phaseestimationresult "Permalink to this headline")

<span id="undefined" />

`PhaseEstimationResult(num_evaluation_qubits, circuit_result, phases)`

Bases: `qiskit.algorithms.phase_estimators.phase_estimator.PhaseEstimatorResult`

Store and manipulate results from running PhaseEstimation.

This class is instantiated by the `PhaseEstimation` class, not via user code. The `PhaseEstimation` class generates a list of phases and corresponding weights. Upon completion it returns the results as an instance of this class. The main method for accessing the results is filter\_phases.

The canonical phase satisfying the `PhaseEstimator` interface, returned by the attribute phase, is the most likely phase.

**Parameters**

*   **num\_evaluation\_qubits** (`int`) – number of qubits in phase-readout register.
*   **circuit\_result** (`Result`) – result object returned by method running circuit.
*   **phases** (`Union`\[`ndarray`, `Dict`\[`str`, `float`]]) – ndarray or dict of phases and frequencies determined by QPE.

## Methods

|                                                                                                                                                                                        |                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.PhaseEstimationResult.combine#qiskit.algorithms.PhaseEstimationResult.combine "qiskit.algorithms.PhaseEstimationResult.combine")                         | Any property from the argument that exists in the receiver is updated. |
| [`filter_phases`](qiskit.algorithms.PhaseEstimationResult.filter_phases#qiskit.algorithms.PhaseEstimationResult.filter_phases "qiskit.algorithms.PhaseEstimationResult.filter_phases") | Return a filtered dict of phases (keys) and frequencies (values).      |

## Attributes

<span id="undefined" />

### circuit\_result

Return the result object returned by running the QPE circuit (on hardware or simulator).

This is useful for inspecting and troubleshooting the QPE algorithm.

**Return type**

`Result`

<span id="undefined" />

### most\_likely\_phase

DEPRECATED - Return the most likely phase as a number in $[0.0, 1.0)$.

1.0 corresponds to a phase of $2\pi$. This selects the phase corresponding to the bit string with the highesest probability. This is the most likely phase.

**Return type**

`float`

<span id="undefined" />

### phase

Return the most likely phase as a number in $[0.0, 1.0)$.

1.0 corresponds to a phase of $2\pi$. This selects the phase corresponding to the bit string with the highesest probability. This is the most likely phase.

**Return type**

`float`

<span id="undefined" />

### phases

Return all phases and their frequencies computed by QPE.

This is an array or dict whose values correspond to weights on bit strings.

**Return type**

`Union`\[`ndarray`, `dict`]
