---
title: GateDirection
description: API reference for qiskit.transpiler.passes.GateDirection
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.GateDirection
---

# GateDirection

<span id="qiskit.transpiler.passes.GateDirection" />

`GateDirection(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/transpiler/passes/utils/gate_direction.py "view source code")

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

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

     ┌──────┐          ┌───┐┌──────┐┌───┐
q_0: ┤0     ├     q_0: ┤ H ├┤1     ├┤ H ├
     │  RZX │  =       ├───┤│  RZX │├───┤
q_1: ┤1     ├     q_1: ┤ H ├┤0     ├┤ H ├
     └──────┘          └───┘└──────┘└───┘
```

GateDirection pass.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **target** ([*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")) – The backend target to use for this pass. If this is specified it will be used instead of the coupling map

## Methods

### name

<span id="qiskit.transpiler.passes.GateDirection.name" />

`GateDirection.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.GateDirection.run" />

`GateDirection.run(dag)`

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

## Attributes

<span id="qiskit.transpiler.passes.GateDirection.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.GateDirection.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

