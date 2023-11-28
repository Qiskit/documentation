<span id="qiskit-transpiler-propertyset" />

# qiskit.transpiler.PropertySet

<span id="undefined" />

`PropertySet`

A default dictionary-like object

<span id="undefined" />

`__init__(*args, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                       |                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.transpiler.PropertySet.__init__ "qiskit.transpiler.PropertySet.__init__")(\*args, \*\*kwargs)    | Initialize self.                                                                                                                                                                                                              |
| [`clear`](#qiskit.transpiler.PropertySet.clear "qiskit.transpiler.PropertySet.clear")()                               |                                                                                                                                                                                                                               |
| [`copy`](#qiskit.transpiler.PropertySet.copy "qiskit.transpiler.PropertySet.copy")()                                  |                                                                                                                                                                                                                               |
| [`fromkeys`](#qiskit.transpiler.PropertySet.fromkeys "qiskit.transpiler.PropertySet.fromkeys")(\[value])              | Create a new dictionary with keys from iterable and values set to value.                                                                                                                                                      |
| [`get`](#qiskit.transpiler.PropertySet.get "qiskit.transpiler.PropertySet.get")(key\[, default])                      | Return the value for key if key is in the dictionary, else default.                                                                                                                                                           |
| [`items`](#qiskit.transpiler.PropertySet.items "qiskit.transpiler.PropertySet.items")()                               |                                                                                                                                                                                                                               |
| [`keys`](#qiskit.transpiler.PropertySet.keys "qiskit.transpiler.PropertySet.keys")()                                  |                                                                                                                                                                                                                               |
| [`pop`](#qiskit.transpiler.PropertySet.pop "qiskit.transpiler.PropertySet.pop")(k\[,d])                               | If key is not found, d is returned if given, otherwise KeyError is raised                                                                                                                                                     |
| [`popitem`](#qiskit.transpiler.PropertySet.popitem "qiskit.transpiler.PropertySet.popitem")()                         | 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                                    |
| [`setdefault`](#qiskit.transpiler.PropertySet.setdefault "qiskit.transpiler.PropertySet.setdefault")(key\[, default]) | Insert key with a value of default if key is not in the dictionary.                                                                                                                                                           |
| [`update`](#qiskit.transpiler.PropertySet.update "qiskit.transpiler.PropertySet.update")(\[E, ]\*\*F)                 | If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k] |
| [`values`](#qiskit.transpiler.PropertySet.values "qiskit.transpiler.PropertySet.values")()                            |                                                                                                                                                                                                                               |

<span id="undefined" />

`clear() → None. Remove all items from D.`

<span id="undefined" />

`copy() → a shallow copy of D`

<span id="undefined" />

`fromkeys(value=None, /)`

Create a new dictionary with keys from iterable and values set to value.

<span id="undefined" />

`get(key, default=None, /)`

Return the value for key if key is in the dictionary, else default.

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

<span id="undefined" />

`pop(k[, d]) → v, remove specified key and return the corresponding value.`

If key is not found, d is returned if given, otherwise KeyError is raised

<span id="undefined" />

`popitem() → (k, v), remove and return some (key, value) pair as a`

2-tuple; but raise KeyError if D is empty.

<span id="undefined" />

`setdefault(key, default=None, /)`

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

<span id="undefined" />

`update([E, ]**F) → None. Update D from dict/iterable E and F.`

If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k]

<span id="undefined" />

`values() → an object providing a view on D’s values`
