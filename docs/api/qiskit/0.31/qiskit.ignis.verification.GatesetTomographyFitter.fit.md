# qiskit.ignis.verification.GatesetTomographyFitter.fit

`GatesetTomographyFitter.fit()`

Reconstruct a gate set from measurement data using optimization.

**Returns**

its approximation found using the optimization process.

**Return type**

For each gate in the gateset

## Additional Information:

The gateset optimization process con/.sists of three phases: 1) Use linear inversion to obtain an initial approximation. 2) Use gauge optimization to ensure the linear inversion results are close enough to the expected optimization outcome to serve as a suitable starting point 3) Use MLE optimization to obtain the final outcome
