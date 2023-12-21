# qiskit.chemistry.algorithms.QEOM.solve

`QEOM.solve(driver, aux_operators=None)`

Run the excited-states calculation.

Construct and solves the EOM pseudo-eigenvalue problem to obtain the excitation energies and the excitation operators expansion coefficients.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

The excited states result. In case of a fermionic problem a `ElectronicStructureResult` is returned and in the bosonic case a `VibronicStructureResult`.
