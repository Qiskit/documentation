# EstimatorResult[¶](#estimatorresult "Permalink to this headline")

<span id="undefined" />

`EstimatorResult(values, metadata)`

Bases: `object`

Result of Estimator

```python
result = estimator(circuits, observables, params)
```

where the i-th elements of `result` correspond to the circuit and observable given by `circuit_indices[i]`, `observable_indices[i]`, and the parameter\_values bounds by `params[i]`. For example, `results.values[i]` gives the expectation value, and `result.metadata[i]` is a metadata dictionary for this circuit and parameters.

**Parameters**

*   **values** (*np.ndarray*) – the array of the expectation values.
*   **metadata** (*list\[dict]*) – list of the metadata.
