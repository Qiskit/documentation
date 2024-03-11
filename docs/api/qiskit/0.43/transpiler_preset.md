---
title: preset_passmanagers
description: API reference for qiskit.transpiler.preset_passmanagers
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.transpiler.preset_passmanagers
---

<span id="module-qiskit.transpiler.preset_passmanagers" />

<span id="qiskit-transpiler-preset-passmanagers" />

<span id="preset-passmanagers-qiskit-transpiler-preset-passmanagers" />

# Preset Passmanagers

<span id="module-qiskit.transpiler.preset_passmanagers" />

`qiskit.transpiler.preset_passmanagers`

This module contains functions for generating the preset pass managers for the transpiler. The preset pass managers are instances of [`StagedPassManager`](qiskit.transpiler.StagedPassManager "qiskit.transpiler.StagedPassManager") which are used to execute the circuit transformations as part of Qiskit’s compiler inside the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function at the different optimization levels. The functionality here is divided into two parts, the first includes the functions used generate the entire pass manager which is used by [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") ([Preset Pass Manager Generation](#preset-pass-manager-generators)) and the second includes functions which are used to build (either entirely or in part) the stages which the preset pass managers are composed of ([Stage Generator Functions](#stage-generators)).

<span id="preset-pass-manager-generators" />

## Preset Pass Manager Generation

|                                                                                                                                                                                                |                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [`generate_preset_pass_manager`](qiskit.transpiler.preset_passmanagers.generate_preset_pass_manager "qiskit.transpiler.preset_passmanagers.generate_preset_pass_manager")(optimization\_level) | Generate a preset [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")                                                |
| [`level_0_pass_manager`](qiskit.transpiler.preset_passmanagers.level_0_pass_manager "qiskit.transpiler.preset_passmanagers.level_0_pass_manager")(pass\_manager\_config)                       | Level 0 pass manager: no explicit optimization other than mapping to backend.                                                                   |
| [`level_1_pass_manager`](qiskit.transpiler.preset_passmanagers.level_1_pass_manager "qiskit.transpiler.preset_passmanagers.level_1_pass_manager")(pass\_manager\_config)                       | Level 1 pass manager: light optimization by simple adjacent gate collapsing.                                                                    |
| [`level_2_pass_manager`](qiskit.transpiler.preset_passmanagers.level_2_pass_manager "qiskit.transpiler.preset_passmanagers.level_2_pass_manager")(pass\_manager\_config)                       | Level 2 pass manager: medium optimization by initial layout selection and gate cancellation using commutativity rules.                          |
| [`level_3_pass_manager`](qiskit.transpiler.preset_passmanagers.level_3_pass_manager "qiskit.transpiler.preset_passmanagers.level_3_pass_manager")(pass\_manager\_config)                       | Level 3 pass manager: heavy optimization by noise adaptive qubit mapping and gate cancellation using commutativity rules and unitary synthesis. |

<span id="stage-generators" />

## Stage Generator Functions

|                                                                                                                                                                                                                      |                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`generate_control_flow_options_check`](qiskit.transpiler.preset_passmanagers.common.generate_control_flow_options_check "qiskit.transpiler.preset_passmanagers.common.generate_control_flow_options_check")(\[...]) | Generate a pass manager that, when run on a DAG that contains control flow, fails with an error message explaining the invalid options, and what could be used instead. |
| [`generate_error_on_control_flow`](qiskit.transpiler.preset_passmanagers.common.generate_error_on_control_flow "qiskit.transpiler.preset_passmanagers.common.generate_error_on_control_flow")(message)               | Get a pass manager that always raises an error if control flow is present in a given circuit.                                                                           |
| [`generate_unroll_3q`](qiskit.transpiler.preset_passmanagers.common.generate_unroll_3q "qiskit.transpiler.preset_passmanagers.common.generate_unroll_3q")(target\[, basis\_gates, ...])                              | Generate an unroll >3q [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")                                                                   |
| [`generate_embed_passmanager`](qiskit.transpiler.preset_passmanagers.common.generate_embed_passmanager "qiskit.transpiler.preset_passmanagers.common.generate_embed_passmanager")(coupling\_map)                     | Generate a layout embedding [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")                                                              |
| [`generate_routing_passmanager`](qiskit.transpiler.preset_passmanagers.common.generate_routing_passmanager "qiskit.transpiler.preset_passmanagers.common.generate_routing_passmanager")(routing\_pass, ...)          | Generate a routing [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")                                                                       |
| [`generate_pre_op_passmanager`](qiskit.transpiler.preset_passmanagers.common.generate_pre_op_passmanager "qiskit.transpiler.preset_passmanagers.common.generate_pre_op_passmanager")(\[target, ...])                 | Generate a pre-optimization loop [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")                                                         |
| [`generate_translation_passmanager`](qiskit.transpiler.preset_passmanagers.common.generate_translation_passmanager "qiskit.transpiler.preset_passmanagers.common.generate_translation_passmanager")(target\[, ...])  | Generate a basis translation [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")                                                             |
| [`generate_scheduling`](qiskit.transpiler.preset_passmanagers.common.generate_scheduling "qiskit.transpiler.preset_passmanagers.common.generate_scheduling")(instruction\_durations, ...)                            | Generate a post optimization scheduling [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")                                                  |

