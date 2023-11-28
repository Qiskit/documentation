# qiskit.chemistry.algorithms.AdaptVQE

<span id="undefined" />

`AdaptVQE(transformation, solver, threshold=1e-05, delta=1, max_iterations=None)`

A ground state calculation employing the AdaptVQE algorithm.

**Parameters**

*   **transformation** (`FermionicTransformation`) – a fermionic driver to operator transformation strategy.
*   **solver** (`MinimumEigensolverFactory`) – a factory for the VQE solver employing a UCCSD variational form.
*   **threshold** (`float`) – the energy convergence threshold. It has a minimum value of 1e-15.
*   **delta** (`float`) – the finite difference step size for the gradient computation. It has a minimum value of 1e-5.
*   **max\_iterations** (`Optional`\[`int`]) – the maximum number of iterations of the AdaptVQE algorithm.

<span id="undefined" />

`__init__(transformation, solver, threshold=1e-05, delta=1, max_iterations=None)`

**Parameters**

*   **transformation** (`FermionicTransformation`) – a fermionic driver to operator transformation strategy.
*   **solver** (`MinimumEigensolverFactory`) – a factory for the VQE solver employing a UCCSD variational form.
*   **threshold** (`float`) – the energy convergence threshold. It has a minimum value of 1e-15.
*   **delta** (`float`) – the finite difference step size for the gradient computation. It has a minimum value of 1e-5.
*   **max\_iterations** (`Optional`\[`int`]) – the maximum number of iterations of the AdaptVQE algorithm.

## Methods

|                                                                                                                                                              |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.AdaptVQE.__init__ "qiskit.chemistry.algorithms.AdaptVQE.__init__")(transformation, solver\[, …])                   | **type transformation**`FermionicTransformation`                              |
| [`evaluate_operators`](#qiskit.chemistry.algorithms.AdaptVQE.evaluate_operators "qiskit.chemistry.algorithms.AdaptVQE.evaluate_operators")(state, operators) | Evaluates additional operators at the given state.                            |
| [`returns_groundstate`](#qiskit.chemistry.algorithms.AdaptVQE.returns_groundstate "qiskit.chemistry.algorithms.AdaptVQE.returns_groundstate")()              | Whether the eigensolver returns the ground state or only ground state energy. |
| [`solve`](#qiskit.chemistry.algorithms.AdaptVQE.solve "qiskit.chemistry.algorithms.AdaptVQE.solve")(driver\[, aux\_operators])                               | Computes the ground state.                                                    |

## Attributes

|                                                                                                                                |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`solver`](#qiskit.chemistry.algorithms.AdaptVQE.solver "qiskit.chemistry.algorithms.AdaptVQE.solver")                         | Returns the minimum eigensolver or factory.                                   |
| [`transformation`](#qiskit.chemistry.algorithms.AdaptVQE.transformation "qiskit.chemistry.algorithms.AdaptVQE.transformation") | Returns the transformation used to obtain a qubit operator from the molecule. |

<span id="undefined" />

`evaluate_operators(state, operators)`

Evaluates additional operators at the given state.

**Parameters**

*   **state** (`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]) – any kind of input that can be used to specify a state. See also `StateFn` for more details.
*   **operators** (`Union`\[`WeightedPauliOperator`, `OperatorBase`, `list`, `dict`]) – either a single, list or dictionary of `WeightedPauliOperator``s or any kind of operator implementing the ``OperatorBase`.

**Return type**

`Union`\[`float`, `None`, `List`\[`Optional`\[`float`]], `Dict`\[`str`, `List`\[`Optional`\[`float`]]]]

**Returns**

The expectation value of the given operator(s). The return type will be identical to the format of the provided operators.

<span id="undefined" />

`returns_groundstate()`

Whether the eigensolver returns the ground state or only ground state energy.

**Return type**

`bool`

<span id="undefined" />

`solve(driver, aux_operators=None)`

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

<span id="undefined" />

`property solver`

Returns the minimum eigensolver or factory.

**Return type**

`Union`\[`MinimumEigensolver`, `MinimumEigensolverFactory`]

<span id="undefined" />

`property transformation`

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`
