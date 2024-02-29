---
title: Layout
description: API reference for qiskit.transpiler.Layout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.Layout
---

# Layout

<span id="qiskit.transpiler.Layout" />

`Layout(input_dict=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/transpiler/layout.py "view source code")

Bases: `object`

Two-ways dict to represent a Layout.

construct a Layout from a bijective dictionary, mapping virtual qubits to physical qubits

## Methods

### add

<span id="qiskit.transpiler.Layout.add" />

`Layout.add(virtual_bit, physical_bit=None)`

Adds a map element between bit and physical\_bit. If physical\_bit is not defined, bit will be mapped to a new physical bit (extending the length of the layout by one.)

**Parameters**

*   **virtual\_bit** (*tuple*) – A (qu)bit. For example, (QuantumRegister(3, ‘qr’), 2).
*   **physical\_bit** (*int*) – A physical bit. For example, 3.

### add\_register

<span id="qiskit.transpiler.Layout.add_register" />

`Layout.add_register(reg)`

Adds at the end physical\_qubits that map each bit in reg.

**Parameters**

**reg** (*Register*) – A (qu)bit Register. For example, QuantumRegister(3, ‘qr’).

### combine\_into\_edge\_map

<span id="qiskit.transpiler.Layout.combine_into_edge_map" />

`Layout.combine_into_edge_map(another_layout)`

Combines self and another\_layout into an “edge map”.

For example:

```python
   self       another_layout  resulting edge map
qr_1 -> 0        0 <- q_2         qr_1 -> q_2
qr_2 -> 2        2 <- q_1         qr_2 -> q_1
qr_3 -> 3        3 <- q_0         qr_3 -> q_0
```

The edge map is used to compose dags via, for example, compose.

**Parameters**

**another\_layout** ([*Layout*](qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – The other layout to combine.

**Returns**

A “edge map”.

**Return type**

dict

**Raises**

**LayoutError** – another\_layout can be bigger than self, but not smaller. Otherwise, raises.

### copy

<span id="qiskit.transpiler.Layout.copy" />

`Layout.copy()`

Returns a copy of a Layout instance.

### from\_dict

<span id="qiskit.transpiler.Layout.from_dict" />

`Layout.from_dict(input_dict)`

Populates a Layout from a dictionary.

The dictionary must be a bijective mapping between virtual qubits (tuple) and physical qubits (int).

**Parameters**

**input\_dict** (*dict*) –

e.g.:

```python
{(QuantumRegister(3, 'qr'), 0): 0,
 (QuantumRegister(3, 'qr'), 1): 1,
 (QuantumRegister(3, 'qr'), 2): 2}

Can be written more concisely as follows:

* virtual to physical::

    {qr[0]: 0,
     qr[1]: 1,
     qr[2]: 2}

* physical to virtual::

    {0: qr[0],
     1: qr[1],
     2: qr[2]}
```

### from\_intlist

<span id="qiskit.transpiler.Layout.from_intlist" />

`static Layout.from_intlist(int_list, *qregs)`

Converts a list of integers to a Layout mapping virtual qubits (index of the list) to physical qubits (the list values).

**Parameters**

*   **int\_list** (*list*) – A list of integers.
*   **\*qregs** (*QuantumRegisters*) – The quantum registers to apply the layout to.

**Returns**

The corresponding Layout object.

**Return type**

[Layout](qiskit.transpiler.Layout "qiskit.transpiler.Layout")

**Raises**

**LayoutError** – Invalid input layout.

### from\_qubit\_list

<span id="qiskit.transpiler.Layout.from_qubit_list" />

`static Layout.from_qubit_list(qubit_list, *qregs)`

Populates a Layout from a list containing virtual qubits, Qubit or None.

**Parameters**

*   **qubit\_list** (*list*) – e.g.: \[qr\[0], None, qr\[2], qr\[3]]
*   **\*qregs** (*QuantumRegisters*) – The quantum registers to apply the layout to.

**Returns**

the corresponding Layout object

**Return type**

[Layout](qiskit.transpiler.Layout "qiskit.transpiler.Layout")

**Raises**

**LayoutError** – If the elements are not Qubit or None

### generate\_trivial\_layout

<span id="qiskit.transpiler.Layout.generate_trivial_layout" />

`static Layout.generate_trivial_layout(*regs)`

Creates a trivial (“one-to-one”) Layout with the registers and qubits in regs.

**Parameters**

**\*regs** (*Registers, Qubits*) – registers and qubits to include in the layout.

**Returns**

A layout with all the regs in the given order.

**Return type**

[Layout](qiskit.transpiler.Layout "qiskit.transpiler.Layout")

### get\_physical\_bits

<span id="qiskit.transpiler.Layout.get_physical_bits" />

`Layout.get_physical_bits()`

Returns the dictionary where the keys are physical (qu)bits and the values are virtual (qu)bits.

### get\_registers

<span id="qiskit.transpiler.Layout.get_registers" />

`Layout.get_registers()`

Returns the registers in the layout \[QuantumRegister(2, ‘qr0’), QuantumRegister(3, ‘qr1’)] :returns: A set of Registers in the layout :rtype: Set

### get\_virtual\_bits

<span id="qiskit.transpiler.Layout.get_virtual_bits" />

`Layout.get_virtual_bits()`

Returns the dictionary where the keys are virtual (qu)bits and the values are physical (qu)bits.

### order\_based\_on\_type

<span id="qiskit.transpiler.Layout.order_based_on_type" />

`static Layout.order_based_on_type(value1, value2)`

decides which one is physical/virtual based on the type. Returns (virtual, physical)

### reorder\_bits

<span id="qiskit.transpiler.Layout.reorder_bits" />

`Layout.reorder_bits(bits)`

Given an ordered list of bits, reorder them according to this layout.

The list of bits must exactly match the virtual bits in this layout.

**Parameters**

**bits** (*list\[Bit]*) – the bits to reorder.

**Returns**

ordered bits.

**Return type**

List

### swap

<span id="qiskit.transpiler.Layout.swap" />

`Layout.swap(left, right)`

Swaps the map between left and right.

**Parameters**

*   **left** (*tuple or int*) – Item to swap with right.
*   **right** (*tuple or int*) – Item to swap with left.

**Raises**

**LayoutError** – If left and right have not the same type.

