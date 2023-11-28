# qiskit.aqua.operators.evolutions.TrotterizationFactory

<span id="undefined" />

`TrotterizationFactory`

A factory for conveniently creating TrotterizationBase instances.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                        |                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.evolutions.TrotterizationFactory.__init__ "qiskit.aqua.operators.evolutions.TrotterizationFactory.__init__")()     | Initialize self.                                                  |
| [`build`](#qiskit.aqua.operators.evolutions.TrotterizationFactory.build "qiskit.aqua.operators.evolutions.TrotterizationFactory.build")(\[mode, reps]) | A factory for conveniently creating TrotterizationBase instances. |

<span id="undefined" />

`static build(mode='trotter', reps=1)`

A factory for conveniently creating TrotterizationBase instances.

**Parameters**

*   **mode** (`str`) – One of ‘trotter’, ‘suzuki’, ‘qdrift’
*   **reps** (`int`) – The number of times to repeat the Trotterization circuit.

**Return type**

`TrotterizationBase`

**Returns**

The desired TrotterizationBase instance.

**Raises**

**ValueError** – A string not in \[‘trotter’, ‘suzuki’, ‘qdrift’] is given for mode.
