# HarmonicBasis

<span id="undefined" />

`HarmonicBasis(watson_hamiltonian, basis, truncation_order=3)`

Bases: `qiskit.chemistry.components.bosonic_bases.bosonic_basis.BosonicBasis`

Basis in which the Watson Hamiltonian is expressed.

This class uses the Hermite polynomials (eigenstates of the harmonic oscillator) as a modal basis for the expression of the Watson Hamiltonian or any bosonic operator.

## References

\[1] Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855.

**Parameters**

*   **watson\_hamiltonian** (`WatsonHamiltonian`) – A `WatsonHamiltonian` object which contains the hamiltonian information.
*   **basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode `basis = [4, 4, 4]`.
*   **truncation\_order** (`int`) – where is the Hamiltonian expansion truncation (1 for having only 1-body terms, 2 for having on 1- and 2-body terms…)

## Methods

|                                                                                                                                                                                                                |                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.chemistry.components.bosonic_bases.HarmonicBasis.convert#qiskit.chemistry.components.bosonic_bases.HarmonicBasis.convert "qiskit.chemistry.components.bosonic_bases.HarmonicBasis.convert") | This prepares an array object representing a bosonic hamiltonian expressed in the harmonic basis. |
