# qiskit.circuit.QuantumCircuit.reverse\_bits

`QuantumCircuit.reverse_bits()`

Return a circuit with the opposite order of wires.

The circuit is “vertically” flipped. If a circuit is defined over multiple registers, the resulting circuit will have the same registers but with their order flipped.

This method is useful for converting a circuit written in little-endian convention to the big-endian equivalent, and vice versa.

**Returns**

the circuit with reversed bit order.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

## Examples

## input:

┌───┐

## q\_0: ┤ H ├─────■──────

└───┘┌────┴─────┐

## q\_1: ─────┤ RX(1.57) ├

└──────────┘

## output:

┌──────────┐

## q\_0: ─────┤ RX(1.57) ├

┌───┐└────┬─────┘

## q\_1: ┤ H ├─────■──────

└───┘
