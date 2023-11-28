# qiskit.transpiler.preset\_passmanagers.level\_0\_pass\_manager

<span id="undefined" />

`level_0_pass_manager(pass_manager_config)`

Level 0 pass manager: no explicit optimization other than mapping to backend.

This pass manager applies the user-given initial layout. If none is given, a trivial layout consisting of mapping the i-th virtual qubit to the i-th physical qubit is used. Any unused physical qubit is allocated as ancilla space.

The pass manager then unrolls the circuit to the desired basis, and transforms the circuit to match the coupling map.

<Admonition title="Note" type="note">
  In simulators where `coupling_map=None`, only the unrolling and optimization stages are done.
</Admonition>

**Parameters**

**pass\_manager\_config** (`PassManagerConfig`) – configuration of the pass manager.

**Return type**

`PassManager`

**Returns**

a level 0 pass manager.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the passmanager config is invalid.
