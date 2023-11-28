# FermionicOperator

<span id="undefined" />

`FermionicOperator(h1, h2=None, ph_trans_shift=None)`

Bases: `object`

A set of functions to map fermionic Hamiltonians to qubit Hamiltonians.

References:

*   *E. Wigner and P. Jordan., Über das Paulische Äquivalenzverbot, Z. Phys., 47:631 (1928).*
*   *S. Bravyi and A. Kitaev. Fermionic quantum computation, Ann. of Phys., 298(1):210–226 (2002).*
*   *A. Tranter, S. Sofia, J. Seeley, M. Kaicher, J. McClean, R. Babbush, P. Coveney, F. Mintert, F. Wilhelm, and P. Love. The Bravyi–Kitaev transformation: Properties and applications. Int. Journal of Quantum Chemistry, 115(19):1431–1441 (2015).*
*   *S. Bravyi, J. M. Gambetta, A. Mezzacapo, and K. Temme, arXiv e-print arXiv:1701.08213 (2017).*
*   *K. Setia, J. D. Whitfield, arXiv:1712.00446 (2017)*

This class requires the integrals stored in the ‘*chemist*’ notation

> h2(i,j,k,l) –> adag\_i adag\_k a\_l a\_j

and the integral values are used for the coefficients of the second-quantized Hamiltonian that is built. The integrals input here should be in block spin format and also have indexes reordered as follows ‘ijkl->ljik’

There is another popular notation, the ‘*physicist*’ notation

> h2(i,j,k,l) –> adag\_i adag\_j a\_k a\_l

If you are using the ‘*physicist*’ notation, you need to convert it to the ‘*chemist*’ notation. E.g. h2=numpy.einsum(‘ikmj->ijkm’, h2)

The [`QMolecule`](qiskit.chemistry.QMolecule#qiskit.chemistry.QMolecule "qiskit.chemistry.QMolecule") class has [`one_body_integrals`](qiskit.chemistry.QMolecule#qiskit.chemistry.QMolecule.one_body_integrals "qiskit.chemistry.QMolecule.one_body_integrals") and [`two_body_integrals`](qiskit.chemistry.QMolecule#qiskit.chemistry.QMolecule.two_body_integrals "qiskit.chemistry.QMolecule.two_body_integrals") properties that can be directly supplied to the h1 and h2 parameters here respectively.

**Parameters**

*   **h1** (*numpy.ndarray*) – second-quantized fermionic one-body operator, a 2-D (NxN) tensor
*   **h2** (*numpy.ndarray*) – second-quantized fermionic two-body operator, a 4-D (NxNxNxN) tensor
*   **ph\_trans\_shift** (*float*) – energy shift caused by particle hole transformation

## Methods

|                                                                                                                                                                                                                                     |                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`fermion_mode_elimination`](qiskit.chemistry.FermionicOperator.fermion_mode_elimination#qiskit.chemistry.FermionicOperator.fermion_mode_elimination "qiskit.chemistry.FermionicOperator.fermion_mode_elimination")                 | Eliminate modes.                                                                                                                                                                                 |
| [`fermion_mode_freezing`](qiskit.chemistry.FermionicOperator.fermion_mode_freezing#qiskit.chemistry.FermionicOperator.fermion_mode_freezing "qiskit.chemistry.FermionicOperator.fermion_mode_freezing")                             | Freezing modes and extracting its energy.                                                                                                                                                        |
| [`mapping`](qiskit.chemistry.FermionicOperator.mapping#qiskit.chemistry.FermionicOperator.mapping "qiskit.chemistry.FermionicOperator.mapping")                                                                                     | Map fermionic operator to qubit operator.                                                                                                                                                        |
| [`particle_hole_transformation`](qiskit.chemistry.FermionicOperator.particle_hole_transformation#qiskit.chemistry.FermionicOperator.particle_hole_transformation "qiskit.chemistry.FermionicOperator.particle_hole_transformation") | The ‘standard’ second quantized Hamiltonian can be transformed in the particle-hole (p/h) picture, which makes the expansion of the trail wavefunction from the HF reference state more natural. |
| [`total_angular_momentum`](qiskit.chemistry.FermionicOperator.total_angular_momentum#qiskit.chemistry.FermionicOperator.total_angular_momentum "qiskit.chemistry.FermionicOperator.total_angular_momentum")                         | Total angular momentum.                                                                                                                                                                          |
| [`total_magnetization`](qiskit.chemistry.FermionicOperator.total_magnetization#qiskit.chemistry.FermionicOperator.total_magnetization "qiskit.chemistry.FermionicOperator.total_magnetization")                                     | A data\_preprocess\_helper fermionic operator which can be used to evaluate the magnetization of the given eigenstate.                                                                           |
| [`total_particle_number`](qiskit.chemistry.FermionicOperator.total_particle_number#qiskit.chemistry.FermionicOperator.total_particle_number "qiskit.chemistry.FermionicOperator.total_particle_number")                             | A data\_preprocess\_helper fermionic operator which can be used to evaluate the number of particle of the given eigenstate.                                                                      |
| [`transform`](qiskit.chemistry.FermionicOperator.transform#qiskit.chemistry.FermionicOperator.transform "qiskit.chemistry.FermionicOperator.transform")                                                                             | Transform the one and two body term based on unitary\_matrix.                                                                                                                                    |

## Attributes

<span id="undefined" />

### h1

Getter of one body integral tensor.

<span id="undefined" />

### h2

Getter of two body integral tensor.

<span id="undefined" />

### modes

Getter of modes.
