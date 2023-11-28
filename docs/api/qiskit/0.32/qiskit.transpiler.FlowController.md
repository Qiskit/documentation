# FlowController

<span id="undefined" />

`FlowController(passes, options, **partial_controller)`

Bases: `object`

Base class for multiple types of working list.

This class is a base class for multiple types of working list. When you iterate on it, it returns the next pass to run.

## Methods

|                                                                                                                                                                                                       |                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`add_flow_controller`](qiskit.transpiler.FlowController.add_flow_controller#qiskit.transpiler.FlowController.add_flow_controller "qiskit.transpiler.FlowController.add_flow_controller")             | Adds a flow controller.                                                             |
| [`controller_factory`](qiskit.transpiler.FlowController.controller_factory#qiskit.transpiler.FlowController.controller_factory "qiskit.transpiler.FlowController.controller_factory")                 | Constructs a flow controller based on the partially evaluated controller arguments. |
| [`dump_passes`](qiskit.transpiler.FlowController.dump_passes#qiskit.transpiler.FlowController.dump_passes "qiskit.transpiler.FlowController.dump_passes")                                             | Fetches the passes added to this flow controller.                                   |
| [`remove_flow_controller`](qiskit.transpiler.FlowController.remove_flow_controller#qiskit.transpiler.FlowController.remove_flow_controller "qiskit.transpiler.FlowController.remove_flow_controller") | Removes a flow controller.                                                          |

## Attributes

<span id="undefined" />

### registered\_controllers = \{'condition'

`= {'condition':`

`= {'condition': , 'do_while': }`
