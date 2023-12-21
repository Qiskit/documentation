# qiskit.transpiler.CouplingMap.draw

`CouplingMap.draw()`

Draws the coupling map.

This function needs [pydot](https://github.com/erocarrera/pydot), which in turn needs [Graphviz](https://www.graphviz.org/) to be installed. Additionally, [pillow](https://python-pillow.org/) will need to be installed.

**Returns**

Drawn coupling map.

**Return type**

PIL.Image

**Raises**

**MissingOptionalLibraryError** – when pydot or pillow are not installed.
