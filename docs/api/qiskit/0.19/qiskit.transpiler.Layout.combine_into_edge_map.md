---
title: combine_into_edge_map
description: API reference for qiskit.transpiler.Layout.combine_into_edge_map
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.Layout.combine_into_edge_map
---

# combine\_into\_edge\_map

<span id="qiskit.transpiler.Layout.combine_into_edge_map" />

`Layout.combine_into_edge_map(another_layout)`

Combines self and another\_layout into an “edge map”.

For example:

```python
   self       another_layout  resulting edge map
qr_1 -> 0        0 <- q_2         qr_1 -> q_2
qr_2 -> 2        2 <- q_1         qr_2 -> q_1
qr_3 -> 3        3 <- q_0         qr_3 -> q_0
```

The edge map is used to compose dags via, for example, compose.

**Parameters**

**another\_layout** ([*Layout*](qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – The other layout to combine.

**Returns**

A “edge map”.

**Return type**

dict

**Raises**

**LayoutError** – another\_layout can be bigger than self, but not smaller. Otherwise, raises.

