---
title: OpenQASMLexer
description: API reference for qiskit.qasm.OpenQASMLexer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qasm.OpenQASMLexer
---

# qiskit.qasm.OpenQASMLexer

<span id="qiskit.qasm.OpenQASMLexer" />

`OpenQASMLexer(*args, **kwds)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/qasm/pygments/lexer.py "view source code")

A pygments lexer for OpenQasm.

### \_\_init\_\_

<span id="qiskit.qasm.OpenQASMLexer.__init__" />

`__init__(**options)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                  |                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.qasm.OpenQASMLexer.__init__ "qiskit.qasm.OpenQASMLexer.__init__")(\*\*options)                                              | Initialize self.                                                                                  |
| [`add_filter`](#qiskit.qasm.OpenQASMLexer.add_filter "qiskit.qasm.OpenQASMLexer.add_filter")(filter\_, \*\*options)                              | Add a new stream filter to this lexer.                                                            |
| [`analyse_text`](#qiskit.qasm.OpenQASMLexer.analyse_text "qiskit.qasm.OpenQASMLexer.analyse_text")(text)                                         | Has to return a float between `0` and `1` that indicates if a lexer wants to highlight this text. |
| [`get_tokens`](#qiskit.qasm.OpenQASMLexer.get_tokens "qiskit.qasm.OpenQASMLexer.get_tokens")(text\[, unfiltered])                                | Return an iterable of (tokentype, value) pairs generated from text.                               |
| [`get_tokens_unprocessed`](#qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed "qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed")(text\[, stack]) | Split `text` into (tokentype, text) pairs.                                                        |

## Attributes

|                   |   |
| ----------------- | - |
| `alias_filenames` |   |
| `aliases`         |   |
| `filenames`       |   |
| `flags`           |   |
| `gates`           |   |
| `mimetypes`       |   |
| `name`            |   |
| `priority`        |   |
| `tokens`          |   |

### add\_filter

<span id="qiskit.qasm.OpenQASMLexer.add_filter" />

`add_filter(filter_, **options)`

Add a new stream filter to this lexer.

### analyse\_text

<span id="qiskit.qasm.OpenQASMLexer.analyse_text" />

`static analyse_text(text)`

Has to return a float between `0` and `1` that indicates if a lexer wants to highlight this text. Used by `guess_lexer`. If this method returns `0` it won’t highlight it in any case, if it returns `1` highlighting with this lexer is guaranteed.

The LexerMeta metaclass automatically wraps this function so that it works like a static method (no `self` or `cls` parameter) and the return value is automatically converted to float. If the return value is an object that is boolean False it’s the same as if the return values was `0.0`.

### get\_tokens

<span id="qiskit.qasm.OpenQASMLexer.get_tokens" />

`get_tokens(text, unfiltered=False)`

Return an iterable of (tokentype, value) pairs generated from text. If unfiltered is set to True, the filtering mechanism is bypassed even if filters are defined.

Also preprocess the text, i.e. expand tabs and strip it if wanted and applies registered filters.

### get\_tokens\_unprocessed

<span id="qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed" />

`get_tokens_unprocessed(text, stack=('root'))`

Split `text` into (tokentype, text) pairs.

`stack` is the inital stack (default: `['root']`)

