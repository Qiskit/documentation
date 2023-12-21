---
title: NoiseModel
description: API reference for qiskit.providers.aer.noise.NoiseModel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.noise.NoiseModel
---

# NoiseModel

<span id="qiskit.providers.aer.noise.NoiseModel" />

`NoiseModel(basis_gates=None)`

Noise model class for Qiskit Aer simulators.

This class is used to represent noise model for the [`QasmSimulator`](qiskit.providers.aer.QasmSimulator "qiskit.providers.aer.QasmSimulator"). It can be used to construct custom noise models for simulator, or to automatically generate a basic device noise model for an IBMQ backend. See the [`noise`](aer_noise#module-qiskit.providers.aer.noise "qiskit.providers.aer.noise") module documentation for additional information.

**Example: Basic device noise model**

An approximate [`NoiseModel`](#qiskit.providers.aer.noise.NoiseModel "qiskit.providers.aer.noise.NoiseModel") can be generated automatically from the properties of real device backends from the IBMQ provider using the [`from_backend()`](qiskit.providers.aer.noise.NoiseModel.from_backend "qiskit.providers.aer.noise.NoiseModel.from_backend") method.

```python
from qiskit import IBMQ, Aer
from qiskit.providers.aer.noise import NoiseModel

provider = IBMQ.load_account()
backend = provider.get_backend('ibmq_vigo')
noise_model = NoiseModel.from_backend(backend)
print(noise_model)
```

**Example: Custom noise model**

Custom noise models can be used by adding [`QuantumError`](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError") to circuit gate, reset or measure instructions, and [`ReadoutError`](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError") to measure instructions.

```python
import qiskit.providers.aer.noise as noise

# Error probabilities
prob_1 = 0.001  # 1-qubit gate
prob_2 = 0.01   # 2-qubit gate

# Depolarizing quantum errors
error_1 = noise.depolarizing_error(prob_1, 1)
error_2 = noise.depolarizing_error(prob_2, 2)

# Add errors to noise model
noise_model = noise.NoiseModel()
noise_model.add_all_qubit_quantum_error(error_1, ['u1', 'u2', 'u3'])
noise_model.add_all_qubit_quantum_error(error_2, ['cx'])
print(noise_model)
```

Initialize an empty noise model.

**Parameters**

**basis\_gates** (*list\[str] or None*) – Specify an initial basis\_gates for the noise model. If None a default value of \[‘id’, ‘u3’, ‘cx’] is used (Default: None).

Additional Information: Errors added to the noise model will have their instruction appended to the noise model basis\_gates if the instruction is in the [`QasmSimulator`](qiskit.providers.aer.QasmSimulator "qiskit.providers.aer.QasmSimulator") basis\_gates. If the instruction is not in the [`QasmSimulator`](qiskit.providers.aer.QasmSimulator "qiskit.providers.aer.QasmSimulator") basis\_gates it is assumed to be a label for a standard gate, and that gate should be added to the NoiseModel basis\_gates either using the init method, or the [`add_basis_gates()`](qiskit.providers.aer.noise.NoiseModel.add_basis_gates "qiskit.providers.aer.noise.NoiseModel.add_basis_gates") method.

## Attributes

|                                                                                                                                                        |                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [`NoiseModel.basis_gates`](qiskit.providers.aer.noise.NoiseModel.basis_gates "qiskit.providers.aer.noise.NoiseModel.basis_gates")                      | Return basis\_gates for compiling to the noise model.      |
| [`NoiseModel.noise_instructions`](qiskit.providers.aer.noise.NoiseModel.noise_instructions "qiskit.providers.aer.noise.NoiseModel.noise_instructions") | Return the set of noisy instructions for this noise model. |
| [`NoiseModel.noise_qubits`](qiskit.providers.aer.noise.NoiseModel.noise_qubits "qiskit.providers.aer.noise.NoiseModel.noise_qubits")                   | Return the set of noisy qubits for this noise model.       |

## Methods

|                                                                                                                                                                                          |                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`NoiseModel.add_all_qubit_quantum_error`](qiskit.providers.aer.noise.NoiseModel.add_all_qubit_quantum_error "qiskit.providers.aer.noise.NoiseModel.add_all_qubit_quantum_error")(…)     | Add a quantum error to the noise model that applies to all qubits.   |
| [`NoiseModel.add_all_qubit_readout_error`](qiskit.providers.aer.noise.NoiseModel.add_all_qubit_readout_error "qiskit.providers.aer.noise.NoiseModel.add_all_qubit_readout_error")(error) | Add a single-qubit readout error that applies measure on all qubits. |
| [`NoiseModel.add_basis_gates`](qiskit.providers.aer.noise.NoiseModel.add_basis_gates "qiskit.providers.aer.noise.NoiseModel.add_basis_gates")(instructions\[, …])                        | Add additional gates to the noise model basis\_gates.                |
| [`NoiseModel.add_nonlocal_quantum_error`](qiskit.providers.aer.noise.NoiseModel.add_nonlocal_quantum_error "qiskit.providers.aer.noise.NoiseModel.add_nonlocal_quantum_error")(error, …) | Add a non-local quantum error to the noise model.                    |
| [`NoiseModel.add_quantum_error`](qiskit.providers.aer.noise.NoiseModel.add_quantum_error "qiskit.providers.aer.noise.NoiseModel.add_quantum_error")(error, …\[, …])                      | Add a quantum error to the noise model.                              |
| [`NoiseModel.add_readout_error`](qiskit.providers.aer.noise.NoiseModel.add_readout_error "qiskit.providers.aer.noise.NoiseModel.add_readout_error")(error, qubits)                       | Add a readout error to the noise model.                              |
| [`NoiseModel.from_backend`](qiskit.providers.aer.noise.NoiseModel.from_backend "qiskit.providers.aer.noise.NoiseModel.from_backend")(backend\[, …])                                      | Return a noise model derived from a devices backend properties.      |
| [`NoiseModel.from_dict`](qiskit.providers.aer.noise.NoiseModel.from_dict "qiskit.providers.aer.noise.NoiseModel.from_dict")(noise\_dict)                                                 | Load NoiseModel from a dictionary.                                   |
| [`NoiseModel.reset`](qiskit.providers.aer.noise.NoiseModel.reset "qiskit.providers.aer.noise.NoiseModel.reset")()                                                                        | Reset the noise model.                                               |
| [`NoiseModel.set_x90_single_qubit_gates`](qiskit.providers.aer.noise.NoiseModel.set_x90_single_qubit_gates "qiskit.providers.aer.noise.NoiseModel.set_x90_single_qubit_gates")(…)        | Declares X90 based gates for noise model.                            |
| [`NoiseModel.to_dict`](qiskit.providers.aer.noise.NoiseModel.to_dict "qiskit.providers.aer.noise.NoiseModel.to_dict")(\[serializable])                                                   | Return the noise model as a dictionary.                              |

