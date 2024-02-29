---
title: WorkflowStatus
description: API reference for qiskit.passmanager.WorkflowStatus
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.passmanager.WorkflowStatus
---

# WorkflowStatus

<span id="qiskit.passmanager.WorkflowStatus" />

`qiskit.passmanager.WorkflowStatus(count=0, completed_passes=<factory>, previous_run=RunState.FAIL)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/passmanager/compilation_status.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

Collection of compilation status of workflow, i.e. pass manager run.

This data structure is initialized when the pass manager is run, and recursively handed over to underlying tasks. Each pass will update this status once after being executed, and the lifetime of the workflow status object is the time during which the pass manager is running.

## Attributes

<span id="qiskit.passmanager.WorkflowStatus.count" />

### count

`int`

`= 0`

Current number of pass execution.

<span id="qiskit.passmanager.WorkflowStatus.previous_run" />

### previous\_run

`RunState`

`= 1`

Status of the latest pass run.

<span id="qiskit.passmanager.WorkflowStatus.completed_passes" />

### completed\_passes

`set`

Passes already run that have not been invalidated.

