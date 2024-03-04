---
title: TrivialLayout
description: API reference for qiskit.transpiler.passes.TrivialLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.TrivialLayout
---

# qiskit.transpiler.passes.TrivialLayout

<span id="qiskit.transpiler.passes.TrivialLayout" />

`TrivialLayout(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/layout/trivial_layout.py "view source code")

Choose a Layout by assigning `n` circuit qubits to device qubits `0, .., n-1`.

A pass for choosing a Layout of a circuit onto a Coupling graph, using a simple round-robin order.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit) in increasing order.

Does not assume any ancilla.

TrivialLayout initializer.

**Parameters**

**coupling\_map** (*Coupling*) – directed graph representing a coupling map.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if invalid options

### \_\_init\_\_

<span id="qiskit.transpiler.passes.TrivialLayout.__init__" />

`__init__(coupling_map)`

TrivialLayout initializer.

**Parameters**

**coupling\_map** (*Coupling*) – directed graph representing a coupling map.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if invalid options

## Methods

|                                                                                                                                 |                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.TrivialLayout.__init__ "qiskit.transpiler.passes.TrivialLayout.__init__")(coupling\_map) | TrivialLayout initializer.         |
| [`name`](#qiskit.transpiler.passes.TrivialLayout.name "qiskit.transpiler.passes.TrivialLayout.name")()                          | Return the name of the pass.       |
| [`run`](#qiskit.transpiler.passes.TrivialLayout.run "qiskit.transpiler.passes.TrivialLayout.run")(dag)                          | Run the TrivialLayout pass on dag. |

## Attributes

|                                                                                                                                                            |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.TrivialLayout.is_analysis_pass "qiskit.transpiler.passes.TrivialLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.TrivialLayout.is_transformation_pass "qiskit.transpiler.passes.TrivialLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.TrivialLayout.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.TrivialLayout.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.TrivialLayout.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.TrivialLayout.run" />

`run(dag)`

Run the TrivialLayout pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to find layout for.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if dag wider than self.coupling\_map

