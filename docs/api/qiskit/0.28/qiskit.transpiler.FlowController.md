---
title: FlowController
description: API reference for qiskit.transpiler.FlowController
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.FlowController
---

# qiskit.transpiler.FlowController

<span id="qiskit.transpiler.FlowController" />

`FlowController(passes, options, **partial_controller)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/runningpassmanager.py "view source code")

Base class for multiple types of working list.

This class is a base class for multiple types of working list. When you iterate on it, it returns the next pass to run.

### \_\_init\_\_

<span id="qiskit.transpiler.FlowController.__init__" />

`__init__(passes, options, **partial_controller)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                         |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.transpiler.FlowController.__init__ "qiskit.transpiler.FlowController.__init__")(passes, options, \*\*partial\_controller)          | Initialize self.                                                                    |
| [`add_flow_controller`](#qiskit.transpiler.FlowController.add_flow_controller "qiskit.transpiler.FlowController.add_flow_controller")(name, controller) | Adds a flow controller.                                                             |
| [`controller_factory`](#qiskit.transpiler.FlowController.controller_factory "qiskit.transpiler.FlowController.controller_factory")(passes, options, …)  | Constructs a flow controller based on the partially evaluated controller arguments. |
| [`dump_passes`](#qiskit.transpiler.FlowController.dump_passes "qiskit.transpiler.FlowController.dump_passes")()                                         | Fetches the passes added to this flow controller.                                   |
| [`remove_flow_controller`](#qiskit.transpiler.FlowController.remove_flow_controller "qiskit.transpiler.FlowController.remove_flow_controller")(name)    | Removes a flow controller.                                                          |

## Attributes

|                          |   |
| ------------------------ | - |
| `registered_controllers` |   |

### add\_flow\_controller

<span id="qiskit.transpiler.FlowController.add_flow_controller" />

`classmethod add_flow_controller(name, controller)`

Adds a flow controller.

**Parameters**

*   **name** (*string*) – Name of the controller to add.
*   **controller** (*type(*[*FlowController*](#qiskit.transpiler.FlowController "qiskit.transpiler.FlowController")*)*) – The class implementing a flow controller.

### controller\_factory

<span id="qiskit.transpiler.FlowController.controller_factory" />

`classmethod controller_factory(passes, options, **partial_controller)`

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

[FlowController](#qiskit.transpiler.FlowController "qiskit.transpiler.FlowController")

### dump\_passes

<span id="qiskit.transpiler.FlowController.dump_passes" />

`dump_passes()`

Fetches the passes added to this flow controller.

**Returns**

\{‘options’: self.options, ‘passes’: \[passes], ‘type’: type(self)}

**Return type**

dict

### remove\_flow\_controller

<span id="qiskit.transpiler.FlowController.remove_flow_controller" />

`classmethod remove_flow_controller(name)`

Removes a flow controller.

**Parameters**

**name** (*string*) – Name of the controller to remove.

**Raises**

**KeyError** – If the controller to remove was not registered.

