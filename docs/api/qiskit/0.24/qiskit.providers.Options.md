---
title: Options
description: API reference for qiskit.providers.Options
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.Options
---

<span id="qiskit-providers-options" />

# qiskit.providers.Options

<span id="qiskit.providers.Options" />

`Options` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/providers/options.py "view source code")

Base options object

This class is the abstract class that all backend options are based on. The properties of the class are intended to be all dynamically adjustable so that a user can reconfigure the backend on demand. If a property is immutable to the user (eg something like number of qubits) that should be a configuration of the backend class itself instead of the options.

### \_\_init\_\_

<span id="qiskit.providers.Options.__init__" />

`__init__(*args, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                    |                                      |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| [`__init__`](#qiskit.providers.Options.__init__ "qiskit.providers.Options.__init__")(\*args, \*\*kwargs)           | Initialize self.                     |
| [`get`](#qiskit.providers.Options.get "qiskit.providers.Options.get")(field\[, default])                           | Get an option value for a given key. |
| [`update_options`](#qiskit.providers.Options.update_options "qiskit.providers.Options.update_options")(\*\*fields) | Update options with kwargs           |

### get

<span id="qiskit.providers.Options.get" />

`get(field, default=None)`

Get an option value for a given key.

### update\_options

<span id="qiskit.providers.Options.update_options" />

`update_options(**fields)`

Update options with kwargs

