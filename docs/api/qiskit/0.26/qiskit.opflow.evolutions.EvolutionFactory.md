---
title: EvolutionFactory
description: API reference for qiskit.opflow.evolutions.EvolutionFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.EvolutionFactory
---

# qiskit.opflow\.evolutions.EvolutionFactory

<span id="qiskit.opflow.evolutions.EvolutionFactory" />

`EvolutionFactory`

A factory class for convenient automatic selection of an Evolution algorithm based on the Operator to be converted.

### \_\_init\_\_

<span id="qiskit.opflow.evolutions.EvolutionFactory.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

### build

<span id="qiskit.opflow.evolutions.EvolutionFactory.build" />

`static build(operator=None)`

A factory method for convenient automatic selection of an Evolution algorithm based on the Operator to be converted.

**Parameters**

**operator** (`Optional`\[`OperatorBase`]) – the Operator being evolved

**Returns**

the `EvolutionBase` best suited to evolve operator.

**Return type**

[EvolutionBase](qiskit.aqua.operators.evolutions.EvolutionBase "qiskit.aqua.operators.evolutions.EvolutionBase")

**Raises**

**ValueError** – If operator is not of a composition for which we know the best Evolution method.

