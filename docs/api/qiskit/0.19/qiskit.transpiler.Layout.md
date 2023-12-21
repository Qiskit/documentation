---
title: Layout
description: API reference for qiskit.transpiler.Layout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.Layout
---

# Layout

<span id="qiskit.transpiler.Layout" />

`Layout(input_dict=None)`

Two-ways dict to represent a Layout.

construct a Layout from a bijective dictionary, mapping virtual qubits to physical qubits

## Methods

|                                                                                                                                                    |                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Layout.__getitem__`](qiskit.transpiler.Layout.__getitem__ "qiskit.transpiler.Layout.__getitem__")(item)                                          |                                                                                                                                                     |
| [`Layout.__len__`](qiskit.transpiler.Layout.__len__ "qiskit.transpiler.Layout.__len__")()                                                          |                                                                                                                                                     |
| [`Layout.add`](qiskit.transpiler.Layout.add "qiskit.transpiler.Layout.add")(virtual\_bit\[, physical\_bit])                                        | Adds a map element between bit and physical\_bit.                                                                                                   |
| [`Layout.add_register`](qiskit.transpiler.Layout.add_register "qiskit.transpiler.Layout.add_register")(reg)                                        | Adds at the end physical\_qubits that map each bit in reg.                                                                                          |
| [`Layout.combine_into_edge_map`](qiskit.transpiler.Layout.combine_into_edge_map "qiskit.transpiler.Layout.combine_into_edge_map")(another\_layout) | Combines self and another\_layout into an “edge map”.                                                                                               |
| [`Layout.copy`](qiskit.transpiler.Layout.copy "qiskit.transpiler.Layout.copy")()                                                                   | Returns a copy of a Layout instance.                                                                                                                |
| [`Layout.from_dict`](qiskit.transpiler.Layout.from_dict "qiskit.transpiler.Layout.from_dict")(input\_dict)                                         | Populates a Layout from a dictionary.                                                                                                               |
| [`Layout.from_intlist`](qiskit.transpiler.Layout.from_intlist "qiskit.transpiler.Layout.from_intlist")(int\_list, \*qregs)                         | Converts a list of integers to a Layout mapping virtual qubits (index of the list) to physical qubits (the list values).                            |
| [`Layout.from_qubit_list`](qiskit.transpiler.Layout.from_qubit_list "qiskit.transpiler.Layout.from_qubit_list")(qubit\_list)                       | Populates a Layout from a list containing virtual qubits, Qubit or None.                                                                            |
| [`Layout.generate_trivial_layout`](qiskit.transpiler.Layout.generate_trivial_layout "qiskit.transpiler.Layout.generate_trivial_layout")(\*regs)    | Creates a trivial (“one-to-one”) Layout with the registers in regs.                                                                                 |
| [`Layout.get_physical_bits`](qiskit.transpiler.Layout.get_physical_bits "qiskit.transpiler.Layout.get_physical_bits")()                            | Returns the dictionary where the keys are physical (qu)bits and the values are virtual (qu)bits.                                                    |
| [`Layout.get_registers`](qiskit.transpiler.Layout.get_registers "qiskit.transpiler.Layout.get_registers")()                                        | Returns the registers in the layout \[QuantumRegister(2, ‘qr0’), QuantumRegister(3, ‘qr1’)] :returns: A list of Register in the layout :rtype: List |
| [`Layout.get_virtual_bits`](qiskit.transpiler.Layout.get_virtual_bits "qiskit.transpiler.Layout.get_virtual_bits")()                               | Returns the dictionary where the keys are virtual (qu)bits and the values are physical (qu)bits.                                                    |
| [`Layout.order_based_on_type`](qiskit.transpiler.Layout.order_based_on_type "qiskit.transpiler.Layout.order_based_on_type")(value1, value2)        | decides which one is physical/virtual based on the type.                                                                                            |
| [`Layout.reorder_bits`](qiskit.transpiler.Layout.reorder_bits "qiskit.transpiler.Layout.reorder_bits")(bits)                                       | Given an ordered list of bits, reorder them according to this layout.                                                                               |
| [`Layout.swap`](qiskit.transpiler.Layout.swap "qiskit.transpiler.Layout.swap")(left, right)                                                        | Swaps the map between left and right.                                                                                                               |

