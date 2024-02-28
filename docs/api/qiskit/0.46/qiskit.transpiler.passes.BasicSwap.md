---
title: BasicSwap
description: API reference for qiskit.transpiler.passes.BasicSwap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.BasicSwap
---

# BasicSwap

<span id="qiskit.transpiler.passes.BasicSwap" />

`qiskit.transpiler.passes.BasicSwap(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/transpiler/passes/routing/basic_swap.py "view source code")

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Map (with minimum effort) a DAGCircuit onto a `coupling_map` adding swap gates.

The basic mapper is a minimum effort to insert swap gates to map the DAG onto a coupling map. When a cx is not in the coupling map possibilities, it inserts one or more swaps in front to make it compatible.

BasicSwap initializer.

**Parameters**

*   **coupling\_map** (*Union\[*[*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")*,* [*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")*]*) – Directed graph represented a coupling map.
*   **fake\_run** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – if true, it will only pretend to do routing, i.e., no swap is effectively added.

## Attributes

<span id="qiskit.transpiler.passes.BasicSwap.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.BasicSwap.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### execute

<span id="qiskit.transpiler.passes.BasicSwap.execute" />

`execute(passmanager_ir, state, callback=None)`

Execute optimization task for input Qiskit IR.

**Parameters**

*   **passmanager\_ir** ([*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")) – Qiskit IR to optimize.
*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – State associated with workflow execution by the pass manager itself.
*   **callback** ([*Callable*](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.12)") *| None*) – A callback function which is caller per execution of optimization task.

**Returns**

Optimized Qiskit IR and state of the workflow.

**Return type**

[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")\[[*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)"), [qiskit.passmanager.compilation\_status.PassManagerState](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")]

### name

<span id="qiskit.transpiler.passes.BasicSwap.name" />

`name()`

Name of the pass.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### run

<span id="qiskit.transpiler.passes.BasicSwap.run" />

`run(dag)`

Run the BasicSwap pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

A mapped DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**TranspilerError**](transpiler#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the coupling map or the layout are not
*   **compatible with the DAG**\*\*, or \*\***if the coupling\_map=None.** –

### update\_status

<span id="qiskit.transpiler.passes.BasicSwap.update_status" />

`update_status(state, run_state)`

Update workflow status.

**Parameters**

*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – Pass manager state to update.
*   **run\_state** (*RunState*) – Completion status of current task.

**Returns**

Updated pass manager state.

**Return type**

[*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")

