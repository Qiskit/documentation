# qiskit.providers.ibmq.RunnerResult.get\_quasiprobabilities

`RunnerResult.get_quasiprobabilities(experiment=None)`

Get quasiprobabilites associated with one or more experiments.

**Parameters**

**experiment** (`Union`\[`int`, `List`, `None`]) – Indices of experiments to grab quasiprobabilities from.

**Return type**

`Union`\[`QuasiDistribution`, `List`\[`QuasiDistribution`]]

**Returns**

A single distribution or a list of distributions.

**Raises**

**QiskitError** – If experiment result doesn’t contain quasiprobabilities.
