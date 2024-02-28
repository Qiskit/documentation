---
title: OptimizeAnnotated
description: API reference for qiskit.transpiler.passes.OptimizeAnnotated
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.OptimizeAnnotated
---

# OptimizeAnnotated

<span id="qiskit.transpiler.passes.OptimizeAnnotated" />

`qiskit.transpiler.passes.OptimizeAnnotated(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/transpiler/passes/optimization/optimize_annotated.py "view source code")

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Optimization pass on circuits with annotated operations.

Implemented optimizations:

*   For each annotated operation, converting the list of its modifiers to a canonical form. For example, consecutively applying `inverse()`, `control(2)` and `inverse()` is equivalent to applying `control(2)`.
*   Removing annotations when possible. For example, `AnnotatedOperation(SwapGate(), [InverseModifier(), InverseModifier()])` is equivalent to `SwapGate()`.
*   Recursively combining annotations. For example, if `g1 = AnnotatedOperation(SwapGate(), InverseModifier())` and `g2 = AnnotatedOperation(g1, ControlModifier(2))`, then `g2` can be replaced with `AnnotatedOperation(SwapGate(), [InverseModifier(), ControlModifier(2)])`.

OptimizeAnnotated initializer.

**Parameters**

*   **target** – Optional, the backend target to use for this pass.
*   **equivalence\_library** – The equivalence library used (instructions in this library will not be optimized by this pass).
*   **basis\_gates** – Optional, target basis names to unroll to, e.g. \[‘u3’, ‘cx’] (instructions in this list will not be optimized by this pass). Ignored if `target` is also specified.
*   **recurse** – By default, when either `target` or `basis_gates` is specified, the pass recursively descends into gate definitions (and the recursion is not applied when neither is specified since such objects do not need to be synthesized). Setting this value to `False` precludes the recursion in every case.

## Attributes

<span id="qiskit.transpiler.passes.OptimizeAnnotated.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.OptimizeAnnotated.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### execute

<span id="qiskit.transpiler.passes.OptimizeAnnotated.execute" />

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

<span id="qiskit.transpiler.passes.OptimizeAnnotated.name" />

`name()`

Name of the pass.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### run

<span id="qiskit.transpiler.passes.OptimizeAnnotated.run" />

`run(dag)`

Run the OptimizeAnnotated pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")) – input dag.

**Returns**

Output dag with higher-level operations optimized.

**Raises**

[**TranspilerError**](transpiler#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – when something goes wrong.

### update\_status

<span id="qiskit.transpiler.passes.OptimizeAnnotated.update_status" />

`update_status(state, run_state)`

Update workflow status.

**Parameters**

*   **state** ([*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")) – Pass manager state to update.
*   **run\_state** (*RunState*) – Completion status of current task.

**Returns**

Updated pass manager state.

**Return type**

[*PassManagerState*](qiskit.passmanager.PassManagerState "qiskit.passmanager.compilation_status.PassManagerState")

