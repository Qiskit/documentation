---
title: DoWhileController
description: API reference for qiskit.transpiler.DoWhileController
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.DoWhileController
---

# DoWhileController

<span id="qiskit.transpiler.DoWhileController" />

`DoWhileController(passes, options=None, do_while=None, **partial_controller)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/transpiler/runningpassmanager.py "view source code")

Bases: [`FlowController`](qiskit.transpiler.FlowController "qiskit.transpiler.runningpassmanager.FlowController")

Implements a set of passes in a do-while loop.

## Methods

<span id="qiskit-transpiler-dowhilecontroller-add-flow-controller" />

### add\_flow\_controller

<span id="qiskit.transpiler.DoWhileController.add_flow_controller" />

`classmethod DoWhileController.add_flow_controller(name, controller)`

Adds a flow controller.

**Parameters**

*   **name** (*string*) – Name of the controller to add.
*   **controller** (*type(*[*FlowController*](qiskit.transpiler.FlowController "qiskit.transpiler.FlowController")*)*) – The class implementing a flow controller.

<span id="qiskit-transpiler-dowhilecontroller-controller-factory" />

### controller\_factory

<span id="qiskit.transpiler.DoWhileController.controller_factory" />

`classmethod DoWhileController.controller_factory(passes, options, **partial_controller)`

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

<span id="qiskit-transpiler-dowhilecontroller-dump-passes" />

### dump\_passes

<span id="qiskit.transpiler.DoWhileController.dump_passes" />

`DoWhileController.dump_passes()`

Fetches the passes added to this flow controller.

**Returns**

\{‘options’: self.options, ‘passes’: \[passes], ‘type’: type(self)}

**Return type**

dict

<span id="qiskit-transpiler-dowhilecontroller-remove-flow-controller" />

### remove\_flow\_controller

<span id="qiskit.transpiler.DoWhileController.remove_flow_controller" />

`classmethod DoWhileController.remove_flow_controller(name)`

Removes a flow controller.

**Parameters**

**name** (*string*) – Name of the controller to remove.

**Raises**

**KeyError** – If the controller to remove was not registered.

## Attributes

<span id="qiskit.transpiler.DoWhileController.registered_controllers" />

### registered\_controllers

`= {'condition': , 'do_while': }`

