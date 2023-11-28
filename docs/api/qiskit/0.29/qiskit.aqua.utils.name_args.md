# qiskit.aqua.utils.name\_args

<span id="undefined" />

`name_args(mapping, skip=0)`

Decorator to convert unnamed arguments to named ones.

Can be used to deprecate old signatures of a function, e.g.

```python
old_f(a: TypeA, b: TypeB, c: TypeC)
new_f(a: TypeA, d: TypeD, b: TypeB=None, c: TypeC=None)
```

Then, to support the old signature this decorator can be used as

```python
@name_args([
    ('a'),  # stays the same
    ('d', {TypeB: 'b'}),  # if arg is of type TypeB, call if 'b' else 'd'
    ('b', {TypeC: 'c'})
])
def new_f(a: TypeA, d: TypeD, b: TypeB=None, c: TypeC=None):
    if b is not None:
        # raise warning, this is deprecated!
    if c is not None:
        # raise warning, this is deprecated!
```
