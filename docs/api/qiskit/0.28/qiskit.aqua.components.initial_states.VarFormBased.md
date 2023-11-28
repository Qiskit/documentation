# qiskit.aqua.components.initial\_states.VarFormBased

<span id="undefined" />

`VarFormBased(var_form, params)`

The variational form based initial state.

This can been useful, say for example, if you have been doing experiments using a [`VariationalForm`](qiskit.aqua.components.variational_forms.VariationalForm#qiskit.aqua.components.variational_forms.VariationalForm "qiskit.aqua.components.variational_forms.VariationalForm") and have parameters for a state of interest of that form. Using this class it can then be turned into an initial state for use elsewhere.

As an example this [notebook](https://github.com/Qiskit/qiskit-community-tutorials/blob/master/aqua/vqe2iqpe.ipynb) shows where the variational form’s state, from a [`VQE`](qiskit.aqua.algorithms.VQE#qiskit.aqua.algorithms.VQE "qiskit.aqua.algorithms.VQE") run, is then used as an initial state for [`IQPE`](qiskit.aqua.algorithms.IQPE#qiskit.aqua.algorithms.IQPE "qiskit.aqua.algorithms.IQPE") by using this class.

**Parameters**

*   **var\_form** (`Union`\[`VariationalForm`, `QuantumCircuit`]) – The variational form.
*   **params** (`Union`\[`List`\[`float`], `ndarray`, `Dict`\[`Parameter`, `float`]]) – Parameters for the variational form.

**Raises**

**ValueError** – Invalid input

<span id="undefined" />

`__init__(var_form, params)`

**Parameters**

*   **var\_form** (`Union`\[`VariationalForm`, `QuantumCircuit`]) – The variational form.
*   **params** (`Union`\[`List`\[`float`], `ndarray`, `Dict`\[`Parameter`, `float`]]) – Parameters for the variational form.

**Raises**

**ValueError** – Invalid input

## Methods

|                                                                                                                                                                                        |                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.initial_states.VarFormBased.__init__ "qiskit.aqua.components.initial_states.VarFormBased.__init__")(var\_form, params)                            | **type var\_form**`Union`\[`VariationalForm`, `QuantumCircuit`] |
| [`construct_circuit`](#qiskit.aqua.components.initial_states.VarFormBased.construct_circuit "qiskit.aqua.components.initial_states.VarFormBased.construct_circuit")(\[mode, register]) | Construct the statevector of desired initial state.             |

<span id="undefined" />

`construct_circuit(mode='circuit', register=None)`

Construct the statevector of desired initial state.

**Parameters**

*   **mode** (*string*) – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – qubits for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

*   **RuntimeError** – invalid input for mode
*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – when mode is not ‘vector’ or ‘circuit’.
