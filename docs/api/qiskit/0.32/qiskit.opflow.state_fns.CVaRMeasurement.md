# CVaRMeasurement

<span id="undefined" />

`CVaRMeasurement(primitive=None, alpha=1.0, coeff=1.0)`

Bases: `qiskit.opflow.state_fns.operator_state_fn.OperatorStateFn`

**A specialized measurement class to compute CVaR expectation values.**

See [https://arxiv.org/pdf/1907.04769.pdf](https://arxiv.org/pdf/1907.04769.pdf) for further details.

Used in `CVaRExpectation`, see there for more details.

**Parameters**

*   **primitive** (`Optional`\[`OperatorBase`]) – The `OperatorBase` which defines the diagonal operator measurement.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient by which to multiply the state function
*   **alpha** (`float`) – A real-valued parameter between 0 and 1 which specifies the fraction of observed samples to include when computing the objective value. alpha = 1 corresponds to a standard observable expectation value. alpha = 0 corresponds to only using the single sample with the lowest energy. alpha = 0.5 corresponds to ranking each observation by lowest energy and using the best

**Raises**

*   **ValueError** – TODO remove that this raises an error
*   **ValueError** – If alpha is not in \[0, 1].
*   [**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – If the primitive is not diagonal.

## Methods Defined Here

|                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.CVaRMeasurement.add#qiskit.opflow.state_fns.CVaRMeasurement.add "qiskit.opflow.state_fns.CVaRMeasurement.add")                                                                                                                             | Return Operator addition of self and other, overloaded by `+`.                                                                                                                                                                                 |
| [`adjoint`](qiskit.opflow.state_fns.CVaRMeasurement.adjoint#qiskit.opflow.state_fns.CVaRMeasurement.adjoint "qiskit.opflow.state_fns.CVaRMeasurement.adjoint")                                                                                                             | The adjoint of a CVaRMeasurement is not defined.                                                                                                                                                                                               |
| [`compute_cvar`](qiskit.opflow.state_fns.CVaRMeasurement.compute_cvar#qiskit.opflow.state_fns.CVaRMeasurement.compute_cvar "qiskit.opflow.state_fns.CVaRMeasurement.compute_cvar")                                                                                         | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the CVaR.                                                                                  |
| [`eval`](qiskit.opflow.state_fns.CVaRMeasurement.eval#qiskit.opflow.state_fns.CVaRMeasurement.eval "qiskit.opflow.state_fns.CVaRMeasurement.eval")                                                                                                                         | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the CVaR as H\_j + 1/α\*(sum\_i\<j p\_i\*(H\_i - H\_j)).                                   |
| [`eval_variance`](qiskit.opflow.state_fns.CVaRMeasurement.eval_variance#qiskit.opflow.state_fns.CVaRMeasurement.eval_variance "qiskit.opflow.state_fns.CVaRMeasurement.eval_variance")                                                                                     | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the variance of the CVaR estimator as H\_j^2 + 1/α \* (sum\_i\<j p\_i\*(H\_i^2 - H\_j^2)). |
| [`get_outcome_energies_probabilities`](qiskit.opflow.state_fns.CVaRMeasurement.get_outcome_energies_probabilities#qiskit.opflow.state_fns.CVaRMeasurement.get_outcome_energies_probabilities "qiskit.opflow.state_fns.CVaRMeasurement.get_outcome_energies_probabilities") | In order to compute the CVaR of an observable expectation, we require the energies of each sampled measurement outcome as well as the sampling probability of each measurement outcome.                                                        |
| [`mul`](qiskit.opflow.state_fns.CVaRMeasurement.mul#qiskit.opflow.state_fns.CVaRMeasurement.mul "qiskit.opflow.state_fns.CVaRMeasurement.mul")                                                                                                                             | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`).                                                                  |
| [`sample`](qiskit.opflow.state_fns.CVaRMeasurement.sample#qiskit.opflow.state_fns.CVaRMeasurement.sample "qiskit.opflow.state_fns.CVaRMeasurement.sample")                                                                                                                 | Sample the state function as a normalized probability distribution.                                                                                                                                                                            |
| [`tensor`](qiskit.opflow.state_fns.CVaRMeasurement.tensor#qiskit.opflow.state_fns.CVaRMeasurement.tensor "qiskit.opflow.state_fns.CVaRMeasurement.tensor")                                                                                                                 | Return tensor product between self and other, overloaded by `^`.                                                                                                                                                                               |
| [`to_circuit_op`](qiskit.opflow.state_fns.CVaRMeasurement.to_circuit_op#qiskit.opflow.state_fns.CVaRMeasurement.to_circuit_op "qiskit.opflow.state_fns.CVaRMeasurement.to_circuit_op")                                                                                     | Not defined.                                                                                                                                                                                                                                   |
| [`to_density_matrix`](qiskit.opflow.state_fns.CVaRMeasurement.to_density_matrix#qiskit.opflow.state_fns.CVaRMeasurement.to_density_matrix "qiskit.opflow.state_fns.CVaRMeasurement.to_density_matrix")                                                                     | Not defined.                                                                                                                                                                                                                                   |
| [`to_matrix`](qiskit.opflow.state_fns.CVaRMeasurement.to_matrix#qiskit.opflow.state_fns.CVaRMeasurement.to_matrix "qiskit.opflow.state_fns.CVaRMeasurement.to_matrix")                                                                                                     | Not defined.                                                                                                                                                                                                                                   |
| [`to_matrix_op`](qiskit.opflow.state_fns.CVaRMeasurement.to_matrix_op#qiskit.opflow.state_fns.CVaRMeasurement.to_matrix_op "qiskit.opflow.state_fns.CVaRMeasurement.to_matrix_op")                                                                                         | Not defined.                                                                                                                                                                                                                                   |
| [`traverse`](qiskit.opflow.state_fns.CVaRMeasurement.traverse#qiskit.opflow.state_fns.CVaRMeasurement.traverse "qiskit.opflow.state_fns.CVaRMeasurement.traverse")                                                                                                         | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                                                                                         |

## Attributes

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### alpha

**A real-valued parameter between 0 and 1 which specifies the**

fraction of observed samples to include when computing the objective value. alpha = 1 corresponds to a standard observable expectation value. alpha = 0 corresponds to only using the single sample with the lowest energy. alpha = 0.5 corresponds to ranking each observation by lowest energy and using the best half.

**Return type**

`float`

**Returns**

The parameter alpha which was given at initialization

<span id="undefined" />

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="undefined" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="undefined" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

<span id="undefined" />

### num\_qubits

**Return type**

`int`

<span id="undefined" />

### parameters

<span id="undefined" />

### primitive

`qiskit.opflow.operator_base.OperatorBase`

The primitive which defines the behavior of the underlying State function.

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`
