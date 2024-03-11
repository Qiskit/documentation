---
title: GateDirection
description: API reference for qiskit.transpiler.passes.GateDirection
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.GateDirection
---

# qiskit.transpiler.passes.GateDirection

<span id="qiskit.transpiler.passes.GateDirection" />

`GateDirection(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/utils/gate_direction.py "view source code")

Modify asymmetric gates to match the hardware coupling direction.

This pass makes use of the following identities:

```python
                     ┌───┐┌───┐┌───┐
q_0: ──■──      q_0: ┤ H ├┤ X ├┤ H ├
     ┌─┴─┐  =        ├───┤└─┬─┘├───┤
q_1: ┤ X ├      q_1: ┤ H ├──■──┤ H ├
     └───┘           └───┘     └───┘

     ┌──────┐          ┌───────────┐┌──────┐┌───┐
q_0: ┤0     ├     q_0: ┤ RY(-pi/2) ├┤1     ├┤ H ├
     │  ECR │  =       └┬──────────┤│  ECR │├───┤
q_1: ┤1     ├     q_1: ─┤ RY(pi/2) ├┤0     ├┤ H ├
     └──────┘           └──────────┘└──────┘└───┘
```

GateDirection pass.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.GateDirection.__init__" />

`__init__(coupling_map)`

GateDirection pass.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

## Methods

|                                                                                                                                 |                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.GateDirection.__init__ "qiskit.transpiler.passes.GateDirection.__init__")(coupling\_map) | GateDirection pass.                |
| [`name`](#qiskit.transpiler.passes.GateDirection.name "qiskit.transpiler.passes.GateDirection.name")()                          | Return the name of the pass.       |
| [`run`](#qiskit.transpiler.passes.GateDirection.run "qiskit.transpiler.passes.GateDirection.run")(dag)                          | Run the GateDirection pass on dag. |

## Attributes

|                                                                                                                                                            |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.GateDirection.is_analysis_pass "qiskit.transpiler.passes.GateDirection.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.GateDirection.is_transformation_pass "qiskit.transpiler.passes.GateDirection.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.GateDirection.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.GateDirection.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.GateDirection.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.GateDirection.run" />

`run(dag)`

Run the GateDirection pass on dag.

Flips the cx nodes to match the directed coupling map. Modifies the input dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

The rearranged dag for the coupling map

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If the circuit cannot be mapped just by flipping the cx nodes.

