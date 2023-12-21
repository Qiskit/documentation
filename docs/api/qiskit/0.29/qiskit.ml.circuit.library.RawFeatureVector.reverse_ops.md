# qiskit.ml.circuit.library.RawFeatureVector.reverse\_ops

`RawFeatureVector.reverse_ops()`

Reverse the circuit by reversing the order of instructions.

This is done by recursively reversing all instructions. It does not invert (adjoint) any gate.

**Returns**

the reversed circuit.

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

┌───┐

## q\_0: ─────■──────┤ H ├

┌────┴─────┐└───┘

## q\_1: ┤ RX(1.57) ├─────

└──────────┘
