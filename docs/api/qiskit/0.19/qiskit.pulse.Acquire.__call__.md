---
title: __call__
description: API reference for qiskit.pulse.Acquire.__call__
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Acquire.__call__
---

# \_\_call\_\_

<span id="qiskit.pulse.Acquire.__call__" />

`Acquire.__call__(channel=None, mem_slot=None, reg_slots=None, mem_slots=None, reg_slot=None, kernel=None, discriminator=None, name=None)`

Return new `Acquire` that is fully instantiated with its channels.

**Parameters**

*   **channel** (`Union`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel"), `List`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")], `None`]) – The channel that will acquire data.
*   **mem\_slot** (`Union`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot"), `List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")], `None`]) – The classical memory slot in which to store the classified readout result.
*   **mem\_slots** (`Optional`\[`List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")]]) – Deprecated list form of `mem_slot`.
*   **reg\_slots** (`Union`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot"), `List`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")], `None`]) – Deprecated list form of `reg_slot`.
*   **reg\_slot** (`Optional`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")]) – The fast-access register slot in which to store the classified readout result for fast feedback.
*   **kernel** (`Optional`\[`Kernel`]) – A `Kernel` for integrating raw data.
*   **discriminator** (`Optional`\[`Discriminator`]) – A `Discriminator` for discriminating kerneled IQ data into 0/1 results.
*   **name** (`Optional`\[`str`]) – Name of the instruction for display purposes.

**Return type**

[`Acquire`](qiskit.pulse.instructions.Acquire "qiskit.pulse.instructions.acquire.Acquire")

**Returns**

Complete and ready to schedule `Acquire`.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `channel` has already been set.

