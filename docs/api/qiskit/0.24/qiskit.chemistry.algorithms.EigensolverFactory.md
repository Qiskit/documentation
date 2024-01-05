---
title: EigensolverFactory
description: API reference for qiskit.chemistry.algorithms.EigensolverFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.EigensolverFactory
---

<span id="qiskit-chemistry-algorithms-eigensolverfactory" />

# qiskit.chemistry.algorithms.EigensolverFactory

<span id="qiskit.chemistry.algorithms.EigensolverFactory" />

`EigensolverFactory`

A factory to construct a eigensolver based on a qubit operator transformation.

### \_\_init\_\_

<span id="qiskit.chemistry.algorithms.EigensolverFactory.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

### get\_solver

<span id="qiskit.chemistry.algorithms.EigensolverFactory.get_solver" />

`abstract get_solver(transformation)`

Returns a eigensolver, based on the qubit operator transformation.

**Parameters**

**transformation** (`Transformation`) – The qubit operator transformation.

**Return type**

`Eigensolver`

**Returns**

An eigensolver suitable to compute the excited states of the molecule transformed by `transformation`.

