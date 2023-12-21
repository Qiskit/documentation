# qiskit.circuit.library.NLocal.assign\_parameters

`NLocal.assign_parameters(parameters, inplace=False, param_dict=None)`

Assign parameters to the n-local circuit.

This method also supports passing a list instead of a dictionary. If a list is passed, the list must have the same length as the number of unbound parameters in the circuit. The parameters are assigned in the order of the parameters in [`ordered_parameters()`](qiskit.circuit.library.NLocal#qiskit.circuit.library.NLocal.ordered_parameters "qiskit.circuit.library.NLocal.ordered_parameters").

**Return type**

`Optional`\[`QuantumCircuit`]

**Returns**

A copy of the NLocal circuit with the specified parameters.

**Raises**

**AttributeError** – If the parameters are given as list and do not match the number of parameters.
