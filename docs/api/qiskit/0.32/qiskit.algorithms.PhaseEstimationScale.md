# PhaseEstimationScale

<span id="undefined" />

`PhaseEstimationScale(bound)`

Bases: `object`

Set and use a bound on eigenvalues of a Hermitian operator in order to ensure phases are in the desired range and to convert measured phases into eigenvectors.

The `bound` is set when constructing this class. Then the method `scale` is used to find the factor by which to scale the operator.

If `bound` is equal exactly to the largest eigenvalue, and the smallest eigenvalue is minus the largest, then these two eigenvalues will not be distinguished. For example, if the Hermitian operator is the Pauli Z operator with eigenvalues $1$ and $-1$, and `bound` is $1$, then both eigenvalues will be mapped to $1$. This can be avoided by making `bound` a bit larger.

Increasing `bound` decreases the part of the interval $[0, 1)$ that is used to map eigenvalues to `phi`. However, sometimes this results in a better determination of the eigenvalues, because 1) although there are fewer discrete phases in the useful range, it may shift one of the discrete phases closer to the actual phase. And, 2) If one of the discrete phases is close to, or exactly equal to the actual phase, then artifacts (probability) in neighboring phases will be reduced. This is important because the artifacts may be larger than the probability in a phase representing another eigenvalue of interest whose corresponding eigenstate has a relatively small weight in the input state.

**Parameters**

**bound** (`float`) – an upper bound on the absolute value of the eigenvalues of a Hermitian operator. (The operator is not needed here.)

## Methods

|                                                                                                                                                                                         |                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [`from_pauli_sum`](qiskit.algorithms.PhaseEstimationScale.from_pauli_sum#qiskit.algorithms.PhaseEstimationScale.from_pauli_sum "qiskit.algorithms.PhaseEstimationScale.from_pauli_sum") | Create a PhaseEstimationScale from a SummedOp representing a sum of Pauli Operators. |
| [`scale_phase`](qiskit.algorithms.PhaseEstimationScale.scale_phase#qiskit.algorithms.PhaseEstimationScale.scale_phase "qiskit.algorithms.PhaseEstimationScale.scale_phase")             | Convert a phase into an eigenvalue.                                                  |
| [`scale_phases`](qiskit.algorithms.PhaseEstimationScale.scale_phases#qiskit.algorithms.PhaseEstimationScale.scale_phases "qiskit.algorithms.PhaseEstimationScale.scale_phases")         | Convert a list or dict of phases to eigenvalues.                                     |

## Attributes

<span id="undefined" />

### scale

Return the Hamiltonian scaling factor.

Return the scale factor by which a Hermitian operator must be multiplied so that the phase of the corresponding unitary is restricted to $[-\pi, \pi]$. This factor is computed from the bound on the absolute values of the eigenvalues of the operator. The methods `scale_phase` and `scale_phases` are used recover the eigenvalues corresponding the original (unscaled) Hermitian operator.

**Return type**

`float`

**Returns**

The scale factor.
