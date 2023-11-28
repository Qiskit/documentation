# SamplerResult

<span id="undefined" />

`SamplerResult(quasi_dists, metadata)`

Bases: `object`

Result of Sampler

```python
result = sampler(circuits, params)
```

where the i-th elements of `result` correspond to the circuit given by `circuit_indices[i]`, and the parameter\_values bounds by `params[i]`. For example, `results.quasi_dists[i]` gives the quasi-probabilities of bitstrings, and `result.metadata[i]` is a metadata dictionary for this circuit and parameters.

**Parameters**

*   **quasi\_dists** (*list\[*[*QuasiDistribution*](qiskit.result.QuasiDistribution#qiskit.result.QuasiDistribution "qiskit.result.QuasiDistribution")*]*) – list of the quasi-probabilities.
*   **metadata** (*list\[dict]*) – list of the metadata.
