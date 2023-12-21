---
title: IgnisLogReader
description: API reference for qiskit.ignis.logging.IgnisLogReader
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.logging.IgnisLogReader
---

# IgnisLogReader

<span id="qiskit.ignis.logging.IgnisLogReader" />

`IgnisLogReader`

Class to read from Ignis log files

Reads and constructs tabular representation of logged data based on date/time and key criteria

## Methods

|                                                                                                                                                     |                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`IgnisLogReader.get_log_files`](qiskit.ignis.logging.IgnisLogReader.get_log_files "qiskit.ignis.logging.IgnisLogReader.get_log_files")()           | Get Names of all log files (several may be present due to logging file rotation). |
| [`IgnisLogReader.read_values`](qiskit.ignis.logging.IgnisLogReader.read_values "qiskit.ignis.logging.IgnisLogReader.read_values")(\[log\_files, …]) | Retrieve log lines using key and date/time filtering criteria                     |

