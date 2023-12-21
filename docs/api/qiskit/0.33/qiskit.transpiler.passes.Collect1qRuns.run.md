# qiskit.transpiler.passes.Collect1qRuns.run

`Collect1qRuns.run(dag)`

Run the Collect1qBlocks pass on dag.

The blocks contain “op” nodes in topological order such that all gates in a block act on the same qubits and are adjacent in the circuit.

After the execution, `property_set['block_list']` is set to a list of tuples of “op” node.
