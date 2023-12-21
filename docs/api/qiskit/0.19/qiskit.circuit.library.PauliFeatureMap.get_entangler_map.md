---
title: get_entangler_map
description: API reference for qiskit.circuit.library.PauliFeatureMap.get_entangler_map
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.PauliFeatureMap.get_entangler_map
---

# get\_entangler\_map

<span id="qiskit.circuit.library.PauliFeatureMap.get_entangler_map" />

`PauliFeatureMap.get_entangler_map(rep_num, block_num, num_block_qubits)`

Get the entangler map for in the repetition `rep_num` and the block `block_num`.

The entangler map for the current block is derived from the value of `self.entanglement`. Below the different cases are listed, where `i` and `j` denote the repetition number and the block number, respectively, and `n` the number of qubits in the block.

entanglement type | entangler map ——————————-+——————————————————– None | \[\[0, …, n - 1]] str (e.g ‘full’) | the specified connectivity on `n` qubits List\[int] | \[`entanglement`] List\[List\[int]] | `entanglement` List\[List\[List\[int]]] | `entanglement[i]` List\[List\[List\[List\[int]]]] | `entanglement[i][j]` List\[str] | the connectivity specified in `entanglement[i]` List\[List\[str]] | the connectivity specified in `entanglement[i][j]` Callable\[int, str] | same as List\[str] Callable\[int, List\[List\[int]]] | same as List\[List\[List\[int]]]

Note that all indices are to be taken modulo the length of the array they act on, i.e. no out-of-bounds index error will be raised but we re-iterate from the beginning of the list.

**Parameters**

*   **rep\_num** (`int`) – The current repetition we are in.
*   **block\_num** (`int`) – The block number within the entanglement layers.
*   **num\_block\_qubits** (`int`) – The number of qubits in the block.

**Return type**

`List`\[`List`\[`int`]]

**Returns**

The entangler map for the current block in the current repetition.

**Raises**

**ValueError** – If the value of `entanglement` could not be cast to a corresponding entangler map.

