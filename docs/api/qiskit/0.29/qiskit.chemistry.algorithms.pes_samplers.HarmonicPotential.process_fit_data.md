# qiskit.chemistry.algorithms.pes\_samplers.HarmonicPotential.process\_fit\_data

`classmethod HarmonicPotential.process_fit_data(xdata, ydata)`

## Mostly for internal use. Preprocesses the data passed to fit\_to\_data()

so that only the points around the minimum are fit (which gives more accurate vibrational modes).

**Parameters**

*   **xdata** (`List`\[`float`]) – xdata to be considered
*   **ydata** (`List`\[`float`]) – ydata to be considered

**Return type**

`Tuple`\[`list`, `list`]

**Returns**

the processed data that fit better to a harmonic potential
