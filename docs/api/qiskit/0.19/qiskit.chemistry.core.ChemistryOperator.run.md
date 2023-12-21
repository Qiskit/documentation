---
title: run
description: API reference for qiskit.chemistry.core.ChemistryOperator.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.core.ChemistryOperator.run
---

# run

<span id="qiskit.chemistry.core.ChemistryOperator.run" />

`abstract ChemistryOperator.run(qmolecule)`

Convert the qmolecule, according to the ChemistryOperator, into an Operator that can be given to a QuantumAlgorithm

**Parameters**

**qmolecule** ([*QMolecule*](qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule")) – from a chemistry driver

**Returns**

(qubit\_op, aux\_ops)

**Return type**

Tuple

