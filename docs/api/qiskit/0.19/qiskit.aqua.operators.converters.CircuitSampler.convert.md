---
title: convert
description: API reference for qiskit.aqua.operators.converters.CircuitSampler.convert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.CircuitSampler.convert
---

# convert

<span id="qiskit.aqua.operators.converters.CircuitSampler.convert" />

`CircuitSampler.convert(operator, params=None)`

Converts the Operator to one in which the CircuitStateFns are replaced by DictStateFns or VectorStateFns. Extracts the CircuitStateFns out of the Operator, caches them, calls `sample_circuits` below to get their converted replacements, and replaces the CircuitStateFns in operator with the replacement StateFns.

**Parameters**

*   **operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator to convert
*   **params** (`Optional`\[`Dict`\[`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.parametervector.ParameterVector")], `Union`\[`float`, `List`\[`float`], `List`\[`List`\[`float`]]]]]) – A dictionary mapping parameters to either single binding values or lists of binding values. The dictionary can also contain pairs of ParameterVectors with lists of parameters or lists of lists of parameters to bind to them.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted Operator with CircuitStateFns replaced by DictStateFns or VectorStateFns.

