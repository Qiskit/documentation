# ConditionalController

<span id="undefined" />

`ConditionalController(passes, options=None, condition=None, **partial_controller)`

Bases: `qiskit.transpiler.runningpassmanager.FlowController`

Implements a set of passes under a certain condition.

## Methods

|                                                                                                                                                                                                                            |                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`add_flow_controller`](qiskit.transpiler.ConditionalController.add_flow_controller#qiskit.transpiler.ConditionalController.add_flow_controller "qiskit.transpiler.ConditionalController.add_flow_controller")             | Adds a flow controller.                                                             |
| [`controller_factory`](qiskit.transpiler.ConditionalController.controller_factory#qiskit.transpiler.ConditionalController.controller_factory "qiskit.transpiler.ConditionalController.controller_factory")                 | Constructs a flow controller based on the partially evaluated controller arguments. |
| [`dump_passes`](qiskit.transpiler.ConditionalController.dump_passes#qiskit.transpiler.ConditionalController.dump_passes "qiskit.transpiler.ConditionalController.dump_passes")                                             | Fetches the passes added to this flow controller.                                   |
| [`remove_flow_controller`](qiskit.transpiler.ConditionalController.remove_flow_controller#qiskit.transpiler.ConditionalController.remove_flow_controller "qiskit.transpiler.ConditionalController.remove_flow_controller") | Removes a flow controller.                                                          |

## Attributes

<span id="undefined" />

### registered\_controllers = \{'condition'

`= {'condition':`

`= {'condition': , 'do_while': }`
