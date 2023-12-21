# qiskit.transpiler.passes.Collect2qBlocks.run

`Collect2qBlocks.run(dag)`

Run the Collect2qBlocks pass on dag.

The blocks contain “op” nodes in topological order such that all gates in a block act on the same qubits and are adjacent in the circuit.

After the execution, `property_set['block_list']` is set to a list of tuples of “op” node.
