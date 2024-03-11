---
title: EvolutionSynthesis
description: API reference for qiskit.synthesis.EvolutionSynthesis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.synthesis.EvolutionSynthesis
---

# EvolutionSynthesis

<span id="qiskit.synthesis.EvolutionSynthesis" />

`qiskit.synthesis.EvolutionSynthesis` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/synthesis/evolution/evolution_synthesis.py "view source code")

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Interface for evolution synthesis algorithms.

## Attributes

<span id="qiskit.synthesis.EvolutionSynthesis.settings" />

### settings

Return the settings in a dictionary, which can be used to reconstruct the object.

**Returns**

A dictionary containing the settings of this product formula.

**Raises**

[**NotImplementedError**](https://docs.python.org/3/library/exceptions.html#NotImplementedError "(in Python v3.12)") – The interface does not implement this method.

## Methods

### synthesize

<span id="qiskit.synthesis.EvolutionSynthesis.synthesize" />

`abstract synthesize(evolution)`

Synthesize an `qiskit.circuit.library.PauliEvolutionGate`.

**Parameters**

**evolution** ([*PauliEvolutionGate*](qiskit.circuit.library.PauliEvolutionGate "qiskit.circuit.library.PauliEvolutionGate")) – The evolution gate to synthesize.

**Returns**

A circuit implementing the evolution.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

