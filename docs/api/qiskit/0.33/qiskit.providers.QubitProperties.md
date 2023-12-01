# QubitProperties

<span id="undefined" />

`QubitProperties(t1=None, t2=None, frequency=None)`

Bases: `object`

A representation of the properties of a qubit on a backend.

This class provides the optional properties that a backend can provide for a qubit. These represent the set of qubit properties that Qiskit can currently work with if present. However if your backend provides additional properties of qubits you should subclass this to add additional custom attributes for those custom/additional properties provided by the backend.

Create a new `QubitProperties` object

**Parameters**

*   **t1** – The T1 time for a qubit in seconds
*   **t2** – The T2 time for a qubit in seconds
*   **frequency** – The frequency of a qubit in Hz

## Attributes

<span id="undefined" />

### frequency

<span id="undefined" />

### t1

<span id="undefined" />

### t2
