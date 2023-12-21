# qiskit.chemistry.algorithms.GroundStateSolver.solve

`abstract GroundStateSolver.solve(driver, aux_operators=None)`

Compute the ground state energy of the molecule that was supplied via the driver.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

An eigenstate result.
