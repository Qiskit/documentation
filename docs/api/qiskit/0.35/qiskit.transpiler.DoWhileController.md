# DoWhileController[¶](#dowhilecontroller "Permalink to this headline")

<span id="undefined" />

`DoWhileController(passes, options=None, do_while=None, **partial_controller)`

Bases: `qiskit.transpiler.runningpassmanager.FlowController`

Implements a set of passes in a do-while loop.

## Methods

|                                                                                                                                                                                                                |                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`add_flow_controller`](qiskit.transpiler.DoWhileController.add_flow_controller#qiskit.transpiler.DoWhileController.add_flow_controller "qiskit.transpiler.DoWhileController.add_flow_controller")             | Adds a flow controller.                                                             |
| [`controller_factory`](qiskit.transpiler.DoWhileController.controller_factory#qiskit.transpiler.DoWhileController.controller_factory "qiskit.transpiler.DoWhileController.controller_factory")                 | Constructs a flow controller based on the partially evaluated controller arguments. |
| [`dump_passes`](qiskit.transpiler.DoWhileController.dump_passes#qiskit.transpiler.DoWhileController.dump_passes "qiskit.transpiler.DoWhileController.dump_passes")                                             | Fetches the passes added to this flow controller.                                   |
| [`remove_flow_controller`](qiskit.transpiler.DoWhileController.remove_flow_controller#qiskit.transpiler.DoWhileController.remove_flow_controller "qiskit.transpiler.DoWhileController.remove_flow_controller") | Removes a flow controller.                                                          |

## Attributes

<span id="undefined" />

### registered\_controllers = \{'condition'

`= {'condition':`

`= {'condition': , 'do_while': }`
