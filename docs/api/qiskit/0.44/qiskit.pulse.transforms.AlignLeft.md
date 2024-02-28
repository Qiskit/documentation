---
title: AlignLeft
description: API reference for qiskit.pulse.transforms.AlignLeft
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignLeft
---

# AlignLeft

<span id="qiskit.pulse.transforms.AlignLeft" />

`qiskit.pulse.transforms.AlignLeft` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/alignments.py "view source code")

Bases: [`AlignmentKind`](pulse#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

Align instructions in as-soon-as-possible manner.

Instructions are placed at earliest available timeslots.

Create new left-justified context.

## Attributes

<span id="qiskit.pulse.transforms.AlignLeft.is_sequential" />

### is\_sequential

## Methods

### align

<span id="qiskit.pulse.transforms.AlignLeft.align" />

`align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to align.

**Returns**

Schedule with reallocated instructions.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### to\_dict

<span id="qiskit.pulse.transforms.AlignLeft.to_dict" />

`to_dict()`

Returns dictionary to represent this alignment.

<Admonition title="Deprecated since version 0.21" type="danger">
  The method `qiskit.pulse.transforms.alignments.AlignmentKind.to_dict()` is deprecated as of qiskit-terra 0.21. It will be removed no earlier than 3 months after the release date.
</Admonition>

**Return type**

[*Dict*](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.12)")\[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)"), [*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")]

