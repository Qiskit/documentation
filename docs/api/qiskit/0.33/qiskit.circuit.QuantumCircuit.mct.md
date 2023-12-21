# qiskit.circuit.QuantumCircuit.mct

`QuantumCircuit.mct(control_qubits, target_qubit, ancilla_qubits=None, mode='noancilla')`

Apply [`MCXGate`](qiskit.circuit.library.MCXGate#qiskit.circuit.library.MCXGate "qiskit.circuit.library.MCXGate").

The multi-cX gate can be implemented using different techniques, which use different numbers of ancilla qubits and have varying circuit depth. These modes are:

*   ‘noancilla’: Requires 0 ancilla qubits.
*   ‘recursion’: Requires 1 ancilla qubit if more than 4 controls are used, otherwise 0.
*   ‘v-chain’: Requires 2 less ancillas than the number of control qubits.
*   ‘v-chain-dirty’: Same as for the clean ancillas (but the circuit will be longer).

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **control\_qubits** (`Sequence`\[`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]]) – The qubits used as the controls.
*   **target\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.
*   **ancilla\_qubits** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]], `Sequence`\[`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]], `None`]) – The qubits used as the ancillae, if the mode requires them.
*   **mode** (`str`) – The choice of mode, explained further above.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.

**Raises**

*   **ValueError** – if the given mode is not known, or if too few ancilla qubits are passed.
*   **AttributeError** – if no ancilla qubits are passed, but some are needed.

<Admonition title="See also" type="note">
  QuantumCircuit.mcx: the same gate with a different name.
</Admonition>
