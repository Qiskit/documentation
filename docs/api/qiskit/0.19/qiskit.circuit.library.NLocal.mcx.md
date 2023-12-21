---
title: mcx
description: API reference for qiskit.circuit.library.NLocal.mcx
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.NLocal.mcx
---

# mcx

<span id="qiskit.circuit.library.NLocal.mcx" />

`NLocal.mcx(control_qubits, target_qubit, ancilla_qubits=None, mode='noancilla')`

Apply `MCXGate`.

The multi-cX gate can be implemented using different techniques, which use different numbers of ancilla qubits and have varying circuit depth. These modes are: - ‘no-ancilla’: Requires 0 ancilla qubits. - ‘recursion’: Requires 1 ancilla qubit if more than 4 controls are used, otherwise 0. - ‘v-chain’: Requires 2 less ancillas than the number of control qubits. - ‘v-chain-dirty’: Same as for the clean ancillas (but the circuit will be longer).

