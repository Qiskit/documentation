# qiskit.chemistry.applications.MolecularGroundStateEnergy.get\_default\_solver

`static MolecularGroundStateEnergy.get_default_solver(quantum_instance)`

Get the default solver callback that can be used with [`compute_energy()`](qiskit.chemistry.applications.MolecularGroundStateEnergy.compute_energy#qiskit.chemistry.applications.MolecularGroundStateEnergy.compute_energy "qiskit.chemistry.applications.MolecularGroundStateEnergy.compute_energy") :type quantum\_instance: `Union`\[`QuantumInstance`, `Backend`, `BaseBackend`] :param quantum\_instance: A Backend/Quantum Instance for the solver to run on

**Return type**

`Optional`\[`Callable`\[\[`List`, `int`, `str`, `bool`, `Z2Symmetries`], `MinimumEigensolver`]]

**Returns**

Default solver callback
