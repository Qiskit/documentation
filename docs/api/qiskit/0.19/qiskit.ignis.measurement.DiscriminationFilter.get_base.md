---
title: get_base
description: API reference for qiskit.ignis.measurement.DiscriminationFilter.get_base
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.measurement.DiscriminationFilter.get_base
---

# get\_base

<span id="qiskit.ignis.measurement.DiscriminationFilter.get_base" />

`static DiscriminationFilter.get_base(expected_states)`

Returns the base inferred from expected\_states.

The intent is to allow users to discriminate states higher than 0/1.

DiscriminationFilter infers the basis from the expected states to allow users to discriminate states outside of the computational sub-space. For example, if the discriminated states are 00, 01, 02, 10, 11, …, 22 the basis will be 3.

With this implementation the basis can be at most 10.

**Parameters**

**expected\_states** (`dict`) –

**Returns**

the base inferred from the expected states

**Return type**

int

**Raises**

**QiskitError** – if there is an invalid input in the expected states

