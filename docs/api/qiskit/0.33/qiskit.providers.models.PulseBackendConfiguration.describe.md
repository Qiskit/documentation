# qiskit.providers.models.PulseBackendConfiguration.describe

`PulseBackendConfiguration.describe(channel)`

Return a basic description of the channel dependency. Derived channels are given weights which describe how their frames are linked to other frames. For instance, the backend could be configured with this setting:

```python
u_channel_lo = [
    [UchannelLO(q=0, scale=1. + 0.j)],
    [UchannelLO(q=0, scale=-1. + 0.j), UchannelLO(q=1, scale=1. + 0.j)]
]
```

Then, this method can be used as follows:

```python
backend.configuration().describe(ControlChannel(1))
>>> {DriveChannel(0): -1, DriveChannel(1): 1}
```

**Parameters**

**channel** ([`ControlChannel`](qiskit.pulse.channels.ControlChannel#qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")) – The derived channel to describe.

**Raises**

**BackendConfigurationError** – If channel is not a ControlChannel.

**Return type**

`Dict`\[[`DriveChannel`](qiskit.pulse.channels.DriveChannel#qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel"), `complex`]

**Returns**

Control channel derivations.
