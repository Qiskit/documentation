# qiskit.algorithms.optimizers.GSLS.sample\_points

`GSLS.sample_points(n, x, num_points)`

Sample `num_points` points around `x` on the `n`-sphere of specified radius.

The radius of the sphere is `self._options['sampling_radius']`.

**Parameters**

*   **n** (`int`) – Dimension of the problem.
*   **x** (`ndarray`) – Point around which the sample set is constructed.
*   **num\_points** (`int`) – Number of points in the sample set.

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

**Returns**

A tuple containing the sampling points and the directions.
