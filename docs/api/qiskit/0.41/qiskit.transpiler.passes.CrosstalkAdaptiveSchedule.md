---
title: CrosstalkAdaptiveSchedule
description: API reference for qiskit.transpiler.passes.CrosstalkAdaptiveSchedule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CrosstalkAdaptiveSchedule
---

# CrosstalkAdaptiveSchedule

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule" />

`CrosstalkAdaptiveSchedule(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/transpiler/passes/optimization/crosstalk_adaptive_schedule.py "view source code")

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Crosstalk mitigation through adaptive instruction scheduling.

CrosstalkAdaptiveSchedule initializer.

**Parameters**

*   **backend\_prop** ([*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – backend properties object

*   **crosstalk\_prop** (*dict*) –

    crosstalk properties object crosstalk\_prop\[g1]\[g2] specifies the conditional error rate of g1 when g1 and g2 are executed simultaneously. g1 should be a two-qubit tuple of the form (x,y) where x and y are physical qubit ids. g2 can be either two-qubit tuple (x,y) or single-qubit tuple (x). We currently ignore crosstalk between pairs of single-qubit gates. Gate pairs which are not specified are assumed to be crosstalk free.

    Example:

    ```python
    crosstalk_prop = {(0, 1) : {(2, 3) : 0.2, (2) : 0.15},
                                (4, 5) : {(2, 3) : 0.1},
                                (2, 3) : {(0, 1) : 0.05, (4, 5): 0.05}}
    ```

    The keys of the crosstalk\_prop are tuples for ordered tuples for CX gates e.g., (0, 1) corresponding to CX 0, 1 in the hardware. Each key has an associated value dict which specifies the conditional error rates with nearby gates e.g., `(0, 1) : {(2, 3) : 0.2, (2) : 0.15}` means that CNOT 0, 1 has an error rate of 0.2 when it is executed in parallel with CNOT 2,3 and an error rate of 0.15 when it is executed in parallel with a single qubit gate on qubit 2.

*   **weight\_factor** (*float*) – weight of gate error/crosstalk terms in the objective $weight_factor*fidelities + (1-weight_factor)*decoherence errors$. Weight can be varied from 0 to 1, with 0 meaning that only decoherence errors are optimized and 1 meaning that only crosstalk errors are optimized. weight\_factor should be tuned per application to get the best results.

*   **measured\_qubits** (*list*) – a list of qubits that will be measured in a particular circuit. This arg need not be specified for circuits which already include measure gates. The arg is useful when a subsequent module such as state\_tomography\_circuits inserts the measure gates. If CrosstalkAdaptiveSchedule is made aware of those measurements, it is included in the optimization.

**Raises**

**ImportError** – if unable to import z3 solver

## Methods

### assign\_gate\_id

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.assign_gate_id" />

`CrosstalkAdaptiveSchedule.assign_gate_id(dag)`

ID for each gate

### basic\_bounds

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.basic_bounds" />

`CrosstalkAdaptiveSchedule.basic_bounds()`

Basic variable bounds for optimization

### check\_dag\_dependency

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.check_dag_dependency" />

`CrosstalkAdaptiveSchedule.check_dag_dependency(gate1, gate2)`

gate2 is a DAG dependent of gate1 if it is a descendant of gate1

### check\_xtalk\_dependency

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.check_xtalk_dependency" />

`CrosstalkAdaptiveSchedule.check_xtalk_dependency(t_1, t_2)`

Check if two gates have a crosstalk dependency. We do not consider crosstalk between pairs of single qubit gates.

### coherence\_constraints

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.coherence_constraints" />

`CrosstalkAdaptiveSchedule.coherence_constraints()`

Set decoherence errors based on qubit lifetimes

### create\_updated\_dag

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.create_updated_dag" />

`CrosstalkAdaptiveSchedule.create_updated_dag(layers, barriers)`

Given a set of layers and barriers, construct a new dag

### create\_z3\_vars

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.create_z3_vars" />

`CrosstalkAdaptiveSchedule.create_z3_vars()`

Setup the variables required for Z3 optimization

### cx\_tuple

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.cx_tuple" />

`CrosstalkAdaptiveSchedule.cx_tuple(gate)`

Representation for two-qubit gate Note: current implementation assumes that the CX error rates and crosstalk behavior are independent of gate direction

### enforce\_schedule\_on\_dag

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.enforce_schedule_on_dag" />

`CrosstalkAdaptiveSchedule.enforce_schedule_on_dag(input_gate_times)`

Z3 outputs start times for each gate. Some gates need to be serialized to implement the Z3 schedule. This function inserts barriers to implement those serializations

### extract\_crosstalk\_relevant\_sets

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.extract_crosstalk_relevant_sets" />

`CrosstalkAdaptiveSchedule.extract_crosstalk_relevant_sets()`

Extract the set of program gates which potentially have crosstalk noise

### extract\_dag\_overlap\_sets

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.extract_dag_overlap_sets" />

`CrosstalkAdaptiveSchedule.extract_dag_overlap_sets(dag)`

Gate A, B are overlapping if A is neither a descendant nor an ancestor of B. Currenty overlaps (A,B) are considered when A is a 2q gate and B is either 2q or 1q gate.

### extract\_solution

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.extract_solution" />

`CrosstalkAdaptiveSchedule.extract_solution()`

Extract gate start and finish times from Z3 solution

### fidelity\_constraints

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.fidelity_constraints" />

`CrosstalkAdaptiveSchedule.fidelity_constraints()`

Set gate fidelity based on gate overlap conditions

### filter\_candidates

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.filter_candidates" />

`CrosstalkAdaptiveSchedule.filter_candidates(candidates, layer, layer_id, triplet)`

For a gate G and layer L, L is a candidate layer for G if no gate in L has a DAG dependency with G, and if Z3 allows gates in L and G to overlap.

### find\_layer

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.find_layer" />

`CrosstalkAdaptiveSchedule.find_layer(layers, triplet)`

Find the appropriate layer for a gate

### gate\_tuple

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.gate_tuple" />

`CrosstalkAdaptiveSchedule.gate_tuple(gate)`

Representation for gate

### generate\_barriers

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.generate_barriers" />

`CrosstalkAdaptiveSchedule.generate_barriers(layers)`

For each gate g, see if a barrier is required to serialize it with some previously processed gate

### is\_significant\_xtalk

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.is_significant_xtalk" />

`CrosstalkAdaptiveSchedule.is_significant_xtalk(gate1, gate2)`

Given two conditional gate error rates check if there is high crosstalk by comparing with independent error rates.

### name

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.name" />

`CrosstalkAdaptiveSchedule.name()`

Return the name of the pass.

### objective\_function

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.objective_function" />

`CrosstalkAdaptiveSchedule.objective_function()`

Objective function is a weighted combination of gate errors and decoherence errors

### parse\_backend\_properties

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.parse_backend_properties" />

`CrosstalkAdaptiveSchedule.parse_backend_properties()`

This function assumes that gate durations and coherence times are in seconds in backend.properties() This function converts gate durations and coherence times to nanoseconds.

### powerset

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.powerset" />

`CrosstalkAdaptiveSchedule.powerset(iterable)`

Finds the set of all subsets of the given iterable This function is used to generate constraints for the Z3 optimization

### r2f

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.r2f" />

`CrosstalkAdaptiveSchedule.r2f(val)`

Convert Z3 Real to Python float

### reset

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.reset" />

`CrosstalkAdaptiveSchedule.reset()`

Reset variables

### run

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.run" />

`CrosstalkAdaptiveSchedule.run(dag)`

Main scheduling function

### scheduling\_constraints

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.scheduling_constraints" />

`CrosstalkAdaptiveSchedule.scheduling_constraints()`

DAG scheduling constraints optimization Sets overlap indicator variables

### singleq\_tuple

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.singleq_tuple" />

`CrosstalkAdaptiveSchedule.singleq_tuple(gate)`

Representation for single-qubit gate

### solve\_optimization

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.solve_optimization" />

`CrosstalkAdaptiveSchedule.solve_optimization()`

Setup and solve a Z3 optimization for finding the best schedule

## Attributes

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

