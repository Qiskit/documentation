# BOPESSamplerResult

<span id="undefined" />

`BOPESSamplerResult(points, energies, raw_results)`

Bases: `object`

The BOPES Sampler result

Creates an new instance of the result. :type points: `List`\[`float`] :param points: List of points. :type energies: `List`\[`float`] :param energies: List of energies. :type raw\_results: `Dict`\[`float`, `EigenstateResult`] :param raw\_results: Raw results obtained from the solver.

## Methods

|                                                                                                                                                                                                    |                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`point_results`](qiskit.chemistry.results.BOPESSamplerResult.point_results#qiskit.chemistry.results.BOPESSamplerResult.point_results "qiskit.chemistry.results.BOPESSamplerResult.point_results") | returns all results for a specific point. |

## Attributes

<span id="undefined" />

### energies

returns list of energies.

**Return type**

`List`\[`float`]

<span id="undefined" />

### points

returns list of points.

**Return type**

`List`\[`float`]

<span id="undefined" />

### raw\_results

returns all results for all points.

**Return type**

`Dict`\[`float`, `EigenstateResult`]
