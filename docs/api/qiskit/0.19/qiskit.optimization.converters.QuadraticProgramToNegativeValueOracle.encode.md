---
title: encode
description: API reference for qiskit.optimization.converters.QuadraticProgramToNegativeValueOracle.encode
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.converters.QuadraticProgramToNegativeValueOracle.encode
---

# encode

<span id="qiskit.optimization.converters.QuadraticProgramToNegativeValueOracle.encode" />

`QuadraticProgramToNegativeValueOracle.encode(problem)`

A helper function that converts a QUBO into an oracle that recognizes negative numbers.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved.

**Return type**

`Tuple`\[[`Custom`](qiskit.aqua.components.initial_states.Custom "qiskit.aqua.components.initial_states.custom.Custom"), [`CustomCircuitOracle`](qiskit.aqua.components.oracles.CustomCircuitOracle "qiskit.aqua.components.oracles.custom_circuit_oracle.CustomCircuitOracle"), `Dict`\[`Union`\[`int`, `Tuple`\[`int`, `int`]], `int`]]

**Returns**

A state preparation operator A, an oracle O that recognizes negative numbers, and a dictionary representation of the function coefficients, where the key -1 represents the constant.

