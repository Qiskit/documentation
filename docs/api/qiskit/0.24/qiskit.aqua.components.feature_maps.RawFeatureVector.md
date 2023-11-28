<span id="qiskit-aqua-components-feature-maps-rawfeaturevector" />

# qiskit.aqua.components.feature\_maps.RawFeatureVector

<span id="undefined" />

`RawFeatureVector(feature_dimension=2)`

Raw Feature Vector feature map.

The Raw Feature Vector can be directly used as a feature map, where the raw feature vectors will be automatically padded with ending 0s as necessary, to make sure vector length is a power of 2, and normalized such that it can be treated and used as an initial quantum state vector.

**Parameters**

**feature\_dimension** (`int`) – The feature dimension, has a minimum value of 1.

<span id="undefined" />

`__init__(feature_dimension=2)`

**Parameters**

**feature\_dimension** (`int`) – The feature dimension, has a minimum value of 1.

## Methods

|                                                                                                                                                                                                                     |                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.feature_maps.RawFeatureVector.__init__ "qiskit.aqua.components.feature_maps.RawFeatureVector.__init__")(\[feature\_dimension])                                                 | **type feature\_dimension**`int`                          |
| [`construct_circuit`](#qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit "qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit")(x\[, qr, inverse])                          | Construct the second order expansion based on given data. |
| [`get_entangler_map`](#qiskit.aqua.components.feature_maps.RawFeatureVector.get_entangler_map "qiskit.aqua.components.feature_maps.RawFeatureVector.get_entangler_map")(map\_type, num\_qubits)                     | get entangle map                                          |
| [`validate_entangler_map`](#qiskit.aqua.components.feature_maps.RawFeatureVector.validate_entangler_map "qiskit.aqua.components.feature_maps.RawFeatureVector.validate_entangler_map")(entangler\_map, num\_qubits) | validate entangler map                                    |

## Attributes

|                                                                                                                                                                                                             |                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`feature_dimension`](#qiskit.aqua.components.feature_maps.RawFeatureVector.feature_dimension "qiskit.aqua.components.feature_maps.RawFeatureVector.feature_dimension")                                     | returns feature dimension                                          |
| [`num_qubits`](#qiskit.aqua.components.feature_maps.RawFeatureVector.num_qubits "qiskit.aqua.components.feature_maps.RawFeatureVector.num_qubits")                                                          | returns number of qubits                                           |
| [`support_parameterized_circuit`](#qiskit.aqua.components.feature_maps.RawFeatureVector.support_parameterized_circuit "qiskit.aqua.components.feature_maps.RawFeatureVector.support_parameterized_circuit") | returns whether or not the sub-class support parameterized circuit |

<span id="undefined" />

`construct_circuit(x, qr=None, inverse=False)`

Construct the second order expansion based on given data.

**Parameters**

*   **x** (*numpy.ndarray*) – 1-D to-be-encoded data.
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the QuantumRegister object for the circuit, if None, generate new registers with name q.
*   **inverse** (*bool*) – inverse

**Returns**

a quantum circuit transform data x.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **TypeError** – invalid input
*   **ValueError** – invalid input

<span id="undefined" />

`property feature_dimension`

returns feature dimension

<span id="undefined" />

`static get_entangler_map(map_type, num_qubits)`

get entangle map

<span id="undefined" />

`property num_qubits`

returns number of qubits

<span id="undefined" />

`property support_parameterized_circuit`

returns whether or not the sub-class support parameterized circuit

<span id="undefined" />

`static validate_entangler_map(entangler_map, num_qubits)`

validate entangler map
