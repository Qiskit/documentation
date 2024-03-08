---
title: visualization
description: API reference for qiskit.visualization
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.visualization
---

<span id="module-qiskit.visualization" />

<span id="qiskit-visualization" />

<span id="visualizations-qiskit-visualization" />

# Visualizations

<span id="module-qiskit.visualization" />

`qiskit.visualization`

## Counts and State Visualizations

|                                                                                                                                           |                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [`plot_histogram`](qiskit.visualization.plot_histogram "qiskit.visualization.plot_histogram")(data\[, figsize, color, …])                 | Plot a histogram of data.                                        |
| [`plot_bloch_vector`](qiskit.visualization.plot_bloch_vector "qiskit.visualization.plot_bloch_vector")(bloch\[, title, ax, …])            | Plot the Bloch sphere.                                           |
| [`plot_bloch_multivector`](qiskit.visualization.plot_bloch_multivector "qiskit.visualization.plot_bloch_multivector")(state\[, title, …]) | Plot the Bloch sphere.                                           |
| [`plot_state_city`](qiskit.visualization.plot_state_city "qiskit.visualization.plot_state_city")(state\[, title, figsize, …])             | Plot the cityscape of quantum state.                             |
| [`plot_state_hinton`](qiskit.visualization.plot_state_hinton "qiskit.visualization.plot_state_hinton")(state\[, title, figsize, …])       | Plot a hinton diagram for the density matrix of a quantum state. |
| [`plot_state_paulivec`](qiskit.visualization.plot_state_paulivec "qiskit.visualization.plot_state_paulivec")(state\[, title, figsize, …]) | Plot the paulivec representation of a quantum state.             |
| [`plot_state_qsphere`](qiskit.visualization.plot_state_qsphere "qiskit.visualization.plot_state_qsphere")(state\[, figsize, ax, …])       | Plot the qsphere representation of a quantum state.              |

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

## Timeline Visualizations

|                                                                                                                        |                                                             |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`timeline_drawer`](qiskit.visualization.timeline_drawer "qiskit.visualization.timeline_drawer")(program\[, style, …]) | Generate visualization data for scheduled circuit programs. |
| [`draw`](qiskit.visualization.timeline.draw "qiskit.visualization.timeline.draw")(program\[, style, time\_range, …])   | Generate visualization data for scheduled circuit programs. |

## Single Qubit State Transition Visualizations

|                                                                                                                                       |                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`visualize_transition`](qiskit.visualization.visualize_transition "qiskit.visualization.visualize_transition")(circuit\[, trace, …]) | Creates animation showing transitions between states of a single qubit by applying quantum gates. |

## Exceptions

|                                                                                                                      |                                    |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`VisualizationError`](qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError")(\*message) | For visualization specific errors. |

