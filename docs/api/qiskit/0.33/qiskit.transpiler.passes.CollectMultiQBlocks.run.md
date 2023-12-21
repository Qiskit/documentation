# qiskit.transpiler.passes.CollectMultiQBlocks.run

`CollectMultiQBlocks.run(dag)`

Run the CollectMultiQBlocks pass on dag.

The blocks contain “op” nodes in topological sort order such that all gates in a block act on the same set of qubits and are adjacent in the circuit.

The blocks are built by examining predecessors and successors of “cx” gates in the circuit. u1, u2, u3, cx, id gates will be included.

After the execution, `property_set['block_list']` is set to a list of tuples of `DAGNode` objects
