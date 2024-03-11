---
title: PauliZExpansion
description: API reference for qiskit.aqua.components.feature_maps.PauliZExpansion
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.PauliZExpansion
---

# PauliZExpansion

<span id="qiskit.aqua.components.feature_maps.PauliZExpansion" />

`PauliZExpansion(feature_dimension, depth=2, entangler_map=None, entanglement='full', z_order=2, data_map_func=<function self_product>)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/feature_maps/pauli_z_expansion.py "view source code")

DEPRECATED. The Pauli Z Expansion feature map.

This is a sub-class of the general [`PauliExpansion`](qiskit.aqua.components.feature_maps.PauliExpansion "qiskit.aqua.components.feature_maps.PauliExpansion") but where the pauli string is fixed to only contain Z and where *paulis* is now created for the superclass as per the given *z\_order*. So with default of 2 this creates \[‘Z’, ‘ZZ’] which also happens to be the default of the superclass. A *z\_order* of 3 would be \[‘Z’, ‘ZZ’, ‘ZZZ’] and so on.

**Parameters**

*   **feature\_dimension** (`int`) – The number of features
*   **depth** (`int`) – The number of repeated circuits. Defaults to 2, has a minimum value of 1.
*   **entangler\_map** (`Optional`\[`List`\[`List`\[`int`]]]) – Describes the connectivity of qubits, each list in the overall list describes \[source, target]. Defaults to `None` where the map is created as per *entanglement* parameter. Note that the order in the list is the order of applying the two-qubit gate.
*   **entanglement** (`str`) – (‘full’ | ‘linear’), generate the qubit connectivity by a predefined topology. Defaults to full which connects every qubit to each other. Linear connects each qubit to the next.
*   **z\_order** (`int`) – z order, has a min. value of 1. Creates *paulis* for superclass based on the z order value, e.g. 3 would result in \[‘Z’, ‘ZZ’, ‘ZZZ’] where the paulis contains strings of Z up to length of *z\_order*
*   **data\_map\_func** (`Callable`\[\[`ndarray`], `float`]) – A mapping function for data x which can be supplied to override the default mapping from [`self_product()`](qiskit.aqua.components.feature_maps.self_product "qiskit.aqua.components.feature_maps.self_product").

## Attributes

### feature\_dimension

returns feature dimension

### num\_qubits

returns number of qubits

### support\_parameterized\_circuit

returns whether or not the sub-class support parameterized circuit

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.feature_maps.PauliZExpansion.construct_circuit" />

`PauliZExpansion.construct_circuit(x, qr=None, inverse=False)`

Construct the second order expansion based on given data.

**Parameters**

*   **x** (*Union(numpy.ndarray, list\[*[*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")*],* [*ParameterVector*](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector")*)*) – 1-D to-be-transformed data.
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*, optional*) – the QuantumRegister object for the circuit, if None, generate new registers with name q.
*   **inverse** (*bool, optional*) – whether or not inverse the circuit

**Returns**

a quantum circuit transform data x.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **TypeError** – invalid input
*   **ValueError** – invalid input

### get\_entangler\_map

<span id="qiskit.aqua.components.feature_maps.PauliZExpansion.get_entangler_map" />

`static PauliZExpansion.get_entangler_map(map_type, num_qubits)`

get entangle map

### validate\_entangler\_map

<span id="qiskit.aqua.components.feature_maps.PauliZExpansion.validate_entangler_map" />

`static PauliZExpansion.validate_entangler_map(entangler_map, num_qubits)`

validate entangler map

