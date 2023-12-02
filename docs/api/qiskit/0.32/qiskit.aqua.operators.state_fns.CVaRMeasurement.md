# CVaRMeasurement

<span id="undefined" />

`CVaRMeasurement(primitive=None, alpha=1.0, coeff=1.0)`

Bases: `qiskit.aqua.operators.state_fns.operator_state_fn.OperatorStateFn`

**A specialized measurement class to compute CVaR expectation values.**

See [https://arxiv.org/pdf/1907.04769.pdf](https://arxiv.org/pdf/1907.04769.pdf) for further details.

Used in `CVaRExpectation`, see there for more details.

**Parameters**

*   **primitive** (`Optional`\[`OperatorBase`]) – The `OperatorBase` which defines the diagonal operator measurement.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`]) – A coefficient by which to multiply the state function
*   **alpha** (`float`) – A real-valued parameter between 0 and 1 which specifies the fraction of observed samples to include when computing the objective value. alpha = 1 corresponds to a standard observable expectation value. alpha = 0 corresponds to only using the single sample with the lowest energy. alpha = 0.5 corresponds to ranking each observation by lowest energy and using the best

**Raises**

*   **ValueError** – TODO remove that this raises an error
*   **ValueError** – If alpha is not in \[0, 1].
*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If the primitive is not diagonal.

## Methods

|                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.state_fns.CVaRMeasurement.add#qiskit.aqua.operators.state_fns.CVaRMeasurement.add "qiskit.aqua.operators.state_fns.CVaRMeasurement.add")                                                                                                                             | Return Operator addition of self and other, overloaded by `+`.                                                                                                                                                                                 |
| [`adjoint`](qiskit.aqua.operators.state_fns.CVaRMeasurement.adjoint#qiskit.aqua.operators.state_fns.CVaRMeasurement.adjoint "qiskit.aqua.operators.state_fns.CVaRMeasurement.adjoint")                                                                                                             | The adjoint of a CVaRMeasurement is not defined.                                                                                                                                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.state_fns.CVaRMeasurement.assign_parameters#qiskit.aqua.operators.state_fns.CVaRMeasurement.assign_parameters "qiskit.aqua.operators.state_fns.CVaRMeasurement.assign_parameters")                                                                     | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                                                                                   |
| [`bind_parameters`](qiskit.aqua.operators.state_fns.CVaRMeasurement.bind_parameters#qiskit.aqua.operators.state_fns.CVaRMeasurement.bind_parameters "qiskit.aqua.operators.state_fns.CVaRMeasurement.bind_parameters")                                                                             | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                                                                                              |
| [`compose`](qiskit.aqua.operators.state_fns.CVaRMeasurement.compose#qiskit.aqua.operators.state_fns.CVaRMeasurement.compose "qiskit.aqua.operators.state_fns.CVaRMeasurement.compose")                                                                                                             | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                                                                                       |
| [`compute_cvar`](qiskit.aqua.operators.state_fns.CVaRMeasurement.compute_cvar#qiskit.aqua.operators.state_fns.CVaRMeasurement.compute_cvar "qiskit.aqua.operators.state_fns.CVaRMeasurement.compute_cvar")                                                                                         | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the CVaR.                                                                                  |
| [`equals`](qiskit.aqua.operators.state_fns.CVaRMeasurement.equals#qiskit.aqua.operators.state_fns.CVaRMeasurement.equals "qiskit.aqua.operators.state_fns.CVaRMeasurement.equals")                                                                                                                 | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                                                                                       |
| [`eval`](qiskit.aqua.operators.state_fns.CVaRMeasurement.eval#qiskit.aqua.operators.state_fns.CVaRMeasurement.eval "qiskit.aqua.operators.state_fns.CVaRMeasurement.eval")                                                                                                                         | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the CVaR as H\_j + 1/α\*(sum\_i\<j p\_i\*(H\_i - H\_j)).                                   |
| [`eval_variance`](qiskit.aqua.operators.state_fns.CVaRMeasurement.eval_variance#qiskit.aqua.operators.state_fns.CVaRMeasurement.eval_variance "qiskit.aqua.operators.state_fns.CVaRMeasurement.eval_variance")                                                                                     | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the variance of the CVaR estimator as H\_j^2 + 1/α \* (sum\_i\<j p\_i\*(H\_i^2 - H\_j^2)). |
| [`get_outcome_energies_probabilities`](qiskit.aqua.operators.state_fns.CVaRMeasurement.get_outcome_energies_probabilities#qiskit.aqua.operators.state_fns.CVaRMeasurement.get_outcome_energies_probabilities "qiskit.aqua.operators.state_fns.CVaRMeasurement.get_outcome_energies_probabilities") | In order to compute the CVaR of an observable expectation, we require the energies of each sampled measurement outcome as well as the sampling probability of each measurement outcome.                                                        |
| [`mul`](qiskit.aqua.operators.state_fns.CVaRMeasurement.mul#qiskit.aqua.operators.state_fns.CVaRMeasurement.mul "qiskit.aqua.operators.state_fns.CVaRMeasurement.mul")                                                                                                                             | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`).                                                                  |
| [`neg`](qiskit.aqua.operators.state_fns.CVaRMeasurement.neg#qiskit.aqua.operators.state_fns.CVaRMeasurement.neg "qiskit.aqua.operators.state_fns.CVaRMeasurement.neg")                                                                                                                             | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                                                                                       |
| [`permute`](qiskit.aqua.operators.state_fns.CVaRMeasurement.permute#qiskit.aqua.operators.state_fns.CVaRMeasurement.permute "qiskit.aqua.operators.state_fns.CVaRMeasurement.permute")                                                                                                             | Permute the qubits of the state function.                                                                                                                                                                                                      |
| [`power`](qiskit.aqua.operators.state_fns.CVaRMeasurement.power#qiskit.aqua.operators.state_fns.CVaRMeasurement.power "qiskit.aqua.operators.state_fns.CVaRMeasurement.power")                                                                                                                     | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                                                                                      |
| [`primitive_strings`](qiskit.aqua.operators.state_fns.CVaRMeasurement.primitive_strings#qiskit.aqua.operators.state_fns.CVaRMeasurement.primitive_strings "qiskit.aqua.operators.state_fns.CVaRMeasurement.primitive_strings")                                                                     | Return a set of strings describing the primitives contained in the Operator.                                                                                                                                                                   |
| [`reduce`](qiskit.aqua.operators.state_fns.CVaRMeasurement.reduce#qiskit.aqua.operators.state_fns.CVaRMeasurement.reduce "qiskit.aqua.operators.state_fns.CVaRMeasurement.reduce")                                                                                                                 | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                                                                                             |
| [`sample`](qiskit.aqua.operators.state_fns.CVaRMeasurement.sample#qiskit.aqua.operators.state_fns.CVaRMeasurement.sample "qiskit.aqua.operators.state_fns.CVaRMeasurement.sample")                                                                                                                 | Sample the state function as a normalized probability distribution.                                                                                                                                                                            |
| [`tensor`](qiskit.aqua.operators.state_fns.CVaRMeasurement.tensor#qiskit.aqua.operators.state_fns.CVaRMeasurement.tensor "qiskit.aqua.operators.state_fns.CVaRMeasurement.tensor")                                                                                                                 | Return tensor product between self and other, overloaded by `^`.                                                                                                                                                                               |
| [`tensorpower`](qiskit.aqua.operators.state_fns.CVaRMeasurement.tensorpower#qiskit.aqua.operators.state_fns.CVaRMeasurement.tensorpower "qiskit.aqua.operators.state_fns.CVaRMeasurement.tensorpower")                                                                                             | Return tensor product with self multiple times, overloaded by `^`.                                                                                                                                                                             |
| [`to_circuit_op`](qiskit.aqua.operators.state_fns.CVaRMeasurement.to_circuit_op#qiskit.aqua.operators.state_fns.CVaRMeasurement.to_circuit_op "qiskit.aqua.operators.state_fns.CVaRMeasurement.to_circuit_op")                                                                                     | Not defined.                                                                                                                                                                                                                                   |
| [`to_density_matrix`](qiskit.aqua.operators.state_fns.CVaRMeasurement.to_density_matrix#qiskit.aqua.operators.state_fns.CVaRMeasurement.to_density_matrix "qiskit.aqua.operators.state_fns.CVaRMeasurement.to_density_matrix")                                                                     | Not defined.                                                                                                                                                                                                                                   |
| [`to_legacy_op`](qiskit.aqua.operators.state_fns.CVaRMeasurement.to_legacy_op#qiskit.aqua.operators.state_fns.CVaRMeasurement.to_legacy_op "qiskit.aqua.operators.state_fns.CVaRMeasurement.to_legacy_op")                                                                                         | Attempt to return the Legacy Operator representation of the Operator.                                                                                                                                                                          |
| [`to_matrix`](qiskit.aqua.operators.state_fns.CVaRMeasurement.to_matrix#qiskit.aqua.operators.state_fns.CVaRMeasurement.to_matrix "qiskit.aqua.operators.state_fns.CVaRMeasurement.to_matrix")                                                                                                     | Not defined.                                                                                                                                                                                                                                   |
| [`to_matrix_op`](qiskit.aqua.operators.state_fns.CVaRMeasurement.to_matrix_op#qiskit.aqua.operators.state_fns.CVaRMeasurement.to_matrix_op "qiskit.aqua.operators.state_fns.CVaRMeasurement.to_matrix_op")                                                                                         | Not defined.                                                                                                                                                                                                                                   |
| [`traverse`](qiskit.aqua.operators.state_fns.CVaRMeasurement.traverse#qiskit.aqua.operators.state_fns.CVaRMeasurement.traverse "qiskit.aqua.operators.state_fns.CVaRMeasurement.traverse")                                                                                                         | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                                                                                         |

## Attributes

<span id="undefined" />

### ENABLE\_DEPRECATION

`= True`

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

`Union`\[`int`, `float`, `complex`, `ParameterExpression`]

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

The primitive which defines the behavior of the underlying State function.
