---
title: SolovayKitaevSynthesis
description: API reference for qiskit.transpiler.passes.SolovayKitaevSynthesis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.SolovayKitaevSynthesis
---

# SolovayKitaevSynthesis

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis" />

`SolovayKitaevSynthesis` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/transpiler/passes/synthesis/solovay_kitaev_synthesis.py "view source code")

Bases: [`qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin")

A Solovay-Kitaev Qiskit unitary synthesis plugin.

This plugin is invoked by [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") when the `unitary_synthesis_method` parameter is set to `"sk"`.

This plugin supports customization and additional parameters can be passed to the plugin by passing a dictionary as the `unitary_synthesis_plugin_config` parameter of the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function.

Supported parameters in the dictionary:

**basis\_approximations (str | dict):**

The basic approximations for the finding the best discrete decomposition at the root of the recursion. If a string, it specifies the `.npy` file to load the approximations from. If a dictionary, it contains `{label: SO(3)-matrix}` pairs. If None, a default based on the specified `basis_gates` and `depth` is generated.

**basis\_gates (list):**

A list of strings specifying the discrete basis gates to decompose to. If None, defaults to `["h", "t", "tdg"]`.

**depth (int):**

The gate-depth of the the basic approximations. All possible, unique combinations of the basis gates up to length `depth` are considered. If None, defaults to 10.

**recursion\_degree (int):**

The number of times the decomposition is recursively improved. If None, defaults to 3.

## Methods

### run

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.run" />

`SolovayKitaevSynthesis.run(unitary, **options)`

Run synthesis for the given unitary matrix

**Parameters**

*   **unitary** (*numpy.ndarray*) – The unitary matrix to synthesize to a [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") object
*   **options** – The optional kwargs that are passed based on the output the `support_*` methods on the class. Refer to the documentation for these methods on [`UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin") to see what the keys and values are.

**Returns**

The dag circuit representation of the unitary. Alternatively, you can return a tuple of the form `(dag, wires)` where `dag` is the dag circuit representation of the circuit representation of the unitary and `wires` is the mapping wires to use for [`qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag()`](qiskit.dagcircuit.DAGCircuit#substitute_node_with_dag "qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag"). If you return a tuple and `wires` is `None` this will behave just as if only a [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") was returned. Additionally if this returns `None` no substitution will be made.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.max_qubits" />

### max\_qubits

Maximum number of supported qubits is `1`.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.min_qubits" />

### min\_qubits

Minimum number of supported qubits is `1`.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.supported_bases" />

### supported\_bases

The plugin does not support bases for synthesis.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.supports_basis_gates" />

### supports\_basis\_gates

The plugin does not support basis gates. By default it synthesis to the `["h", "t", "tdg"]` gate basis.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.supports_coupling_map" />

### supports\_coupling\_map

The plugin does not support coupling maps.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.supports_gate_errors" />

### supports\_gate\_errors

The plugin does not support gate errors.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.supports_gate_lengths" />

### supports\_gate\_lengths

The plugin does not support gate lengths.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.supports_natural_direction" />

### supports\_natural\_direction

The plugin does not support natural direction, it does not assume bidirectional two qubit gates.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.supports_pulse_optimize" />

### supports\_pulse\_optimize

The plugin does not support optimization of pulses.

<span id="qiskit.transpiler.passes.SolovayKitaevSynthesis.supports_target" />

### supports\_target

Whether the plugin supports taking `target` as an option

`target` will be a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") object representing the target device for the output of the synthesis pass.

By default this will be `False` since the plugin interface predates the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") class. If a plugin returns `True` for this attribute, it is expected that the plugin will use the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") instead of the values passed if any of `supports_gate_lengths`, `supports_gate_errors`, `supports_coupling_map`, and `supports_basis_gates` are set (although ideally all those parameters should contain duplicate information).

