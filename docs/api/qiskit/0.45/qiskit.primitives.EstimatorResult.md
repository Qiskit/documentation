---
title: EstimatorResult
description: API reference for qiskit.primitives.EstimatorResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.EstimatorResult
---

# EstimatorResult

<span id="qiskit.primitives.EstimatorResult" />

`qiskit.primitives.EstimatorResult(values, metadata)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/primitives/base/estimator_result.py "view source code")

Bases: `BasePrimitiveResult`

Result of Estimator.

```python
result = estimator.run(circuits, observables, params).result()
```

where the i-th elements of `result` correspond to the circuit and observable given by `circuits[i]`, `observables[i]`, and the parameter values bounds by `params[i]`. For example, `results.values[i]` gives the expectation value, and `result.metadata[i]` is a metadata dictionary for this circuit and parameters.

**Parameters**

*   **values** (*np.ndarray*) – The array of the expectation values.
*   **metadata** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")*]*) – List of the metadata.

## Attributes

<span id="qiskit.primitives.EstimatorResult.experiments" />

### experiments

Experiment data dicts in any inheriting result dataclass.

<span id="qiskit.primitives.EstimatorResult.num_experiments" />

### num\_experiments

Number of experiments in any inheriting result dataclass.

<span id="qiskit.primitives.EstimatorResult.values" />

### values

`np.ndarray[Any, np.dtype[np.float64]]`

<span id="qiskit.primitives.EstimatorResult.metadata" />

### metadata

`list[dict[str, Any]]`

## Methods

### decompose

<span id="qiskit.primitives.EstimatorResult.decompose" />

`decompose()`

Generate single experiment result objects from self.

**Return type**

[*Iterator*](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator "(in Python v3.12)")\[*BasePrimitiveResult*]

