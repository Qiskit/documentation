# qiskit.dagcircuit.DAGDependency.draw

`DAGDependency.draw(scale=0.7, filename=None, style='color')`

Draws the DAGDependency graph.

This function needs pydot \<[https://github.com/erocarrera/pydot](https://github.com/erocarrera/pydot)>, which in turn needs Graphviz \<[https://www.graphviz.org/](https://www.graphviz.org/)>\` to be installed.

**Parameters**

*   **scale** (*float*) – scaling factor
*   **filename** (*str*) – file path to save image to (format inferred from name)
*   **style** (*str*) – ‘plain’: B\&W graph ‘color’ (default): color input/output/op nodes

**Returns**

**if in Jupyter notebook and not saving to file,**

otherwise None.

**Return type**

Ipython.display.Image
