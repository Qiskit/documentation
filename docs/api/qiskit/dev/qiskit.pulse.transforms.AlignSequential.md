---
title: AlignSequential
description: API reference for qiskit.pulse.transforms.AlignSequential
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignSequential
---

# AlignSequential

<span id="qiskit.pulse.transforms.AlignSequential" />

`qiskit.pulse.transforms.AlignSequential` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/pulse/transforms/alignments.py "view source code")

Bases: [`AlignmentKind`](pulse#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

Align instructions sequentially.

Instructions played on different channels are also arranged in a sequence. No buffer time is inserted in between instructions.

Create new sequential context.

## Attributes

<span id="qiskit.pulse.transforms.AlignSequential.is_sequential" />

### is\_sequential

## Methods

### align

<span id="qiskit.pulse.transforms.AlignSequential.align" />

`align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to align.

**Returns**

Schedule with reallocated instructions.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

