# qiskit.ignis.verification.Plotter.get\_fourier\_info

`Plotter.get_fourier_info(qn, x, y, y_m, p_dict)`

Get fourier trans. data/plot of both mqc and po exps. :type qn: `int` :param qn: Number of qubits :type x: `array` :param x: Phase series :type y: `array` :param y: Counts series :type y\_m: `array` :param y\_m: Mitigated counts series :type p\_dict: `Dict` :param p\_dict: probabilities dictionary

**Return type**

`Dict`

**Returns**

The fourier transform data

**Raises**

*   **ImportError** – If matplotlib is not present
*   **Exception** – If y\_m or p\_dict are not provided
