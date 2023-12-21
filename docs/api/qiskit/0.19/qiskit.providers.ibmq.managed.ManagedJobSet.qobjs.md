---
title: qobjs
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet.qobjs
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet.qobjs
---

# qobjs

<span id="qiskit.providers.ibmq.managed.ManagedJobSet.qobjs" />

`ManagedJobSet.qobjs()`

Return the Qobjs for the jobs in this set.

**Return type**

`List`\[`Union`\[[`QasmQobj`](qiskit.qobj.QasmQobj "qiskit.qobj.qasm_qobj.QasmQobj"), [`PulseQobj`](qiskit.qobj.PulseQobj "qiskit.qobj.pulse_qobj.PulseQobj")]]

**Returns**

A list of Qobjs for the jobs. An entry in the list is `None` if the Qobj could not be retrieved.

