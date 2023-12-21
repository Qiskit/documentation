# qiskit.circuit.QuantumCircuit.find\_bit

`QuantumCircuit.find_bit(bit)`

Find locations in the circuit which can be used to reference a given `Bit`.

**Parameters**

**bit** (*Bit*) – The bit to locate.

**Returns**

**A 2-tuple. The first element (`index`)**

contains the index at which the `Bit` can be found (in either [`qubits`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit.qubits "qiskit.circuit.QuantumCircuit.qubits"), [`clbits`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit.clbits "qiskit.circuit.QuantumCircuit.clbits"), depending on its type). The second element (`registers`) is a list of `(register, index)` pairs with an entry for each `Register` in the circuit which contains the `Bit` (and the index in the `Register` at which it can be found).

**Return type**

namedtuple(int, List\[Tuple(Register, int)])

## Notes

The circuit index of an [`AncillaQubit`](qiskit.circuit.AncillaQubit#qiskit.circuit.AncillaQubit "qiskit.circuit.AncillaQubit") will be its index in [`qubits`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit.qubits "qiskit.circuit.QuantumCircuit.qubits"), not [`ancillas`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit.ancillas "qiskit.circuit.QuantumCircuit.ancillas").

**Raises**

*   **CircuitError** – If the supplied `Bit` was of an unknown type.
*   **CircuitError** – If the supplied `Bit` could not be found on the circuit.
