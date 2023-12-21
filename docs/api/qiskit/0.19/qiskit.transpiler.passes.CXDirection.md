---
title: CXDirection
description: API reference for qiskit.transpiler.passes.CXDirection
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CXDirection
---

# CXDirection

<span id="qiskit.transpiler.passes.CXDirection" />

`CXDirection(*args, **kwargs)`

Rearrange the direction of the cx nodes to match the directed coupling map.

Flip the cx nodes to match the directed coupling map. This pass makes use of the following equivalence:

```python
---(+)---      --[H]---.---[H]--
    |      =           |
----.----      --[H]--(+)--[H]--
```

CXDirection initializer.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

## Attributes

|                                                                                                                                                                   |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`CXDirection.is_analysis_pass`](qiskit.transpiler.passes.CXDirection.is_analysis_pass "qiskit.transpiler.passes.CXDirection.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`CXDirection.is_transformation_pass`](qiskit.transpiler.passes.CXDirection.is_transformation_pass "qiskit.transpiler.passes.CXDirection.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                               |                                  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`CXDirection.name`](qiskit.transpiler.passes.CXDirection.name "qiskit.transpiler.passes.CXDirection.name")() | Return the name of the pass.     |
| [`CXDirection.run`](qiskit.transpiler.passes.CXDirection.run "qiskit.transpiler.passes.CXDirection.run")(dag) | Run the CXDirection pass on dag. |

