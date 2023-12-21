---
title: controller_factory
description: API reference for qiskit.transpiler.FlowController.controller_factory
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.FlowController.controller_factory
---

# controller\_factory

<span id="qiskit.transpiler.FlowController.controller_factory" />

`classmethod FlowController.controller_factory(passes, options, **partial_controller)`

Constructs a flow controller based on the partially evaluated controller arguments.

**Parameters**

*   **passes** (*list\[BasePass]*) – passes to add to the flow controller.
*   **options** (*dict*) – PassManager options.
*   **\*\*partial\_controller** (*dict*) – Partially evaluated controller arguments in the form \{name:partial}

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – When partial\_controller is not well-formed.

**Returns**

A FlowController instance.

**Return type**

[FlowController](qiskit.transpiler.FlowController "qiskit.transpiler.FlowController")

