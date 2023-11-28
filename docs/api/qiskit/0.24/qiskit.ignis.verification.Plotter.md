<span id="qiskit-ignis-verification-plotter" />

# qiskit.ignis.verification.Plotter

<span id="undefined" />

`Plotter(label)`

Various plots of the ground state in MQC and PO experiments

<span id="undefined" />

`__init__(label)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                         |                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`__init__`](#qiskit.ignis.verification.Plotter.__init__ "qiskit.ignis.verification.Plotter.__init__")(label)                                           | Initialize self.                                 |
| [`get_fourier_info`](#qiskit.ignis.verification.Plotter.get_fourier_info "qiskit.ignis.verification.Plotter.get_fourier_info")(qn, x, y, y\_m, p\_dict) | Get fourier trans.                               |
| [`sin_plotter`](#qiskit.ignis.verification.Plotter.sin_plotter "qiskit.ignis.verification.Plotter.sin_plotter")(x, y\[, y\_m])                          | Make sin plot of counts in both mqc and po exps. |
| [`title_maker`](#qiskit.ignis.verification.Plotter.title_maker "qiskit.ignis.verification.Plotter.title_maker")()                                       | Make title depending on type of exp.             |

<span id="undefined" />

`get_fourier_info(qn, x, y, y_m, p_dict)`

Get fourier trans. data/plot of both mqc and po exps. :type qn: `int` :param qn: Number of qubits :type x: `array` :param x: Phase series :type y: `array` :param y: Counts series :type y\_m: `array` :param y\_m: Mitigated counts series :type p\_dict: `Dict` :param p\_dict: probabilities dictionary

**Return type**

`Dict`

**Returns**

The fourier transform data

**Raises**

*   **ImportError** – If matplotlib is not present
*   **Exception** – If y\_m or p\_dict are not provided

<span id="undefined" />

`sin_plotter(x, y, y_m=None)`

Make sin plot of counts in both mqc and po exps. :type x: `array` :param x: Phase series :type y: `array` :param y: Counts series :type y\_m: `Optional`\[`array`] :param y\_m: Mitigated counts series

**Raises**

**ImportError** – If matplotlib is not present

<span id="undefined" />

`title_maker()`

Make title depending on type of exp.

**Return type**

`Tuple`\[`str`, `str`]

**Returns**

The title strings
