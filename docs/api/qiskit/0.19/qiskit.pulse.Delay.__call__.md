---
title: __call__
description: API reference for qiskit.pulse.Delay.__call__
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Delay.__call__
---

# \_\_call\_\_

<span id="qiskit.pulse.Delay.__call__" />

`Delay.__call__(channel)`

Return new `Delay` that is fully instantiated with both `duration` and a `channel`.

**Parameters**

**channel** ([`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – The channel that will have the delay.

**Return type**

[`Delay`](qiskit.pulse.instructions.Delay "qiskit.pulse.instructions.delay.Delay")

**Returns**

Complete and ready to schedule `Delay`.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `channel` has already been set.

