# AlignSequential

<span id="undefined" />

`AlignSequential`

Bases: `qiskit.pulse.transforms.alignments.AlignmentKind`

Align instructions sequentially.

Instructions played on different channels are also arranged in a sequence. No buffer time is inserted in between instructions.

Create new context.

## Methods

|                                                                                                                                                                |                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`align`](qiskit.pulse.transforms.AlignSequential.align#qiskit.pulse.transforms.AlignSequential.align "qiskit.pulse.transforms.AlignSequential.align")         | Reallocate instructions according to the policy. |
| [`to_dict`](qiskit.pulse.transforms.AlignSequential.to_dict#qiskit.pulse.transforms.AlignSequential.to_dict "qiskit.pulse.transforms.AlignSequential.to_dict") | Returns dictionary to represent this alignment.  |

## Attributes

<span id="undefined" />

### is\_sequential

`= True`
