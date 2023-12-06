# ChemistryOperator



`ChemistryOperator`

Bases: `abc.ABC`

Base class for ChemistryOperator.

## Methods

|                                                                                                                                                                                                                                    |                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`process_algorithm_result`](qiskit.chemistry.core.ChemistryOperator.process_algorithm_result#qiskit.chemistry.core.ChemistryOperator.process_algorithm_result "qiskit.chemistry.core.ChemistryOperator.process_algorithm_result") | Takes the algorithm result and processes it as required, e.g.                                                       |
| [`run`](qiskit.chemistry.core.ChemistryOperator.run#qiskit.chemistry.core.ChemistryOperator.run "qiskit.chemistry.core.ChemistryOperator.run")                                                                                     | Convert the qmolecule, according to the ChemistryOperator, into an Operator that can be given to a QuantumAlgorithm |

## Attributes



### INFO\_NUM\_ORBITALS

`= 'num_orbitals'`



### INFO\_NUM\_PARTICLES

`= 'num_particles'`



### INFO\_TWO\_QUBIT\_REDUCTION

`= 'two_qubit_reduction'`



### INFO\_Z2SYMMETRIES

`= 'z2symmetries'`



### molecule\_info

returns molecule info
