# qiskit.ignis.verification.QVFitter.plot\_hop\_accumulative

`QVFitter.plot_hop_accumulative(depth, ax=None, figsize=(7, 5))`

Plot individual and accumulative heavy output probability (HOP) as a function of number of trials.

**Parameters**

*   **depth** (*int*) – depth of QV circuits
*   **ax** (*Axes or None*) – plot axis (if passed in).
*   **figsize** (*tuple*) – figure size in inches.

**Raises**

**ImportError** – If matplotlib is not installed.

**Returns**

A figure of individual and accumulative HOP as a function of number of trials, with 2-sigma confidence interval and 2/3 threshold.

**Return type**

matplotlib.Figure
