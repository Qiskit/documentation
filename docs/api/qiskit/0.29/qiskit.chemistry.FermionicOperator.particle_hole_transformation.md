# qiskit.chemistry.FermionicOperator.particle\_hole\_transformation

`FermionicOperator.particle_hole_transformation(num_particles)`

The ‘standard’ second quantized Hamiltonian can be transformed in the particle-hole (p/h) picture, which makes the expansion of the trail wavefunction from the HF reference state more natural. In fact, for both trail wavefunctions implemented in q-lib (‘heuristic’ hardware efficient and UCCSD) the p/h Hamiltonian improves the speed of convergence of the VQE algorithm for the calculation of the electronic ground state properties. For more information on the p/h formalism see: P. Barkoutsos, arXiv:1805.04340([https://arxiv.org/abs/1805.04340](https://arxiv.org/abs/1805.04340)).

**Parameters**

**num\_particles** (*list, int*) – number of particles, if it is a list, the first number is alpha and the second number is beta.

**Returns**

new\_fer\_op, energy\_shift

**Return type**

tuple
