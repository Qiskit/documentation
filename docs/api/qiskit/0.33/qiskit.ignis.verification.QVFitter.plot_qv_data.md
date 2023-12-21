# qiskit.ignis.verification.QVFitter.plot\_qv\_data

`QVFitter.plot_qv_data(ax=None, show_plt=True, figsize=(7, 5), set_title=True, title=None)`

Plot the qv data as a function of depth

**Parameters**

*   **ax** (*Axes or None*) – plot axis (if passed in).
*   **show\_plt** (*bool*) – display the plot.
*   **figsize** (*tuple*) – Figure size in inches.
*   **set\_title** (*bool*) – set figure title.
*   **title** (*String or None*) – text for setting figure title

**Raises**

**ImportError** – If matplotlib is not installed.

**Returns**

A figure of Quantum Volume data (heavy output probability) with two-sigma error bar as a function of circuit depth.

**Return type**

matplotlib.Figure
