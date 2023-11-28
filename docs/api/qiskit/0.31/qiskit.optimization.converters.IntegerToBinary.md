# IntegerToBinary

<span id="undefined" />

`IntegerToBinary`

Bases: `qiskit.optimization.converters.quadratic_program_converter.QuadraticProgramConverter`

Convert a [`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram#qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.QuadraticProgram") into new one by encoding integer with binary variables.

This bounded-coefficient encoding used in this converted is proposed in \[1], Eq. (5).

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import IntegerToBinary
>>> problem = QuadraticProgram()
>>> var = problem.integer_var(name='x', lowerbound=0, upperbound=10)
>>> conv = IntegerToBinary()
>>> problem2 = conv.convert(problem)
```

## References

**\[1]: Sahar Karimi, Pooya Ronagh (2017), Practical Integer-to-Binary Mapping for Quantum**

Annealers. arxiv.org:1706.01945.

## Methods

|                                                                                                                                                                                             |                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`convert`](qiskit.optimization.converters.IntegerToBinary.convert#qiskit.optimization.converters.IntegerToBinary.convert "qiskit.optimization.converters.IntegerToBinary.convert")         | Convert an integer problem into a new problem with binary variables.                       |
| [`interpret`](qiskit.optimization.converters.IntegerToBinary.interpret#qiskit.optimization.converters.IntegerToBinary.interpret "qiskit.optimization.converters.IntegerToBinary.interpret") | Convert back the converted problem (binary variables) to the original (integer variables). |
