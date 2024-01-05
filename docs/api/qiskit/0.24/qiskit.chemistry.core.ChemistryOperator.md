---
title: ChemistryOperator
description: API reference for qiskit.chemistry.core.ChemistryOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.ChemistryOperator
---

<span id="qiskit-chemistry-core-chemistryoperator" />

# qiskit.chemistry.core.ChemistryOperator

<span id="qiskit.chemistry.core.ChemistryOperator" />

`ChemistryOperator`

Base class for ChemistryOperator.

### \_\_init\_\_

<span id="qiskit.chemistry.core.ChemistryOperator.__init__" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### molecule\_info

<span id="qiskit.chemistry.core.ChemistryOperator.molecule_info" />

`property molecule_info`

returns molecule info

### process\_algorithm\_result

<span id="qiskit.chemistry.core.ChemistryOperator.process_algorithm_result" />

`process_algorithm_result(algo_result)`

Takes the algorithm result and processes it as required, e.g. by combination of any parts that were classically computed, for the final result.

**Parameters**

**algo\_result** (`Union`\[`dict`, `MinimumEigensolverResult`, `EigensolverResult`]) – Result from algorithm

**Return type**

`Union`\[`Tuple`\[`List`\[`str`], `dict`], `MolecularGroundStateResult`, `MolecularExcitedStatesResult`]

**Returns**

Final chemistry result computed from the algorithm result

### run

<span id="qiskit.chemistry.core.ChemistryOperator.run" />

`abstract run(qmolecule)`

Convert the qmolecule, according to the ChemistryOperator, into an Operator that can be given to a QuantumAlgorithm

**Parameters**

**qmolecule** ([*QMolecule*](qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule")) – from a chemistry driver

**Returns**

(qubit\_op, aux\_ops)

**Return type**

Tuple

