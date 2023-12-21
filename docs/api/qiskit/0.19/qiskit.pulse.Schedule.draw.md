---
title: draw
description: API reference for qiskit.pulse.Schedule.draw
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Schedule.draw
---

# draw

<span id="qiskit.pulse.Schedule.draw" />

`Schedule.draw(dt=1, style=None, filename=None, interp_method=None, scale=None, channel_scales=None, channels_to_plot=None, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, scaling=None, channels=None, show_framechange_channels=True)`

Plot the schedule.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*SchedStyle*](qiskit.visualization.pulse.qcstyle#qiskit.visualization.pulse.qcstyle.SchedStyle "qiskit.visualization.pulse.qcstyle.SchedStyle")*]*) – A style sheet to configure plot appearance.
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image.
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation.
*   **scale** (`Optional`\[`float`]) – Relative visual scaling of waveform amplitudes, see Additional Information.
*   **channel\_scales** (`Optional`\[`Dict`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel"), `float`]]) – Channel independent scaling as a dictionary of `Channel` object.
*   **channels\_to\_plot** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – Deprecated, see `channels`.
*   **plot\_all** (`bool`) – Plot empty channels.
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot.
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this).
*   **table** (`bool`) – Draw event table for supported commands.
*   **label** (`bool`) – Label individual instructions.
*   **framechange** (`bool`) – Add framechange indicators.
*   **scaling** (`Optional`\[`float`]) – Deprecated, see `scale`.
*   **channels** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot.
*   **show\_framechange\_channels** (`bool`) – Plot channels with only framechanges.

## Additional Information:

If you want to manually rescale the waveform amplitude of channels one by one, you can set `channel_scales` argument instead of `scale`. The `channel_scales` should be given as a python dictionary:

```python
channel_scales = {pulse.DriveChannels(0): 10.0,
                  pulse.MeasureChannels(0): 5.0}
```

When the channel to plot is not included in the `channel_scales` dictionary, scaling factor of that channel is overwritten by the value of `scale` argument. In default, waveform amplitude is normalized by the maximum amplitude of the channel. The scaling factor is displayed under the channel name alias.

**Returns**

A matplotlib figure object of the pulse schedule.

**Return type**

matplotlib.Figure

