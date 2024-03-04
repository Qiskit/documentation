---
title: ValidatePulseGates
description: API reference for qiskit.transpiler.passes.ValidatePulseGates
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ValidatePulseGates
---

# ValidatePulseGates

<span id="qiskit.transpiler.passes.ValidatePulseGates" />

`ValidatePulseGates(granularity=1, min_length=1)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/transpiler/passes/scheduling/instruction_alignment.py "view source code")

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Check custom gate length.

This is a control electronics aware analysis pass.

Quantum gates (instructions) are often implemented with shaped analog stimulus signals. These signals may be digitally stored in the waveform memory of the control electronics and converted into analog voltage signals by electronic components known as digital to analog converters (DAC).

In Qiskit SDK, we can define the pulse-level implementation of custom quantum gate instructions, as a [pulse gate](https://qiskit.org/documentation/tutorials/circuits_advanced/05_pulse_gates.html), thus user gates should satisfy all waveform memory constraints imposed by the backend.

This pass validates all attached calibration entries and raises `TranspilerError` to kill the transpilation process if any invalid calibration entry is found. This pass saves users from waiting until job execution time to get an invalid pulse error from the backend control electronics.

Create new pass.

**Parameters**

*   **granularity** (`int`) – Integer number representing the minimum time resolution to define the pulse gate length in units of `dt`. This value depends on the control electronics of your quantum processor.
*   **min\_length** (`int`) – Integer number representing the minimum data point length to define the pulse gate in units of `dt`. This value depends on the control electronics of your quantum processor.

## Methods

### name

<span id="qiskit.transpiler.passes.ValidatePulseGates.name" />

`ValidatePulseGates.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ValidatePulseGates.run" />

`ValidatePulseGates.run(dag)`

Run the measurement alignment pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to be checked.

**Returns**

DAG with consistent timing and op nodes annotated with duration.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – When pulse gate violate pulse controller constraints.

## Attributes

<span id="qiskit.transpiler.passes.ValidatePulseGates.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ValidatePulseGates.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

