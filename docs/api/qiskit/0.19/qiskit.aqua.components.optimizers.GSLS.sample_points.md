---
title: sample_points
description: API reference for qiskit.aqua.components.optimizers.GSLS.sample_points
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.optimizers.GSLS.sample_points
---

# sample\_points

<span id="qiskit.aqua.components.optimizers.GSLS.sample_points" />

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

