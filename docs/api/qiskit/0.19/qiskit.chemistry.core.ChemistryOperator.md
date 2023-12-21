---
title: ChemistryOperator
description: API reference for qiskit.chemistry.core.ChemistryOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.ChemistryOperator
---

# ChemistryOperator

<span id="qiskit.chemistry.core.ChemistryOperator" />

`ChemistryOperator`

Base class for ChemistryOperator.

## Attributes

|                                                                                                                                                                                     |                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [`ChemistryOperator.INFO_NUM_ORBITALS`](qiskit.chemistry.core.ChemistryOperator.INFO_NUM_ORBITALS "qiskit.chemistry.core.ChemistryOperator.INFO_NUM_ORBITALS")                      |                       |
| [`ChemistryOperator.INFO_NUM_PARTICLES`](qiskit.chemistry.core.ChemistryOperator.INFO_NUM_PARTICLES "qiskit.chemistry.core.ChemistryOperator.INFO_NUM_PARTICLES")                   |                       |
| [`ChemistryOperator.INFO_TWO_QUBIT_REDUCTION`](qiskit.chemistry.core.ChemistryOperator.INFO_TWO_QUBIT_REDUCTION "qiskit.chemistry.core.ChemistryOperator.INFO_TWO_QUBIT_REDUCTION") |                       |
| [`ChemistryOperator.INFO_Z2SYMMETRIES`](qiskit.chemistry.core.ChemistryOperator.INFO_Z2SYMMETRIES "qiskit.chemistry.core.ChemistryOperator.INFO_Z2SYMMETRIES")                      |                       |
| [`ChemistryOperator.molecule_info`](qiskit.chemistry.core.ChemistryOperator.molecule_info "qiskit.chemistry.core.ChemistryOperator.molecule_info")                                  | returns molecule info |

## Methods

|                                                                                                                                                                                        |                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`ChemistryOperator.process_algorithm_result`](qiskit.chemistry.core.ChemistryOperator.process_algorithm_result "qiskit.chemistry.core.ChemistryOperator.process_algorithm_result")(…) | Takes the algorithm result and processes it as required, e.g.                                                       |
| [`ChemistryOperator.run`](qiskit.chemistry.core.ChemistryOperator.run "qiskit.chemistry.core.ChemistryOperator.run")(qmolecule)                                                        | Convert the qmolecule, according to the ChemistryOperator, into an Operator that can be given to a QuantumAlgorithm |

