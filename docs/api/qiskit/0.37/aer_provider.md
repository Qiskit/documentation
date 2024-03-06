---
title: aer
description: API reference for qiskit.providers.aer
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.providers.aer
---

<span id="module-qiskit.providers.aer" />

# Aer Provider

<span id="module-qiskit.providers.aer" />

`qiskit.providers.aer`

## Simulator Provider

|                                                                                        |                                   |
| -------------------------------------------------------------------------------------- | --------------------------------- |
| [`AerProvider`](qiskit.providers.aer.AerProvider "qiskit.providers.aer.AerProvider")() | Provider for Qiskit Aer backends. |

## Simulator Backends

|                                                                                                                                  |                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`AerSimulator`](qiskit.providers.aer.AerSimulator "qiskit.providers.aer.AerSimulator")(\[configuration, properties, ...])       | Noisy quantum circuit simulator backend. |
| [`PulseSimulator`](qiskit.providers.aer.PulseSimulator "qiskit.providers.aer.PulseSimulator")(\[configuration, properties, ...]) | Pulse schedule simulator backend.        |

## Legacy Simulator Backends

|                                                                                                                                        |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`QasmSimulator`](qiskit.providers.aer.QasmSimulator "qiskit.providers.aer.QasmSimulator")(\[configuration, properties, ...])          | Noisy quantum circuit simulator backend.    |
| [`StatevectorSimulator`](qiskit.providers.aer.StatevectorSimulator "qiskit.providers.aer.StatevectorSimulator")(\[configuration, ...]) | Ideal quantum circuit statevector simulator |
| [`UnitarySimulator`](qiskit.providers.aer.UnitarySimulator "qiskit.providers.aer.UnitarySimulator")(\[configuration, ...])             | Ideal quantum circuit unitary simulator.    |

## Exceptions

|                                                                                        |                                             |
| -------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`AerError`](qiskit.providers.aer.AerError "qiskit.providers.aer.AerError")(\*message) | Base class for errors raised by simulators. |

