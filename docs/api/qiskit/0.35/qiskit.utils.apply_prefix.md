# qiskit.utils.apply\_prefix[¶](#qiskit-utils-apply-prefix "Permalink to this headline")

<span id="undefined" />

`apply_prefix(value, unit)`

Given a SI unit prefix and value, apply the prefix to convert to standard SI unit.

**Parameters**

*   **value** (`Union`\[`float`, `ParameterExpression`]) – The number to apply prefix to.
*   **unit** (`str`) – String prefix.

**Return type**

`float`

**Returns**

Converted value.

<Admonition title="Note" type="note">
  This may induce tiny value error due to internal representation of float object. See [https://docs.python.org/3/tutorial/floatingpoint.html](https://docs.python.org/3/tutorial/floatingpoint.html) for details.
</Admonition>

**Raises**

**ValueError** – If the `units` aren’t recognized.
