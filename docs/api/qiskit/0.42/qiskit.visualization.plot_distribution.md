---
title: plot_distribution
description: API reference for qiskit.visualization.plot_distribution
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.visualization.plot_distribution
---

# qiskit.visualization.plot\_distribution[¶](#qiskit-visualization-plot-distribution "Permalink to this headline")

<span id="qiskit.visualization.plot_distribution" />

`plot_distribution(data, figsize=(7, 5), color=None, number_to_keep=None, sort='asc', target_string=None, legend=None, bar_labels=True, title=None, ax=None, filename=None)`

Plot a distribution from input sampled data.

**Parameters**

*   **data** (*list or dict*) – This is either a list of dictionaries or a single dict containing the values to represent (ex \{‘001’: 130})
*   **figsize** (*tuple*) – Figure size in inches.
*   **color** (*list or str*) – String or list of strings for distribution bar colors.
*   **number\_to\_keep** (*int*) – The number of terms to plot per dataset. The rest is made into a single bar called ‘rest’. If multiple datasets are given, the `number_to_keep` applies to each dataset individually, which may result in more bars than `number_to_keep + 1`. The `number_to_keep` applies to the total values, rather than the x-axis sort.
*   **sort** (*string*) – Could be ‘asc’, ‘desc’, ‘hamming’, ‘value’, or ‘value\_desc’. If set to ‘value’ or ‘value\_desc’ the x axis will be sorted by the maximum probability for each bitstring. Defaults to ‘asc’.
*   **target\_string** (*str*) – Target string if ‘sort’ is a distance measure.
*   **legend** (*list*) – A list of strings to use for labels of the data. The number of entries must match the length of data (if data is a list or 1 if it’s a dict)
*   **bar\_labels** (*bool*) – Label each bar in histogram with probability value.
*   **title** (*str*) – A string to use for the plot title
*   **ax** (*matplotlib.axes.Axes*) – An optional Axes object to be used for the visualization output. If none is specified a new matplotlib Figure will be created and used. Additionally, if specified there will be no returned Figure since it is redundant.
*   **filename** (*str*) – file path to save image to.

**Returns**

A figure for the rendered distribution, if the `ax` kwarg is not set.

**Return type**

matplotlib.Figure

**Raises**

*   **MissingOptionalLibraryError** – Matplotlib not available.
*   [**VisualizationError**](qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError") – When legend is provided and the length doesn’t match the input data.

## Examples

```python
# Plot two counts in the same figure with legends and colors specified.

from qiskit.visualization import plot_distribution

counts1 = {'00': 525, '11': 499}
counts2 = {'00': 511, '11': 514}

legend = ['First execution', 'Second execution']

plot_distribution([counts1, counts2], legend=legend, color=['crimson','midnightblue'],
                title="New Distribution")

# You can sort the bitstrings using different methods.

counts = {'001': 596, '011': 211, '010': 50, '000': 117, '101': 33, '111': 8,
        '100': 6, '110': 3}

# Sort by the counts in descending order
dist1 = plot_distribution(counts, sort='value_desc')

# Sort by the hamming distance (the number of bit flips to change from
# one bitstring to the other) from a target string.
dist2 = plot_distribution(counts, sort='hamming', target_string='001')
```

![../\_images/qiskit-visualization-plot\_distribution-1\_00.png](/images/api/qiskit/0.42/qiskit-visualization-plot_distribution-1_00.png)

Fig. 15 ([`png`](_downloads/38ff20d45b828b37a4e861e3bf0fbd49/qiskit-visualization-plot_distribution-1_00.png), [`hires.png`](_downloads/a3cfc72d23050f16a9f8eb9454613f2a/qiskit-visualization-plot_distribution-1_00.hires.png), [`pdf`](_downloads/429b65cdd15b0187b45b8b82a0a16b59/qiskit-visualization-plot_distribution-1_00.pdf))[¶](#id1 "Permalink to this image")

![../\_images/qiskit-visualization-plot\_distribution-1\_01.png](/images/api/qiskit/0.42/qiskit-visualization-plot_distribution-1_01.png)

Fig. 16 ([`png`](_downloads/3e5d1f9b298f3aa556e2afb1361d94de/qiskit-visualization-plot_distribution-1_01.png), [`hires.png`](_downloads/f4797be397c5517caa9cba2d3210e0d4/qiskit-visualization-plot_distribution-1_01.hires.png), [`pdf`](_downloads/31077ff3f04c3d05a394b198dece5249/qiskit-visualization-plot_distribution-1_01.pdf))[¶](#id2 "Permalink to this image")

![../\_images/qiskit-visualization-plot\_distribution-1\_02.png](/images/api/qiskit/0.42/qiskit-visualization-plot_distribution-1_02.png)

Fig. 17 ([`png`](_downloads/ab09ba350ca0888f337336372ebf62f6/qiskit-visualization-plot_distribution-1_02.png), [`hires.png`](_downloads/009236530201ab51a592725e37f75bdf/qiskit-visualization-plot_distribution-1_02.hires.png), [`pdf`](_downloads/74684a8061bef7b40153e044fbf37b3b/qiskit-visualization-plot_distribution-1_02.pdf))[¶](#id3 "Permalink to this image")

