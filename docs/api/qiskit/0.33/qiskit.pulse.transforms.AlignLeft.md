---
title: AlignLeft
description: API reference for qiskit.pulse.transforms.AlignLeft
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignLeft
---

# AlignLeft

<span id="qiskit.pulse.transforms.AlignLeft" />

`AlignLeft` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/pulse/transforms/alignments.py "view source code")

Bases: `qiskit.pulse.transforms.alignments.AlignmentKind`

Align instructions in as-soon-as-possible manner.

Instructions are placed at earliest available timeslots.

Create new context.

## Methods

### align

<span id="qiskit.pulse.transforms.AlignLeft.align" />

`AlignLeft.align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** (`Schedule`) – Schedule to align.

**Return type**

`Schedule`

**Returns**

Schedule with reallocated instructions.

### to\_dict

<span id="qiskit.pulse.transforms.AlignLeft.to_dict" />

`AlignLeft.to_dict()`

Returns dictionary to represent this alignment.

**Return type**

`Dict`\[`str`, `Any`]

## Attributes

<span id="qiskit.pulse.transforms.AlignLeft.is_sequential" />

### is\_sequential

`= False`

