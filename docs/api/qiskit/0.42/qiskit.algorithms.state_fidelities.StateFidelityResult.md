---
title: StateFidelityResult
description: API reference for qiskit.algorithms.state_fidelities.StateFidelityResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.state_fidelities.StateFidelityResult
---

# StateFidelityResult[¶](#statefidelityresult "Permalink to this headline")

<span id="qiskit.algorithms.state_fidelities.StateFidelityResult" />

`StateFidelityResult(fidelities, raw_fidelities, metadata, options)`

Bases: `object`

This class stores the result of StateFidelity computations.

## Attributes

<span id="qiskit.algorithms.state_fidelities.StateFidelityResult.fidelities" />

### fidelities

`Sequence[float]`

List of truncated fidelity values for each pair of input circuits, ensured to be in \[0,1].

<span id="qiskit.algorithms.state_fidelities.StateFidelityResult.raw_fidelities" />

### raw\_fidelities

`Sequence[float]`

List of raw fidelity values for each pair of input circuits, which might not be in \[0,1] depending on the error mitigation method used.

<span id="qiskit.algorithms.state_fidelities.StateFidelityResult.metadata" />

### metadata

`Sequence[Mapping[str, Any]]`

Additional information about the fidelity calculation.

<span id="qiskit.algorithms.state_fidelities.StateFidelityResult.options" />

### options

`Options`

Primitive runtime options for the execution of the fidelity job.

