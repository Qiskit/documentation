---
title: FlowController
description: API reference for qiskit.transpiler.FlowController
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.FlowController
---

# FlowController

<span id="qiskit.transpiler.FlowController" />

`FlowController(passes, options, **partial_controller)`

Base class for multiple types of working list.

This class is a base class for multiple types of working list. When you iterate on it, it returns the next pass to run.

## Attributes

|                                                                                                                                                              |   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | - |
| [`FlowController.registered_controllers`](qiskit.transpiler.FlowController.registered_controllers "qiskit.transpiler.FlowController.registered_controllers") |   |

## Methods

|                                                                                                                                                                    |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`FlowController.add_flow_controller`](qiskit.transpiler.FlowController.add_flow_controller "qiskit.transpiler.FlowController.add_flow_controller")(name, …)       | Adds a flow controller.                                                             |
| [`FlowController.controller_factory`](qiskit.transpiler.FlowController.controller_factory "qiskit.transpiler.FlowController.controller_factory")(passes, …)        | Constructs a flow controller based on the partially evaluated controller arguments. |
| [`FlowController.dump_passes`](qiskit.transpiler.FlowController.dump_passes "qiskit.transpiler.FlowController.dump_passes")()                                      | Fetches the passes added to this flow controller.                                   |
| [`FlowController.remove_flow_controller`](qiskit.transpiler.FlowController.remove_flow_controller "qiskit.transpiler.FlowController.remove_flow_controller")(name) | Removes a flow controller.                                                          |

