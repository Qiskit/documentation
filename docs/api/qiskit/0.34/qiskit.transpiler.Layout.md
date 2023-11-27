# Layout[¶](#layout "Permalink to this headline")

<span id="undefined" />

`Layout(input_dict=None)`

Bases: `object`

Two-ways dict to represent a Layout.

construct a Layout from a bijective dictionary, mapping virtual qubits to physical qubits

## Methods

|                                                                                                                                                                                   |                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.transpiler.Layout.add#qiskit.transpiler.Layout.add "qiskit.transpiler.Layout.add")                                                                                 | Adds a map element between bit and physical\_bit.                                                                                                  |
| [`add_register`](qiskit.transpiler.Layout.add_register#qiskit.transpiler.Layout.add_register "qiskit.transpiler.Layout.add_register")                                             | Adds at the end physical\_qubits that map each bit in reg.                                                                                         |
| [`combine_into_edge_map`](qiskit.transpiler.Layout.combine_into_edge_map#qiskit.transpiler.Layout.combine_into_edge_map "qiskit.transpiler.Layout.combine_into_edge_map")         | Combines self and another\_layout into an “edge map”.                                                                                              |
| [`copy`](qiskit.transpiler.Layout.copy#qiskit.transpiler.Layout.copy "qiskit.transpiler.Layout.copy")                                                                             | Returns a copy of a Layout instance.                                                                                                               |
| [`from_dict`](qiskit.transpiler.Layout.from_dict#qiskit.transpiler.Layout.from_dict "qiskit.transpiler.Layout.from_dict")                                                         | Populates a Layout from a dictionary.                                                                                                              |
| [`from_intlist`](qiskit.transpiler.Layout.from_intlist#qiskit.transpiler.Layout.from_intlist "qiskit.transpiler.Layout.from_intlist")                                             | Converts a list of integers to a Layout mapping virtual qubits (index of the list) to physical qubits (the list values).                           |
| [`from_qubit_list`](qiskit.transpiler.Layout.from_qubit_list#qiskit.transpiler.Layout.from_qubit_list "qiskit.transpiler.Layout.from_qubit_list")                                 | Populates a Layout from a list containing virtual qubits, Qubit or None.                                                                           |
| [`generate_trivial_layout`](qiskit.transpiler.Layout.generate_trivial_layout#qiskit.transpiler.Layout.generate_trivial_layout "qiskit.transpiler.Layout.generate_trivial_layout") | Creates a trivial (“one-to-one”) Layout with the registers and qubits in regs.                                                                     |
| [`get_physical_bits`](qiskit.transpiler.Layout.get_physical_bits#qiskit.transpiler.Layout.get_physical_bits "qiskit.transpiler.Layout.get_physical_bits")                         | Returns the dictionary where the keys are physical (qu)bits and the values are virtual (qu)bits.                                                   |
| [`get_registers`](qiskit.transpiler.Layout.get_registers#qiskit.transpiler.Layout.get_registers "qiskit.transpiler.Layout.get_registers")                                         | Returns the registers in the layout \[QuantumRegister(2, ‘qr0’), QuantumRegister(3, ‘qr1’)] :returns: A set of Registers in the layout :rtype: Set |
| [`get_virtual_bits`](qiskit.transpiler.Layout.get_virtual_bits#qiskit.transpiler.Layout.get_virtual_bits "qiskit.transpiler.Layout.get_virtual_bits")                             | Returns the dictionary where the keys are virtual (qu)bits and the values are physical (qu)bits.                                                   |
| [`order_based_on_type`](qiskit.transpiler.Layout.order_based_on_type#qiskit.transpiler.Layout.order_based_on_type "qiskit.transpiler.Layout.order_based_on_type")                 | decides which one is physical/virtual based on the type.                                                                                           |
| [`reorder_bits`](qiskit.transpiler.Layout.reorder_bits#qiskit.transpiler.Layout.reorder_bits "qiskit.transpiler.Layout.reorder_bits")                                             | Given an ordered list of bits, reorder them according to this layout.                                                                              |
| [`swap`](qiskit.transpiler.Layout.swap#qiskit.transpiler.Layout.swap "qiskit.transpiler.Layout.swap")                                                                             | Swaps the map between left and right.                                                                                                              |
