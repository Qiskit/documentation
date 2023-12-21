# qiskit.pulse.ScheduleBlock.draw

`ScheduleBlock.draw(style=None, backend=None, time_range=None, time_unit='dt', disable_channels=None, show_snapshot=True, show_framechange=True, show_waveform_info=True, show_barrier=True, plotter='mpl2d', axis=None)`

Plot the schedule.

**Parameters**

*   **style** (`Optional`\[`Dict`\[`str`, `Any`]]) – Stylesheet options. This can be dictionary or preset stylesheet classes. See `IQXStandard`, `IQXSimple`, and `IQXDebugging` for details of preset stylesheets.

*   **backend** (*Optional\[*[*BaseBackend*](qiskit.providers.BaseBackend#qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")*]*) – Backend object to play the input pulse program. If provided, the plotter may use to make the visualization hardware aware.

*   **time\_range** (`Optional`\[`Tuple`\[`int`, `int`]]) – Set horizontal axis limit. Tuple (tmin, tmax).

*   **time\_unit** (`str`) – The unit of specified time range either dt or ns. The unit of ns is available only when backend object is provided.

*   **disable\_channels** (`Optional`\[`List`\[[`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – A control property to show specific pulse channel. Pulse channel instances provided as a list are not shown in the output image.

*   **show\_snapshot** (`bool`) – Show snapshot instructions.

*   **show\_framechange** (`bool`) – Show frame change instructions. The frame change represents instructions that modulate phase or frequency of pulse channels.

*   **show\_waveform\_info** (`bool`) – Show additional information about waveforms such as their name.

*   **show\_barrier** (`bool`) – Show barrier lines.

*   **plotter** (`str`) –

    Name of plotter API to generate an output image. One of following APIs should be specified:

    ```python
    mpl2d: Matplotlib API for 2D image generation.
        Matplotlib API to generate 2D image. Charts are placed along y axis with
        vertical offset. This API takes matplotlib.axes.Axes as ``axis`` input.
    ```

    `axis` and `style` kwargs may depend on the plotter.

*   **axis** (`Optional`\[`Any`]) – Arbitrary object passed to the plotter. If this object is provided, the plotters use a given `axis` instead of internally initializing a figure object. This object format depends on the plotter. See plotter argument for details.

**Returns**

Visualization output data. The returned data type depends on the `plotter`. If matplotlib family is specified, this will be a `matplotlib.pyplot.Figure` data.
