# qiskit.transpiler.PassManager.draw

`PassManager.draw(filename=None, style=None, raw=False)`

Draw the pass manager.

This function needs [pydot](https://github.com/erocarrera/pydot), which in turn needs [Graphviz](https://www.graphviz.org/) to be installed.

**Parameters**

*   **filename** (*str*) – file path to save image to.
*   **style** (*dict*) – keys are the pass classes and the values are the colors to make them. An example can be seen in the DEFAULT\_STYLE. An ordered dict can be used to ensure a priority coloring when pass falls into multiple categories. Any values not included in the provided dict will be filled in from the default dict.
*   **raw** (*bool*) – If `True`, save the raw Dot output instead of the image.

**Returns**

an in-memory representation of the pass manager, or `None` if no image was generated or [Pillow](https://pypi.org/project/Pillow/) is not installed.

**Return type**

Optional\[[PassManager](qiskit.transpiler.PassManager#qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")]

**Raises**

**ImportError** – when nxpd or pydot not installed.
