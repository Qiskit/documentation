---
title: WatsonHamiltonian
description: API reference for qiskit.chemistry.WatsonHamiltonian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.WatsonHamiltonian
---

# WatsonHamiltonian

<span id="qiskit.chemistry.WatsonHamiltonian" />

`WatsonHamiltonian(data, num_modes)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/watson_hamiltonian.py "view source code")

Bases: `object`

Watson Hamiltonian class containing the results of a driver’s anharmonic calculation

**Parameters**

*   **data** (`List`\[`List`\[`Union`\[`int`, `float`]]]) – Hamiltonian matrix elements
*   **num\_modes** (`int`) – number of modes

## Attributes

<span id="qiskit.chemistry.WatsonHamiltonian.data" />

### data

Returns the matrix elements of the Hamiltonian

**Return type**

`List`\[`List`\[`Union`\[`int`, `float`]]]

<span id="qiskit.chemistry.WatsonHamiltonian.num_modes" />

### num\_modes

Returns the number of modes

**Return type**

`int`

