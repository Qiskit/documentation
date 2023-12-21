---
title: ordered_parameters
description: API reference for qiskit.circuit.library.TwoLocal.ordered_parameters
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.circuit.library.TwoLocal.ordered_parameters
---

# ordered\_parameters

<span id="qiskit.circuit.library.TwoLocal.ordered_parameters" />

`List[qiskit.circuit.parameter.Parameter]`

The parameters used in the underlying circuit.

This includes float values and duplicates.

## Examples

```python
>>> # prepare circuit ...
>>> print(nlocal)
     ┌───────┐┌──────────┐┌──────────┐┌──────────┐
q_0: ┤ Ry(1) ├┤ Ry(θ[1]) ├┤ Ry(θ[1]) ├┤ Ry(θ[3]) ├
     └───────┘└──────────┘└──────────┘└──────────┘
>>> nlocal.parameters
{Parameter(θ[1]), Parameter(θ[3])}
>>> nlocal.ordered_parameters
[1, Parameter(θ[1]), Parameter(θ[1]), Parameter(θ[3])]
```

**Return type**

`List`\[[`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.parameter.Parameter")]

**Returns**

The parameters objects used in the circuit.

