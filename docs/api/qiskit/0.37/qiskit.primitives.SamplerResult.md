---
title: SamplerResult
description: API reference for qiskit.primitives.SamplerResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.SamplerResult
---

# SamplerResult

<span id="qiskit.primitives.SamplerResult" />

`SamplerResult(quasi_dists, metadata)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/primitives/sampler_result.py "view source code")

Bases: `object`

Result of Sampler.

```python
result = sampler(circuits, params)
```

where the i-th elements of `result` correspond to the circuit given by `circuits[i]`, and the parameter values bounds by `params[i]`. For example, `results.quasi_dists[i]` gives the quasi-probabilities of bitstrings, and `result.metadata[i]` is a metadata dictionary for this circuit and parameters.

**Parameters**

*   **quasi\_dists** (*list\[*[*QuasiDistribution*](qiskit.result.QuasiDistribution "qiskit.result.QuasiDistribution")*]*) – List of the quasi-probabilities.
*   **metadata** (*list\[dict]*) – List of the metadata.

## Attributes

<span id="qiskit.primitives.SamplerResult.quasi_dists" />

### quasi\_dists

`list[QuasiDistribution]`

<span id="qiskit.primitives.SamplerResult.metadata" />

### metadata

`list[dict[str, Any]]`

