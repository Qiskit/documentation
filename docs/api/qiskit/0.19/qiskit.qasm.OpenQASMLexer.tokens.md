---
title: tokens
description: API reference for qiskit.qasm.OpenQASMLexer.tokens
in_page_toc_min_heading_level: 1
python_api_type: attribute
python_api_name: qiskit.qasm.OpenQASMLexer.tokens
---

# tokens

<span id="qiskit.qasm.OpenQASMLexer.tokens" />

`= {'gate': [('[unitary\\d+]', Token.Keyword.Type, '#push'), ('p\\d+', Token.Text, '#push')], 'if_keywords': [('[a-zA-Z0-9_]*', Token.Literal.String, '#pop'), ('\\d+', Token.Literal.Number, '#push'), ('.*\\(', Token.Text, 'params')], 'index': [('\\d+', Token.Literal.Number, '#pop')], 'keywords': [('\\s*("([^"]|"")*")', Token.Literal.String, '#push'), ('\\d+', Token.Literal.Number, '#push'), ('.*\\(', Token.Text, 'params')], 'params': [('[a-zA-Z_][a-zA-Z0-9_]*', Token.Text, '#push'), ('\\d+', Token.Literal.Number, '#push'), ('(\\d+\\.\\d*|\\d*\\.\\d+)([eEf][+-]?[0-9]+)?', Token.Literal.Number, '#push'), ('\\)', Token.Text)], 'root': [('\\n', Token.Text), ('[^\\S\\n]+', Token.Text), ('//\\n', Token.Comment), ('//.*?$', Token.Comment.Single), ('(OPENQASM|include)\\b', Token.Keyword.Reserved, 'keywords'), ('(qreg|creg)\\b', Token.Keyword.Declaration), ('(if)\\b', Token.Keyword.Reserved, 'if_keywords'), ('(pi)\\b', Token.Name.Constant), ('(barrier|measure|reset)\\b', Token.Name.Builtin, 'params'), ('(id|cx|x|y|z|s|sdg|h|t|tdg|ccx|c3x|c4x|c3sqrtx|rx|ry|rz|cz|cy|ch|swap|cswap|crx|cry|crz|cu1|cu3|rxx|rzz|rccx|rc3x|u1|u2|u3)\\b', Token.Keyword.Type, 'params'), ('[unitary\\d+]', Token.Keyword.Type), ('(gate)\\b', Token.Name.Function, 'gate'), ('[a-zA-Z_][a-zA-Z0-9_]*', Token.Text, 'index')]}`

Dict of `{'state': [(regex, tokentype, new_state), ...], ...}`

The initial state is ‘root’. `new_state` can be omitted to signify no state transition. If it is a string, the state is pushed on the stack and changed. If it is a tuple of strings, all states are pushed on the stack and the current state will be the topmost. It can also be `combined('state1', 'state2', ...)` to signify a new, anonymous state combined from the rules of two or more existing ones. Furthermore, it can be ‘#pop’ to signify going back one step in the state stack, or ‘#push’ to push the current state on the stack again.

The tuple can also be replaced with `include('state')`, in which case the rules from the state named by the string are included in the current one.

