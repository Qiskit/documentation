---
title: Zero
description: API reference for qiskit.aqua.components.initial_states.Zero
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.initial_states.Zero
---

# Zero

<span id="qiskit.aqua.components.initial_states.Zero" />

`Zero(num_qubits)`

The zero (null/vacuum) state.

This is suitable for those situations in which the all-zeros state is the desired state. This is the case for a *vacuum state* in physics or chemistry

**Parameters**

**num\_qubits** (`int`) – Number of qubits, has a minimum value of 1.

## Attributes

|                                                                                                                        |   |
| ---------------------------------------------------------------------------------------------------------------------- | - |
| [`Zero.bitstr`](qiskit.aqua.components.initial_states.Zero.bitstr "qiskit.aqua.components.initial_states.Zero.bitstr") |   |

## Methods

|                                                                                                                                                                            |                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`Zero.construct_circuit`](qiskit.aqua.components.initial_states.Zero.construct_circuit "qiskit.aqua.components.initial_states.Zero.construct_circuit")(\[mode, register]) | Construct the statevector of desired initial state. |

