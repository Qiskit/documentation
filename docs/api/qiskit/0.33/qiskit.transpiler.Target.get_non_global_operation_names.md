# qiskit.transpiler.Target.get\_non\_global\_operation\_names

`Target.get_non_global_operation_names(strict_direction=False)`

Return the non-global operation names for the target

The non-global operations are those in the target which don’t apply on all qubits (for single qubit operations) or all multiqubit qargs (for multi-qubit operations).

**Parameters**

**strict\_direction** (*bool*) – If set to `True` the multi-qubit operations considered as non-global respect the strict direction (or order of qubits in the qargs is signifcant). For example, if `cx` is defined on `(0, 1)` and `ecr` is defined over `(1, 0)` by default neither would be considered non-global, but if `strict_direction` is set `True` both `cx` and `ecr` would be returned.

**Returns**

A list of operation names for operations that aren’t global in this target

**Return type**

List\[str]
