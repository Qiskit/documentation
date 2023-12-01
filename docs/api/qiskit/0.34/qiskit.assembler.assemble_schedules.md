# qiskit.assembler.assemble\_schedules

<span id="undefined" />

`assemble_schedules(schedules, qobj_id, qobj_header, run_config)`

Assembles a list of schedules into a qobj that can be run on the backend.

**Parameters**

*   **schedules** (`List`\[`Union`\[`ScheduleBlock`, `Schedule`, `Instruction`, `Tuple`\[`int`, `Union`\[`Schedule`, `Instruction`]]]]) – Schedules to assemble.
*   **qobj\_id** (`int`) – Identifier for the generated qobj.
*   **qobj\_header** (`QobjHeader`) – Header to pass to the results.
*   **run\_config** (`RunConfig`) – Configuration of the runtime environment.

**Return type**

`PulseQobj`

**Returns**

The Qobj to be run on the backends.

**Raises**

**QiskitError** – when frequency settings are not supplied.
