---
title: ASAPScheduleAnalysis
description: API reference for qiskit_ibm_provider.transpiler.passes.scheduling.ASAPScheduleAnalysis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_provider.transpiler.passes.scheduling.ASAPScheduleAnalysis
---

# ASAPScheduleAnalysis

<span id="qiskit_ibm_provider.transpiler.passes.scheduling.ASAPScheduleAnalysis" />

`ASAPScheduleAnalysis(durations)`

Dynamic circuits as-soon-as-possible (ASAP) scheduling analysis pass.

This is a scheduler designed to work for the unique scheduling constraints of the dynamic circuits backends due to the limitations imposed by hardware. This is expected to evolve over time as the dynamic circuit backends also change.

In its current form this is similar to Qiskit’s ASAP scheduler in which instructions start as early as possible.

The primary differences are that:

*   **Resets and control-flow currently trigger the end of a “quantum block”. The period between the end**

    of the block and the next is *nondeterministic* ie., we do not know when the next block will begin (as we could be evaluating a classical function of nondeterministic length) and therefore the next block starts at a *relative* t=0.

*   During a measurement it is possible to apply gates in parallel on disjoint qubits.

*   Measurements and resets on disjoint qubits happen simultaneously and are part of the same block.

Scheduler for dynamic circuit backends.

**Parameters**

**durations** ([`InstructionDurations`](/api/qiskit/qiskit.transpiler.InstructionDurations.html#qiskit.transpiler.InstructionDurations "(in Qiskit v0.44)")) – Durations of instructions to be used in scheduling.

## Attributes

<span id="asapscheduleanalysis-is-analysis-pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="asapscheduleanalysis-is-transformation-pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

<span id="asapscheduleanalysis-call" />

### \_\_call\_\_

<span id="qiskit_ibm_provider.transpiler.passes.scheduling.ASAPScheduleAnalysis.__call__" />

`ASAPScheduleAnalysis.__call__(circuit, property_set=None)`

Runs the pass on circuit.

**Parameters**

*   **circuit** (*QuantumCircuit*) – the dag on which the pass is run.
*   **property\_set** (*PropertySet or dict or None*) – input/output property set. An analysis pass might change the property set in-place.

**Returns**

**If on transformation pass, the resulting QuantumCircuit. If analysis**

pass, the input circuit.

**Return type**

QuantumCircuit

<span id="asapscheduleanalysis-name" />

### name

<span id="qiskit_ibm_provider.transpiler.passes.scheduling.ASAPScheduleAnalysis.name" />

`ASAPScheduleAnalysis.name()`

Return the name of the pass.

<span id="asapscheduleanalysis-run" />

### run

<span id="qiskit_ibm_provider.transpiler.passes.scheduling.ASAPScheduleAnalysis.run" />

`ASAPScheduleAnalysis.run(dag)`

Run the ALAPSchedule pass on dag. :type dag: [`DAGCircuit`](/api/qiskit/qiskit.dagcircuit.DAGCircuit.html#qiskit.dagcircuit.DAGCircuit "(in Qiskit v0.44)") :param dag: DAG to schedule. :type dag: DAGCircuit

**Raises**

*   **TranspilerError** – if the circuit is not mapped on physical qubits.
*   **TranspilerError** – if conditional bit is added to non-supported instruction.

**Return type**

[`DAGCircuit`](/api/qiskit/qiskit.dagcircuit.DAGCircuit.html#qiskit.dagcircuit.DAGCircuit "(in Qiskit v0.44)")

**Returns**

The scheduled DAGCircuit.

