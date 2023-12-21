# qiskit.circuit.InstructionSet.c\_if

`InstructionSet.c_if(classical, val)`

Set a classical equality condition on all the instructions in this set between the [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") or [`Clbit`](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit") `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition on any of the contained instructions; it does not stack.
</Admonition>

**Parameters**

*   **classical** (`Union`\[`Clbit`, `ClassicalRegister`, `int`]) – the classical resource the equality condition should be on. If this is given as an integer, it will be resolved into a [`Clbit`](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit") using the same conventions as the circuit these instructions are attached to.
*   **val** (`int`) – the value the classical resource should be equal to.

**Return type**

`InstructionSet`

**Returns**

This same instance of [`InstructionSet`](qiskit.circuit.InstructionSet#qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet"), but now mutated to have the given equality condition.

**Raises**

**CircuitError** – if the passed classical resource is invalid, or otherwise not resolvable to a concrete resource that these instructions are permitted to access.
