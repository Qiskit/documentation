# qiskit.circuit.QuantumCircuit.mcu1

`QuantumCircuit.mcu1(lam, control_qubits, target_qubit)`

Apply `MCU1Gate`.

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **lam** (`Union`\[`ParameterExpression`, `float`]) – The $\lambda$ rotation angle of the gate.
*   **control\_qubits** (`Sequence`\[`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]]) – The qubits used as the controls.
*   **target\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
