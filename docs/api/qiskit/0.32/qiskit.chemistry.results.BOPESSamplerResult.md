---
title: BOPESSamplerResult
description: API reference for qiskit.chemistry.results.BOPESSamplerResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.results.BOPESSamplerResult
---

# BOPESSamplerResult

<span id="qiskit.chemistry.results.BOPESSamplerResult" />

`BOPESSamplerResult(points, energies, raw_results)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/results/bopes_sampler_result.py "view source code")

Bases: `object`

The BOPES Sampler result

Creates an new instance of the result. :type points: `List`\[`float`] :param points: List of points. :type energies: `List`\[`float`] :param energies: List of energies. :type raw\_results: `Dict`\[`float`, `EigenstateResult`] :param raw\_results: Raw results obtained from the solver.

## Methods

### point\_results

<span id="qiskit.chemistry.results.BOPESSamplerResult.point_results" />

`BOPESSamplerResult.point_results(point)`

returns all results for a specific point.

**Return type**

`EigenstateResult`

## Attributes

<span id="qiskit.chemistry.results.BOPESSamplerResult.energies" />

### energies

returns list of energies.

**Return type**

`List`\[`float`]

<span id="qiskit.chemistry.results.BOPESSamplerResult.points" />

### points

returns list of points.

**Return type**

`List`\[`float`]

<span id="qiskit.chemistry.results.BOPESSamplerResult.raw_results" />

### raw\_results

returns all results for all points.

**Return type**

`Dict`\[`float`, `EigenstateResult`]

