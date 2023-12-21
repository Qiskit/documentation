---
title: enforce_schedule_on_dag
description: API reference for qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.enforce_schedule_on_dag
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.enforce_schedule_on_dag
---

# enforce\_schedule\_on\_dag

<span id="qiskit.transpiler.passes.CrosstalkAdaptiveSchedule.enforce_schedule_on_dag" />

`CrosstalkAdaptiveSchedule.enforce_schedule_on_dag(input_gate_times)`

Z3 outputs start times for each gate. Some gates need to be serialized to implement the Z3 schedule. This function inserts barriers to implement those serializations

