# qiskit.ignis.verification.GatesetTomographyFitter.linear\_inversion

`GatesetTomographyFitter.linear_inversion()`

Reconstruct a gate set from measurement data using linear inversion.

**Returns**

its approximation found using the linear inversion process.

**Return type**

For each gate in the gateset

## Additional Information:

Given a gate set (G1,…,Gm) and SPAM circuits (F1,…,Fn) constructed from those gates the data should contain the probabilities of the following types: p\_ijk = E\*F\_i\*G\_k\*F\_j\*rho p\_ij = E\*F\_i\*F\_j\*rho

We have p\_ijk = self.probs\[(Fj, Gk, Fi)] since in self.probs (Fj, Gk, Fi) indicates first applying Fj, then Gk, then Fi.

One constructs the Gram matrix g = (p\_ij)\_ij which can be described as a product g=AB where A = sum (i> \<E F\_i) and B=sum (F\_j rho>\<j) For each gate Gk one can also construct the matrix Mk=(pijk)\_ij which can be described as Mk=A\*Gk\*B Inverting g we obtain g^-1 = B^-1A^-1 and so g^1 \* Mk = B^-1 \* Gk \* B This gives us a matrix similiar to Gk’s representing matrix. However, it will not be the same as Gk, since the observable results cannot distinguish between (G1,…,Gm) and (B^-1\*G1\*B,…,B^-1\*Gm\*B) a further step of *Gauge optimization* is required on the results of the linear inversion stage. One can also use the linear inversion results as a starting point for a MLE optimization for finding a physical gateset, since unless the probabilities are accurate, the resulting gateset need not be physical.
