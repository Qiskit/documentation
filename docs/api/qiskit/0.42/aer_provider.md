---
title: qiskit_aer
description: API reference for qiskit_aer
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit_aer
---

<span id="module-qiskit_aer" />

# Aer Provider

<span id="module-qiskit_aer" />

`qiskit_aer`

## Simulator Provider

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| [`AerProvider`](qiskit_aer.AerProvider "qiskit_aer.AerProvider")() | Provider for Qiskit Aer backends. |

## Simulator Backends

|                                                                                                              |                                               |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| [`AerSimulator`](qiskit_aer.AerSimulator "qiskit_aer.AerSimulator")(\[configuration, properties, ...])       | Noisy quantum circuit simulator backend.      |
| [`PulseSimulator`](qiskit_aer.PulseSimulator "qiskit_aer.PulseSimulator")(\[configuration, properties, ...]) | Deprecated: Pulse schedule simulator backend. |

## Legacy Simulator Backends

|                                                                                                                    |                                             |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`QasmSimulator`](qiskit_aer.QasmSimulator "qiskit_aer.QasmSimulator")(\[configuration, properties, ...])          | Noisy quantum circuit simulator backend.    |
| [`StatevectorSimulator`](qiskit_aer.StatevectorSimulator "qiskit_aer.StatevectorSimulator")(\[configuration, ...]) | Ideal quantum circuit statevector simulator |
| [`UnitarySimulator`](qiskit_aer.UnitarySimulator "qiskit_aer.UnitarySimulator")(\[configuration, ...])             | Ideal quantum circuit unitary simulator.    |

## Exceptions

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| [`AerError`](qiskit_aer.AerError "qiskit_aer.AerError")(\*message) | Base class for errors raised by simulators. |

