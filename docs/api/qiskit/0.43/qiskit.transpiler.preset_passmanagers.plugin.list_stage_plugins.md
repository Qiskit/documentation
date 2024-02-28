---
title: list_stage_plugins
description: API reference for qiskit.transpiler.preset_passmanagers.plugin.list_stage_plugins
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.transpiler.preset_passmanagers.plugin.list_stage_plugins
---

<span id="qiskit-transpiler-preset-passmanagers-plugin-list-stage-plugins" />

# qiskit.transpiler.preset\_passmanagers.plugin.list\_stage\_plugins

<span id="qiskit.transpiler.preset_passmanagers.plugin.list_stage_plugins" />

`list_stage_plugins(stage_name)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/transpiler/preset_passmanagers/plugin.py "view source code")

Get a list of installed plugins for a stage.

**Parameters**

**stage\_name** (*str*) – The stage name to get the plugin names for

**Returns**

The list of installed plugin names for the specified stages

**Return type**

plugins

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If an invalid stage name is specified.

