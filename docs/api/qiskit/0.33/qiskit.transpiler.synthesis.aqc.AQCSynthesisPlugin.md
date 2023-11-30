# AQCSynthesisPlugin

<span id="undefined" />

`AQCSynthesisPlugin`

Bases: [`qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin#qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin")

An AQC-based Qiskit unitary synthesis plugin.

This plugin is invoked by [`transpile()`](qiskit.compiler.transpile#qiskit.compiler.transpile "qiskit.compiler.transpile") when the `unitary_synthesis_method` parameter is set to `"aqc"`.

This plugin supports customization and additional parameters can be passed to the plugin by passing a dictionary as the `unitary_synthesis_plugin_config` parameter of the [`transpile()`](qiskit.compiler.transpile#qiskit.compiler.transpile "qiskit.compiler.transpile") function.

Supported parameters in the dictionary:

**network\_layout (str)**

Type of network geometry, one of \{`"sequ"`, `"spin"`, `"cart"`, `"cyclic_spin"`, `"cyclic_line"`}. Default value is `"spin"`.

**connectivity\_type (str)**

type of inter-qubit connectivity, \{`"full"`, `"line"`, `"star"`}. Default value is `"full"`.

**depth (int)**

depth of the CNOT-network, i.e. the number of layers, where each layer consists of a single CNOT-block.

**optimizer ([`Optimizer`](qiskit.algorithms.optimizers.Optimizer#qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.Optimizer"))**

An instance of optimizer to be used in the optimization process.

**seed (int)**

A random seed.

**initial\_point (`ndarray`)**

Initial values of angles/parameters to start the optimization process from.

## Methods Defined Here

|                                                                                                                                                                                 |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`run`](qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.run#qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.run "qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.run") | Run synthesis for the given unitary matrix |

## Attributes

<span id="undefined" />

### max\_qubits

Maximum number of supported qubits is `14`.

<span id="undefined" />

### min\_qubits

Minimum number of supported qubits is `3`.

<span id="undefined" />

### supported\_bases

The plugin does not support bases for synthesis.

<span id="undefined" />

### supports\_basis\_gates

The plugin does not support basis gates and by default it synthesizes a circuit using `["rx", "ry", "rz", "cx"]` gate basis.

<span id="undefined" />

### supports\_coupling\_map

The plugin does not support coupling maps.

<span id="undefined" />

### supports\_gate\_errors

The plugin does not support gate errors.

<span id="undefined" />

### supports\_gate\_lengths

The plugin does not support gate lengths.

<span id="undefined" />

### supports\_natural\_direction

The plugin does not support natural direction, it assumes bidirectional two qubit gates.

<span id="undefined" />

### supports\_pulse\_optimize

The plugin does not support optimization of pulses.
