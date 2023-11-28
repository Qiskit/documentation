<span id="qiskit-chemistry-algorithms-vqeuccsdfactory" />

# qiskit.chemistry.algorithms.VQEUCCSDFactory

<span id="undefined" />

`VQEUCCSDFactory(quantum_instance, optimizer=None, initial_point=None, expectation=None, include_custom=False, method_singles='both', method_doubles='ucc', excitation_type='sd', same_spin_doubles=True)`

A factory to construct a VQE minimum eigensolver with UCCSD ansatz wavefunction.

**Parameters**

*   **quantum\_instance** (`QuantumInstance`) – The quantum instance used in the minimum eigensolver.
*   **optimizer** (`Optional`\[`Optimizer`]) – A classical optimizer.
*   **initial\_point** (`Optional`\[`ndarray`]) – An optional initial point (i.e. initial parameter values) for the optimizer. If `None` then VQE will look to the variational form for a preferred point and if not will simply compute a random one.
*   **expectation** (`Optional`\[`ExpectationBase`]) – The Expectation converter for taking the average value of the Observable over the var\_form state function. When `None` (the default) an [`ExpectationFactory`](qiskit.aqua.operators.expectations.ExpectationFactory#qiskit.aqua.operators.expectations.ExpectationFactory "qiskit.aqua.operators.expectations.ExpectationFactory") is used to select an appropriate expectation based on the operator and backend. When using Aer qasm\_simulator backend, with paulis, it is however much faster to leverage custom Aer function for the computation but, although VQE performs much faster with it, the outcome is ideal, with no shot noise, like using a state vector simulator. If you are just looking for the quickest performance when choosing Aer qasm\_simulator and the lack of shot noise is not an issue then set include\_custom parameter here to `True` (defaults to `False`).
*   **include\_custom** (`bool`) – When expectation parameter here is None setting this to `True` will allow the factory to include the custom Aer pauli expectation.
*   **method\_singles** (`str`) – specify the single excitation considered. ‘alpha’, ‘beta’, ‘both’ only alpha or beta spin-orbital single excitations or both (all of them).
*   **method\_doubles** (`str`) – specify the single excitation considered. ‘ucc’ (conventional ucc), succ (singlet ucc), succ\_full (singlet ucc full), pucc (pair ucc).
*   **excitation\_type** (`str`) – specify the excitation type ‘sd’, ‘s’, ‘d’ respectively for single and double, only single, only double excitations.
*   **same\_spin\_doubles** (`bool`) – enable double excitations of the same spin.

<span id="undefined" />

`__init__(quantum_instance, optimizer=None, initial_point=None, expectation=None, include_custom=False, method_singles='both', method_doubles='ucc', excitation_type='sd', same_spin_doubles=True)`

**Parameters**

*   **quantum\_instance** (`QuantumInstance`) – The quantum instance used in the minimum eigensolver.
*   **optimizer** (`Optional`\[`Optimizer`]) – A classical optimizer.
*   **initial\_point** (`Optional`\[`ndarray`]) – An optional initial point (i.e. initial parameter values) for the optimizer. If `None` then VQE will look to the variational form for a preferred point and if not will simply compute a random one.
*   **expectation** (`Optional`\[`ExpectationBase`]) – The Expectation converter for taking the average value of the Observable over the var\_form state function. When `None` (the default) an [`ExpectationFactory`](qiskit.aqua.operators.expectations.ExpectationFactory#qiskit.aqua.operators.expectations.ExpectationFactory "qiskit.aqua.operators.expectations.ExpectationFactory") is used to select an appropriate expectation based on the operator and backend. When using Aer qasm\_simulator backend, with paulis, it is however much faster to leverage custom Aer function for the computation but, although VQE performs much faster with it, the outcome is ideal, with no shot noise, like using a state vector simulator. If you are just looking for the quickest performance when choosing Aer qasm\_simulator and the lack of shot noise is not an issue then set include\_custom parameter here to `True` (defaults to `False`).
*   **include\_custom** (`bool`) – When expectation parameter here is None setting this to `True` will allow the factory to include the custom Aer pauli expectation.
*   **method\_singles** (`str`) – specify the single excitation considered. ‘alpha’, ‘beta’, ‘both’ only alpha or beta spin-orbital single excitations or both (all of them).
*   **method\_doubles** (`str`) – specify the single excitation considered. ‘ucc’ (conventional ucc), succ (singlet ucc), succ\_full (singlet ucc full), pucc (pair ucc).
*   **excitation\_type** (`str`) – specify the excitation type ‘sd’, ‘s’, ‘d’ respectively for single and double, only single, only double excitations.
*   **same\_spin\_doubles** (`bool`) – enable double excitations of the same spin.

## Methods

|                                                                                                                                                                        |                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.__init__ "qiskit.chemistry.algorithms.VQEUCCSDFactory.__init__")(quantum\_instance\[, optimizer, …])         | **type quantum\_instance**`QuantumInstance`                                             |
| [`get_solver`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.get_solver "qiskit.chemistry.algorithms.VQEUCCSDFactory.get_solver")(transformation)                       | Returns a VQE with a UCCSD wavefunction ansatz, based on `transformation`.              |
| [`supports_aux_operators`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.supports_aux_operators "qiskit.chemistry.algorithms.VQEUCCSDFactory.supports_aux_operators")() | Returns whether the eigensolver generated by this factory supports auxiliary operators. |

## Attributes

|                                                                                                                                                       |                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`excitation_type`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.excitation_type "qiskit.chemistry.algorithms.VQEUCCSDFactory.excitation_type")       | Getter of the `excitation_type` setting for the `excitation_type` setting.     |
| [`expectation`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.expectation "qiskit.chemistry.algorithms.VQEUCCSDFactory.expectation")                   | Getter of the expectation.                                                     |
| [`include_custom`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.include_custom "qiskit.chemistry.algorithms.VQEUCCSDFactory.include_custom")          | Getter of the `include_custom` setting for the `expectation` setting.          |
| [`initial_point`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.initial_point "qiskit.chemistry.algorithms.VQEUCCSDFactory.initial_point")             | Getter of the initial point.                                                   |
| [`method_doubles`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.method_doubles "qiskit.chemistry.algorithms.VQEUCCSDFactory.method_doubles")          | Getter of the `method_doubles` setting for the `method_doubles` setting.       |
| [`method_singles`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.method_singles "qiskit.chemistry.algorithms.VQEUCCSDFactory.method_singles")          | Getter of the `method_singles` setting for the `method_singles` setting.       |
| [`optimizer`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.optimizer "qiskit.chemistry.algorithms.VQEUCCSDFactory.optimizer")                         | Getter of the optimizer.                                                       |
| [`quantum_instance`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.quantum_instance "qiskit.chemistry.algorithms.VQEUCCSDFactory.quantum_instance")    | Getter of the quantum instance.                                                |
| [`same_spin_doubles`](#qiskit.chemistry.algorithms.VQEUCCSDFactory.same_spin_doubles "qiskit.chemistry.algorithms.VQEUCCSDFactory.same_spin_doubles") | Getter of the `same_spin_doubles` setting for the `same_spin_doubles` setting. |

<span id="undefined" />

`property excitation_type`

Getter of the `excitation_type` setting for the `excitation_type` setting.

**Return type**

`str`

<span id="undefined" />

`property expectation`

Getter of the expectation.

**Return type**

`ExpectationBase`

<span id="undefined" />

`get_solver(transformation)`

Returns a VQE with a UCCSD wavefunction ansatz, based on `transformation`. This works only with a `FermionicTransformation`.

**Parameters**

**transformation** (`Transformation`) – a fermionic qubit operator transformation.

**Return type**

`MinimumEigensolver`

**Returns**

A VQE suitable to compute the ground state of the molecule transformed by `transformation`.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – in case a Transformation of wrong type is given.

<span id="undefined" />

`property include_custom`

Getter of the `include_custom` setting for the `expectation` setting.

**Return type**

`bool`

<span id="undefined" />

`property initial_point`

Getter of the initial point.

**Return type**

`ndarray`

<span id="undefined" />

`property method_doubles`

Getter of the `method_doubles` setting for the `method_doubles` setting.

**Return type**

`str`

<span id="undefined" />

`property method_singles`

Getter of the `method_singles` setting for the `method_singles` setting.

**Return type**

`str`

<span id="undefined" />

`property optimizer`

Getter of the optimizer.

**Return type**

`Optimizer`

<span id="undefined" />

`property quantum_instance`

Getter of the quantum instance.

**Return type**

`QuantumInstance`

<span id="undefined" />

`property same_spin_doubles`

Getter of the `same_spin_doubles` setting for the `same_spin_doubles` setting.

**Return type**

`bool`

<span id="undefined" />

`supports_aux_operators()`

Returns whether the eigensolver generated by this factory supports auxiliary operators.
