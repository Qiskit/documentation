# qiskit.ignis.measurement.IQDiscriminationFitter.plot

`IQDiscriminationFitter.plot(axs=None, show_boundary=False, show_fitting_data=True, flag_misclassified=False, qubits_to_plot=None, title=True)`

Creates a plot of the data used to fit the discriminator.

**Parameters**

*   **axs** (*Union\[np.ndarray, axes]*) – the axis to use for the plot. If it is none, the plot method will create its own axis instance. If the number of axis instances provided is less than the number of qubits then only the data for the first len(axs) qubits will be plotted.
*   **show\_boundary** (*bool*) – plot the decision regions if true. Some discriminators may put additional constraints on whether the decision regions are plotted or not.
*   **show\_fitting\_data** (*bool*) – if True the x data and labels used to fit the discriminator are shown in the plot.
*   **flag\_misclassified** (*bool*) – plot the misclassified training data points if true.
*   **qubits\_to\_plot** (*list*) – each qubit in this list will receive its own plot. The qubits in qubits to plot must be in the qubit mask. If qubits\_to\_plot is None then the qubit mask will be used.
*   **title** (*bool*) – adds a title to each subplot with the number of the qubit.

**Returns**

**A tuple of the form: `(Union[List[axes], axes], figure)`**

where the axes object used for the plot as well as the figure handle. The figure handle returned is not None only when the figure handle is created by the discriminator’s plot method.

**Return type**

tuple

**Raises**

**QiskitError** – If matplotlib is not installed, or there is invalid input
