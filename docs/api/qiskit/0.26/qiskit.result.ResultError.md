# qiskit.result.ResultError

<span id="undefined" />

`ResultError(error)`

Exceptions raised due to errors in result output.

It may be better for the Qiskit API to raise this exception.

**Parameters**

**error** (*dict*) –

This is the error record as it comes back from the API. The format is like:

```python
error = {'status': 403,
         'message': 'Your credits are not enough.',
         'code': 'MAX_CREDITS_EXCEEDED'}
```

Set the error message.

<span id="undefined" />

`with_traceback()`

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.
