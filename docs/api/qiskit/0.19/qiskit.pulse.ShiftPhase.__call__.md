---
title: __call__
description: API reference for qiskit.pulse.ShiftPhase.__call__
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.ShiftPhase.__call__
---

# \_\_call\_\_

<span id="qiskit.pulse.ShiftPhase.__call__" />

`ShiftPhase.__call__(channel)`

Return a new ShiftPhase instruction supporting the deprecated syntax of FrameChange.

**Parameters**

**channel** ([`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If channel was already added.

**Return type**

[`ShiftPhase`](qiskit.pulse.instructions.ShiftPhase "qiskit.pulse.instructions.phase.ShiftPhase")

**Returns**

New ShiftPhase with both phase (from ```self`) and the ``channel``` provided.

