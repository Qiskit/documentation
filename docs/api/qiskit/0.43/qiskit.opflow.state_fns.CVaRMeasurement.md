---
title: CVaRMeasurement
description: API reference for qiskit.opflow.state_fns.CVaRMeasurement
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.CVaRMeasurement
---

# CVaRMeasurement

<span id="qiskit.opflow.state_fns.CVaRMeasurement" />

`CVaRMeasurement(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/state_fns/cvar_measurement.py "view source code")

Bases: [`OperatorStateFn`](qiskit.opflow.state_fns.OperatorStateFn "qiskit.opflow.state_fns.operator_state_fn.OperatorStateFn")

**Deprecated: A specialized measurement class to compute CVaR expectation values.**

See [https://arxiv.org/pdf/1907.04769.pdf](https://arxiv.org/pdf/1907.04769.pdf) for further details.

Used in `CVaRExpectation`, see there for more details.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.state_fns.cvar_measurement.CVaRMeasurement` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The `OperatorBase` which defines the diagonal operator measurement.
*   **coeff** – A coefficient by which to multiply the state function
*   **alpha** – A real-valued parameter between 0 and 1 which specifies the fraction of observed samples to include when computing the objective value. alpha = 1 corresponds to a standard observable expectation value. alpha = 0 corresponds to only using the single sample with the lowest energy. alpha = 0.5 corresponds to ranking each observation by lowest energy and using the best

**Raises**

*   **ValueError** – TODO remove that this raises an error
*   **ValueError** – If alpha is not in \[0, 1].
*   [**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – If the primitive is not diagonal.

**Methods Defined Here**

|                                                                                                                                                                                                 |                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.CVaRMeasurement#add "qiskit.opflow.state_fns.CVaRMeasurement.add")                                                                                              | Return Operator addition of self and other, overloaded by `+`.                                                                                                                                                                                 |
| [`adjoint`](qiskit.opflow.state_fns.CVaRMeasurement#adjoint "qiskit.opflow.state_fns.CVaRMeasurement.adjoint")                                                                                  | The adjoint of a CVaRMeasurement is not defined.                                                                                                                                                                                               |
| [`compute_cvar`](qiskit.opflow.state_fns.CVaRMeasurement#compute_cvar "qiskit.opflow.state_fns.CVaRMeasurement.compute_cvar")                                                                   | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the CVaR.                                                                                  |
| [`eval`](qiskit.opflow.state_fns.CVaRMeasurement#eval "qiskit.opflow.state_fns.CVaRMeasurement.eval")                                                                                           | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the CVaR as H\_j + 1/α\*(sum\_i\<j p\_i\*(H\_i - H\_j)).                                   |
| [`eval_variance`](qiskit.opflow.state_fns.CVaRMeasurement#eval_variance "qiskit.opflow.state_fns.CVaRMeasurement.eval_variance")                                                                | Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the variance of the CVaR estimator as H\_j^2 + 1/α \* (sum\_i\<j p\_i\*(H\_i^2 - H\_j^2)). |
| [`get_outcome_energies_probabilities`](qiskit.opflow.state_fns.CVaRMeasurement#get_outcome_energies_probabilities "qiskit.opflow.state_fns.CVaRMeasurement.get_outcome_energies_probabilities") | In order to compute the CVaR of an observable expectation, we require the energies of each sampled measurement outcome as well as the sampling probability of each measurement outcome.                                                        |
| [`mul`](qiskit.opflow.state_fns.CVaRMeasurement#mul "qiskit.opflow.state_fns.CVaRMeasurement.mul")                                                                                              | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra's `Parameters`, which can be bound to values later (via `bind_parameters`).                                                                  |
| [`sample`](qiskit.opflow.state_fns.CVaRMeasurement#sample "qiskit.opflow.state_fns.CVaRMeasurement.sample")                                                                                     | Sample the state function as a normalized probability distribution.                                                                                                                                                                            |
| [`tensor`](qiskit.opflow.state_fns.CVaRMeasurement#tensor "qiskit.opflow.state_fns.CVaRMeasurement.tensor")                                                                                     | Return tensor product between self and other, overloaded by `^`.                                                                                                                                                                               |
| [`to_circuit_op`](qiskit.opflow.state_fns.CVaRMeasurement#to_circuit_op "qiskit.opflow.state_fns.CVaRMeasurement.to_circuit_op")                                                                | Not defined.                                                                                                                                                                                                                                   |
| [`to_density_matrix`](qiskit.opflow.state_fns.CVaRMeasurement#to_density_matrix "qiskit.opflow.state_fns.CVaRMeasurement.to_density_matrix")                                                    | Not defined.                                                                                                                                                                                                                                   |
| [`to_matrix`](qiskit.opflow.state_fns.CVaRMeasurement#to_matrix "qiskit.opflow.state_fns.CVaRMeasurement.to_matrix")                                                                            | Not defined.                                                                                                                                                                                                                                   |
| [`to_matrix_op`](qiskit.opflow.state_fns.CVaRMeasurement#to_matrix_op "qiskit.opflow.state_fns.CVaRMeasurement.to_matrix_op")                                                                   | Not defined.                                                                                                                                                                                                                                   |
| [`traverse`](qiskit.opflow.state_fns.CVaRMeasurement#traverse "qiskit.opflow.state_fns.CVaRMeasurement.traverse")                                                                               | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                                                                                         |

## Attributes

<span id="qiskit.opflow.state_fns.CVaRMeasurement.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.state_fns.CVaRMeasurement.alpha" />

### alpha

**A real-valued parameter between 0 and 1 which specifies the**

fraction of observed samples to include when computing the objective value. alpha = 1 corresponds to a standard observable expectation value. alpha = 0 corresponds to only using the single sample with the lowest energy. alpha = 0.5 corresponds to ranking each observation by lowest energy and using the best half.

**Returns**

The parameter alpha which was given at initialization

<span id="qiskit.opflow.state_fns.CVaRMeasurement.coeff" />

### coeff

A coefficient by which the state function is multiplied.

<span id="qiskit.opflow.state_fns.CVaRMeasurement.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.state_fns.CVaRMeasurement.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

<span id="qiskit.opflow.state_fns.CVaRMeasurement.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.state_fns.CVaRMeasurement.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.CVaRMeasurement.primitive" />

### primitive

`OperatorBase`

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.CVaRMeasurement.settings" />

### settings

Return settings.

