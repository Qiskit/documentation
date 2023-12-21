# qiskit.ignis.verification.BConfig.get\_ghz\_po\_para

`BConfig.get_ghz_po_para(n)`

Get a parametrized PO circuit. Remember that get\_counts() method accepts an index now, not a circuit. The two phase parameters are a quirk of the Parameter module

**Parameters**

**n** (`int`) – number of qubits

**Return type**

`Tuple`\[`QuantumCircuit`, `List`\[`Parameter`], `Dict`]

**Returns**

**A parity oscillation circuit, its Delta/minus-delta parameters,**

and the initial ghz layout
