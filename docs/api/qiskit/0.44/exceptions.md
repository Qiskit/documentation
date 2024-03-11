---
title: exceptions
description: API reference for qiskit.exceptions
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.exceptions
---

<span id="module-qiskit.exceptions" />

<span id="qiskit-exceptions" />

<span id="top-level-exceptions-qiskit-exceptions" />

# Top-level exceptions

<span id="module-qiskit.exceptions" />

`qiskit.exceptions`

All Qiskit-related errors raised by Qiskit are subclasses of the base:

### QiskitError

<span id="qiskit.exceptions.QiskitError" />

`qiskit.exceptions.QiskitError(*message)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/exceptions.py "view source code")

Base class for errors raised by Qiskit.

Set the error message.

<Admonition title="Note" type="note">
  Errors that are just general programming errors, such as incorrect typing, may still raise standard Python errors such as `TypeError`. [`QiskitError`](#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") is generally for errors raised in usage that is particular to Qiskit.
</Admonition>

Many of the Qiskit subpackages define their own more granular error, to help in catching only the subset of errors you care about. For example, [`qiskit.circuit`](circuit#module-qiskit.circuit "qiskit.circuit") almost exclusively uses [`CircuitError`](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError"), while both [`QASM2ExportError`](qasm2#qiskit.qasm2.QASM2ExportError "qiskit.qasm2.QASM2ExportError") and [`QASM2ParseError`](qasm2#qiskit.qasm2.QASM2ParseError "qiskit.qasm2.QASM2ParseError") derive from [`QASM2Error`](qasm2#qiskit.qasm2.QASM2Error "qiskit.qasm2.QASM2Error") in [`qiskit.qasm2`](qasm2#module-qiskit.qasm2 "qiskit.qasm2"), which is in turn a type of [`QiskitError`](#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError").

Qiskit has several optional features that depend on other packages that are not required for a minimal install. You can read more about those, and ways to check for their presence, in [`qiskit.utils.optionals`](utils#module-qiskit.utils.optionals "qiskit.utils.optionals"). Trying to use a feature that requires an optional extra will raise a particular error, which subclasses both [`QiskitError`](#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") and the Python built-in `ImportError`.

### MissingOptionalLibraryError

<span id="qiskit.exceptions.MissingOptionalLibraryError" />

`qiskit.exceptions.MissingOptionalLibraryError(libname, name, pip_install=None, msg=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/exceptions.py "view source code")

Raised when an optional library is missing.

Set the error message. :param libname: Name of missing library :param name: Name of class, function, module that uses this library :param pip\_install: pip install command, if any :param msg: Descriptive message, if any

Two more uncommon errors relate to failures in reading user-configuration files, or specifying a filename that cannot be used:

### QiskitUserConfigError

<span id="qiskit.exceptions.QiskitUserConfigError" />

`qiskit.exceptions.QiskitUserConfigError(*message)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/exceptions.py "view source code")

Raised when an error is encountered reading a user config file.

Set the error message.

### InvalidFileError

<span id="qiskit.exceptions.InvalidFileError" />

`qiskit.exceptions.InvalidFileError(*message)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/exceptions.py "view source code")

Raised when the file provided is not valid for the specific task.

Set the error message.

