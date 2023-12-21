# qiskit.quantum\_info.DensityMatrix.draw

`DensityMatrix.draw(output=None, **drawer_args)`

Return a visualization of the Statevector.

**repr**: ASCII TextMatrix of the state’s `__repr__`.

**text**: ASCII TextMatrix that can be printed in the console.

**latex**: An IPython Latex object for displaying in Jupyter Notebooks.

**latex\_source**: Raw, uncompiled ASCII source to generate array using LaTeX.

**qsphere**: Matplotlib figure, rendering of density matrix using plot\_state\_qsphere().

**hinton**: Matplotlib figure, rendering of density matrix using plot\_state\_hinton().

**bloch**: Matplotlib figure, rendering of density matrix using plot\_bloch\_multivector().

**Parameters**

*   **output** (*str*) – Select the output method to use for drawing the state. Valid choices are repr, text, latex, latex\_source, qsphere, hinton, or bloch. Default is repr. Default can be changed by adding the line `state_drawer = <default>` to `~/.qiskit/settings.conf` under `[default]`.
*   **drawer\_args** – Arguments to be passed directly to the relevant drawing function or constructor (TextMatrix(), array\_to\_latex(), plot\_state\_qsphere(), plot\_state\_hinton() or plot\_bloch\_multivector()). See the relevant function under qiskit.visualization for that function’s documentation.

**Returns**

`matplotlib.Figure` or `str` or `TextMatrix` or `IPython.display.Latex`: Drawing of the Statevector.

**Raises**

**ValueError** – when an invalid output method is selected.
