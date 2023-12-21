# qiskit.aqua.operators.state\_fns.CVaRMeasurement.get\_outcome\_energies\_probabilities

`CVaRMeasurement.get_outcome_energies_probabilities(front=None)`

In order to compute the CVaR of an observable expectation, we require the energies of each sampled measurement outcome as well as the sampling probability of each measurement outcome. Note that the counts for each measurement outcome will also suffice (and this is often how the CVaR is presented).

**Parameters**

**front** (`Union`\[`str`, `dict`, `ndarray`, `OperatorBase`, `None`]) – A StateFn or a primitive which defines a StateFn. This input holds the results of a sampled/simulated circuit.

**Return type**

`Tuple`\[`list`, `list`]

**Returns**

**Two lists of equal length. energies contains the energy of each**

unique measurement outcome computed against the diagonal observable stored in self.primitive. probabilities contains the corresponding sampling probability for each measurement outcome in energies.

**Raises**

**ValueError** – front isn’t a DictStateFn or VectorStateFn
