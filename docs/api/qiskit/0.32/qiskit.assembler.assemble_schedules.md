---
title: assemble_schedules
description: API reference for qiskit.assembler.assemble_schedules
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.assembler.assemble_schedules
---

# qiskit.assembler.assemble\_schedules

<span id="qiskit.assembler.assemble_schedules" />

`assemble_schedules(schedules, qobj_id, qobj_header, run_config)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/assembler/assemble_schedules.py "view source code")

Assembles a list of schedules into a qobj that can be run on the backend.

**Parameters**

*   **schedules** (`List`\[`Union`\[`ScheduleBlock`, `Union`\[`ForwardRef`, `Instruction`], `Tuple`\[`int`, `Union`\[`ForwardRef`, `Instruction`]]]]) – Schedules to assemble.
*   **qobj\_id** (`int`) – Identifier for the generated qobj.
*   **qobj\_header** (`QobjHeader`) – Header to pass to the results.
*   **run\_config** (`RunConfig`) – Configuration of the runtime environment.

**Return type**

`PulseQobj`

**Returns**

The Qobj to be run on the backends.

**Raises**

**QiskitError** – when frequency settings are not supplied.

