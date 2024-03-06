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

|                                                                                                          |                                   |
| -------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`AerProvider`](qiskit.providers.aer.AerProvider "qiskit.providers.aer.AerProvider")(\*args, \*\*kwargs) | Provider for Qiskit Aer backends. |

## Simulator Backends

|                                                                                                                                             |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`QasmSimulator`](qiskit.providers.aer.QasmSimulator "qiskit.providers.aer.QasmSimulator")(\[configuration, provider])                      | Noisy quantum circuit simulator backend.    |
| [`StatevectorSimulator`](qiskit.providers.aer.StatevectorSimulator "qiskit.providers.aer.StatevectorSimulator")(\[configuration, provider]) | Ideal quantum circuit statevector simulator |
| [`UnitarySimulator`](qiskit.providers.aer.UnitarySimulator "qiskit.providers.aer.UnitarySimulator")(\[configuration, provider])             | Ideal quantum circuit unitary simulator.    |
| [`PulseSimulator`](qiskit.providers.aer.PulseSimulator "qiskit.providers.aer.PulseSimulator")(\[configuration, provider])                   | Pulse schedule simulator backend.           |

## Job Class

|                                                                                                           |               |
| --------------------------------------------------------------------------------------------------------- | ------------- |
| [`AerJob`](qiskit.providers.aer.AerJob "qiskit.providers.aer.AerJob")(backend, job\_id, fn, qobj, \*args) | AerJob class. |

## Exceptions

|                                                                                        |                                             |
| -------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`AerError`](qiskit.providers.aer.AerError "qiskit.providers.aer.AerError")(\*message) | Base class for errors raised by simulators. |

