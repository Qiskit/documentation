---
title: VariationalForm
description: API reference for qiskit.aqua.components.variational_forms.VariationalForm
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.variational_forms.VariationalForm
---

# VariationalForm

<span id="qiskit.aqua.components.variational_forms.VariationalForm" />

`VariationalForm`

Base class for VariationalForms.

This method should initialize the module and use an exception if a component of the module is not available.

## Attributes

|                                                                                                                                                                                                                                    |                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`VariationalForm.num_parameters`](qiskit.aqua.components.variational_forms.VariationalForm.num_parameters "qiskit.aqua.components.variational_forms.VariationalForm.num_parameters")                                              | Number of parameters of the variational form.               |
| [`VariationalForm.num_qubits`](qiskit.aqua.components.variational_forms.VariationalForm.num_qubits "qiskit.aqua.components.variational_forms.VariationalForm.num_qubits")                                                          | Number of qubits of the variational form.                   |
| [`VariationalForm.parameter_bounds`](qiskit.aqua.components.variational_forms.VariationalForm.parameter_bounds "qiskit.aqua.components.variational_forms.VariationalForm.parameter_bounds")                                        | Parameter bounds.                                           |
| [`VariationalForm.preferred_init_points`](qiskit.aqua.components.variational_forms.VariationalForm.preferred_init_points "qiskit.aqua.components.variational_forms.VariationalForm.preferred_init_points")                         | Return preferred init points.                               |
| [`VariationalForm.setting`](qiskit.aqua.components.variational_forms.VariationalForm.setting "qiskit.aqua.components.variational_forms.VariationalForm.setting")                                                                   |                                                             |
| [`VariationalForm.support_parameterized_circuit`](qiskit.aqua.components.variational_forms.VariationalForm.support_parameterized_circuit "qiskit.aqua.components.variational_forms.VariationalForm.support_parameterized_circuit") | Whether or not the sub-class support parameterized circuit. |

## Methods

|                                                                                                                                                                                                                  |                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`VariationalForm.construct_circuit`](qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit "qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit")(parameters)       | Construct the variational form, given its parameters. |
| [`VariationalForm.get_entangler_map`](qiskit.aqua.components.variational_forms.VariationalForm.get_entangler_map "qiskit.aqua.components.variational_forms.VariationalForm.get_entangler_map")(map\_type, …)     | returns entangler map                                 |
| [`VariationalForm.validate_entangler_map`](qiskit.aqua.components.variational_forms.VariationalForm.validate_entangler_map "qiskit.aqua.components.variational_forms.VariationalForm.validate_entangler_map")(…) | validate entangler map                                |

