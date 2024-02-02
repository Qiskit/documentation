---
title: AbelianGrouper
description: API reference for qiskit.opflow.converters.AbelianGrouper
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.converters.AbelianGrouper
---

# AbelianGrouper

<span id="qiskit.opflow.converters.AbelianGrouper" />

`AbelianGrouper(traverse=True)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/converters/abelian_grouper.py "view source code")

Bases: [`ConverterBase`](qiskit.opflow.converters.ConverterBase "qiskit.opflow.converters.converter_base.ConverterBase")

Deprecated: The AbelianGrouper converts SummedOps into a sum of Abelian sums.

Meaning, it will traverse the Operator, and when it finds a SummedOp, it will evaluate which of the summed sub-Operators commute with one another. It will then convert each of the groups of commuting Operators into their own SummedOps, and return the sum-of-commuting-SummedOps. This is particularly useful for cases where mutually commuting groups can be handled similarly, as in the case of Pauli Expectations, where commuting Paulis have the same diagonalizing circuit rotation, or Pauli Evolutions, where commuting Paulis can be diagonalized together.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.converters.abelian_grouper.AbelianGrouper` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

**traverse** (*bool*) – Whether to convert only the Operator passed to `convert`, or traverse down that Operator.

**Methods Defined Here**

|                                                                                                                               |                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.converters.AbelianGrouper#convert "qiskit.opflow.converters.AbelianGrouper.convert")                | Check if operator is a SummedOp, in which case covert it into a sum of mutually commuting sums, or if the Operator contains sub-Operators and `traverse` is True, attempt to convert any sub-Operators. |
| [`group_subops`](qiskit.opflow.converters.AbelianGrouper#group_subops "qiskit.opflow.converters.AbelianGrouper.group_subops") | Given a ListOp, attempt to group into Abelian ListOps of the same type.                                                                                                                                 |

