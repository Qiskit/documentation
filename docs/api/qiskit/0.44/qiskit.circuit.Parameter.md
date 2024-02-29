---
title: Parameter
description: API reference for qiskit.circuit.Parameter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Parameter
---

# Parameter

<span id="qiskit.circuit.Parameter" />

`qiskit.circuit.Parameter(name, uuid=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/circuit/parameter.py "view source code")

Bases: [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")

Parameter Class for variable parameters.

A parameter is a variable value that is not required to be fixed at circuit definition.

**Examples**

Construct a variable-rotation X gate using circuit parameters.

```python
from qiskit.circuit import QuantumCircuit, Parameter

# create the parameter
phi = Parameter('phi')
qc = QuantumCircuit(1)

# parameterize the rotation
qc.rx(phi, 0)
qc.draw('mpl')

# bind the parameters after circuit to create a bound circuit
bc = qc.bind_parameters({phi: 3.14})
bc.measure_all()
bc.draw('mpl')
```

![../\_images/qiskit-circuit-Parameter-1\_00.png](/images/api/qiskit/0.44/qiskit-circuit-Parameter-1_00.png)

![../\_images/qiskit-circuit-Parameter-1\_01.png](/images/api/qiskit/0.44/qiskit-circuit-Parameter-1_01.png)

Create a new named [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

**Parameters**

**name** – name of the `Parameter`, used for visual representation. This can be any unicode string, e.g. “ϕ”.

## Attributes

<span id="qiskit.circuit.Parameter.name" />

### name

Returns the name of the [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

<span id="qiskit.circuit.Parameter.parameters" />

### parameters

Returns a set of the unbound Parameters in the expression.

## Methods

### abs

<span id="qiskit.circuit.Parameter.abs" />

`abs()`

Absolute of a ParameterExpression

### arccos

<span id="qiskit.circuit.Parameter.arccos" />

`arccos()`

Arccos of a ParameterExpression

### arcsin

<span id="qiskit.circuit.Parameter.arcsin" />

`arcsin()`

Arcsin of a ParameterExpression

### arctan

<span id="qiskit.circuit.Parameter.arctan" />

`arctan()`

Arctan of a ParameterExpression

### assign

<span id="qiskit.circuit.Parameter.assign" />

`assign(parameter, value)`

Assign one parameter to a value, which can either be numeric or another parameter expression.

**Parameters**

*   **parameter** ([*Parameter*](#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – A parameter in this expression whose value will be updated.
*   **value** ([*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")  *|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – The new value to bind to.

**Returns**

A new expression parameterized by any parameters which were not bound by assignment.

**Return type**

[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")

### bind

<span id="qiskit.circuit.Parameter.bind" />

`bind(parameter_values, allow_unknown_parameters=False)`

Binds the provided set of parameters to their corresponding values.

**Parameters**

*   **parameter\_values** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – Mapping of Parameter instances to the numeric value to which they will be bound.
*   **allow\_unknown\_parameters** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If `False`, raises an error if `parameter_values` contains Parameters in the keys outside those present in the expression. If `True`, any such parameters are simply ignored.

**Raises**

*   [**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") –

    *   If parameter\_values contains Parameters outside those in self. - If a non-numeric value is passed in parameter\_values.

*   [**ZeroDivisionError**](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError "(in Python v3.12)") –

    *   If binding the provided values requires division by zero.

**Returns**

A new expression parameterized by any parameters which were not bound by parameter\_values.

**Return type**

[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")

### conjugate

<span id="qiskit.circuit.Parameter.conjugate" />

`conjugate()`

Return the conjugate.

**Return type**

[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")

### cos

<span id="qiskit.circuit.Parameter.cos" />

`cos()`

Cosine of a ParameterExpression

### exp

<span id="qiskit.circuit.Parameter.exp" />

`exp()`

Exponential of a ParameterExpression

### gradient

<span id="qiskit.circuit.Parameter.gradient" />

`gradient(param)`

Get the derivative of a parameter expression w\.r.t. a specified parameter expression.

**Parameters**

**param** ([*Parameter*](#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – Parameter w\.r.t. which we want to take the derivative

**Returns**

ParameterExpression representing the gradient of param\_expr w\.r.t. param or complex or float number

**Return type**

[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression") | [complex](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")

### is\_real

<span id="qiskit.circuit.Parameter.is_real" />

`is_real()`

Return whether the expression is real

### log

<span id="qiskit.circuit.Parameter.log" />

`log()`

Logarithm of a ParameterExpression

### sin

<span id="qiskit.circuit.Parameter.sin" />

`sin()`

Sine of a ParameterExpression

### subs

<span id="qiskit.circuit.Parameter.subs" />

`subs(parameter_map, allow_unknown_parameters=False)`

Substitute self with the corresponding parameter in `parameter_map`.

### sympify

<span id="qiskit.circuit.Parameter.sympify" />

`sympify()`

Return symbolic expression as a raw Sympy or Symengine object.

Symengine is used preferentially; if both are available, the result will always be a `symengine` object. Symengine is a separate library but has integration with Sympy.

<Admonition title="Note" type="note">
  This is for interoperability only. Qiskit will not accept or work with raw Sympy or Symegine expressions in its parameters, because they do not contain the tracking information used in circuit-parameter binding and assignment.
</Admonition>

### tan

<span id="qiskit.circuit.Parameter.tan" />

`tan()`

Tangent of a ParameterExpression

