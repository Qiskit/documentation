---
title: to_circuit_op
description: API reference for qiskit.aqua.operators.state_fns.OperatorStateFn.to_circuit_op
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.OperatorStateFn.to_circuit_op
---

# to\_circuit\_op

<span id="qiskit.aqua.operators.state_fns.OperatorStateFn.to_circuit_op" />

`OperatorStateFn.to_circuit_op()`

Return `StateFnCircuit` corresponding to this StateFn. Ignore for now because this is undefined. TODO maybe call to\_pauli\_op and diagonalize here, but that could be very inefficient, e.g. splitting one Stabilizer measurement into hundreds of 1 qubit Paulis.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

