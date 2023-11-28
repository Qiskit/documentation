# IgnisLogReader

<span id="undefined" />

`IgnisLogReader`

Bases: `object`

Class to read from Ignis log files

Reads and constructs tabular representation of logged data based on date/time and key criteria

## Methods

|                                                                                                                                                                            |                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`get_log_files`](qiskit.ignis.logging.IgnisLogReader.get_log_files#qiskit.ignis.logging.IgnisLogReader.get_log_files "qiskit.ignis.logging.IgnisLogReader.get_log_files") | Get Names of all log files (several may be present due to logging file rotation). |
| [`read_values`](qiskit.ignis.logging.IgnisLogReader.read_values#qiskit.ignis.logging.IgnisLogReader.read_values "qiskit.ignis.logging.IgnisLogReader.read_values")         | Retrieve log lines using key and date/time filtering criteria                     |
