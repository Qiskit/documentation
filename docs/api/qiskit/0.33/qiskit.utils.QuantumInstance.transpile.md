# qiskit.utils.QuantumInstance.transpile

`QuantumInstance.transpile(circuits, pass_manager=None)`

A wrapper to transpile circuits to allow algorithm access the transpiled circuits.

**Parameters**

*   **circuits** (*Union\['QuantumCircuit', List\['QuantumCircuit']]*) – circuits to transpile
*   **pass\_manager** (*Optional\['PassManager']*) – A pass manager to transpile the circuits. If none is given, but either `pass_manager` or `bound_pass_manager` has been set in the initializer, these are run. If none has been provided there either, the backend and compile configs from the initializer are used.

**Returns**

**The transpiled circuits, it is always a list even though**

the length is one.

**Return type**

List\[‘QuantumCircuit’]
