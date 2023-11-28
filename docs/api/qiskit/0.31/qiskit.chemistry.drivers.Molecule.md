# Molecule

<span id="undefined" />

`Molecule(geometry, multiplicity=1, charge=0, degrees_of_freedom=None, masses=None)`

Bases: `object`

Driver-independent Molecule definition.

This module implements an interface for a driver-independent, i.e. generic molecule definition. It defines the composing atoms (with properties like masses), and allows for changing the molecular geometry through given degrees of freedom (e.g. bond-stretching, angle-bending, etc.). The geometry as provided in the constructor can be affected, through setting perturbations, and it is this perturbed geometry that is supplied by the geometry getter. Setting perturbations to None will cause the original geometry to be returned, and there is a getter to get this value directly if its needed.

**Parameters**

*   **geometry** (`List`\[`Tuple`\[`str`, `List`\[`float`]]]) – A list of atoms defining a given molecule where each item in the list is an atom name together with a list of 3 floats representing the x,y and z Cartesian coordinates of the atom’s position in units of **Angstrom**.
*   **multiplicity** (`int`) – Multiplicity (2S+1) of the molecule
*   **charge** (`int`) – Charge on the molecule
*   **degrees\_of\_freedom** (`Optional`\[`List`\[`Callable`]]) – List of functions taking a perturbation value and geometry and returns a perturbed geometry. Helper functions for typical perturbations are provided and can be used by the form itertools.partial(Molecule.stretching\_potential,\{‘atom\_pair’: (1, 2)) to specify the desired degree of freedom.
*   **masses** (`Optional`\[`List`\[`float`]]) – Mass of each atom the molecule may optionally be provided.

**Raises**

**ValueError** – Length of masses must match length of geometries.

## Methods

|                                                                                                                                                                                              |                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`absolute_angle`](qiskit.chemistry.drivers.Molecule.absolute_angle#qiskit.chemistry.drivers.Molecule.absolute_angle "qiskit.chemistry.drivers.Molecule.absolute_angle")                     | **type angle**`float`        |
| [`absolute_bending`](qiskit.chemistry.drivers.Molecule.absolute_bending#qiskit.chemistry.drivers.Molecule.absolute_bending "qiskit.chemistry.drivers.Molecule.absolute_bending")             | **type bend**`float`         |
| [`absolute_distance`](qiskit.chemistry.drivers.Molecule.absolute_distance#qiskit.chemistry.drivers.Molecule.absolute_distance "qiskit.chemistry.drivers.Molecule.absolute_distance")         | **type distance**`float`     |
| [`absolute_stretching`](qiskit.chemistry.drivers.Molecule.absolute_stretching#qiskit.chemistry.drivers.Molecule.absolute_stretching "qiskit.chemistry.drivers.Molecule.absolute_stretching") | **type perturbation**`float` |
| [`relative_bending`](qiskit.chemistry.drivers.Molecule.relative_bending#qiskit.chemistry.drivers.Molecule.relative_bending "qiskit.chemistry.drivers.Molecule.relative_bending")             | **type bend**`float`         |
| [`relative_stretching`](qiskit.chemistry.drivers.Molecule.relative_stretching#qiskit.chemistry.drivers.Molecule.relative_stretching "qiskit.chemistry.drivers.Molecule.relative_stretching") | **type perturbation**`float` |

## Attributes

<span id="undefined" />

### charge

Get charge

**Return type**

`int`

<span id="undefined" />

### geometry

Get geometry accounting for any perturbations

**Return type**

`List`\[`Tuple`\[`str`, `List`\[`float`]]]

<span id="undefined" />

### masses

Get masses

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### multiplicity

Get multiplicity

**Return type**

`int`

<span id="undefined" />

### perturbations

Get perturbations

**Return type**

`Optional`\[`List`\[`float`]]

<span id="undefined" />

### units

The geometry coordinate units
