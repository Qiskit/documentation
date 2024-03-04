---
title: update_qobj_config
description: API reference for qiskit.providers.ibmq.utils.update_qobj_config
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.ibmq.utils.update_qobj_config
---

# qiskit.providers.ibmq.utils.update\_qobj\_config

<span id="qiskit.providers.ibmq.utils.update_qobj_config" />

`update_qobj_config(qobj, backend_options=None, noise_model=None)` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.19/qiskit/providers/ibmq/utils/qobj_utils.py "view source code")

Update a `Qobj` configuration from backend options and a noise model.

**Parameters**

*   **qobj** (`Union`\[[`QasmQobj`](qiskit.qobj.QasmQobj "qiskit.qobj.qasm_qobj.QasmQobj"), [`PulseQobj`](qiskit.qobj.PulseQobj "qiskit.qobj.pulse_qobj.PulseQobj")]) – Description of the job.
*   **backend\_options** (`Optional`\[`Dict`]) – Backend options.
*   **noise\_model** (`Optional`\[`Any`]) – Noise model.

**Return type**

`Union`\[[`QasmQobj`](qiskit.qobj.QasmQobj "qiskit.qobj.qasm_qobj.QasmQobj"), [`PulseQobj`](qiskit.qobj.PulseQobj "qiskit.qobj.pulse_qobj.PulseQobj")]

**Returns**

The updated `Qobj`.

