---
title: CommutationAnalysis
description: API reference for qiskit.transpiler.passes.CommutationAnalysis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CommutationAnalysis
---

# CommutationAnalysis

<span id="qiskit.transpiler.passes.CommutationAnalysis" />

`qiskit.transpiler.passes.CommutationAnalysis(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/transpiler/passes/optimization/commutation_analysis.py "view source code")

Bases: [`AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Analysis pass to find commutation relations between DAG nodes.

`property_set['commutation_set']` is a dictionary that describes the commutation relations on a given wire, all the gates on a wire are grouped into a set of gates that commute.

## Attributes

<span id="qiskit.transpiler.passes.CommutationAnalysis.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.CommutationAnalysis.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### execute

<span id="qiskit.transpiler.passes.CommutationAnalysis.execute" />

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

<span id="qiskit.transpiler.passes.CommutationAnalysis.name" />

`name()`

Name of the pass.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### run

<span id="qiskit.transpiler.passes.CommutationAnalysis.run" />

`run(dag)`

Run the CommutationAnalysis pass on dag.

Run the pass on the DAG, and write the discovered commutation relations into the `property_set`.

### update\_status

<span id="qiskit.transpiler.passes.CommutationAnalysis.update_status" />

`update_status(state, run_state)`

Update workflow status.

**Parameters**

*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – Pass manager state to update.
*   **run\_state** (*RunState*) – Completion status of current task.

**Returns**

Updated pass manager state.

**Return type**

[*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")

