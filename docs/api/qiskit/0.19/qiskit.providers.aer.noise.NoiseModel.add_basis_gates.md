---
title: add_basis_gates
description: API reference for qiskit.providers.aer.noise.NoiseModel.add_basis_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.NoiseModel.add_basis_gates
---

# add\_basis\_gates

<span id="qiskit.providers.aer.noise.NoiseModel.add_basis_gates" />

`NoiseModel.add_basis_gates(instructions, warnings=True)`

Add additional gates to the noise model basis\_gates.

This should be used to add any gates that are identified by a custom gate label in the noise model.

**Parameters**

*   **or** (*instructions (list\[str]*) – list\[Instruction]): the instructions error applies to.
*   **warnings** (*bool*) – display warning if instruction is not in QasmSimulator basis\_gates (Default: True).

