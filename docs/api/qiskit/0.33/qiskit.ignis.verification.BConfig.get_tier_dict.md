# qiskit.ignis.verification.BConfig.get\_tier\_dict

`BConfig.get_tier_dict()`

Take the nodes of the BConfig to create a Tier Dictionary, where keys are the steps in the process, and the values are the connections following pattern of: \[controlled qubit, NOT qubit]. Thus the backend’s GHZ state is parallelized.

**Return type**

`Dict`

**Returns**

**Tier dictionary - \[step in process, control-target connection]**

Facilitates parallelized GHZ circuits
