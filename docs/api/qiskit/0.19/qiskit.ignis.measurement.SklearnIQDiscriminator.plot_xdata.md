---
title: plot_xdata
description: API reference for qiskit.ignis.measurement.SklearnIQDiscriminator.plot_xdata
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.measurement.SklearnIQDiscriminator.plot_xdata
---

# plot\_xdata

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.plot_xdata" />

`SklearnIQDiscriminator.plot_xdata(axs, results, color=None)`

Add the relevant IQ data from the Qiskit Result, or list thereof, to the given axes as a scatter plot.

**Parameters**

*   **axs** (*Union\[np.ndarray, axes]*) – the axis to use for the plot. If the number of axis instances provided is less than the number of qubits then only the data for the first len(axs) qubits will be plotted.
*   **results** (*Union\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*, List\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*]]*) – the discriminators get\_xdata will be used to retrieve the x data from the Result or list of Results.
*   **color** (*str*) – color of the IQ points in the scatter plot.

**Raises**

**QiskitError** – If not enough axis instances are provided

