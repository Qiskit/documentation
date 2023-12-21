---
title: OpenQASMLexer
description: API reference for qiskit.qasm.OpenQASMLexer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qasm.OpenQASMLexer
---

# OpenQASMLexer

<span id="qiskit.qasm.OpenQASMLexer" />

`OpenQASMLexer(*args, **kwds)`

A pygments lexer for OpenQasm.

## Attributes

|                                                                                                                          |                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [`OpenQASMLexer.alias_filenames`](qiskit.qasm.OpenQASMLexer.alias_filenames "qiskit.qasm.OpenQASMLexer.alias_filenames") | Secondary file name globs                                         |
| [`OpenQASMLexer.aliases`](qiskit.qasm.OpenQASMLexer.aliases "qiskit.qasm.OpenQASMLexer.aliases")                         | Shortcuts for the lexer                                           |
| [`OpenQASMLexer.filenames`](qiskit.qasm.OpenQASMLexer.filenames "qiskit.qasm.OpenQASMLexer.filenames")                   | File name globs                                                   |
| [`OpenQASMLexer.flags`](qiskit.qasm.OpenQASMLexer.flags "qiskit.qasm.OpenQASMLexer.flags")                               | Flags for compiling the regular expressions.                      |
| [`OpenQASMLexer.gates`](qiskit.qasm.OpenQASMLexer.gates "qiskit.qasm.OpenQASMLexer.gates")                               |                                                                   |
| [`OpenQASMLexer.mimetypes`](qiskit.qasm.OpenQASMLexer.mimetypes "qiskit.qasm.OpenQASMLexer.mimetypes")                   | MIME types                                                        |
| [`OpenQASMLexer.name`](qiskit.qasm.OpenQASMLexer.name "qiskit.qasm.OpenQASMLexer.name")                                  | Name of the lexer                                                 |
| [`OpenQASMLexer.priority`](qiskit.qasm.OpenQASMLexer.priority "qiskit.qasm.OpenQASMLexer.priority")                      | Priority, should multiple lexers match and no content is provided |
| [`OpenQASMLexer.tokens`](qiskit.qasm.OpenQASMLexer.tokens "qiskit.qasm.OpenQASMLexer.tokens")                            | Dict of `{'state': [(regex, tokentype, new_state), ...], ...}`    |

## Methods

|                                                                                                                                                           |                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`OpenQASMLexer.add_filter`](qiskit.qasm.OpenQASMLexer.add_filter "qiskit.qasm.OpenQASMLexer.add_filter")(filter\_, \*\*options)                          | Add a new stream filter to this lexer.                                                            |
| [`OpenQASMLexer.analyse_text`](qiskit.qasm.OpenQASMLexer.analyse_text "qiskit.qasm.OpenQASMLexer.analyse_text")(text)                                     | Has to return a float between `0` and `1` that indicates if a lexer wants to highlight this text. |
| [`OpenQASMLexer.get_tokens`](qiskit.qasm.OpenQASMLexer.get_tokens "qiskit.qasm.OpenQASMLexer.get_tokens")(text\[, unfiltered])                            | Return an iterable of (tokentype, value) pairs generated from text.                               |
| [`OpenQASMLexer.get_tokens_unprocessed`](qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed "qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed")(text\[, …]) | Split `text` into (tokentype, text) pairs.                                                        |

