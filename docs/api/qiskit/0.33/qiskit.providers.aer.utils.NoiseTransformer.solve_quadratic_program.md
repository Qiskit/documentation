# qiskit.providers.aer.utils.NoiseTransformer.solve\_quadratic\_program

`NoiseTransformer.solve_quadratic_program(P, q)`

Solve the quadratic program optimization problem.

This function solved the quadratic program to minimize the objective function f(x) = 1/2(x\*P\*x)+q\*x subject to the additional constraints Gx \<= h

Where P, q are given and G,h are computed to ensure that x represents a probability vector and subject to honesty constraints if required :param P: A matrix representing the P component of the objective function :type P: matrix :param q: A vector representing the q component of the objective function :type q: list

**Returns**

The solution of the quadratic program (represents probabilities)

**Return type**

list

## Additional information:

This method is the only place in the code where we rely on the cvxpy library should we consider another library, only this method needs to change.
