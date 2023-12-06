# qiskit.transpiler.passes.RemoveBarriers



`RemoveBarriers(*args, **kwargs)`

Return a circuit with any barrier removed.

This transformation is not semantics preserving.

## Example

```python
from qiskit import QuantumCircuit
from qiskit.transpiler.passes import RemoveBarriers

circuit = QuantumCircuit(1)
circuit.x(0)
circuit.barrier()
circuit.h(0)

circuit = RemoveBarriers()(circuit)
circuit.draw()
```

```python
     ┌───┐┌───┐
q_0: ┤ X ├┤ H ├
     └───┘└───┘
```



`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                      |                                     |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.RemoveBarriers.__init__ "qiskit.transpiler.passes.RemoveBarriers.__init__")() | Initialize self.                    |
| [`name`](#qiskit.transpiler.passes.RemoveBarriers.name "qiskit.transpiler.passes.RemoveBarriers.name")()             | Return the name of the pass.        |
| [`run`](#qiskit.transpiler.passes.RemoveBarriers.run "qiskit.transpiler.passes.RemoveBarriers.run")(dag)             | Run the RemoveBarriers pass on dag. |

## Attributes

|                                                                                                                                                              |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.RemoveBarriers.is_analysis_pass "qiskit.transpiler.passes.RemoveBarriers.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.RemoveBarriers.is_transformation_pass "qiskit.transpiler.passes.RemoveBarriers.is_transformation_pass") | Check if the pass is a transformation pass. |



`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.



`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).



`name()`

Return the name of the pass.



`run(dag)`

Run the RemoveBarriers pass on dag.

**Return type**

`DAGCircuit`
