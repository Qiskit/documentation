# IgnisLogger

<span id="undefined" />

`IgnisLogger(name, level=0)`

Bases: `logging.Logger`

A logger class for Ignis

IgnisLogger is a like any other `logging.Logger` object except it has an additional method, [`log_to_file()`](qiskit.ignis.logging.IgnisLogger.log_to_file#qiskit.ignis.logging.IgnisLogger.log_to_file "qiskit.ignis.logging.IgnisLogger.log_to_file"), used to log data in the form of key:value pairs to a log file. Logging configuration is performed via a configuration file and is handled by IgnisLogging.

Refer to Python’s logging documentation for more details on how to use logging in Python

Initialize the IgnisLogger object

**Parameters**

*   **name** (`str`) – name of the logger. Usually set to package name using \_\_name\_\_
*   **level** (*logging.NOTSET*) – Verbosity level (use logging package enums)

## Methods

|                                                                                                                                                                                               |                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [`addFilter`](qiskit.ignis.logging.IgnisLogger.addFilter#qiskit.ignis.logging.IgnisLogger.addFilter "qiskit.ignis.logging.IgnisLogger.addFilter")                                             | Add the specified filter to this handler.                                                                   |
| [`addHandler`](qiskit.ignis.logging.IgnisLogger.addHandler#qiskit.ignis.logging.IgnisLogger.addHandler "qiskit.ignis.logging.IgnisLogger.addHandler")                                         | Add the specified handler to this logger.                                                                   |
| [`callHandlers`](qiskit.ignis.logging.IgnisLogger.callHandlers#qiskit.ignis.logging.IgnisLogger.callHandlers "qiskit.ignis.logging.IgnisLogger.callHandlers")                                 | Pass a record to all relevant handlers.                                                                     |
| [`configure`](qiskit.ignis.logging.IgnisLogger.configure#qiskit.ignis.logging.IgnisLogger.configure "qiskit.ignis.logging.IgnisLogger.configure")                                             | Internal configuration method of IgnisLogger.                                                               |
| [`critical`](qiskit.ignis.logging.IgnisLogger.critical#qiskit.ignis.logging.IgnisLogger.critical "qiskit.ignis.logging.IgnisLogger.critical")                                                 | Log ‘msg % args’ with severity ‘CRITICAL’.                                                                  |
| [`debug`](qiskit.ignis.logging.IgnisLogger.debug#qiskit.ignis.logging.IgnisLogger.debug "qiskit.ignis.logging.IgnisLogger.debug")                                                             | Log ‘msg % args’ with severity ‘DEBUG’.                                                                     |
| [`disable_file_logging`](qiskit.ignis.logging.IgnisLogger.disable_file_logging#qiskit.ignis.logging.IgnisLogger.disable_file_logging "qiskit.ignis.logging.IgnisLogger.disable_file_logging") | Disable file logging for this logger object (note there is a single object for a given logger name          |
| [`enable_file_logging`](qiskit.ignis.logging.IgnisLogger.enable_file_logging#qiskit.ignis.logging.IgnisLogger.enable_file_logging "qiskit.ignis.logging.IgnisLogger.enable_file_logging")     | Enable file logging for this logger object (note there is a single object for a given logger name           |
| [`error`](qiskit.ignis.logging.IgnisLogger.error#qiskit.ignis.logging.IgnisLogger.error "qiskit.ignis.logging.IgnisLogger.error")                                                             | Log ‘msg % args’ with severity ‘ERROR’.                                                                     |
| [`exception`](qiskit.ignis.logging.IgnisLogger.exception#qiskit.ignis.logging.IgnisLogger.exception "qiskit.ignis.logging.IgnisLogger.exception")                                             | Convenience method for logging an ERROR with exception information.                                         |
| [`fatal`](qiskit.ignis.logging.IgnisLogger.fatal#qiskit.ignis.logging.IgnisLogger.fatal "qiskit.ignis.logging.IgnisLogger.fatal")                                                             | Log ‘msg % args’ with severity ‘CRITICAL’.                                                                  |
| [`filter`](qiskit.ignis.logging.IgnisLogger.filter#qiskit.ignis.logging.IgnisLogger.filter "qiskit.ignis.logging.IgnisLogger.filter")                                                         | Determine if a record is loggable by consulting all the filters.                                            |
| [`findCaller`](qiskit.ignis.logging.IgnisLogger.findCaller#qiskit.ignis.logging.IgnisLogger.findCaller "qiskit.ignis.logging.IgnisLogger.findCaller")                                         | Find the stack frame of the caller so that we can note the source file name, line number and function name. |
| [`getChild`](qiskit.ignis.logging.IgnisLogger.getChild#qiskit.ignis.logging.IgnisLogger.getChild "qiskit.ignis.logging.IgnisLogger.getChild")                                                 | Get a logger which is a descendant to this one.                                                             |
| [`getEffectiveLevel`](qiskit.ignis.logging.IgnisLogger.getEffectiveLevel#qiskit.ignis.logging.IgnisLogger.getEffectiveLevel "qiskit.ignis.logging.IgnisLogger.getEffectiveLevel")             | Get the effective level for this logger.                                                                    |
| [`handle`](qiskit.ignis.logging.IgnisLogger.handle#qiskit.ignis.logging.IgnisLogger.handle "qiskit.ignis.logging.IgnisLogger.handle")                                                         | Call the handlers for the specified record.                                                                 |
| [`hasHandlers`](qiskit.ignis.logging.IgnisLogger.hasHandlers#qiskit.ignis.logging.IgnisLogger.hasHandlers "qiskit.ignis.logging.IgnisLogger.hasHandlers")                                     | See if this logger has any handlers configured.                                                             |
| [`info`](qiskit.ignis.logging.IgnisLogger.info#qiskit.ignis.logging.IgnisLogger.info "qiskit.ignis.logging.IgnisLogger.info")                                                                 | Log ‘msg % args’ with severity ‘INFO’.                                                                      |
| [`isEnabledFor`](qiskit.ignis.logging.IgnisLogger.isEnabledFor#qiskit.ignis.logging.IgnisLogger.isEnabledFor "qiskit.ignis.logging.IgnisLogger.isEnabledFor")                                 | Is this logger enabled for level ‘level’?                                                                   |
| [`log`](qiskit.ignis.logging.IgnisLogger.log#qiskit.ignis.logging.IgnisLogger.log "qiskit.ignis.logging.IgnisLogger.log")                                                                     | Log ‘msg % args’ with the integer severity ‘level’.                                                         |
| [`log_to_file`](qiskit.ignis.logging.IgnisLogger.log_to_file#qiskit.ignis.logging.IgnisLogger.log_to_file "qiskit.ignis.logging.IgnisLogger.log_to_file")                                     | Log key:value pairs to a log file.                                                                          |
| [`makeRecord`](qiskit.ignis.logging.IgnisLogger.makeRecord#qiskit.ignis.logging.IgnisLogger.makeRecord "qiskit.ignis.logging.IgnisLogger.makeRecord")                                         | A factory method which can be overridden in subclasses to create specialized LogRecords.                    |
| [`removeFilter`](qiskit.ignis.logging.IgnisLogger.removeFilter#qiskit.ignis.logging.IgnisLogger.removeFilter "qiskit.ignis.logging.IgnisLogger.removeFilter")                                 | Remove the specified filter from this handler.                                                              |
| [`removeHandler`](qiskit.ignis.logging.IgnisLogger.removeHandler#qiskit.ignis.logging.IgnisLogger.removeHandler "qiskit.ignis.logging.IgnisLogger.removeHandler")                             | Remove the specified handler from this logger.                                                              |
| [`setLevel`](qiskit.ignis.logging.IgnisLogger.setLevel#qiskit.ignis.logging.IgnisLogger.setLevel "qiskit.ignis.logging.IgnisLogger.setLevel")                                                 | Set the logging level of this logger.                                                                       |
| [`warn`](qiskit.ignis.logging.IgnisLogger.warn#qiskit.ignis.logging.IgnisLogger.warn "qiskit.ignis.logging.IgnisLogger.warn")                                                                 |                                                                                                             |
| [`warning`](qiskit.ignis.logging.IgnisLogger.warning#qiskit.ignis.logging.IgnisLogger.warning "qiskit.ignis.logging.IgnisLogger.warning")                                                     | Log ‘msg % args’ with severity ‘WARNING’.                                                                   |

## Attributes

<span id="undefined" />

### manager

`=`

<span id="undefined" />

### root

`=`
