# Tutorial problem classes

<!-- cspell:ignore DMRG Floquet Heeger Kondo QOBLIB Undriven Unfrustrated autoregressive kagome multiclass polaron undoped -->

This page defines the Hamiltonian simulation and quantum machine learning problem classes listed on [Contribute a tutorial](https://quantum.cloud.ibm.com/docs/tutorials/contribute). Optimization problem classes come from the [Quantum Optimization Benchmarking Library (QOBLIB)](https://arxiv.org/abs/2504.03832). Reviewers use these definitions to check whether a proposal fits a class, as described in the [guide to adding tutorials](adding-tutorials.md).

- **Foundational problem classes** group the systems or data that are useful for teaching a domain's methods. Each one names a teaching instance that can be checked against a known answer, how to scale it up, and where it leads next.
- **Applied problem classes** are problems that are promising for quantum advantage. Each one names its target quantity, the classical reference to compare against, and what counts as a real instance.

Values marked _to be defined_ are still being set.

## Hamiltonian simulation

### Foundational problem classes

#### Molecular electronic structure

- **Systems:** Molecules in a chosen active space, from N<sub>2</sub> in a minimal basis to strongly correlated molecules, such as stretched bonds and transition-metal complexes.
- **Tasks:** Ground-state energy at one geometry or across a potential energy curve.
- **Teaching instance:** N<sub>2</sub> in a minimal basis, checked against full configuration interaction (FCI).
- **Scale-up:** A larger basis or active space at about 50 qubits or more, compared against a classical method such as CCSD(T), DMRG, or selected configuration interaction.
- **Leads to:** Quantum impurity models, where ground-state solvers are a step in embedding methods.
- **Out of scope:** Molecular dynamics, which belong to the Applied classes.

#### Nuclear structure

- **Systems:** Nuclei in the shell model, in a valence space such as the sd or pf shell.
- **Tasks:** Ground-state energy.
- **Teaching instance:** A light nucleus, such as <sup>20</sup>Ne in the sd shell, checked against exact shell-model diagonalization.
- **Scale-up:** Heavier nuclei beyond exact diagonalization, such as <sup>48</sup>Cr in the pf shell.
- **Leads to:** No Applied class yet.
- **Out of scope:** Nuclear dynamics and reactions.

#### Spin chains

- **Systems:** One-dimensional Heisenberg-type (XXX, XXZ, and XYZ) and transverse-field Ising chains.
- **Tasks:** Ground-state energy, and time evolution of observables after a quench.
- **Teaching instance:** A chain small enough for exact diagonalization, or an exactly solvable case such as the transverse-field Ising chain.
- **Scale-up:** About 50 sites or more on hardware, compared against tensor network methods (DMRG for ground states and matrix product state time evolution for dynamics).
- **Leads to:** Kicked and Floquet spin dynamics, symmetric spin dynamics, and frustrated magnets.
- **Out of scope:** Two-dimensional lattices and driven systems, which belong to the Applied classes.

### Applied problem classes

#### Electron-phonon dynamics

- **Systems:** Lattice models of electrons coupled to lattice vibrations, such as the Holstein, Su-Schrieffer-Heeger (SSH), and Holstein-Hubbard models.
- **Target quantity:** Electron density and phonon occupation over time after a quench, such as polaron formation.
- **Classical reference:** Tensor network time evolution with a truncated phonon basis.
- **Real instance:** Lattice size, phonon truncation, and evolution time beyond converged classical simulation: _to be defined_.
- **Out of scope:** Static polaron ground states.

#### Lattice gauge real-time dynamics

- **Systems:** Lattice gauge theories, such as Z<sub>2</sub>, U(1), and SU(2) theories in one or two spatial dimensions.
- **Target quantity:** Real-time observables, such as string breaking and hadron dynamics.
- **Classical reference:** Tensor network time evolution.
- **Real instance:** _To be defined._
- **Out of scope:** Static spectra and ground states.

#### Chaotic Hamiltonian

- **Systems:** Chaotic many-body Hamiltonians, such as the SYK model and chaotic spin models.
- **Target quantity:** Out-of-time-order correlators and the spectral form factor.
- **Classical reference:** Exact diagonalization at small sizes, and tensor network or Pauli propagation methods at larger sizes.
- **Real instance:** _To be defined._
- **Out of scope:** Integrable models.

#### Frustrated magnets

- **Systems:** Spin models with competing interactions, such as triangular, kagome, and J<sub>1</sub>-J<sub>2</sub> lattices.
- **Target quantity:** Ground-state and finite-temperature observables, such as correlation functions and order parameters.
- **Classical reference:** DMRG, tensor network methods, and quantum Monte Carlo where the sign problem allows.
- **Real instance:** _To be defined._
- **Out of scope:** Unfrustrated one-dimensional chains, which belong to the spin chains class.

#### Kicked and Floquet spin dynamics

- **Systems:** Periodically driven spin models, such as kicked Ising models on two-dimensional or heavy-hex lattices.
- **Target quantity:** Observables, such as magnetization and correlators, over many drive periods.
- **Classical reference:** Tensor network, Pauli propagation, and belief propagation methods.
- **Real instance:** _To be defined._
- **Out of scope:** Undriven one-dimensional chains, which belong to the spin chains class.

#### Symmetric spin dynamics

- **Systems:** Spin models with symmetries, such as Heisenberg chains that model real materials like KCuF<sub>3</sub>.
- **Target quantity:** The dynamical structure factor, as measured in neutron scattering.
- **Classical reference:** Tensor network time evolution.
- **Real instance:** _To be defined._
- **Out of scope:** Ground-state energies.

#### Doped 2D Fermi-Hubbard dynamics

- **Systems:** The two-dimensional Fermi-Hubbard model away from half filling.
- **Target quantity:** Charge and spin dynamics after a quench.
- **Classical reference:** Tensor network time evolution.
- **Real instance:** _To be defined._
- **Out of scope:** Ground states and the undoped model.

#### Quantum impurity models

- **Systems:** Impurity models, such as the Anderson and Kondo models, including impurity solvers within embedding methods.
- **Target quantity:** The impurity Green's function.
- **Classical reference:** Exact diagonalization with a small bath, DMRG, and quantum Monte Carlo.
- **Real instance:** _To be defined._
- **Out of scope:** Impurity ground-state energy on its own, which only partly covers this class.

## Quantum machine learning

Foundational classes use classical data, where quantum models are useful to learn and benchmark but advantage is not expected. Applied classes use quantum data or structured problems, where advantage is more plausible.

### Foundational problem classes

#### Classical data classification

- **Data:** Small or public real-world classical datasets for binary or multiclass classification, such as tabular biomedical or energy data.
- **Tasks:** Train and evaluate a quantum classifier, such as a quantum kernel or variational classifier, and compare against a matched classical model, such as a support vector machine with a radial basis function kernel or gradient-boosted trees, on the same split and metric.
- **Teaching instance:** A dataset, or a subset of one, small enough to simulate exactly.
- **Scale-up:** About 50 qubits or more on hardware.
- **Leads to:** Group-structured classification.
- **Out of scope:** Private datasets.

#### Quantum reservoir and extreme learning

- **Data:** Time series or other classical data.
- **Tasks:** Predict the data with fixed quantum dynamics as a reservoir and a trained classical readout.
- **Teaching instance:** A small reservoir that can be simulated exactly, compared against a classical reservoir such as an echo state network.
- **Scale-up:** About 50 qubits or more on hardware.
- **Leads to:** No Applied class yet.
- **Out of scope:** Variational models trained end to end.

### Applied problem classes

#### Quantum phase classification

- **Data:** Quantum states from different phases of matter.
- **Target quantity:** Test accuracy versus the number of samples.
- **Classical reference:** Classical machine learning on classical shadows of the same states.
- **Real instance:** _To be defined._
- **Out of scope:** Classical data.

#### Quantum property prediction

- **Data:** Measurements of quantum states.
- **Target quantity:** The number of samples needed to predict a property to a target error.
- **Classical reference:** Learning from classical shadows with the same measurement budget.
- **Real instance:** _To be defined._
- **Out of scope:** Properties that are computed directly rather than learned.

#### Hamiltonian learning

- **Data:** Measurements of the states or dynamics of a Hamiltonian with unknown parameters.
- **Target quantity:** Parameter error versus the number of samples.
- **Classical reference:** Classical estimation from the same measurement budget.
- **Real instance:** _To be defined._
- **Out of scope:** Hamiltonians whose parameters are already known.

#### Generative learning of hard distributions

- **Data:** Samples from distributions that are hard to sample classically.
- **Target quantity:** Sampling fidelity or cross-entropy.
- **Classical reference:** Classical generative models, such as autoregressive networks.
- **Real instance:** _To be defined._
- **Out of scope:** Distributions that are easy to sample classically.

#### Group-structured classification

- **Data:** Data with group structure, such as the labeling-cosets-with-error problem from [Covariant quantum kernels for data with group structure](https://arxiv.org/abs/2105.03406).
- **Target quantity:** Test accuracy.
- **Classical reference:** Classical kernel methods on the same data.
- **Real instance:** _To be defined._
- **Out of scope:** Data without group structure.
