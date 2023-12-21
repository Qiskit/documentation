# qiskit.result.QuasiDistribution.nearest\_probability\_distribution

`QuasiDistribution.nearest_probability_distribution(return_distance=False)`

Takes a quasiprobability distribution and maps it to the closest probability distribution as defined by the L2-norm.

**Parameters**

**return\_distance** (*bool*) – Return the L2 distance between distributions.

**Returns**

Nearest probability distribution. float: Euclidean (L2) distance of distributions.

**Return type**

[ProbDistribution](qiskit.result.ProbDistribution#qiskit.result.ProbDistribution "qiskit.result.ProbDistribution")

## Notes

Method from Smolin et al., Phys. Rev. Lett. 108, 070502 (2012).
