# qiskit.chemistry.algorithms.AdaptVQE.solve

`AdaptVQE.solve(driver, aux_operators=None)`

Computes the ground state.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary `FermionicOperator` instances to evaluate at the ground state.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if a solver other than VQE or a variational form other than UCCSD is provided or if the algorithm finishes due to an unforeseen reason.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

An AdaptVQEResult which is an ElectronicStructureResult but also includes runtime information about the AdaptVQE algorithm like the number of iterations, finishing criterion, and the final maximum gradient.
