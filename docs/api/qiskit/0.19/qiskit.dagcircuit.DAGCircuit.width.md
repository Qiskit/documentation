---
title: width
description: API reference for qiskit.dagcircuit.DAGCircuit.width
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.dagcircuit.DAGCircuit.width
---

# width

<span id="qiskit.dagcircuit.DAGCircuit.width" />

`DAGCircuit.width()`

Return the total number of qubits + clbits used by the circuit. This function formerly returned the number of qubits by the calculation return len(self.\_wires) - self.num\_clbits() but was changed by issue #2564 to return number of qubits + clbits with the new function DAGCircuit.num\_qubits replacing the former semantic of DAGCircuit.width().

