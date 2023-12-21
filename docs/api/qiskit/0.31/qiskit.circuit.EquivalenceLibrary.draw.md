# qiskit.circuit.EquivalenceLibrary.draw

`EquivalenceLibrary.draw(filename=None)`

Draws the equivalence relations available in the library.

**Parameters**

**filename** (*str*) – An optional path to write the output image to if specified this method will return None.

**Returns**

**Drawn equivalence library as an**

IPython SVG if in a jupyter notebook, or as a PIL.Image otherwise.

**Return type**

PIL.Image or IPython.display.SVG

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – when pydot or pillow are not installed.
