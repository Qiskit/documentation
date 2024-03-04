---
title: ChemistryOperator
description: API reference for qiskit.chemistry.core.ChemistryOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.ChemistryOperator
---

# ChemistryOperator

<span id="qiskit.chemistry.core.ChemistryOperator" />

`ChemistryOperator` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/chemistry/core/chemistry_operator.py "view source code")

Base class for ChemistryOperator.

## Attributes

### INFO\_NUM\_ORBITALS

<span id="qiskit.chemistry.core.ChemistryOperator.INFO_NUM_ORBITALS" />

`= 'num_orbitals'`

### INFO\_NUM\_PARTICLES

<span id="qiskit.chemistry.core.ChemistryOperator.INFO_NUM_PARTICLES" />

`= 'num_particles'`

### INFO\_TWO\_QUBIT\_REDUCTION

<span id="qiskit.chemistry.core.ChemistryOperator.INFO_TWO_QUBIT_REDUCTION" />

`= 'two_qubit_reduction'`

### INFO\_Z2SYMMETRIES

<span id="qiskit.chemistry.core.ChemistryOperator.INFO_Z2SYMMETRIES" />

`= 'z2symmetries'`

### molecule\_info

returns molecule info

## Methods

### process\_algorithm\_result

<span id="qiskit.chemistry.core.ChemistryOperator.process_algorithm_result" />

`ChemistryOperator.process_algorithm_result(algo_result)`

Takes the algorithm result and processes it as required, e.g. by combination of any parts that were classically computed, for the final result.

**Parameters**

**algo\_result** (`Union`\[`dict`, [`MinimumEigensolverResult`](qiskit.aqua.algorithms.MinimumEigensolverResult "qiskit.aqua.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolverResult"), `EigensolverResult`]) – Result from algorithm

**Return type**

`Union`\[`Tuple`\[`List`\[`str`], `dict`], [`MolecularGroundStateResult`](qiskit.chemistry.core.MolecularGroundStateResult "qiskit.chemistry.core.chemistry_operator.MolecularGroundStateResult"), [`MolecularExcitedStatesResult`](qiskit.chemistry.core.MolecularExcitedStatesResult "qiskit.chemistry.core.chemistry_operator.MolecularExcitedStatesResult")]

**Returns**

Final chemistry result computed from the algorithm result

### run

<span id="qiskit.chemistry.core.ChemistryOperator.run" />

`abstract ChemistryOperator.run(qmolecule)`

Convert the qmolecule, according to the ChemistryOperator, into an Operator that can be given to a QuantumAlgorithm

**Parameters**

**qmolecule** ([*QMolecule*](qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule")) – from a chemistry driver

**Returns**

(qubit\_op, aux\_ops)

**Return type**

Tuple

