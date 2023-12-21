# qiskit.chemistry.algorithms.pes\_samplers.EnergySurfaceBase.get\_trust\_region

`abstract EnergySurfaceBase.get_trust_region()`

Get the trust region.

Returns the bounds of the region (in space) where the energy surface implementation can be trusted. When doing spline interpolation, for example, that would be the region where data is interpolated (vs. extrapolated) from the arguments of fit().

**Return type**

`Tuple`\[`float`, `float`]

**Returns**

the trust region between bounds
