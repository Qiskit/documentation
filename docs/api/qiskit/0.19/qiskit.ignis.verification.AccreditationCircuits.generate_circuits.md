---
title: generate_circuits
description: API reference for qiskit.ignis.verification.AccreditationCircuits.generate_circuits
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.AccreditationCircuits.generate_circuits
---

# generate\_circuits

<span id="qiskit.ignis.verification.AccreditationCircuits.generate_circuits" />

`AccreditationCircuits.generate_circuits(num_trap)`

Generate quantum circuits for accreditation

**Parameters**

**num\_trap** (*int*) – number of trap circuits

**Returns**

**A tuple of the form**

(`circuit_list`, postp\_list\`, `v_zero`) where: circuit\_list (list): accreditation circuits postp\_list (list): strings used for classical post-processing v\_zero (int): position of target circuit

**Return type**

tuple

