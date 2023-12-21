---
title: draw
description: API reference for qiskit.dagcircuit.DAGCircuit.draw
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.dagcircuit.DAGCircuit.draw
---

# draw

<span id="qiskit.dagcircuit.DAGCircuit.draw" />

`DAGCircuit.draw(scale=0.7, filename=None, style='color')`

Draws the dag circuit.

This function needs [pydot](https://github.com/erocarrera/pydot), which in turn needs [Graphviz](https://www.graphviz.org/) to be installed.

**Parameters**

*   **scale** (*float*) – scaling factor
*   **filename** (*str*) – file path to save image to (format inferred from name)
*   **style** (*str*) – ‘plain’: B\&W graph; ‘color’ (default): color input/output/op nodes

**Returns**

if in Jupyter notebook and not saving to file, otherwise None.

**Return type**

Ipython.display.Image

