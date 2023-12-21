---
title: IgnisLogging
description: API reference for qiskit.ignis.logging.IgnisLogging
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.logging.IgnisLogging
---

# IgnisLogging

<span id="qiskit.ignis.logging.IgnisLogging" />

`IgnisLogging`

Singleton class to configure file logging via IgnisLogger

Logging to file is enabled only if there is a config file present. Otherwise IgnisLogger will behave as a regular logger.

Config file is assumed to be in \<user home>/.qiskit/logging.yaml

**Config file fields:**

file\_logging: \{true/false} - Specifies whether file logging is enabled

log\_file: \<path> - path to the log file. If not specified, ignis.log will be used

max\_size: \<# bytes> - maximum size limit for a given log file. If not specified file size is unlimited

max\_rotations: \<count> - maximum number of log files to rotate (oldest file is deleted in case count is reached)

## Methods

|                                                                                                                                                          |                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`IgnisLogging.default_datetime_fmt`](qiskit.ignis.logging.IgnisLogging.default_datetime_fmt "qiskit.ignis.logging.IgnisLogging.default_datetime_fmt")() | Get the default date time format used for writing log entries |
| [`IgnisLogging.get_file_handler`](qiskit.ignis.logging.IgnisLogging.get_file_handler "qiskit.ignis.logging.IgnisLogging.get_file_handler")()             | Configure and retrieve the RotatingFileHandler object.        |
| [`IgnisLogging.get_log_file`](qiskit.ignis.logging.IgnisLogging.get_log_file "qiskit.ignis.logging.IgnisLogging.get_log_file")()                         | Get the name of the log file                                  |
| [`IgnisLogging.get_logger`](qiskit.ignis.logging.IgnisLogging.get_logger "qiskit.ignis.logging.IgnisLogging.get_logger")(name)                           | Return an IgnisLogger object                                  |

