# qiskit.aqua.algorithms.AmplitudeEstimation.is\_good\_state

`AmplitudeEstimation.is_good_state(measurement)`

Determine whether a given state is a good state.

**Parameters**

**measurement** (`str`) – A measurement as bitstring, e.g. ‘01100’.

**Return type**

`bool`

**Returns**

True if the measurement corresponds to a good state, False otherwise.

**Raises**

**ValueError** – If `self.objective_qubits` is not set.
