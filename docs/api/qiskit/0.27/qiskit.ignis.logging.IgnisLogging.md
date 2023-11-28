# qiskit.ignis.logging.IgnisLogging

<span id="undefined" />

`IgnisLogging(log_config_path=None)`

Singleton class to configure file logging via IgnisLogger

Logging to file is enabled only if there is a config file present. Otherwise IgnisLogger will behave as a regular logger.

Config file is assumed to be in \<user home>/.qiskit/logging.yaml

**Config file fields:**

file\_logging: \{true/false} - Specifies whether file logging is enabled

log\_file: \<path> - path to the log file. If not specified, ignis.log will be used

max\_size: \<# bytes> - maximum size limit for a given log file. If not specified file size is unlimited

max\_rotations: \<count> - maximum number of log files to rotate (oldest file is deleted in case count is reached)

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                              |                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.logging.IgnisLogging.__init__ "qiskit.ignis.logging.IgnisLogging.__init__")()                                     | Initialize self.                                              |
| [`default_datetime_fmt`](#qiskit.ignis.logging.IgnisLogging.default_datetime_fmt "qiskit.ignis.logging.IgnisLogging.default_datetime_fmt")() | Get the default date time format used for writing log entries |
| [`get_file_handler`](#qiskit.ignis.logging.IgnisLogging.get_file_handler "qiskit.ignis.logging.IgnisLogging.get_file_handler")()             | Configure and retrieve the RotatingFileHandler object.        |
| [`get_log_file`](#qiskit.ignis.logging.IgnisLogging.get_log_file "qiskit.ignis.logging.IgnisLogging.get_log_file")()                         | Get the name of the log file                                  |
| [`get_logger`](#qiskit.ignis.logging.IgnisLogging.get_logger "qiskit.ignis.logging.IgnisLogging.get_logger")(name)                           | Return an IgnisLogger object                                  |

<span id="undefined" />

`default_datetime_fmt()`

Get the default date time format used for writing log entries

**Return type**

`str`

**Returns**

Default date time format

<span id="undefined" />

`get_file_handler()`

Configure and retrieve the RotatingFileHandler object. Called on demand the first time IgnisLoggers needs to write to a file

**Returns**

The configured RotatingFileHandler object

**Return type**

RotatingFileHandler

<span id="undefined" />

`get_log_file()`

Get the name of the log file

**Return type**

`str`

**Returns**

Name of the log file

<span id="undefined" />

`get_logger(name)`

Return an IgnisLogger object

To be used in by the code which needs logging.

**Parameters**

**name** (`str`) – Name of the module being logged

**Return type**

`IgnisLogger`

**Returns**

An IgnisLogger object
