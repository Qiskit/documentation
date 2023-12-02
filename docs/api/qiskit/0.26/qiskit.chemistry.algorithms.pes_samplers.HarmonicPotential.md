# qiskit.chemistry.algorithms.pes\_samplers.HarmonicPotential

<span id="undefined" />

`HarmonicPotential(molecule)`

Implements a 1D Harmonic potential.

Input units are Angstroms (distance between the two atoms), and output units are Hartrees (molecular energy).

**Parameters**

**molecule** (`Molecule`) – the underlying molecule.

**Raises**

**ValueError** – Only implemented for diatomic molecules

<span id="undefined" />

`__init__(molecule)`

**Parameters**

**molecule** (`Molecule`) – the underlying molecule.

**Raises**

**ValueError** – Only implemented for diatomic molecules

## Methods

|                                                                                                                                                                                                                      |                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.__init__ "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.__init__")(molecule)                                                   | **type molecule**`Molecule`                                                                                                |
| [`dissociation_energy`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.dissociation_energy "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.dissociation_energy")(\[scaling])                | Returns the estimated dissociation energy for the current fit.                                                             |
| [`eval`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.eval "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.eval")(x)                                                                      | After fitting the data to the fit function, predict the energy at a point x.                                               |
| [`fit`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit")(xdata, ydata\[, initial\_vals, bounds\_list])                              | Fits a potential to computed molecular energies.                                                                           |
| [`fit_function`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit_function "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit_function")(x, k, r\_0, m\_shift)                           | Functional form of the potential.                                                                                          |
| [`fundamental_frequency`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fundamental_frequency "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fundamental_frequency")()                    | Returns the fundamental frequency for the current fit (in s^-1).                                                           |
| [`get_equilibrium_geometry`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_equilibrium_geometry "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_equilibrium_geometry")(\[scaling]) | Returns the interatomic distance corresponding to minimal energy.                                                          |
| [`get_maximum_trusted_level`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_maximum_trusted_level "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_maximum_trusted_level")(\[n])    | Returns the maximum energy level for which the particular implementation still provides a good approximation of reality.   |
| [`get_minimal_energy`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_minimal_energy "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_minimal_energy")(\[scaling])                   | Returns the smallest molecular energy for the current fit.                                                                 |
| [`get_num_modes`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_num_modes "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_num_modes")()                                            | This (1D) potential represents a single vibrational mode                                                                   |
| [`get_trust_region`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_trust_region "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_trust_region")()                                   | The potential will usually be well-defined (even if not useful) for arbitrary x so we return a fairly large interval here. |
| [`process_fit_data`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.process_fit_data "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.process_fit_data")(xdata, ydata)                       | Mostly for internal use. Preprocesses the data passed to fit\_to\_data()                                                   |
| [`update_molecule`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.update_molecule "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.update_molecule")(molecule)                              | Updates the underlying molecule.                                                                                           |
| [`vibrational_energy_level`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.vibrational_energy_level "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.vibrational_energy_level")(n)          | Returns the n-th vibrational energy level for the current fit (in Hartrees).                                               |
| [`wave_number`](#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.wave_number "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.wave_number")()                                                  | Returns the wave number for the current fit (in cm^-1).                                                                    |

<span id="undefined" />

`dissociation_energy(scaling=1.0)`

Returns the estimated dissociation energy for the current fit.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Hartrees)

**Return type**

`float`

**Returns**

estimated dissociation energy

<span id="undefined" />

`eval(x)`

After fitting the data to the fit function, predict the energy at a point x.

**Parameters**

**x** (`float`) – value to evaluate surface in

**Return type**

`float`

**Returns**

value of potential in point x

<span id="undefined" />

`fit(xdata, ydata, initial_vals=None, bounds_list=None)`

Fits a potential to computed molecular energies.

**Parameters**

*   **xdata** (`List`\[`float`]) – interatomic distance points (Angstroms)
*   **ydata** (`List`\[`float`]) – molecular energies (Hartrees)
*   **initial\_vals** (`Optional`\[`List`\[`float`]]) – Initial values for fit parameters. None for default. Order of parameters is k, r\_0 and m\_shift (see fit\_function implementation)
*   **bounds\_list** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – Bounds for the fit parameters. None for default. Order of parameters is k, r\_0 and m\_shift (see fit\_function implementation)

**Return type**

`None`

<span id="undefined" />

`static fit_function(x, k, r_0, m_shift)`

Functional form of the potential.

**Parameters**

*   **x** (`float`) – x parameter of harmonic potential functional form
*   **k** (`float`) – k parameter of harmonic potential functional form
*   **r\_0** (`float`) – r\_0 parameter of harmonic potential functional form
*   **m\_shift** (`float`) – m parameter of harmonic potential functional form

**Return type**

`float`

**Returns**

harmonic potential functional form

<span id="undefined" />

`fundamental_frequency()`

Returns the fundamental frequency for the current fit (in s^-1).

**Return type**

`float`

**Returns**

fundamental frequency for the current fit

<span id="undefined" />

`get_equilibrium_geometry(scaling=1.0)`

Returns the interatomic distance corresponding to minimal energy.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Angstroms)

**Return type**

`float`

**Returns**

geometry corresponding to minimal energy

<span id="undefined" />

`get_maximum_trusted_level(n=0)`

Returns the maximum energy level for which the particular implementation still provides a good approximation of reality. Default value of 100. Redefined where needed (see e.g. Morse).

**Parameters**

**n** (`int`) – vibronic mode

**Return type**

`float`

**Returns**

maximum\_trusted\_level setted

<span id="undefined" />

`get_minimal_energy(scaling=1.0)`

Returns the smallest molecular energy for the current fit.

**Parameters**

**scaling** (`float`) – Scaling to change units. (Default is 1.0 for Hartrees)

**Return type**

`float`

**Returns**

smallest molecular energy for the current fit

<span id="undefined" />

`get_num_modes()`

This (1D) potential represents a single vibrational mode

**Return type**

`int`

<span id="undefined" />

`get_trust_region()`

The potential will usually be well-defined (even if not useful) for arbitrary x so we return a fairly large interval here. Redefine in derived classes if needed.

**Return type**

`Tuple`\[`float`, `float`]

<span id="undefined" />

`classmethod process_fit_data(xdata, ydata)`

**Mostly for internal use. Preprocesses the data passed to fit\_to\_data()**

so that only the points around the minimum are fit (which gives more accurate vibrational modes).

**Parameters**

*   **xdata** (`List`\[`float`]) – xdata to be considered
*   **ydata** (`List`\[`float`]) – ydata to be considered

**Return type**

`Tuple`\[`list`, `list`]

**Returns**

the processed data that fit better to a harmonic potential

<span id="undefined" />

`update_molecule(molecule)`

Updates the underlying molecule.

**Parameters**

**molecule** (`Molecule`) – chemistry molecule

**Raises**

**ValueError** – Only implemented for diatomic molecules

**Return type**

`Molecule`

<span id="undefined" />

`vibrational_energy_level(n)`

Returns the n-th vibrational energy level for the current fit (in Hartrees).

**Parameters**

**n** (`int`) – vibrational mode

**Return type**

`float`

**Returns**

vibrational energy level for the current fit

<span id="undefined" />

`wave_number()`

Returns the wave number for the current fit (in cm^-1).

**Return type**

`int`

**Returns**

wave number for the current fit
