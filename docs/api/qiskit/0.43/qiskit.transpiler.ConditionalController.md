---
title: ConditionalController
description: API reference for qiskit.transpiler.ConditionalController
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.ConditionalController
---

# ConditionalController

<span id="qiskit.transpiler.ConditionalController" />

`ConditionalController(passes, options=None, condition=None, **partial_controller)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/transpiler/runningpassmanager.py "view source code")

Bases: [`FlowController`](qiskit.transpiler.FlowController "qiskit.transpiler.runningpassmanager.FlowController")

Implements a set of passes under a certain condition.

## Methods

<span id="qiskit-transpiler-conditionalcontroller-add-flow-controller" />

### add\_flow\_controller

<span id="qiskit.transpiler.ConditionalController.add_flow_controller" />

`classmethod ConditionalController.add_flow_controller(name, controller)`

Adds a flow controller.

**Parameters**

*   **name** (*string*) – Name of the controller to add.
*   **controller** (*type(*[*FlowController*](qiskit.transpiler.FlowController "qiskit.transpiler.FlowController")*)*) – The class implementing a flow controller.

<span id="qiskit-transpiler-conditionalcontroller-controller-factory" />

### controller\_factory

<span id="qiskit.transpiler.ConditionalController.controller_factory" />

`classmethod ConditionalController.controller_factory(passes, options, **partial_controller)`

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

<span id="qiskit-transpiler-conditionalcontroller-dump-passes" />

### dump\_passes

<span id="qiskit.transpiler.ConditionalController.dump_passes" />

`ConditionalController.dump_passes()`

Fetches the passes added to this flow controller.

**Returns**

\{‘options’: self.options, ‘passes’: \[passes], ‘type’: type(self)}

**Return type**

dict

<span id="qiskit-transpiler-conditionalcontroller-remove-flow-controller" />

### remove\_flow\_controller

<span id="qiskit.transpiler.ConditionalController.remove_flow_controller" />

`classmethod ConditionalController.remove_flow_controller(name)`

Removes a flow controller.

**Parameters**

**name** (*string*) – Name of the controller to remove.

**Raises**

**KeyError** – If the controller to remove was not registered.

## Attributes

<span id="qiskit.transpiler.ConditionalController.registered_controllers" />

### registered\_controllers

`= {'condition': , 'do_while': }`

