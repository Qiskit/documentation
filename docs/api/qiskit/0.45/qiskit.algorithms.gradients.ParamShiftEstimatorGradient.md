---
title: ParamShiftEstimatorGradient
description: API reference for qiskit.algorithms.gradients.ParamShiftEstimatorGradient
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.gradients.ParamShiftEstimatorGradient
---

# ParamShiftEstimatorGradient

<span id="qiskit.algorithms.gradients.ParamShiftEstimatorGradient" />

`qiskit.algorithms.gradients.ParamShiftEstimatorGradient(estimator, options=None, derivative_type=DerivativeType.REAL)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/algorithms/gradients/param_shift/param_shift_estimator_gradient.py "view source code")

Bases: [`BaseEstimatorGradient`](qiskit.algorithms.gradients.BaseEstimatorGradient "qiskit.algorithms.gradients.base.base_estimator_gradient.BaseEstimatorGradient")

Compute the gradients of the expectation values by the parameter shift rule \[1].

**Reference:** \[1] Schuld, M., Bergholm, V., Gogolin, C., Izaac, J., and Killoran, N. Evaluating analytic gradients on quantum hardware, [DOI](https://doi.org/10.1103/PhysRevA.99.032331)

**Parameters**

*   **estimator** ([*BaseEstimator*](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator")) – The estimator used to compute the gradients.

*   **options** ([*Options*](qiskit.providers.Options "qiskit.providers.Options") *| None*) – Primitive backend runtime options used for circuit execution. The order of priority is: options in `run` method > gradient’s default options > primitive’s default setting. Higher priority setting overrides lower priority setting

*   **derivative\_type** (*DerivativeType*) –

    The type of derivative. Can be either `DerivativeType.REAL` `DerivativeType.IMAG`, or `DerivativeType.COMPLEX`.

    > *   `DerivativeType.REAL` computes $2 \mathrm{Re}[⟨ψ(ω)|O(θ)|dω ψ(ω)〉]$.
    > *   `DerivativeType.IMAG` computes $2 \mathrm{Im}[⟨ψ(ω)|O(θ)|dω ψ(ω)〉]$.
    > *   `DerivativeType.COMPLEX` computes $2 ⟨ψ(ω)|O(θ)|dω ψ(ω)〉$.

    Defaults to `DerivativeType.REAL`, as this yields e.g. the commonly-used energy gradient and this type is the only supported type for function-level schemes like finite difference.

## Attributes

<span id="qiskit.algorithms.gradients.ParamShiftEstimatorGradient.SUPPORTED_GATES" />

### SUPPORTED\_GATES

`= ['x', 'y', 'z', 'h', 'rx', 'ry', 'rz', 'p', 'cx', 'cy', 'cz', 'ryy', 'rxx', 'rzz', 'rzx']`

<span id="qiskit.algorithms.gradients.ParamShiftEstimatorGradient.derivative_type" />

### derivative\_type

Return the derivative type (real, imaginary or complex).

**Returns**

The derivative type.

<span id="qiskit.algorithms.gradients.ParamShiftEstimatorGradient.options" />

### options

Return the union of estimator options setting and gradient default options, where, if the same field is set in both, the gradient’s default options override the primitive’s default setting.

**Returns**

The gradient default + estimator options.

## Methods

### run

<span id="qiskit.algorithms.gradients.ParamShiftEstimatorGradient.run" />

`run(circuits, observables, parameter_values, parameters=None, **options)`

Run the job of the estimator gradient on the given circuits.

**Parameters**

*   **circuits** (*Sequence\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – The list of quantum circuits to compute the gradients.
*   **observables** (*Sequence\[BaseOperator |* [*PauliSumOp*](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")*]*) – The list of observables.
*   **parameter\_values** (*Sequence\[Sequence\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*]]*) – The list of parameter values to be bound to the circuit.
*   **parameters** (*Sequence\[Sequence\[*[*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")*] | None] | None*) – The sequence of parameters to calculate only the gradients of the specified parameters. Each sequence of parameters corresponds to a circuit in `circuits`. Defaults to None, which means that the gradients of all parameters in each circuit are calculated. None in the sequence means that the gradients of all parameters in the corresponding circuit are calculated.
*   **options** – Primitive backend runtime options used for circuit execution. The order of priority is: options in `run` method > gradient’s default options > primitive’s default setting. Higher priority setting overrides lower priority setting

**Returns**

The job object of the gradients of the expectation values. The i-th result corresponds to `circuits[i]` evaluated with parameters bound as `parameter_values[i]`. The j-th element of the i-th result corresponds to the gradient of the i-th circuit with respect to the j-th parameter.

**Raises**

[**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – Invalid arguments are given.

**Return type**

[AlgorithmJob](qiskit.algorithms.AlgorithmJob "qiskit.algorithms.AlgorithmJob")

### update\_default\_options

<span id="qiskit.algorithms.gradients.ParamShiftEstimatorGradient.update_default_options" />

`update_default_options(**options)`

Update the gradient’s default options setting.

**Parameters**

**\*\*options** – The fields to update the default options.

