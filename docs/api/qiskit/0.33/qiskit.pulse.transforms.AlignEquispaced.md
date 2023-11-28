# AlignEquispaced

<span id="undefined" />

`AlignEquispaced(duration)`

Bases: `qiskit.pulse.transforms.alignments.AlignmentKind`

Align instructions with equispaced interval within a specified duration.

Instructions played on different channels are also arranged in a sequence. This alignment is convenient to create dynamical decoupling sequences such as PDD.

Create new equispaced context.

**Parameters**

**duration** (`Union`\[`int`, `ParameterExpression`]) – Duration of this context. This should be larger than the schedule duration. If the specified duration is shorter than the schedule duration, no alignment is performed and the input schedule is just returned. This duration can be parametrized.

## Methods

|                                                                                                                                                                |                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`align`](qiskit.pulse.transforms.AlignEquispaced.align#qiskit.pulse.transforms.AlignEquispaced.align "qiskit.pulse.transforms.AlignEquispaced.align")         | Reallocate instructions according to the policy. |
| [`to_dict`](qiskit.pulse.transforms.AlignEquispaced.to_dict#qiskit.pulse.transforms.AlignEquispaced.to_dict "qiskit.pulse.transforms.AlignEquispaced.to_dict") | Returns dictionary to represent this alignment.  |

## Attributes

<span id="undefined" />

### duration

Return context duration.

<span id="undefined" />

### is\_sequential

`= True`
