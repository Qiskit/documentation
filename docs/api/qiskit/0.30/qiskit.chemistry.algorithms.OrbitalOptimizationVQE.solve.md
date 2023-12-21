# qiskit.chemistry.algorithms.OrbitalOptimizationVQE.solve

`OrbitalOptimizationVQE.solve(driver, aux_operators=None)`

Compute Ground State properties.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate at the ground state. Depending on whether a fermionic or bosonic system is solved, the type of the operators must be `FermionicOperator` or `BosonicOperator`, respectively.

**Raises**

**NotImplementedError** – If an operator in `aux_operators` is not of type `FermionicOperator`.

**Return type**

`ElectronicStructureResult`

**Returns**

An eigenstate result. Depending on the transformation this can be an electronic structure or bosonic result.
