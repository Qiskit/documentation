---
title: EquivalenceLibrary
description: API reference for qiskit.circuit.EquivalenceLibrary
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.EquivalenceLibrary
---

# EquivalenceLibrary

<span id="qiskit.circuit.EquivalenceLibrary" />

`EquivalenceLibrary(*, base=None)`

A library providing a one-way mapping of Gates to their equivalent implementations as QuantumCircuits.

Create a new equivalence library.

**Parameters**

**base** (*Optional\[*[*EquivalenceLibrary*](#qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")*]*) – Base equivalence library to will be referenced if an entry is not found in this library.

## Methods

|                                                                                                                                                        |                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| [`EquivalenceLibrary.add_equivalence`](qiskit.circuit.EquivalenceLibrary.add_equivalence "qiskit.circuit.EquivalenceLibrary.add_equivalence")(gate, …) | Add a new equivalence to the library.                                                                  |
| [`EquivalenceLibrary.get_entry`](qiskit.circuit.EquivalenceLibrary.get_entry "qiskit.circuit.EquivalenceLibrary.get_entry")(gate)                      | Gets the set of QuantumCircuits circuits from the library which equivalently implement the given Gate. |
| [`EquivalenceLibrary.has_entry`](qiskit.circuit.EquivalenceLibrary.has_entry "qiskit.circuit.EquivalenceLibrary.has_entry")(gate)                      | Check if a library contains any decompositions for gate.                                               |
| [`EquivalenceLibrary.set_entry`](qiskit.circuit.EquivalenceLibrary.set_entry "qiskit.circuit.EquivalenceLibrary.set_entry")(gate, entry)               | Set the equivalence record for a Gate.                                                                 |

