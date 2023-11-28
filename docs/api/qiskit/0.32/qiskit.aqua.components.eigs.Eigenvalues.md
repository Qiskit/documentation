# Eigenvalues

<span id="undefined" />

`Eigenvalues`

Bases: `abc.ABC`

Base class for eigenvalue estimation.

This method should initialize the module and use an exception if a component of the module is not available.

## Methods

|                                                                                                                                                                                                            |                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`construct_circuit`](qiskit.aqua.components.eigs.Eigenvalues.construct_circuit#qiskit.aqua.components.eigs.Eigenvalues.construct_circuit "qiskit.aqua.components.eigs.Eigenvalues.construct_circuit")     | Construct the eigenvalue estimation quantum circuit.         |
| [`construct_inverse`](qiskit.aqua.components.eigs.Eigenvalues.construct_inverse#qiskit.aqua.components.eigs.Eigenvalues.construct_inverse "qiskit.aqua.components.eigs.Eigenvalues.construct_inverse")     | Construct the inverse eigenvalue estimation quantum circuit. |
| [`get_register_sizes`](qiskit.aqua.components.eigs.Eigenvalues.get_register_sizes#qiskit.aqua.components.eigs.Eigenvalues.get_register_sizes "qiskit.aqua.components.eigs.Eigenvalues.get_register_sizes") | get register sizes                                           |
| [`get_scaling`](qiskit.aqua.components.eigs.Eigenvalues.get_scaling#qiskit.aqua.components.eigs.Eigenvalues.get_scaling "qiskit.aqua.components.eigs.Eigenvalues.get_scaling")                             | get scaling                                                  |
