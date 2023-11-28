# qiskit.chemistry.algorithms.QEomEE

<span id="undefined" />

`QEomEE(operator, num_orbitals, num_particles, qubit_mapping='parity', two_qubit_reduction=True, active_occupied=None, active_unoccupied=None, is_eom_matrix_symmetric=True, se_list=None, de_list=None, z2_symmetries=None, untapered_op=None, aux_operators=None)`

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

<span id="undefined" />

`__init__(operator, num_orbitals, num_particles, qubit_mapping='parity', two_qubit_reduction=True, active_occupied=None, active_unoccupied=None, is_eom_matrix_symmetric=True, se_list=None, de_list=None, z2_symmetries=None, untapered_op=None, aux_operators=None)`

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

|                                                                                                                                                                                |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.QEomEE.__init__ "qiskit.chemistry.algorithms.QEomEE.__init__")(operator, num\_orbitals, num\_particles)                              | **type operator**`LegacyBaseOperator`                                        |
| [`compute_minimum_eigenvalue`](#qiskit.chemistry.algorithms.QEomEE.compute_minimum_eigenvalue "qiskit.chemistry.algorithms.QEomEE.compute_minimum_eigenvalue")(\[operator, …]) | Computes minimum eigenvalue.                                                 |
| [`run`](#qiskit.chemistry.algorithms.QEomEE.run "qiskit.chemistry.algorithms.QEomEE.run")()                                                                                    | Execute the classical algorithm.                                             |
| [`supports_aux_operators`](#qiskit.chemistry.algorithms.QEomEE.supports_aux_operators "qiskit.chemistry.algorithms.QEomEE.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

|                                                                                                                                  |                                     |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`aux_operators`](#qiskit.chemistry.algorithms.QEomEE.aux_operators "qiskit.chemistry.algorithms.QEomEE.aux_operators")          | Returns the auxiliary operators.    |
| [`filter_criterion`](#qiskit.chemistry.algorithms.QEomEE.filter_criterion "qiskit.chemistry.algorithms.QEomEE.filter_criterion") | returns the filter criterion if set |
| [`operator`](#qiskit.chemistry.algorithms.QEomEE.operator "qiskit.chemistry.algorithms.QEomEE.operator")                         | Return the operator.                |
| [`random`](#qiskit.chemistry.algorithms.QEomEE.random "qiskit.chemistry.algorithms.QEomEE.random")                               | Return a numpy random.              |

<span id="undefined" />

`property aux_operators`

Returns the auxiliary operators.

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="undefined" />

`compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`MinimumEigensolverResult`

**Returns**

MinimumEigensolverResult

<span id="undefined" />

`property filter_criterion`

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

<span id="undefined" />

`property operator`

Return the operator.

**Return type**

`Optional`\[`OperatorBase`]

<span id="undefined" />

`property random`

Return a numpy random.

<span id="undefined" />

`run()`

Execute the classical algorithm.

**Returns**

results of an algorithm.

**Return type**

dict

<span id="undefined" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise
