---
title: StatevectorEstimator
description: API reference for qiskit.primitives.StatevectorEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.StatevectorEstimator
---

# StatevectorEstimator

<span id="qiskit.primitives.StatevectorEstimator" />

`qiskit.primitives.StatevectorEstimator(*, default_precision=0.0, seed=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/primitives/statevector_estimator.py "view source code")

Bases: [`BaseEstimatorV2`](qiskit.primitives.BaseEstimatorV2 "qiskit.primitives.base.base_estimator.BaseEstimatorV2")

Simple implementation of [`BaseEstimatorV2`](qiskit.primitives.BaseEstimatorV2 "qiskit.primitives.BaseEstimatorV2") with full state vector simulation.

This class is implemented via [`Statevector`](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector") which turns provided circuits into pure state vectors. These states are subsequently acted on by :class:\~.SparsePauliOp\`, which implies that, at present, this implementation is only compatible with Pauli-based observables.

**Parameters**

*   **default\_precision** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – The default precision for the estimator if not specified during run.
*   **seed** (*np.random.Generator |* [*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – The seed or Generator object for random number generation. If None, a random seeded default RNG will be used.

## Attributes

<span id="qiskit.primitives.StatevectorEstimator.default_precision" />

### default\_precision

Return the default shots

<span id="qiskit.primitives.StatevectorEstimator.seed" />

### seed

Return the seed or Generator object for random number generation.

## Methods

### run

<span id="qiskit.primitives.StatevectorEstimator.run" />

`run(pubs, *, precision=None)`

Estimate expectation values for each provided pub (Primitive Unified Bloc).

**Parameters**

*   **pubs** (*Iterable\[EstimatorPubLike]*) – An iterable of pub-like objects, such as tuples `(circuit, observables)` or `(circuit, observables, parameter_values)`.
*   **precision** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") *| None*) – The target precision for expectation value estimates of each run Estimator Pub that does not specify its own precision. If None the estimator’s default precision value will be used.

**Returns**

A job object that contains results.

**Return type**

PrimitiveJob\[[PrimitiveResult](qiskit.primitives.PrimitiveResult "qiskit.primitives.PrimitiveResult")\[[PubResult](qiskit.primitives.PubResult "qiskit.primitives.PubResult")]]

