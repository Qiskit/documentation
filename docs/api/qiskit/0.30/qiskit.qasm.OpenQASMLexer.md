# OpenQASMLexer

<span id="undefined" />

`OpenQASMLexer(*args, **kwds)`

Bases: `pygments.lexer.RegexLexer`

A pygments lexer for OpenQasm.

## Methods

|                                                                                                                                                                                  |                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`add_filter`](qiskit.qasm.OpenQASMLexer.add_filter#qiskit.qasm.OpenQASMLexer.add_filter "qiskit.qasm.OpenQASMLexer.add_filter")                                                 | Add a new stream filter to this lexer.                                                            |
| [`analyse_text`](qiskit.qasm.OpenQASMLexer.analyse_text#qiskit.qasm.OpenQASMLexer.analyse_text "qiskit.qasm.OpenQASMLexer.analyse_text")                                         | Has to return a float between `0` and `1` that indicates if a lexer wants to highlight this text. |
| [`get_tokens`](qiskit.qasm.OpenQASMLexer.get_tokens#qiskit.qasm.OpenQASMLexer.get_tokens "qiskit.qasm.OpenQASMLexer.get_tokens")                                                 | Return an iterable of (tokentype, value) pairs generated from text.                               |
| [`get_tokens_unprocessed`](qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed#qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed "qiskit.qasm.OpenQASMLexer.get_tokens_unprocessed") | Split `text` into (tokentype, text) pairs.                                                        |

## Attributes

<span id="undefined" />

### alias\_filenames

`= []`

<span id="undefined" />

### aliases

`= ['qasm']`

<span id="undefined" />

### filenames

`= ['*.qasm']`

<span id="undefined" />

### flags

`= 8`

<span id="undefined" />

### gates

`= ['id', 'cx', 'x', 'y', 'z', 's', 'sdg', 'h', 't', 'tdg', 'ccx', 'c3x', 'c4x', 'c3sqrtx', 'rx', 'ry', 'rz', 'cz', 'cy', 'ch', 'swap', 'cswap', 'crx', 'cry', 'crz', 'cu1', 'cu3', 'rxx', 'rzz', 'rccx', 'rc3x', 'u1', 'u2', 'u3']`

<span id="undefined" />

### mimetypes

`= []`

<span id="undefined" />

### name

`= 'OpenQASM'`

<span id="undefined" />

### priority

`= 0`

<span id="undefined" />

### tokens = \{'gate'

`= {'gate':`

`= {'gate': [('[unitary\\d+]', Token.Keyword.Type, '#push'), ('p\\d+', Token.Text, '#push')], 'if_keywords': [('[a-zA-Z0-9_]*', Token.Literal.String, '#pop'), ('\\d+', Token.Literal.Number, '#push'), ('.*\\(', Token.Text, 'params')], 'index': [('\\d+', Token.Literal.Number, '#pop')], 'keywords': [('\\s*("([^"]|"")*")', Token.Literal.String, '#push'), ('\\d+', Token.Literal.Number, '#push'), ('.*\\(', Token.Text, 'params')], 'params': [('[a-zA-Z_][a-zA-Z0-9_]*', Token.Text, '#push'), ('\\d+', Token.Literal.Number, '#push'), ('(\\d+\\.\\d*|\\d*\\.\\d+)([eEf][+-]?[0-9]+)?', Token.Literal.Number, '#push'), ('\\)', Token.Text)], 'root': [('\\n', Token.Text), ('[^\\S\\n]+', Token.Text), ('//\\n', Token.Comment), ('//.*?$', Token.Comment.Single), ('(OPENQASM|include)\\b', Token.Keyword.Reserved, 'keywords'), ('(qreg|creg)\\b', Token.Keyword.Declaration), ('(if)\\b', Token.Keyword.Reserved, 'if_keywords'), ('(pi)\\b', Token.Name.Constant), ('(barrier|measure|reset)\\b', Token.Name.Builtin, 'params'), ('(id|cx|x|y|z|s|sdg|h|t|tdg|ccx|c3x|c4x|c3sqrtx|rx|ry|rz|cz|cy|ch|swap|cswap|crx|cry|crz|cu1|cu3|rxx|rzz|rccx|rc3x|u1|u2|u3)\\b', Token.Keyword.Type, 'params'), ('[unitary\\d+]', Token.Keyword.Type), ('(gate)\\b', Token.Name.Function, 'gate'), ('[a-zA-Z_][a-zA-Z0-9_]*', Token.Text, 'index')]}`
