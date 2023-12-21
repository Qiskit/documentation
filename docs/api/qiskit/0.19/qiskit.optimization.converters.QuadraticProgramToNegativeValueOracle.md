---
title: QuadraticProgramToNegativeValueOracle
description: API reference for qiskit.optimization.converters.QuadraticProgramToNegativeValueOracle
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.QuadraticProgramToNegativeValueOracle
---

# QuadraticProgramToNegativeValueOracle

<span id="qiskit.optimization.converters.QuadraticProgramToNegativeValueOracle" />

`QuadraticProgramToNegativeValueOracle(num_value_qubits, measurement=False)`

Converts an optimization problem (QUBO) to a negative value oracle.

In addition, a state preparation operator is generated from the coefficients and constant of a QUBO, which can be used to encode the function into a quantum state. In conjunction, this oracle and operator can be used to flag the negative values of a QUBO encoded in a quantum state.

The construction of the oracle is discussed in \[1].

## References

**\[1]: Gilliam et al., Grover Adaptive Search for Constrained Polynomial Binary Optimization.**

arxiv:1912.04088.

**Parameters**

*   **num\_value\_qubits** (`int`) – The number of qubits required to represent the output.
*   **measurement** (`bool`) – Whether the A operator contains measurements.

## Methods

|                                                                                                                                                                                                                      |                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`QuadraticProgramToNegativeValueOracle.encode`](qiskit.optimization.converters.QuadraticProgramToNegativeValueOracle.encode "qiskit.optimization.converters.QuadraticProgramToNegativeValueOracle.encode")(problem) | A helper function that converts a QUBO into an oracle that recognizes negative numbers. |

