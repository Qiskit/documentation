# qiskit.ml.circuit.library.RawFeatureVector.inverse

`RawFeatureVector.inverse()`

Invert (take adjoint of) this circuit.

This is done by recursively inverting all gates.

**Returns**

the inverted circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**CircuitError** – if the circuit cannot be inverted.

## Examples

## input:

┌───┐

## q\_0: ┤ H ├─────■──────

└───┘┌────┴─────┐

## q\_1: ─────┤ RX(1.57) ├

└──────────┘

## output:

┌───┐

## q\_0: ──────■──────┤ H ├

┌─────┴─────┐└───┘

## q\_1: ┤ RX(-1.57) ├─────

└───────────┘
