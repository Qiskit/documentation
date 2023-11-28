<span id="qiskit-chemistry-algorithms-eigensolverfactory" />

# qiskit.chemistry.algorithms.EigensolverFactory

<span id="undefined" />

`EigensolverFactory`

A factory to construct a eigensolver based on a qubit operator transformation.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                        |                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [`__init__`](#qiskit.chemistry.algorithms.EigensolverFactory.__init__ "qiskit.chemistry.algorithms.EigensolverFactory.__init__")()                     | Initialize self.                                                   |
| [`get_solver`](#qiskit.chemistry.algorithms.EigensolverFactory.get_solver "qiskit.chemistry.algorithms.EigensolverFactory.get_solver")(transformation) | Returns a eigensolver, based on the qubit operator transformation. |

<span id="undefined" />

`abstract get_solver(transformation)`

Returns a eigensolver, based on the qubit operator transformation.

**Parameters**

**transformation** (`Transformation`) – The qubit operator transformation.

**Return type**

`Eigensolver`

**Returns**

An eigensolver suitable to compute the excited states of the molecule transformed by `transformation`.
