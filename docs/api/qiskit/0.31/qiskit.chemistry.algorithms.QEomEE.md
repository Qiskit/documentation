# QEomEE

<span id="undefined" />

`QEomEE(operator, num_orbitals, num_particles, qubit_mapping='parity', two_qubit_reduction=True, active_occupied=None, active_unoccupied=None, is_eom_matrix_symmetric=True, se_list=None, de_list=None, z2_symmetries=None, untapered_op=None, aux_operators=None)`

Bases: `qiskit.aqua.algorithms.minimum_eigen_solvers.numpy_minimum_eigen_solver.NumPyMinimumEigensolver`

QEomEE algorithm (classical)

**Parameters**

*   **operator** (`LegacyBaseOperator`) – qubit operator
*   **num\_orbitals** (`int`) – total number of spin orbitals, has a min. value of 1.
*   **num\_particles** (`Union`\[`List`\[`int`], `int`]) – number of particles, if it is a list, the first number is alpha and the second number if beta.
*   **qubit\_mapping** (`str`) – qubit mapping type
*   **two\_qubit\_reduction** (`bool`) – two qubit reduction is applied or not
*   **active\_occupied** (`Optional`\[`List`\[`int`]]) – list of occupied orbitals to include, indices are 0 to n where n is num particles // 2
*   **active\_unoccupied** (`Optional`\[`List`\[`int`]]) – list of unoccupied orbitals to include, indices are 0 to m where m is (num\_orbitals - num particles) // 2
*   **is\_eom\_matrix\_symmetric** (`bool`) – is EoM matrix symmetric
*   **se\_list** (`Optional`\[`List`\[`List`\[`int`]]]) – single excitation list, overwrite the setting in active space
*   **de\_list** (`Optional`\[`List`\[`List`\[`int`]]]) – double excitation list, overwrite the setting in active space
*   **z2\_symmetries** (`Optional`\[`Z2Symmetries`]) – represent the Z2 symmetries
*   **untapered\_op** (`Optional`\[`LegacyBaseOperator`]) – if the operator is tapered, we need untapered operator to build element of EoM matrix
*   **aux\_operators** (`Optional`\[`List`\[`LegacyBaseOperator`]]) – Auxiliary operators to be evaluated at each eigenvalue

**Raises**

**ValueError** – invalid parameter

## Methods

|                                                                                                                                                                                                                             |                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_minimum_eigenvalue`](qiskit.chemistry.algorithms.QEomEE.compute_minimum_eigenvalue#qiskit.chemistry.algorithms.QEomEE.compute_minimum_eigenvalue "qiskit.chemistry.algorithms.QEomEE.compute_minimum_eigenvalue") | Computes minimum eigenvalue.                                                 |
| [`run`](qiskit.chemistry.algorithms.QEomEE.run#qiskit.chemistry.algorithms.QEomEE.run "qiskit.chemistry.algorithms.QEomEE.run")                                                                                             | Execute the classical algorithm.                                             |
| [`supports_aux_operators`](qiskit.chemistry.algorithms.QEomEE.supports_aux_operators#qiskit.chemistry.algorithms.QEomEE.supports_aux_operators "qiskit.chemistry.algorithms.QEomEE.supports_aux_operators")                 | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

<span id="undefined" />

### aux\_operators

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="undefined" />

### filter\_criterion

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

<span id="undefined" />

### operator

**Return type**

`Optional`\[`OperatorBase`]

<span id="undefined" />

### random

Return a numpy random.
