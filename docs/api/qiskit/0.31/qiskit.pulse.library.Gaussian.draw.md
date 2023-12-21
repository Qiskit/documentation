# qiskit.pulse.library.Gaussian.draw

`Gaussian.draw(dt=None, style=None, filename=None, interp_method=None, scale=None, interactive=None, draw_title=None, backend=None, time_range=None, time_unit='dt', show_waveform_info=True, plotter='mpl2d', axis=None)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **style** (`Optional`\[`Dict`\[`str`, `Any`]]) – Stylesheet options. This can be dictionary or preset stylesheet classes. See :py:class:\~\`qiskit.visualization.pulse\_v2.stylesheets.IQXStandard\`, :py:class:\~\`qiskit.visualization.pulse\_v2.stylesheets.IQXSimple\`, and :py:class:\~\`qiskit.visualization.pulse\_v2.stylesheets.IQXDebugging\` for details of preset stylesheets.

*   **backend** (*Optional\[*[*BaseBackend*](qiskit.providers.BaseBackend#qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")*]*) – Backend object to play the input pulse program. If provided, the plotter may use to make the visualization hardware aware.

*   **time\_range** (`Optional`\[`Tuple`\[`int`, `int`]]) – Set horizontal axis limit. Tuple `(tmin, tmax)`.

*   **time\_unit** (`str`) – The unit of specified time range either `dt` or `ns`. The unit of `ns` is available only when `backend` object is provided.

*   **show\_waveform\_info** (`bool`) – Show waveform annotations, i.e. name, of waveforms. Set `True` to show additional information about waveforms.

*   **plotter** (`str`) –

    Name of plotter API to generate an output image. One of following APIs should be specified:

    ```python
    mpl2d: Matplotlib API for 2D image generation.
        Matplotlib API to generate 2D image. Charts are placed along y axis with
        vertical offset. This API takes matplotlib.axes.Axes as `axis` input.
    ```

    axis and style kwargs may depend on the plotter.

*   **axis** (`Optional`\[`Any`]) – Arbitrary object passed to the plotter. If this object is provided, the plotters use a given `axis` instead of internally initializing a figure object. This object format depends on the plotter. See plotter argument for details.

*   **dt** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

*   **filename** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer. To save output image, you can call .savefig method with returned Matplotlib Figure object.

*   **interp\_method** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

*   **scale** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

*   **interactive** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

*   **draw\_title** (`Optional`\[`Any`]) – Deprecated. This argument is used by the legacy pulse drawer.

**Returns**

Visualization output data. The returned data type depends on the `plotter`. If matplotlib family is specified, this will be a `matplotlib.pyplot.Figure` data.
