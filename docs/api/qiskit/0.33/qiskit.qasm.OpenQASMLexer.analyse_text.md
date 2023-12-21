# qiskit.qasm.OpenQASMLexer.analyse\_text

`static OpenQASMLexer.analyse_text(text)`

Has to return a float between `0` and `1` that indicates if a lexer wants to highlight this text. Used by `guess_lexer`. If this method returns `0` it won’t highlight it in any case, if it returns `1` highlighting with this lexer is guaranteed.

The LexerMeta metaclass automatically wraps this function so that it works like a static method (no `self` or `cls` parameter) and the return value is automatically converted to float. If the return value is an object that is boolean False it’s the same as if the return values was `0.0`.
