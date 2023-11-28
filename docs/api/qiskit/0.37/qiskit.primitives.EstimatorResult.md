---
title: EstimatorResult
description: API reference for qiskit.primitives.EstimatorResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.EstimatorResult
---

# EstimatorResult[¶](#estimatorresult "Permalink to this headline")

<span id="qiskit.primitives.EstimatorResult" />

`EstimatorResult(values, metadata)`

Bases: `object`

Result of Estimator.

```python
result = estimator(circuits, observables, params)
```

where the i-th elements of `result` correspond to the circuit and observable given by `circuits[i]`, `observables[i]`, and the parameter values bounds by `params[i]`. For example, `results.values[i]` gives the expectation value, and `result.metadata[i]` is a metadata dictionary for this circuit and parameters.

**Parameters**

*   **values** (*np.ndarray*) – The array of the expectation values.
*   **metadata** (*list\[dict]*) – List of the metadata.

## Attributes

<span id="qiskit.primitives.EstimatorResult.values" />

### values

`np.ndarray[Any, np.dtype[np.float64]]`

<span id="qiskit.primitives.EstimatorResult.metadata" />

### metadata

`list[dict[str, Any]]`

