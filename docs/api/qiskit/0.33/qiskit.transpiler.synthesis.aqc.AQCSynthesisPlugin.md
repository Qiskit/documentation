---
title: AQCSynthesisPlugin
description: API reference for qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin
---

# AQCSynthesisPlugin

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin" />

`AQCSynthesisPlugin` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/transpiler/synthesis/aqc/aqc_plugin.py "view source code")

Bases: [`qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin")

An AQC-based Qiskit unitary synthesis plugin.

This plugin is invoked by [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") when the `unitary_synthesis_method` parameter is set to `"aqc"`.

This plugin supports customization and additional parameters can be passed to the plugin by passing a dictionary as the `unitary_synthesis_plugin_config` parameter of the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function.

Supported parameters in the dictionary:

**network\_layout (str)**

Type of network geometry, one of \{`"sequ"`, `"spin"`, `"cart"`, `"cyclic_spin"`, `"cyclic_line"`}. Default value is `"spin"`.

**connectivity\_type (str)**

type of inter-qubit connectivity, \{`"full"`, `"line"`, `"star"`}. Default value is `"full"`.

**depth (int)**

depth of the CNOT-network, i.e. the number of layers, where each layer consists of a single CNOT-block.

**optimizer ([`Optimizer`](qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.Optimizer"))**

An instance of optimizer to be used in the optimization process.

**seed (int)**

A random seed.

**initial\_point (`ndarray`)**

Initial values of angles/parameters to start the optimization process from.

## Methods Defined Here

### run

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.run" />

`AQCSynthesisPlugin.run(unitary, **options)`

Run synthesis for the given unitary matrix

**Parameters**

*   **unitary** (*numpy.ndarray*) – The unitary matrix to synthesize to a [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") object
*   **options** – The optional kwargs that are passed based on the output the `support_*` methods on the class. Refer to the documentation for these methods on [`UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin") to see what the keys and values are.

**Returns**

The dag circuit representation of the unitary. Alternatively, you can return a tuple of the form `(dag, wires)` where `dag` is the dag circuit representation of the circuit representation of the unitary and `wires` is the mapping wires to use for [`qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag()`](qiskit.dagcircuit.DAGCircuit#substitute_node_with_dag "qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag"). If you return a tuple and `wires` is `None` this will behave just as if only a [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") was returned. Additionally if this returns `None` no substitution will be made.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.max_qubits" />

### max\_qubits

Maximum number of supported qubits is `14`.

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.min_qubits" />

### min\_qubits

Minimum number of supported qubits is `3`.

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.supported_bases" />

### supported\_bases

The plugin does not support bases for synthesis.

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.supports_basis_gates" />

### supports\_basis\_gates

The plugin does not support basis gates and by default it synthesizes a circuit using `["rx", "ry", "rz", "cx"]` gate basis.

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.supports_coupling_map" />

### supports\_coupling\_map

The plugin does not support coupling maps.

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.supports_gate_errors" />

### supports\_gate\_errors

The plugin does not support gate errors.

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.supports_gate_lengths" />

### supports\_gate\_lengths

The plugin does not support gate lengths.

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.supports_natural_direction" />

### supports\_natural\_direction

The plugin does not support natural direction, it assumes bidirectional two qubit gates.

<span id="qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.supports_pulse_optimize" />

### supports\_pulse\_optimize

The plugin does not support optimization of pulses.

