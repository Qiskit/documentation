# qiskit.opflow\.converters.DictToCircuitSum

<span id="undefined" />

`DictToCircuitSum(traverse=True, convert_dicts=True, convert_vectors=True)`

Converts `DictStateFns` or `VectorStateFns` to equivalent `CircuitStateFns` or sums thereof. The behavior of this class can be mostly replicated by calling `to_circuit_op` on an Operator, but with the added control of choosing whether to convert only `DictStateFns` or `VectorStateFns`, rather than both.

**Parameters**

*   **traverse** (`bool`) – Whether to recurse down into Operators with internal sub-operators for conversion.
*   **convert\_dicts** (`bool`) – Whether to convert VectorStateFn.
*   **convert\_vectors** (`bool`) – Whether to convert DictStateFns.

<span id="undefined" />

`__init__(traverse=True, convert_dicts=True, convert_vectors=True)`

**Parameters**

*   **traverse** (`bool`) – Whether to recurse down into Operators with internal sub-operators for conversion.
*   **convert\_dicts** (`bool`) – Whether to convert VectorStateFn.
*   **convert\_vectors** (`bool`) – Whether to convert DictStateFns.

## Methods

|                                                                                                                                                        |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`__init__`](#qiskit.opflow.converters.DictToCircuitSum.__init__ "qiskit.opflow.converters.DictToCircuitSum.__init__")(\[traverse, convert\_dicts, …]) | **type traverse**`bool`                                                       |
| [`convert`](#qiskit.opflow.converters.DictToCircuitSum.convert "qiskit.opflow.converters.DictToCircuitSum.convert")(operator)                          | Convert the Operator to `CircuitStateFns`, recursively if `traverse` is True. |

<span id="undefined" />

`convert(operator)`

Convert the Operator to `CircuitStateFns`, recursively if `traverse` is True.

**Parameters**

**operator** (`OperatorBase`) – The Operator to convert

**Return type**

`OperatorBase`

**Returns**

The converted Operator.
