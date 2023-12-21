# qiskit.providers.ibmq.runtime.RuntimeProgram.parameters

`RuntimeProgram.parameters()`

Program parameter namespace.

You can use the returned namespace to assign parameter values and pass the namespace to [`qiskit.providers.ibmq.runtime.IBMRuntimeService.run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService.run#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run"). The namespace allows you to use auto-completion to find program parameters.

Note that each call to this method returns a new namespace instance and does not include any modification to the previous instance.

**Return type**

`ParameterNamespace`

**Returns**

Program parameter namespace.
