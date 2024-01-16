---
title: SimulatorOptions
description: API reference for qiskit_ibm_runtime.options.SimulatorOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.SimulatorOptions
---

# SimulatorOptions

<span id="qiskit_ibm_runtime.options.SimulatorOptions" />

`SimulatorOptions(noise_model=None, seed_simulator=None, coupling_map=None, basis_gates=None)`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.17/qiskit_ibm_runtime/options/simulator_options.py "view source code")

Simulator options.

For best practice in simulating a backend make sure to pass the basis gates and coupling map of that backend.

**Parameters**

*   **noise\_model** (`Union`\[`dict`, `NoiseModel`, `None`]) – Noise model for the simulator.
*   **seed\_simulator** (`Optional`\[`int`]) – Random seed to control sampling.
*   **coupling\_map** (`Union`\[`List`\[`List`\[`int`]], `CouplingMap`, `None`]) – Directed coupling map to target in mapping. If the coupling map is symmetric, both directions need to be specified. Each entry in the list specifies a directed two-qubit interactions, e.g: `[[0, 1], [0, 3], [1, 2], [1, 5], [2, 5], [4, 1], [5, 3]]`
*   **basis\_gates** (`Optional`\[`List`\[`str`]]) – List of basis gate names to unroll to. For example, `['u1', 'u2', 'u3', 'cx']`. If `None`, do not unroll.

## Attributes

<span id="qiskit_ibm_runtime.options.SimulatorOptions.basis_gates" />

### basis\_gates

`List[str] | None`

`= None`

<span id="qiskit_ibm_runtime.options.SimulatorOptions.coupling_map" />

### coupling\_map

`List[List[int]] | CouplingMap | None`

`= None`

<span id="qiskit_ibm_runtime.options.SimulatorOptions.noise_model" />

### noise\_model

`dict | NoiseModel | None`

`= None`

<span id="qiskit_ibm_runtime.options.SimulatorOptions.seed_simulator" />

### seed\_simulator

`int | None`

`= None`

## Methods

### set\_backend

<span id="qiskit_ibm_runtime.options.SimulatorOptions.set_backend" />

`set_backend(backend)`

Set backend for simulation. This method changes noise\_model, coupling\_map, basis\_gates according to given backend.

**Parameters**

**backend** (`Union`\[`BackendV1`, `BackendV2`]) – backend to be set.

**Raises**

**MissingOptionalLibraryError if qiskit-aer is not found.** –

**Return type**

`None`

### validate\_simulator\_options

<span id="qiskit_ibm_runtime.options.SimulatorOptions.validate_simulator_options" />

`static validate_simulator_options(simulator_options)`

Validate that simulator options are legal. :raises ValueError: if any simulator option is not supported

**Return type**

`None`

