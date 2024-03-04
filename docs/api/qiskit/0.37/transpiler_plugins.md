---
title: plugin
description: API reference for qiskit.transpiler.passes.synthesis.plugin
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.transpiler.passes.synthesis.plugin
---

<span id="module-qiskit.transpiler.passes.synthesis.plugin" />

<span id="qiskit-transpiler-plugins" />

# Synthesis Plugins

<span id="module-qiskit.transpiler.passes.synthesis.plugin" />

`qiskit.transpiler.passes.synthesis.plugin`

This module defines the plugin interfaces for the synthesis transpiler passes in Qiskit. These provide a hook point for external python packages to implement their own synthesis techniques and have them seamlessly exposed as opt-in options to users when they run [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile").

The plugin interfaces are built using setuptools [entry points](https://setuptools.readthedocs.io/en/latest/userguide/entry_point.html) which enable packages external to qiskit to advertise they include a synthesis plugin.

## Writing Plugins

### Unitary Synthesis Plugins

To write a unitary synthesis plugin there are 2 main steps. The first step is to create a subclass of the abstract plugin class: [`UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin"). The plugin class defines the interface and contract for unitary synthesis plugins. The primary method is [`run()`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin#run "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin.run") which takes in a single positional argument, a unitary matrix as a numpy array, and is expected to return a [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") object representing the synthesized circuit from that unitary matrix. Then to inform the Qiskit transpiler about what information is necessary for the pass there are several required property methods that need to be implemented such as `supports_basis_gates` and `supports_coupling_map` depending on whether the plugin supports and/or requires that input to perform synthesis. For the full details refer to the [`UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin") documentation for all the required fields. An example plugin class would look something like:

```python
from qiskit.transpiler.passes.synthesis import plugin
from qiskit_plugin_pkg.synthesis import generate_dag_circuit_from_matrix


class SpecialUnitarySynthesis(plugin.UnitarySynthesisPlugin):
    @property
    def supports_basis_gates(self):
        return True

    @property
    def supports_coupling_map(self):
        return False

    @property
    def supports_natural_direction(self):
        return False

    @property
    def supports_pulse_optimize(self):
        return False

    @property
    def supports_gate_lengths(self):
        return False

    @property
    def supports_gate_errors(self):
        return False

    @property
    def min_qubits(self):
        return None

    @property
    def max_qubits(self):
        return None

    @property
    def supported_bases(self):
        return None

    def run(self, unitary, **options):
        basis_gates = options['basis_gates']
        dag_circuit = generate_dag_circuit_from_matrix(unitary, basis_gates)
        return dag_circuit
```

If for some reason the available inputs to the [`run()`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin#run "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin.run") method are insufficient please open an issue and we can discuss expanding the plugin interface with new opt-in inputs that can be added in a backwards compatible manner for future releases. Do note though that this plugin interface is considered stable and guaranteed to not change in a breaking manner. If changes are needed (for example to expand the available optional input options) it will be done in a way that will **not** require changes from existing plugins.

<Admonition title="Note" type="note">
  All methods prefixed with `supports_` are reserved on a `UnitarySynthesisPlugin` derived class for part of the interface. You should not define any custom `supports_*` methods on a subclass that are not defined in the abstract class.
</Admonition>

The second step is to expose the [`UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin") as a setuptools entry point in the package metadata. This is done by simply adding an `entry_points` entry to the `setuptools.setup` call in the `setup.py` for the plugin package with the necessary entry points under the `qiskit.unitary_synthesis` namespace. For example:

```python
entry_points = {
    'qiskit.unitary_synthesis': [
        'special = qiskit_plugin_pkg.module.plugin:SpecialUnitarySynthesis',
    ]
},
```

(note that the entry point `name = path` is a single string not a Python expression). There isn’t a limit to the number of plugins a single package can include as long as each plugin has a unique name. So a single package can expose multiple plugins if necessary. The name `default` is used by Qiskit itself and can’t be used in a plugin.

#### Unitary Synthesis Plugin Configuration

For some unitary synthesis plugins that expose multiple options and tunables the plugin interface has an option for users to provide a free form configuration dictionary. This will be passed through to the `run()` method as the `config` kwarg. If your plugin has these configuration options you should clearly document how a user should specify these configuration options and how they’re used as it’s a free form field.

## Using Plugins

To use a plugin all you need to do is install the package that includes a synthesis plugin. Then Qiskit will automatically discover the installed plugins and expose them as valid options for the appropriate [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") kwargs and pass constructors. If there are any installed plugins which can’t be loaded/imported this will be logged to Python logging.

To get the installed list of installed unitary synthesis plugins you can use the [`qiskit.transpiler.passes.synthesis.plugin.unitary_synthesis_plugin_names()`](qiskit.transpiler.passes.synthesis.plugin.unitary_synthesis_plugin_names "qiskit.transpiler.passes.synthesis.plugin.unitary_synthesis_plugin_names") function.

## Plugin API

### Unitary Synthesis Plugins

|                                                                                                                                                                                           |                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin")()                         | Abstract unitary synthesis plugin class                   |
| [`UnitarySynthesisPluginManager`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPluginManager "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPluginManager")()    | Unitary Synthesis plugin manager class                    |
| [`unitary_synthesis_plugin_names`](qiskit.transpiler.passes.synthesis.plugin.unitary_synthesis_plugin_names "qiskit.transpiler.passes.synthesis.plugin.unitary_synthesis_plugin_names")() | Return a list of installed unitary synthesis plugin names |

