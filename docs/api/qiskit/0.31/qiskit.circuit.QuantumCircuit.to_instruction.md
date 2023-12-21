# qiskit.circuit.QuantumCircuit.to\_instruction

`QuantumCircuit.to_instruction(parameter_map=None, label=None)`

Create an Instruction out of this circuit.

**Parameters**

*   **parameter\_map** (*dict*) – For parameterized circuits, a mapping from parameters in the circuit to parameters to be used in the instruction. If None, existing circuit parameters will also parameterize the instruction.
*   **label** (*str*) – Optional gate label.

**Returns**

a composite instruction encapsulating this circuit (can be decomposed back)

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")
