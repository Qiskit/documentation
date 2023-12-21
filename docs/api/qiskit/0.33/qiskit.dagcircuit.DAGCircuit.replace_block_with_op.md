# qiskit.dagcircuit.DAGCircuit.replace\_block\_with\_op

`DAGCircuit.replace_block_with_op(node_block, op, wire_pos_map, cycle_check=True)`

Replace a block of nodes with a single.

This is used to consolidate a block of DAGOpNodes into a single operation. A typical example is a block of gates being consolidated into a single `UnitaryGate` representing the unitary matrix of the block.

**Parameters**

*   **node\_block** (*List\[*[*DAGNode*](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")*]*) – A list of dag nodes that represents the node block to be replaced
*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – The instruction to replace the block with
*   **wire\_pos\_map** (*Dict\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*, int]*) – The dictionary mapping the qarg to the position. This is necessary to reconstruct the qarg order over multiple gates in the combined singe op node.
*   **cycle\_check** (*bool*) – When set to True this method will check that replacing the provided `node_block` with a single node would introduce a a cycle (which would invalidate the `DAGCircuit`) and will raise a `DAGCircuitError` if a cycle would be introduced. This checking comes with a run time penalty, if you can guarantee that your input `node_block` is a contiguous block and won’t introduce a cycle when it’s contracted to a single node, this can be set to `False` to improve the runtime performance of this method.

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if `cycle_check` is set to `True` and replacing the specified block introduces a cycle or if `node_block` is empty.
