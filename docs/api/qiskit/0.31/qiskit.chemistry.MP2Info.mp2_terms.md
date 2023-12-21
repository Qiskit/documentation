# qiskit.chemistry.MP2Info.mp2\_terms

`MP2Info.mp2_terms(freeze_core=False, orbital_reduction=None)`

Gets the set of MP2 terms for the molecule taking into account index adjustments due to frozen core and/or other orbital reduction

**Parameters**

*   **freeze\_core** (*bool*) – Whether core orbitals are frozen or not
*   **orbital\_reduction** (*list*) – An optional list of ints indicating removed orbitals

**Returns**

**A dictionary of excitations where the key is a string in the form**

from\_to\_from\_to e.g. 0\_4\_6\_10 and the value is a tuple of (coeff, e\_delta)

**Return type**

dict
