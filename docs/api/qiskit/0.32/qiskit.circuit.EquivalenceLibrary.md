# EquivalenceLibrary

<span id="undefined" />

`EquivalenceLibrary(*, base=None)`

Bases: `object`

A library providing a one-way mapping of Gates to their equivalent implementations as QuantumCircuits.

Create a new equivalence library.

**Parameters**

**base** (*Optional\[*[*EquivalenceLibrary*](#qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")*]*) – Base equivalence library to will be referenced if an entry is not found in this library.

## Methods

|                                                                                                                                                                              |                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [`add_equivalence`](qiskit.circuit.EquivalenceLibrary.add_equivalence#qiskit.circuit.EquivalenceLibrary.add_equivalence "qiskit.circuit.EquivalenceLibrary.add_equivalence") | Add a new equivalence to the library.                                                                  |
| [`draw`](qiskit.circuit.EquivalenceLibrary.draw#qiskit.circuit.EquivalenceLibrary.draw "qiskit.circuit.EquivalenceLibrary.draw")                                             | Draws the equivalence relations available in the library.                                              |
| [`get_entry`](qiskit.circuit.EquivalenceLibrary.get_entry#qiskit.circuit.EquivalenceLibrary.get_entry "qiskit.circuit.EquivalenceLibrary.get_entry")                         | Gets the set of QuantumCircuits circuits from the library which equivalently implement the given Gate. |
| [`has_entry`](qiskit.circuit.EquivalenceLibrary.has_entry#qiskit.circuit.EquivalenceLibrary.has_entry "qiskit.circuit.EquivalenceLibrary.has_entry")                         | Check if a library contains any decompositions for gate.                                               |
| [`set_entry`](qiskit.circuit.EquivalenceLibrary.set_entry#qiskit.circuit.EquivalenceLibrary.set_entry "qiskit.circuit.EquivalenceLibrary.set_entry")                         | Set the equivalence record for a Gate.                                                                 |
