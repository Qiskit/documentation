# qiskit.algorithms.PhaseEstimationScale.scale\_phases

`PhaseEstimationScale.scale_phases(phases, id_coefficient=0.0)`

Convert a list or dict of phases to eigenvalues.

The values in the list, or keys in the dict, are values of ```phi` and are converted as described in the description of ``scale_phase```. In case `phases` is a dict, the values of the dict are passed unchanged.

**Parameters**

*   **phases** (`Union`\[`List`, `Dict`]) – a list or dict of values of `phi`.
*   **id\_coefficient** (`float`) – All eigenvalues are shifted by this value.

**Return type**

`Union`\[`Dict`, `List`]

**Returns**

Eigenvalues computed from phases.
