---
title: draw
description: API reference for qiskit.transpiler.CouplingMap.draw
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.CouplingMap.draw
---

# draw

<span id="qiskit.transpiler.CouplingMap.draw" />

`CouplingMap.draw()`

Draws the coupling map.

This function needs [pydot](https://github.com/erocarrera/pydot), which in turn needs [Graphviz](https://www.graphviz.org/) to be installed. Additionally, [pillow](https://python-pillow.org/) will need to be installed.

**Returns**

Drawn coupling map.

**Return type**

PIL.Image

**Raises**

**ImportError** – when pydot or pillow are not installed.

