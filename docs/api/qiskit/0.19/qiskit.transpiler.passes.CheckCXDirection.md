---
title: CheckCXDirection
description: API reference for qiskit.transpiler.passes.CheckCXDirection
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CheckCXDirection
---

# CheckCXDirection

<span id="qiskit.transpiler.passes.CheckCXDirection" />

`CheckCXDirection(*args, **kwargs)`

Check if the CNOTs follow the right direction with respect to the coupling map.

This pass checks if the CNOTs (or any other 2Q) in the DAG follow the right direction with respect to the coupling map.

CheckCXDirection initializer.

Checks if the CNOTs in DAGCircuit are in the allowed direction with respect to coupling\_map.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.

## Attributes

|                                                                                                                                                                                  |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`CheckCXDirection.is_analysis_pass`](qiskit.transpiler.passes.CheckCXDirection.is_analysis_pass "qiskit.transpiler.passes.CheckCXDirection.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`CheckCXDirection.is_transformation_pass`](qiskit.transpiler.passes.CheckCXDirection.is_transformation_pass "qiskit.transpiler.passes.CheckCXDirection.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                              |                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`CheckCXDirection.name`](qiskit.transpiler.passes.CheckCXDirection.name "qiskit.transpiler.passes.CheckCXDirection.name")() | Return the name of the pass.          |
| [`CheckCXDirection.run`](qiskit.transpiler.passes.CheckCXDirection.run "qiskit.transpiler.passes.CheckCXDirection.run")(dag) | Run the CheckCXDirection pass on dag. |

