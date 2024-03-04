---
title: Estimator
description: API reference for qiskit_aer.primitives.Estimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.primitives.Estimator
---

# Estimator

<span id="qiskit_aer.primitives.Estimator" />

`Estimator(circuits: Iterable[QuantumCircuit] | QuantumCircuit | None = None, observables: Iterable[SparsePauliOp] | SparsePauliOp | None = None, parameters: Iterable[Iterable[Parameter]] | None = None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.11/qiskit_aer/primitives/estimator.py "view source code")

Bases: [`qiskit.primitives.base.base_estimator.BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.base.base_estimator.BaseEstimator")

Aer implmentation of Estimator.

**Run Options**

*   **shots** (None or int) – The number of shots. If None and approximation is True, it calculates the exact expectation values. Otherwise, it calculates expectation values with sampling.
*   **seed** (int) – Set a fixed seed for the sampling.

<Admonition title="Note" type="note">
  Precedence of seeding for `seed_simulator` is as follows:

  1.  `seed_simulator` in runtime (i.e. in `__call__()`)
  2.  `seed` in runtime (i.e. in `__call__()`)
  3.  `seed_simulator` of `backend_options`.
  4.  default.

  `seed` is also used for sampling from a normal distribution when approximation is True.
</Admonition>

**Parameters**

*   **circuits** – Quantum circuits that represent quantum states.
*   **observables** – Observables.
*   **parameters** – Parameters of quantum circuits, specifying the order in which values will be bound. Defaults to `[circ.parameters for circ in circuits]` The indexing is such that `parameters[i, j]` is the j-th formal parameter of `circuits[i]`.
*   **backend\_options** – Options passed to AerSimulator.
*   **transpile\_options** – Options passed to transpile.
*   **run\_options** – Options passed to run.
*   **approximation** – If True, it calculates expectation values with normal distribution approximation.
*   **skip\_transpilation** – If True, transpilation is skipped.

## Methods

### close

<span id="qiskit_aer.primitives.Estimator.close" />

`Estimator.close()`

Close the session and free resources

### run

<span id="qiskit_aer.primitives.Estimator.run" />

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

<span id="qiskit_aer.primitives.Estimator.set_options" />

`Estimator.set_options(**fields)`

Set options values for the estimator.

**Parameters**

**\*\*fields** – The fields to update the options

## Attributes

<span id="qiskit_aer.primitives.Estimator.circuits" />

### circuits

Quantum circuits that represents quantum states.

**Returns**

The quantum circuits.

<span id="qiskit_aer.primitives.Estimator.observables" />

### observables

Observables to be estimated.

**Returns**

The observables.

<span id="qiskit_aer.primitives.Estimator.options" />

### options

Return options values for the estimator.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

**Returns**

options

<span id="qiskit_aer.primitives.Estimator.parameters" />

### parameters

Parameters of the quantum circuits.

**Returns**

Parameters, where `parameters[i][j]` is the j-th parameter of the i-th circuit.

