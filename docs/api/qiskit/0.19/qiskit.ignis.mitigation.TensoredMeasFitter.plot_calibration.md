---
title: plot_calibration
description: API reference for qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration
---

# plot\_calibration

<span id="qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration" />

`TensoredMeasFitter.plot_calibration(cal_index=0, ax=None, show_plot=True)`

Plot one of the calibration matrices (2D color grid plot).

**Parameters**

*   **cal\_index** (*integer*) – calibration matrix to plot
*   **ax** (*matplotlib.axes*) – settings for the graph
*   **show\_plot** (*bool*) – call plt.show()

**Raises**

*   **QiskitError** – if \_cal\_matrices was not set.
*   **ImportError** – if matplotlib was not installed.

