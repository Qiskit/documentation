---
title: run
description: API reference for qiskit.transpiler.passes.Collect2qBlocks.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.Collect2qBlocks.run
---

# run

<span id="qiskit.transpiler.passes.Collect2qBlocks.run" />

`Collect2qBlocks.run(dag)`

Run the Collect2qBlocks pass on dag.

The blocks contain “op” nodes in topological sort order such that all gates in a block act on the same pair of qubits and are adjacent in the circuit. the blocks are built by examining predecessors and successors of “cx” gates in the circuit. u1, u2, u3, cx, id gates will be included.

After the execution, `property_set['block_list']` is set to a list of tuples of “op” node labels.

