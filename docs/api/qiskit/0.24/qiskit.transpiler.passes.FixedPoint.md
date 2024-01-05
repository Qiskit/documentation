---
title: FixedPoint
description: API reference for qiskit.transpiler.passes.FixedPoint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.FixedPoint
---

<span id="qiskit-transpiler-passes-fixedpoint" />

# qiskit.transpiler.passes.FixedPoint

<span id="qiskit.transpiler.passes.FixedPoint" />

`FixedPoint(*args, **kwargs)`

Check if a property reached a fixed point.

A dummy analysis pass that checks if a property reached a fixed point. The results is saved in `property_set['<property>_fixed_point']` as a boolean.

FixedPoint initializer.

**Parameters**

**property\_to\_check** (*str*) – The property to check if a fixed point was reached.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.FixedPoint.__init__" />

`__init__(property_to_check)`

FixedPoint initializer.

**Parameters**

**property\_to\_check** (*str*) – The property to check if a fixed point was reached.

## Methods

## Attributes

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.FixedPoint.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.FixedPoint.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.FixedPoint.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.FixedPoint.run" />

`run(dag)`

Run the FixedPoint pass on dag.

