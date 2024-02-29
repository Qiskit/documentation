---
title: OpenQASMLexer
description: API reference for qiskit.qasm.OpenQASMLexer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qasm.OpenQASMLexer
---

# OpenQASMLexer

<span id="qiskit.qasm.OpenQASMLexer" />

`OpenQASMLexer(*args, **kwds)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/qasm/pygments/lexer.py "view source code")

Bases: `pygments.lexer.RegexLexer`

A pygments lexer for OpenQasm.

## Methods

### add\_filter

<span id="qiskit.qasm.OpenQASMLexer.add_filter" />

`OpenQASMLexer.add_filter(filter_, **options)`

Add a new stream filter to this lexer.

### analyse\_text

<span id="qiskit.qasm.OpenQASMLexer.analyse_text" />

`static OpenQASMLexer.analyse_text(text)`

Has to return a float between `0` and `1` that indicates if a lexer wants to highlight this text. Used by `guess_lexer`. If this method returns `0` it won’t highlight it in any case, if it returns `1` highlighting with this lexer is guaranteed.

The LexerMeta metaclass automatically wraps this function so that it works like a static method (no `self` or `cls` parameter) and the return value is automatically converted to float. If the return value is an object that is boolean False it’s the same as if the return values was `0.0`.

### get\_tokens

<span id="qiskit.qasm.OpenQASMLexer.get_tokens" />

`OpenQASMLexer.get_tokens(text, unfiltered=False)`

Return an iterable of (tokentype, value) pairs generated from text. If unfiltered is set to True, the filtering mechanism is bypassed even if filters are defined.

Also preprocess the text, i.e. expand tabs and strip it if wanted and applies registered filters.

### get\_tokens\_unprocessed

<span id="qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed" />

`OpenQASMLexer.get_tokens_unprocessed(text, stack=('root'))`

Split `text` into (tokentype, text) pairs.

`stack` is the inital stack (default: `['root']`)

## Attributes

<span id="qiskit.qasm.OpenQASMLexer.alias_filenames" />

### alias\_filenames

`= []`

<span id="qiskit.qasm.OpenQASMLexer.aliases" />

### aliases

`= ['qasm']`

<span id="qiskit.qasm.OpenQASMLexer.filenames" />

### filenames

`= ['*.qasm']`

<span id="qiskit.qasm.OpenQASMLexer.flags" />

### flags

`= 8`

<span id="qiskit.qasm.OpenQASMLexer.gates" />

### gates

`= ['id', 'cx', 'x', 'y', 'z', 's', 'sdg', 'h', 't', 'tdg', 'ccx', 'c3x', 'c4x', 'c3sqrtx', 'rx', 'ry', 'rz', 'cz', 'cy', 'ch', 'swap', 'cswap', 'crx', 'cry', 'crz', 'cu1', 'cu3', 'rxx', 'rzz', 'rccx', 'rc3x', 'u1', 'u2', 'u3']`

<span id="qiskit.qasm.OpenQASMLexer.mimetypes" />

### mimetypes

`= []`

<span id="qiskit.qasm.OpenQASMLexer.name" />

### name

`= 'OpenQASM'`

<span id="qiskit.qasm.OpenQASMLexer.priority" />

### priority

`= 0`

<span id="qiskit.qasm.OpenQASMLexer.tokens" />

### tokens

`= {'gate': [('[unitary\\d+]', Token.Keyword.Type, '#push'), ('p\\d+', Token.Text, '#push')], 'if_keywords': [('[a-zA-Z0-9_]*', Token.Literal.String, '#pop'), ('\\d+', Token.Literal.Number, '#push'), ('.*\\(', Token.Text, 'params')], 'index': [('\\d+', Token.Literal.Number, '#pop')], 'keywords': [('\\s*("([^"]|"")*")', Token.Literal.String, '#push'), ('\\d+', Token.Literal.Number, '#push'), ('.*\\(', Token.Text, 'params')], 'params': [('[a-zA-Z_][a-zA-Z0-9_]*', Token.Text, '#push'), ('\\d+', Token.Literal.Number, '#push'), ('(\\d+\\.\\d*|\\d*\\.\\d+)([eEf][+-]?[0-9]+)?', Token.Literal.Number, '#push'), ('\\)', Token.Text)], 'root': [('\\n', Token.Text), ('[^\\S\\n]+', Token.Text), ('//\\n', Token.Comment), ('//.*?$', Token.Comment.Single), ('(OPENQASM|include)\\b', Token.Keyword.Reserved, 'keywords'), ('(qreg|creg)\\b', Token.Keyword.Declaration), ('(if)\\b', Token.Keyword.Reserved, 'if_keywords'), ('(pi)\\b', Token.Name.Constant), ('(barrier|measure|reset)\\b', Token.Name.Builtin, 'params'), ('(id|cx|x|y|z|s|sdg|h|t|tdg|ccx|c3x|c4x|c3sqrtx|rx|ry|rz|cz|cy|ch|swap|cswap|crx|cry|crz|cu1|cu3|rxx|rzz|rccx|rc3x|u1|u2|u3)\\b', Token.Keyword.Type, 'params'), ('[unitary\\d+]', Token.Keyword.Type), ('(gate)\\b', Token.Name.Function, 'gate'), ('[a-zA-Z_][a-zA-Z0-9_]*', Token.Text, 'index')]}`

