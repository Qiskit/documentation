---
title: ConvertConditionsToIfOps
description: API reference for qiskit.transpiler.passes.ConvertConditionsToIfOps
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ConvertConditionsToIfOps
---

# ConvertConditionsToIfOps

<span id="qiskit.transpiler.passes.ConvertConditionsToIfOps" />

`ConvertConditionsToIfOps(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/transpiler/passes/utils/convert_conditions_to_if_ops.py "view source code")

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Convert instructions whose `condition` attribute is set to a non-`None` value into the equivalent single-statement `IfElseBlock`.

This is a simple pass aimed at easing the conversion from the old style of using [`InstructionSet.c_if()`](qiskit.circuit.InstructionSet#c_if "qiskit.circuit.InstructionSet.c_if") into the new style of using more complex conditional logic.

## Methods

### name

<span id="qiskit.transpiler.passes.ConvertConditionsToIfOps.name" />

`ConvertConditionsToIfOps.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ConvertConditionsToIfOps.run" />

`ConvertConditionsToIfOps.run(dag)`

Run a pass on the DAGCircuit. This is implemented by the pass developer.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the dag on which the pass is run.

**Raises**

**NotImplementedError** – when this is left unimplemented for a pass.

## Attributes

<span id="qiskit.transpiler.passes.ConvertConditionsToIfOps.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ConvertConditionsToIfOps.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

