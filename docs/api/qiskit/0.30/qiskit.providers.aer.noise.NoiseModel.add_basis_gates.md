# qiskit.providers.aer.noise.NoiseModel.add\_basis\_gates

`NoiseModel.add_basis_gates(instructions, warnings=True)`

Add additional gates to the noise model basis\_gates.

This should be used to add any gates that are identified by a custom gate label in the noise model.

**Parameters**

*   \*\*(****list****\[****str****] \*\***or** (*instructions*) – list\[Instruction]): the instructions error applies to.
*   **warnings** (*bool*) – display warning if instruction is not in QasmSimulator basis\_gates (Default: True).
