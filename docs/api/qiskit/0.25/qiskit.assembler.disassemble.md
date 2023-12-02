# qiskit.assembler.disassemble

<span id="undefined" />

`disassemble(qobj)`

Disassemble a qobj and return the circuits or pulse schedules, run\_config, and user header.

**Parameters**

**qobj** ([*Qobj*](qiskit.qobj.Qobj#qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – The input qobj object to disassemble

**Returns**

The disassembled program which consists of:

> *   programs: A list of quantum circuits or pulse schedules
> *   run\_config: The dict of the run config
> *   user\_qobj\_header: The dict of any user headers in the qobj

**Return type**

Union\[CircuitModule, PulseModule]
