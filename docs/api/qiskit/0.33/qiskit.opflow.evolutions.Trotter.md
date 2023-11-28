# Trotter[¶](#trotter "Permalink to this headline")

<span id="undefined" />

`Trotter(reps=1)`

Bases: `qiskit.opflow.evolutions.trotterizations.suzuki.Suzuki`

Simple Trotter expansion, composing the evolution circuits of each Operator in the sum together `reps` times and dividing the evolution time of each by `reps`.

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Attributes

<span id="undefined" />

### order

returns order

**Return type**

`int`

<span id="undefined" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`
