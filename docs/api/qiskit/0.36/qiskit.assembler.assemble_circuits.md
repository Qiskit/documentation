---
title: assemble_circuits
description: API reference for qiskit.assembler.assemble_circuits
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.assembler.assemble_circuits
---

# qiskit.assembler.assemble\_circuits

<span id="qiskit.assembler.assemble_circuits" />

`assemble_circuits(circuits, run_config, qobj_id, qobj_header)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/assembler/assemble_circuits.py "view source code")

Assembles a list of circuits into a qobj that can be run on the backend.

**Parameters**

*   **circuits** (`List`\[`QuantumCircuit`]) – circuit(s) to assemble
*   **run\_config** (`RunConfig`) – configuration of the runtime environment
*   **qobj\_id** (`int`) – identifier for the generated qobj
*   **qobj\_header** (`QobjHeader`) – header to pass to the results

**Return type**

`QasmQobj`

**Returns**

The qobj to be run on the backends

