---
title: drive_channel
description: API reference for qiskit.pulse.builder.drive_channel
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.builder.drive_channel
---

# qiskit.pulse.builder.drive\_channel[¶](#qiskit-pulse-builder-drive-channel "Permalink to this headline")

<span id="qiskit.pulse.builder.drive_channel" />

`drive_channel(qubit)`

Return `DriveChannel` for `qubit` on the active builder backend.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    assert pulse.drive_channel(0) == pulse.DriveChannel(0)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

[`DriveChannel`](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

