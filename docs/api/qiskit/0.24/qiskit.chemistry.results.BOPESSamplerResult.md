---
title: BOPESSamplerResult
description: API reference for qiskit.chemistry.results.BOPESSamplerResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.results.BOPESSamplerResult
---

<span id="qiskit-chemistry-results-bopessamplerresult" />

# qiskit.chemistry.results.BOPESSamplerResult

<span id="qiskit.chemistry.results.BOPESSamplerResult" />

`BOPESSamplerResult(points, energies, raw_results)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/chemistry/results/bopes_sampler_result.py "view source code")

The BOPES Sampler result

Creates an new instance of the result. :type points: `List`\[`float`] :param points: List of points. :type energies: `List`\[`float`] :param energies: List of energies. :type raw\_results: `Dict`\[`float`, `EigenstateResult`] :param raw\_results: Raw results obtained from the solver.

### \_\_init\_\_

<span id="qiskit.chemistry.results.BOPESSamplerResult.__init__" />

`__init__(points, energies, raw_results)`

Creates an new instance of the result. :type points: `List`\[`float`] :param points: List of points. :type energies: `List`\[`float`] :param energies: List of energies. :type raw\_results: `Dict`\[`float`, `EigenstateResult`] :param raw\_results: Raw results obtained from the solver.

## Methods

|                                                                                                                                                            |                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`__init__`](#qiskit.chemistry.results.BOPESSamplerResult.__init__ "qiskit.chemistry.results.BOPESSamplerResult.__init__")(points, energies, raw\_results) | Creates an new instance of the result.    |
| [`point_results`](#qiskit.chemistry.results.BOPESSamplerResult.point_results "qiskit.chemistry.results.BOPESSamplerResult.point_results")(point)           | returns all results for a specific point. |

## Attributes

|                                                                                                                                     |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`energies`](#qiskit.chemistry.results.BOPESSamplerResult.energies "qiskit.chemistry.results.BOPESSamplerResult.energies")          | returns list of energies.           |
| [`points`](#qiskit.chemistry.results.BOPESSamplerResult.points "qiskit.chemistry.results.BOPESSamplerResult.points")                | returns list of points.             |
| [`raw_results`](#qiskit.chemistry.results.BOPESSamplerResult.raw_results "qiskit.chemistry.results.BOPESSamplerResult.raw_results") | returns all results for all points. |

### energies

<span id="qiskit.chemistry.results.BOPESSamplerResult.energies" />

`property energies`

returns list of energies.

**Return type**

`List`\[`float`]

### point\_results

<span id="qiskit.chemistry.results.BOPESSamplerResult.point_results" />

`point_results(point)`

returns all results for a specific point.

**Return type**

`EigenstateResult`

### points

<span id="qiskit.chemistry.results.BOPESSamplerResult.points" />

`property points`

returns list of points.

**Return type**

`List`\[`float`]

### raw\_results

<span id="qiskit.chemistry.results.BOPESSamplerResult.raw_results" />

`property raw_results`

returns all results for all points.

**Return type**

`Dict`\[`float`, `EigenstateResult`]

