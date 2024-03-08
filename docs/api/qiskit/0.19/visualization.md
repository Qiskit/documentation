---
title: visualization
description: API reference for qiskit.visualization
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.visualization
---

<span id="module-qiskit.visualization" />

<span id="qiskit-visualization" />

# Visualizations

<span id="module-qiskit.visualization" />

`qiskit.visualization`

## Counts and State Visualizations

|                                                                                                                                               |                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`plot_histogram`](qiskit.visualization.plot_histogram "qiskit.visualization.plot_histogram")(data\[, figsize, color, …])                     | Plot a histogram of data.                            |
| [`plot_bloch_vector`](qiskit.visualization.plot_bloch_vector "qiskit.visualization.plot_bloch_vector")(bloch\[, title, ax, figsize])          | Plot the Bloch sphere.                               |
| [`plot_bloch_multivector`](qiskit.visualization.plot_bloch_multivector "qiskit.visualization.plot_bloch_multivector")(rho\[, title, figsize]) | Plot the Bloch sphere.                               |
| [`plot_state_city`](qiskit.visualization.plot_state_city "qiskit.visualization.plot_state_city")(rho\[, title, figsize, …])                   | Plot the cityscape of quantum state.                 |
| [`plot_state_hinton`](qiskit.visualization.plot_state_hinton "qiskit.visualization.plot_state_hinton")(rho\[, title, figsize, …])             | Plot a hinton diagram for the quantum state.         |
| [`plot_state_paulivec`](qiskit.visualization.plot_state_paulivec "qiskit.visualization.plot_state_paulivec")(rho\[, title, figsize, …])       | Plot the paulivec representation of a quantum state. |
| [`plot_state_qsphere`](qiskit.visualization.plot_state_qsphere "qiskit.visualization.plot_state_qsphere")(rho\[, figsize, ax])                | Plot the qsphere representation of a quantum state.  |

## Interactive Visualizations

|                                                                                                                                             |                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`iplot_histogram`](qiskit.visualization.iplot_histogram "qiskit.visualization.iplot_histogram")(data\[, figsize, …])                       | Create a histogram representation.    |
| [`iplot_bloch_multivector`](qiskit.visualization.iplot_bloch_multivector "qiskit.visualization.iplot_bloch_multivector")(rho\[, figsize])   | Create a bloch sphere representation. |
| [`iplot_state_city`](qiskit.visualization.iplot_state_city "qiskit.visualization.iplot_state_city")(rho\[, figsize])                        | Create a cities representation.       |
| [`iplot_state_hinton`](qiskit.visualization.iplot_state_hinton "qiskit.visualization.iplot_state_hinton")(rho\[, figsize])                  | Create a hinton representation.       |
| [`iplot_state_paulivec`](qiskit.visualization.iplot_state_paulivec "qiskit.visualization.iplot_state_paulivec")(rho\[, figsize, slider, …]) | Create a paulivec representation.     |
| [`iplot_state_qsphere`](qiskit.visualization.iplot_state_qsphere "qiskit.visualization.iplot_state_qsphere")(rho\[, figsize])               | Create a Q sphere representation.     |

## Device Visualizations

|                                                                                                                                         |                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`plot_gate_map`](qiskit.visualization.plot_gate_map "qiskit.visualization.plot_gate_map")(backend\[, figsize, …])                      | Plots the gate map of a device.                                     |
| [`plot_error_map`](qiskit.visualization.plot_error_map "qiskit.visualization.plot_error_map")(backend\[, figsize, show\_title])         | Plots the error map of a given backend.                             |
| [`plot_circuit_layout`](qiskit.visualization.plot_circuit_layout "qiskit.visualization.plot_circuit_layout")(circuit, backend\[, view]) | Plot the layout of a circuit transpiled for a given target backend. |

## Circuit Visualizations

|                                                                                                                               |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`circuit_drawer`](qiskit.visualization.circuit_drawer "qiskit.visualization.circuit_drawer")(circuit\[, scale, filename, …]) | Draw a quantum circuit to different formats (set by output parameter): |

## DAG Visualizations

|                                                                                                                   |                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`dag_drawer`](qiskit.visualization.dag_drawer "qiskit.visualization.dag_drawer")(dag\[, scale, filename, style]) | Plot the directed acyclic graph (dag) to represent operation dependencies in a quantum circuit. |

## Pass Manager Visualizations

|                                                                                                                                   |                         |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [`pass_manager_drawer`](qiskit.visualization.pass_manager_drawer "qiskit.visualization.pass_manager_drawer")(pass\_manager\[, …]) | Draws the pass manager. |

## Pulse Visualizations

|                                                                                                                                                        |                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| [`pulse_drawer`](qiskit.visualization.pulse_drawer "qiskit.visualization.pulse_drawer")(data\[, dt, style, filename, …])                               | Plot the interpolated envelope of pulse and schedule. |
| [`qcstyle`](qiskit.visualization.pulse.qcstyle#module-qiskit.visualization.pulse.qcstyle "qiskit.visualization.pulse.qcstyle")                         | Style sheets for pulse visualization.                 |
| [`interpolation`](qiskit.visualization.pulse.interpolation#module-qiskit.visualization.pulse.interpolation "qiskit.visualization.pulse.interpolation") | interpolation module for pulse visualization.         |

## Single Qubit State Transition Visualizations

|                                                                                                                                       |                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`visualize_transition`](qiskit.visualization.visualize_transition "qiskit.visualization.visualize_transition")(circuit\[, trace, …]) | Creates animation showing transitions between states of a single qubit by applying quantum gates. |

## Exceptions

|                                                                                                                      |                                    |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`VisualizationError`](qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError")(\*message) | For visualization specific errors. |

