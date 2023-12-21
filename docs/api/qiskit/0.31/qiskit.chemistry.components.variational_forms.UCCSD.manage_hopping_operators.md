# qiskit.chemistry.components.variational\_forms.UCCSD.manage\_hopping\_operators

`UCCSD.manage_hopping_operators()`

Triggers the adaptive behavior of this UCCSD instance. This function is used by the Adaptive VQE algorithm. It stores the full list of available hopping operators in a so called “excitation pool” and clears the previous list to be empty. Furthermore, the depth is asserted to be 1 which is required by the Adaptive VQE algorithm.
