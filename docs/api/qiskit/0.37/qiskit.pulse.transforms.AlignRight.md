---
title: AlignRight
description: API reference for qiskit.pulse.transforms.AlignRight
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignRight
---

# AlignRight

<span id="qiskit.pulse.transforms.AlignRight" />

`AlignRight` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/pulse/transforms/alignments.py "view source code")

Bases: [`qiskit.pulse.transforms.alignments.AlignmentKind`](pulse#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

Align instructions in as-late-as-possible manner.

Instructions are placed at latest available timeslots.

Create new right-justified context.

## Methods

### align

<span id="qiskit.pulse.transforms.AlignRight.align" />

`AlignRight.align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** ([`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to align.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

Schedule with reallocated instructions.

### to\_dict

<span id="qiskit.pulse.transforms.AlignRight.to_dict" />

`AlignRight.to_dict()`

Returns dictionary to represent this alignment.

**Return type**

`Dict`\[`str`, `Any`]

## Attributes

<span id="qiskit.pulse.transforms.AlignRight.is_sequential" />

### is\_sequential

**Return type**

`bool`

