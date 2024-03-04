---
title: IgnisLogging
description: API reference for qiskit.ignis.logging.IgnisLogging
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.logging.IgnisLogging
---

# IgnisLogging

<span id="qiskit.ignis.logging.IgnisLogging" />

`IgnisLogging` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/logging/ignis_logging.py "view source code")

Singleton class to configure file logging via IgnisLogger

Logging to file is enabled only if there is a config file present. Otherwise IgnisLogger will behave as a regular logger.

Config file is assumed to be in \<user home>/.qiskit/logging.yaml

**Config file fields:**

file\_logging: \{true/false} - Specifies whether file logging is enabled

log\_file: \<path> - path to the log file. If not specified, ignis.log will be used

max\_size: \<# bytes> - maximum size limit for a given log file. If not specified file size is unlimited

max\_rotations: \<count> - maximum number of log files to rotate (oldest file is deleted in case count is reached)

## Methods

### default\_datetime\_fmt

<span id="qiskit.ignis.logging.IgnisLogging.default_datetime_fmt" />

`IgnisLogging.default_datetime_fmt()`

Get the default date time format used for writing log entries

**Return type**

`str`

**Returns**

Default date time format

### get\_file\_handler

<span id="qiskit.ignis.logging.IgnisLogging.get_file_handler" />

`IgnisLogging.get_file_handler()`

Configure and retrieve the RotatingFileHandler object. Called on demand the first time IgnisLoggers needs to write to a file

**Returns**

The configured RotatingFileHandler object

**Return type**

RotatingFileHandler

### get\_log\_file

<span id="qiskit.ignis.logging.IgnisLogging.get_log_file" />

`IgnisLogging.get_log_file()`

Get the name of the log file

**Return type**

`str`

**Returns**

Name of the log file

### get\_logger

<span id="qiskit.ignis.logging.IgnisLogging.get_logger" />

`IgnisLogging.get_logger(name)`

Return an IgnisLogger object

To be used in by the code which needs logging.

**Parameters**

**name** (`str`) – Name of the module being logged

**Return type**

[`IgnisLogger`](qiskit.ignis.logging.IgnisLogger "qiskit.ignis.logging.ignis_logging.IgnisLogger")

**Returns**

An IgnisLogger object

