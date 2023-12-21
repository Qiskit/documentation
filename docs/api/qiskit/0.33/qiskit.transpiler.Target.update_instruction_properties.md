# qiskit.transpiler.Target.update\_instruction\_properties

`Target.update_instruction_properties(instruction, qargs, properties)`

Update the property object for an instruction qarg pair already in the Target

**Parameters**

*   **instruction** (*str*) – The instruction name to update
*   **qargs** (*tuple*) – The qargs to update the properties of
*   **properties** ([*InstructionProperties*](qiskit.transpiler.InstructionProperties#qiskit.transpiler.InstructionProperties "qiskit.transpiler.InstructionProperties")) – The properties to set for this nstruction

**Raises**

**KeyError** – If `instruction` or `qarg` are not in the target
