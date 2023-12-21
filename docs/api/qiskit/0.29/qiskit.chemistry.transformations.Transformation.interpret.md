# qiskit.chemistry.transformations.Transformation.interpret

`abstract Transformation.interpret(raw_result)`

Interprets an EigenstateResult in the context of this transformation.

**Parameters**

**raw\_result** (`Union`\[`EigenstateResult`, `EigensolverResult`, `MinimumEigensolverResult`]) – an eigenstate result object.

**Return type**

`EigenstateResult`

**Returns**

An “interpreted” eigenstate result.
