# qiskit.ignis.verification.BConfig.get\_ghz\_layout

`BConfig.get_ghz_layout(n, transpiled=True, barriered=True)`

Feeds the Tier Dict of the backend to create a basic qiskit GHZ circuit with no measurement; :type n: `int` :param n: number of qubits :type transpiled: `bool` :param transpiled: toggle on/off transpilation - useful for tomography :type barriered: `bool` :param barriered: yes/no whether to barrier each step of CNOT gates

**Return type**

`Tuple`\[`QuantumCircuit`, `Dict`]

**Returns**

A GHZ Circuit and its initial GHZ layout
