---
title: IgnisLogger
description: API reference for qiskit.ignis.logging.IgnisLogger
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.logging.IgnisLogger
---

# IgnisLogger

<span id="qiskit.ignis.logging.IgnisLogger" />

`IgnisLogger(name, level=0)`

A logger class for Ignis

IgnisLogger is a like any other `logging.Logger` object except it has an additional method, [`log_to_file()`](qiskit.ignis.logging.IgnisLogger.log_to_file "qiskit.ignis.logging.IgnisLogger.log_to_file"), used to log data in the form of key:value pairs to a log file. Logging configuration is performed via a configuration file and is handled by IgnisLogging.

Refer to Python’s logging documentation for more details on how to use logging in Python

Initialize the IgnisLogger object

**Parameters**

*   **name** (`str`) – name of the logger. Usually set to package name using \_\_name\_\_
*   **level** (*logging.NOTSET*) – Verbosity level (use logging package enums)

## Attributes

|                                                                                                              |   |
| ------------------------------------------------------------------------------------------------------------ | - |
| [`IgnisLogger.manager`](qiskit.ignis.logging.IgnisLogger.manager "qiskit.ignis.logging.IgnisLogger.manager") |   |
| [`IgnisLogger.root`](qiskit.ignis.logging.IgnisLogger.root "qiskit.ignis.logging.IgnisLogger.root")          |   |

## Methods

|                                                                                                                                                       |                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [`IgnisLogger.addFilter`](qiskit.ignis.logging.IgnisLogger.addFilter "qiskit.ignis.logging.IgnisLogger.addFilter")(filter)                            | Add the specified filter to this handler.                                                                   |
| [`IgnisLogger.addHandler`](qiskit.ignis.logging.IgnisLogger.addHandler "qiskit.ignis.logging.IgnisLogger.addHandler")(hdlr)                           | Add the specified handler to this logger.                                                                   |
| [`IgnisLogger.callHandlers`](qiskit.ignis.logging.IgnisLogger.callHandlers "qiskit.ignis.logging.IgnisLogger.callHandlers")(record)                   | Pass a record to all relevant handlers.                                                                     |
| [`IgnisLogger.configure`](qiskit.ignis.logging.IgnisLogger.configure "qiskit.ignis.logging.IgnisLogger.configure")(sh, conf\_file\_exists)            | Internal configuration method of IgnisLogger.                                                               |
| [`IgnisLogger.critical`](qiskit.ignis.logging.IgnisLogger.critical "qiskit.ignis.logging.IgnisLogger.critical")(msg, \*args, \*\*kwargs)              | Log ‘msg % args’ with severity ‘CRITICAL’.                                                                  |
| [`IgnisLogger.debug`](qiskit.ignis.logging.IgnisLogger.debug "qiskit.ignis.logging.IgnisLogger.debug")(msg, \*args, \*\*kwargs)                       | Log ‘msg % args’ with severity ‘DEBUG’.                                                                     |
| [`IgnisLogger.disable_file_logging`](qiskit.ignis.logging.IgnisLogger.disable_file_logging "qiskit.ignis.logging.IgnisLogger.disable_file_logging")() | Disable file logging for this logger object (note there is a single object for a given logger name          |
| [`IgnisLogger.enable_file_logging`](qiskit.ignis.logging.IgnisLogger.enable_file_logging "qiskit.ignis.logging.IgnisLogger.enable_file_logging")()    | Enable file logging for this logger object (note there is a single object for a given logger name           |
| [`IgnisLogger.error`](qiskit.ignis.logging.IgnisLogger.error "qiskit.ignis.logging.IgnisLogger.error")(msg, \*args, \*\*kwargs)                       | Log ‘msg % args’ with severity ‘ERROR’.                                                                     |
| [`IgnisLogger.exception`](qiskit.ignis.logging.IgnisLogger.exception "qiskit.ignis.logging.IgnisLogger.exception")(msg, \*args\[, exc\_info])         | Convenience method for logging an ERROR with exception information.                                         |
| [`IgnisLogger.fatal`](qiskit.ignis.logging.IgnisLogger.fatal "qiskit.ignis.logging.IgnisLogger.fatal")(msg, \*args, \*\*kwargs)                       | Log ‘msg % args’ with severity ‘CRITICAL’.                                                                  |
| [`IgnisLogger.filter`](qiskit.ignis.logging.IgnisLogger.filter "qiskit.ignis.logging.IgnisLogger.filter")(record)                                     | Determine if a record is loggable by consulting all the filters.                                            |
| [`IgnisLogger.findCaller`](qiskit.ignis.logging.IgnisLogger.findCaller "qiskit.ignis.logging.IgnisLogger.findCaller")(\[stack\_info])                 | Find the stack frame of the caller so that we can note the source file name, line number and function name. |
| [`IgnisLogger.getChild`](qiskit.ignis.logging.IgnisLogger.getChild "qiskit.ignis.logging.IgnisLogger.getChild")(suffix)                               | Get a logger which is a descendant to this one.                                                             |
| [`IgnisLogger.getEffectiveLevel`](qiskit.ignis.logging.IgnisLogger.getEffectiveLevel "qiskit.ignis.logging.IgnisLogger.getEffectiveLevel")()          | Get the effective level for this logger.                                                                    |
| [`IgnisLogger.handle`](qiskit.ignis.logging.IgnisLogger.handle "qiskit.ignis.logging.IgnisLogger.handle")(record)                                     | Call the handlers for the specified record.                                                                 |
| [`IgnisLogger.hasHandlers`](qiskit.ignis.logging.IgnisLogger.hasHandlers "qiskit.ignis.logging.IgnisLogger.hasHandlers")()                            | See if this logger has any handlers configured.                                                             |
| [`IgnisLogger.info`](qiskit.ignis.logging.IgnisLogger.info "qiskit.ignis.logging.IgnisLogger.info")(msg, \*args, \*\*kwargs)                          | Log ‘msg % args’ with severity ‘INFO’.                                                                      |
| [`IgnisLogger.isEnabledFor`](qiskit.ignis.logging.IgnisLogger.isEnabledFor "qiskit.ignis.logging.IgnisLogger.isEnabledFor")(level)                    | Is this logger enabled for level ‘level’?                                                                   |
| [`IgnisLogger.log`](qiskit.ignis.logging.IgnisLogger.log "qiskit.ignis.logging.IgnisLogger.log")(level, msg, \*args, \*\*kwargs)                      | Log ‘msg % args’ with the integer severity ‘level’.                                                         |
| [`IgnisLogger.log_to_file`](qiskit.ignis.logging.IgnisLogger.log_to_file "qiskit.ignis.logging.IgnisLogger.log_to_file")(\*\*kwargs)                  | Log key:value pairs to a log file.                                                                          |
| [`IgnisLogger.makeRecord`](qiskit.ignis.logging.IgnisLogger.makeRecord "qiskit.ignis.logging.IgnisLogger.makeRecord")(name, level, fn, lno, …)        | A factory method which can be overridden in subclasses to create specialized LogRecords.                    |
| [`IgnisLogger.removeFilter`](qiskit.ignis.logging.IgnisLogger.removeFilter "qiskit.ignis.logging.IgnisLogger.removeFilter")(filter)                   | Remove the specified filter from this handler.                                                              |
| [`IgnisLogger.removeHandler`](qiskit.ignis.logging.IgnisLogger.removeHandler "qiskit.ignis.logging.IgnisLogger.removeHandler")(hdlr)                  | Remove the specified handler from this logger.                                                              |
| [`IgnisLogger.setLevel`](qiskit.ignis.logging.IgnisLogger.setLevel "qiskit.ignis.logging.IgnisLogger.setLevel")(level)                                | Set the logging level of this logger.                                                                       |
| [`IgnisLogger.warn`](qiskit.ignis.logging.IgnisLogger.warn "qiskit.ignis.logging.IgnisLogger.warn")(msg, \*args, \*\*kwargs)                          |                                                                                                             |
| [`IgnisLogger.warning`](qiskit.ignis.logging.IgnisLogger.warning "qiskit.ignis.logging.IgnisLogger.warning")(msg, \*args, \*\*kwargs)                 | Log ‘msg % args’ with severity ‘WARNING’.                                                                   |

