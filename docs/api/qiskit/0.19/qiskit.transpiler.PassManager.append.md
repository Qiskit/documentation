---
title: append
description: API reference for qiskit.transpiler.PassManager.append
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.PassManager.append
---

# append

<span id="qiskit.transpiler.PassManager.append" />

`PassManager.append(passes, max_iteration=None, **flow_controller_conditions)`

Append a Pass Set to the schedule of passes.

**Parameters**

*   **passes** (`Union`\[`BasePass`, `List`\[`BasePass`]]) – A set of passes (a pass set) to be added to schedule. A pass set is a list of passes that are controlled by the same flow controller. If a single pass is provided, the pass set will only have that pass a single element.
*   **max\_iteration** (`Optional`\[`int`]) – max number of iterations of passes.
*   **flow\_controller\_conditions** (`Any`) – control flow plugins.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if a pass in passes is not a proper pass.

<Admonition title="See also" type="note">
  `RunningPassManager.add_flow_controller()` for more information about the control flow plugins.
</Admonition>

**Return type**

`None`

