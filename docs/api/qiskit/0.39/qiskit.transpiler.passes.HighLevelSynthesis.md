---
title: HighLevelSynthesis
description: API reference for qiskit.transpiler.passes.HighLevelSynthesis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.HighLevelSynthesis
---

# HighLevelSynthesis

<span id="qiskit.transpiler.passes.HighLevelSynthesis" />

`HighLevelSynthesis(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/transpiler/passes/synthesis/high_level_synthesis.py "view source code")

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Synthesize higher-level objects by choosing the appropriate synthesis method based on the object’s name and the high-level-synthesis config of type [`HLSConfig`](qiskit.transpiler.passes.HLSConfig "qiskit.transpiler.passes.HLSConfig") (if provided).

As an example, let us assume that `op_a` and `op_b` are names of two higher-level objects, that `op_a`-objects have two synthesis methods `default` which does require any additional parameters and `other` with two optional integer parameters `option_1` and `option_2`, that `op_b`-objects have a single synthesis method `default`, and `qc` is a quantum circuit containing `op_a` and `op_b` objects. The following code snippet:

```python
hls_config = HLSConfig(op_b=[("other", {"option_1": 7, "option_2": 4})])
pm = PassManager([HighLevelSynthesis(hls_config=hls_config)])
transpiled_qc = pm.run(qc)
```

shows how to run the alternative synthesis method `other` for `op_b`-objects, while using the `default` methods for all other high-level objects, including `op_a`-objects.

## Methods

### name

<span id="qiskit.transpiler.passes.HighLevelSynthesis.name" />

`HighLevelSynthesis.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.HighLevelSynthesis.run" />

`HighLevelSynthesis.run(dag)`

Run the HighLevelSynthesis pass on dag. :type dag: [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit") :param dag: input dag.

**Return type**

[`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")

**Returns**

Output dag with certain Operations synthesized (as specified by the hls\_config).

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – when the specified synthesis method is not available.

## Attributes

<span id="qiskit.transpiler.passes.HighLevelSynthesis.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.HighLevelSynthesis.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

