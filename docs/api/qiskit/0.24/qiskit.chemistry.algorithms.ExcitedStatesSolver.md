---
title: ExcitedStatesSolver
description: API reference for qiskit.chemistry.algorithms.ExcitedStatesSolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.ExcitedStatesSolver
---

<span id="qiskit-chemistry-algorithms-excitedstatessolver" />

# qiskit.chemistry.algorithms.ExcitedStatesSolver

<span id="qiskit.chemistry.algorithms.ExcitedStatesSolver" />

`ExcitedStatesSolver`

The excited states calculation interface

### \_\_init\_\_

<span id="qiskit.chemistry.algorithms.ExcitedStatesSolver.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

### solve

<span id="qiskit.chemistry.algorithms.ExcitedStatesSolver.solve" />

`abstract solve(driver, aux_operators=None)`

Compute the excited states energies of the molecule that was supplied via the driver.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

an eigenstate result

