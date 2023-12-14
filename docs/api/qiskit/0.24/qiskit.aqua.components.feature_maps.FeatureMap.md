<span id="qiskit-aqua-components-feature-maps-featuremap" />

# qiskit.aqua.components.feature\_maps.FeatureMap



`FeatureMap`

Base class for FeatureMap.

This method should initialize the module and use an exception if a component of the module is not available.



`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                         |                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.feature_maps.FeatureMap.__init__ "qiskit.aqua.components.feature_maps.FeatureMap.__init__")()                                                                      | Initialize self.                                      |
| [`construct_circuit`](#qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit "qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit")(x\[, qr, inverse])                          | Construct the variational form, given its parameters. |
| [`get_entangler_map`](#qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map "qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map")(map\_type, num\_qubits)                     | get entangle map                                      |
| [`validate_entangler_map`](#qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map "qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map")(entangler\_map, num\_qubits) | validate entangler map                                |

## Attributes

|                                                                                                                                                                                                 |                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`feature_dimension`](#qiskit.aqua.components.feature_maps.FeatureMap.feature_dimension "qiskit.aqua.components.feature_maps.FeatureMap.feature_dimension")                                     | returns feature dimension                                          |
| [`num_qubits`](#qiskit.aqua.components.feature_maps.FeatureMap.num_qubits "qiskit.aqua.components.feature_maps.FeatureMap.num_qubits")                                                          | returns number of qubits                                           |
| [`support_parameterized_circuit`](#qiskit.aqua.components.feature_maps.FeatureMap.support_parameterized_circuit "qiskit.aqua.components.feature_maps.FeatureMap.support_parameterized_circuit") | returns whether or not the sub-class support parameterized circuit |



`abstract construct_circuit(x, qr=None, inverse=False)`

Construct the variational form, given its parameters.

**Parameters**

*   **x** (*numpy.ndarray\[float]*) – 1-D array, data
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the QuantumRegister object for the circuit, if None, generate new registers with name q.
*   **inverse** (*bool*) – whether or not inverse the circuit

**Returns**

a quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")



`property feature_dimension`

returns feature dimension



`static get_entangler_map(map_type, num_qubits)`

get entangle map



`property num_qubits`

returns number of qubits



`property support_parameterized_circuit`

returns whether or not the sub-class support parameterized circuit



`static validate_entangler_map(entangler_map, num_qubits)`

validate entangler map
