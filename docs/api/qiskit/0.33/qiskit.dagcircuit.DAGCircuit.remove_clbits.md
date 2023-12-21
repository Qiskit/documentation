# qiskit.dagcircuit.DAGCircuit.remove\_clbits

`DAGCircuit.remove_clbits(*clbits)`

Remove classical bits from the circuit. All bits MUST be idle. Any registers with references to at least one of the specified bits will also be removed.

**Parameters**

**clbits** (*List\[*[*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – The bits to remove.

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – a clbit is not a [`Clbit`](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit"), is not in the circuit, or is not idle.
