---
title: Estimator
description: API reference for qiskit.primitives.Estimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.Estimator
---

# Estimator

<span id="qiskit.primitives.Estimator" />

`Estimator(circuits: Iterable[QuantumCircuit] | QuantumCircuit | None = None, observables: Iterable[SparsePauliOp] | SparsePauliOp | None = None, parameters: Iterable[Iterable[Parameter]] | None = None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/primitives/estimator.py "view source code")

Bases: [`qiskit.primitives.base.base_estimator.BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.base.base_estimator.BaseEstimator")

Reference implementation of [`BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator").

**Run Options**

*   **shots** (None or int) – The number of shots. If None, it calculates the exact expectation values. Otherwise, it samples from normal distributions with standard errors as standard deviations using normal distribution approximation.
*   **seed** (np.random.Generator or int) – Set a fixed seed or generator for the normal distribution. If shots is None, this option is ignored.

**Parameters**

*   **circuits** – circuits that represent quantum states.
*   **observables** – observables to be estimated.
*   **parameters** – Parameters of each of the quantum circuits. Defaults to `[circ.parameters for circ in circuits]`.
*   **options** – Default options.

**Raises**

**QiskitError** – if some classical bits are not used for measurements.

## Methods

### close

<span id="qiskit.primitives.Estimator.close" />

`Estimator.close()`

Close the session and free resources

### run

<span id="qiskit.primitives.Estimator.run" />

`Estimator.run(circuits, observables, parameter_values=None, **run_options)`

Run the job of the estimation of expectation value(s).

`circuits`, `observables`, and `parameter_values` should have the same length. The i-th element of the result is the expectation of observable

```python
obs = observables[i]
```

for the state prepared by

```python
circ = circuits[i]
```

with bound parameters

```python
values = parameter_values[i].
```

**Parameters**

*   **circuits** – one or more circuit objects.
*   **observables** – one or more observable objects.
*   **parameter\_values** – concrete parameters to be bound.
*   **run\_options** – runtime options used for circuit execution.

**Returns**

The job object of EstimatorResult.

**Raises**

*   **TypeError** – Invalid argument type given.
*   **ValueError** – Invalid argument values given.

### set\_options

<span id="qiskit.primitives.Estimator.set_options" />

`Estimator.set_options(**fields)`

Set options values for the estimator.

**Parameters**

**\*\*fields** – The fields to update the options

## Attributes

<span id="qiskit.primitives.Estimator.circuits" />

### circuits

Quantum circuits that represents quantum states.

**Returns**

The quantum circuits.

<span id="qiskit.primitives.Estimator.observables" />

### observables

Observables to be estimated.

**Returns**

The observables.

<span id="qiskit.primitives.Estimator.options" />

### options

Return options values for the estimator.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

**Returns**

options

<span id="qiskit.primitives.Estimator.parameters" />

### parameters

Parameters of the quantum circuits.

**Returns**

Parameters, where `parameters[i][j]` is the j-th parameter of the i-th circuit.

