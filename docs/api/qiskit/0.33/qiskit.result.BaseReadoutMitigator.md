---
title: BaseReadoutMitigator
description: API reference for qiskit.result.BaseReadoutMitigator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.result.BaseReadoutMitigator
---

# BaseReadoutMitigator

<span id="qiskit.result.BaseReadoutMitigator" />

`BaseReadoutMitigator` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/result/mitigation/base_readout_mitigator.py "view source code")

Bases: `abc.ABC`

Base readout error mitigator class.

## Methods

### expectation\_value

<span id="qiskit.result.BaseReadoutMitigator.expectation_value" />

`abstract BaseReadoutMitigator.expectation_value(data, diagonal, qubits=None, clbits=None, shots=None)`

Calculate the expectation value of a diagonal Hermitian operator.

**Parameters**

*   **data** (`Counts`) – Counts object to be mitigated.
*   **diagonal** (`Union`\[`Callable`, `dict`, `str`, `ndarray`]) – the diagonal operator. This may either be specified as a string containing I,Z,0,1 characters, or as a real valued 1D array\_like object supplying the full diagonal, or as a dictionary, or as Callable.
*   **qubits** (`Optional`\[`Iterable`\[`int`]]) – the physical qubits measured to obtain the counts clbits. If None these are assumed to be qubits \[0, …, N-1] for N-bit counts.
*   **clbits** (`Optional`\[`List`\[`int`]]) – Optional, marginalize counts to just these bits.
*   **shots** (`Optional`\[`int`]) – Optional, the total number of shots, if None shots will be calculated as the sum of all counts.

**Return type**

`Tuple`\[`float`, `float`]

**Returns**

The mean and an upper bound of the standard deviation of operator expectation value calculated from the current counts.

### quasi\_probabilities

<span id="qiskit.result.BaseReadoutMitigator.quasi_probabilities" />

`abstract BaseReadoutMitigator.quasi_probabilities(data, qubits=None, clbits=None, shots=None)`

Convert counts to a dictionary of quasi-probabilities

**Parameters**

*   **data** (`Counts`) – Counts to be mitigated.
*   **qubits** (`Optional`\[`Iterable`\[`int`]]) – the physical qubits measured to obtain the counts clbits. If None these are assumed to be qubits \[0, …, N-1] for N-bit counts.
*   **clbits** (`Optional`\[`List`\[`int`]]) – Optional, marginalize counts to just these bits.
*   **shots** (`Optional`\[`int`]) – Optional, the total number of shots, if None shots will be calculated as the sum of all counts.

**Returns**

**A dictionary containing pairs of \[output, mean] where “output”**

is the key in the dictionaries, which is the length-N bitstring of a measured standard basis state, and “mean” is the mean of non-zero quasi-probability estimates.

**Return type**

QuasiDistibution

