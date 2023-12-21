---
title: Hamiltonian
description: API reference for qiskit.chemistry.core.Hamiltonian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.core.Hamiltonian
---

# Hamiltonian

<span id="qiskit.chemistry.core.Hamiltonian" />

`Hamiltonian(transformation=TransformationType.FULL, qubit_mapping=QubitMappingType.PARITY, two_qubit_reduction=True, freeze_core=False, orbital_reduction=None, z2symmetry_reduction=None)`

A molecular Hamiltonian operator, representing the energy of the electrons and nuclei in a molecule.

**Parameters**

*   **transformation** ([`TransformationType`](qiskit.chemistry.core.TransformationType "qiskit.chemistry.core.hamiltonian.TransformationType")) – full or particle\_hole
*   **qubit\_mapping** ([`QubitMappingType`](qiskit.chemistry.core.QubitMappingType "qiskit.chemistry.core.hamiltonian.QubitMappingType")) – jordan\_wigner, parity or bravyi\_kitaev
*   **two\_qubit\_reduction** (`bool`) – Whether two qubit reduction should be used, when parity mapping only
*   **freeze\_core** (`bool`) – Whether to freeze core orbitals when possible
*   **orbital\_reduction** (`Optional`\[`List`\[`int`]]) – Orbital list to be frozen or removed
*   **z2symmetry\_reduction** (`Union`\[`str`, `List`\[`int`], `None`]) – If z2 symmetry reduction should be applied to resulting qubit operators that are computed. For each symmetry detected the operator will be split in two where each requires one qubit less for computation. So for example 3 symmetries will split in the original operator into 8 new operators each requiring 3 less qubits. Now only one of these operators will have the ground state and be the correct symmetry sector needed for the ground state. Setting ‘auto’ will use an automatic computation of the correct sector. If from other experiments, with the z2symmetry logic, the sector is known, then the tapering values of that sector can be provided (a list of int of values -1, and 1). The default is None meaning no symmetry reduction is done. Note that dipole and other operators such as spin, num particles etc are also symmetry reduced according to the symmetries found in the main operator if this operator commutes with the main operator symmetry. If it does not then the operator will be discarded since no meaningful measurement can take place.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid symmetry reduction

## Attributes

|                                                                                                                                                                   |                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [`Hamiltonian.INFO_NUM_ORBITALS`](qiskit.chemistry.core.Hamiltonian.INFO_NUM_ORBITALS "qiskit.chemistry.core.Hamiltonian.INFO_NUM_ORBITALS")                      |                       |
| [`Hamiltonian.INFO_NUM_PARTICLES`](qiskit.chemistry.core.Hamiltonian.INFO_NUM_PARTICLES "qiskit.chemistry.core.Hamiltonian.INFO_NUM_PARTICLES")                   |                       |
| [`Hamiltonian.INFO_TWO_QUBIT_REDUCTION`](qiskit.chemistry.core.Hamiltonian.INFO_TWO_QUBIT_REDUCTION "qiskit.chemistry.core.Hamiltonian.INFO_TWO_QUBIT_REDUCTION") |                       |
| [`Hamiltonian.INFO_Z2SYMMETRIES`](qiskit.chemistry.core.Hamiltonian.INFO_Z2SYMMETRIES "qiskit.chemistry.core.Hamiltonian.INFO_Z2SYMMETRIES")                      |                       |
| [`Hamiltonian.molecule_info`](qiskit.chemistry.core.Hamiltonian.molecule_info "qiskit.chemistry.core.Hamiltonian.molecule_info")                                  | returns molecule info |

## Methods

|                                                                                                                                                                                 |                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`Hamiltonian.process_algorithm_result`](qiskit.chemistry.core.Hamiltonian.process_algorithm_result "qiskit.chemistry.core.Hamiltonian.process_algorithm_result")(algo\_result) | Takes the algorithm result and processes it as required, e.g.                                                       |
| [`Hamiltonian.run`](qiskit.chemistry.core.Hamiltonian.run "qiskit.chemistry.core.Hamiltonian.run")(qmolecule)                                                                   | Convert the qmolecule, according to the ChemistryOperator, into an Operator that can be given to a QuantumAlgorithm |

