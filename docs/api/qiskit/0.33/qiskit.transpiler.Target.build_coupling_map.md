# qiskit.transpiler.Target.build\_coupling\_map

`Target.build_coupling_map(two_q_gate=None)`

Get a [`CouplingMap`](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") from this target.

**Parameters**

**two\_q\_gate** (*str*) – An optional gate name for a two qubit gate in the Target to generate the coupling map for. If specified the output coupling map will only have edges between qubits where this gate is present.

**Returns**

**The [`CouplingMap`](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object**

for this target.

**Return type**

[CouplingMap](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")

**Raises**

*   **ValueError** – If a non-two qubit gate is passed in for `two_q_gate`.
*   **IndexError** – If an Instruction not in the Target is passed in for `two_q_gate`.
