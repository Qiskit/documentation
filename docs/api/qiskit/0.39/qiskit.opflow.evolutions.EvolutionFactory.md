---
title: EvolutionFactory
description: API reference for qiskit.opflow.evolutions.EvolutionFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.EvolutionFactory
---

# EvolutionFactory

<span id="qiskit.opflow.evolutions.EvolutionFactory" />

`EvolutionFactory` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/opflow/evolutions/evolution_factory.py "view source code")

Bases: `object`

A factory class for convenient automatic selection of an Evolution algorithm based on the Operator to be converted.

## Methods Defined Here

### build

<span id="qiskit.opflow.evolutions.EvolutionFactory.build" />

`static EvolutionFactory.build(operator=None)`

A factory method for convenient automatic selection of an Evolution algorithm based on the Operator to be converted.

**Parameters**

**operator** (`Optional`\[[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")]) – the Operator being evolved

**Returns**

the `EvolutionBase` best suited to evolve operator.

**Return type**

[EvolutionBase](qiskit.opflow.evolutions.EvolutionBase "qiskit.opflow.evolutions.EvolutionBase")

**Raises**

**ValueError** – If operator is not of a composition for which we know the best Evolution method.

