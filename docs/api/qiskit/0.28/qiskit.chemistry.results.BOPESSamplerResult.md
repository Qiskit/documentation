# qiskit.chemistry.results.BOPESSamplerResult



`BOPESSamplerResult(points, energies, raw_results)`

The BOPES Sampler result

Creates an new instance of the result. :type points: `List`\[`float`] :param points: List of points. :type energies: `List`\[`float`] :param energies: List of energies. :type raw\_results: `Dict`\[`float`, `EigenstateResult`] :param raw\_results: Raw results obtained from the solver.



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



`property energies`

returns list of energies.

**Return type**

`List`\[`float`]



`point_results(point)`

returns all results for a specific point.

**Return type**

`EigenstateResult`



`property points`

returns list of points.

**Return type**

`List`\[`float`]



`property raw_results`

returns all results for all points.

**Return type**

`Dict`\[`float`, `EigenstateResult`]
