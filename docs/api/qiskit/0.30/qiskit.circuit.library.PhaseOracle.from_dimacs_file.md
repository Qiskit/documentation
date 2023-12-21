# qiskit.circuit.library.PhaseOracle.from\_dimacs\_file

`classmethod PhaseOracle.from_dimacs_file(filename)`

Create a PhaseOracle from the string in the DIMACS format.

It is possible to build a PhaseOracle from a file in [DIMACS CNF format](http://www.satcompetition.org/2009/format-benchmarks2009.html), which is the standard format for specifying SATisfiability (SAT) problem instances in [Conjunctive Normal Form (CNF)](https://en.wikipedia.org/wiki/Conjunctive_normal_form), which is a conjunction of one or more clauses, where a clause is a disjunction of one or more literals.

The following is an example of a CNF expressed in the DIMACS format:

```python
c DIMACS CNF file with 3 satisfying assignments: 1 -2 3, -1 -2 -3, 1 2 -3.
p cnf 3 5
-1 -2 -3 0
1 -2 3 0
1 2 -3 0
1 -2 -3 0
-1 2 3 0
```

The first line, following the c character, is a comment. The second line specifies that the CNF is over three boolean variables — let us call them $x_1, x_2, x_3$, and contains five clauses. The five clauses, listed afterwards, are implicitly joined by the logical AND operator, $\land$, while the variables in each clause, represented by their indices, are implicitly disjoined by the logical OR operator, $lor$. The $-$ symbol preceding a boolean variable index corresponds to the logical NOT operator, $lnot$. Character 0 (zero) marks the end of each clause. Essentially, the code above corresponds to the following CNF:

$(\lnot x_1 \lor \lnot x_2 \lor \lnot x_3) \land (x_1 \lor \lnot x_2 \lor x_3) \land (x_1 \lor x_2 \lor \lnot x_3) \land (x_1 \lor \lnot x_2 \lor \lnot x_3) \land (\lnot x_1 \lor x_2 \lor x_3)$.

**Parameters**

**filename** (`str`) – A file in DIMACS format.

**Returns**

A quantum circuit with a phase oracle.

**Return type**

[PhaseOracle](qiskit.circuit.library.PhaseOracle#qiskit.circuit.library.PhaseOracle "qiskit.circuit.library.PhaseOracle")
