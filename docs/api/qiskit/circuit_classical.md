---
title: classical
description: API reference for qiskit.circuit.classical
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.circuit.classical
---

<span id="module-qiskit.circuit.classical" />

<span id="qiskit-circuit-classical" />

<span id="classical-expressions-qiskit-circuit-classical" />

# Classical expressions

<span id="module-qiskit.circuit.classical" />

`qiskit.circuit.classical`

This module contains an exploratory representation of runtime operations on classical values during circuit execution.

Currently, only simple expressions on bits and registers that result in a Boolean value are supported, and these are only valid for use in the conditions of [`QuantumCircuit.if_test()`](qiskit.circuit.QuantumCircuit#if_test "qiskit.circuit.QuantumCircuit.if_test") ([`IfElseOp`](qiskit.circuit.IfElseOp "qiskit.circuit.IfElseOp")) and [`QuantumCircuit.while_loop()`](qiskit.circuit.QuantumCircuit#while_loop "qiskit.circuit.QuantumCircuit.while_loop") ([`WhileLoopOp`](qiskit.circuit.WhileLoopOp "qiskit.circuit.WhileLoopOp")), and in the target of [`QuantumCircuit.switch()`](qiskit.circuit.QuantumCircuit#switch "qiskit.circuit.QuantumCircuit.switch") ([`SwitchCaseOp`](qiskit.circuit.SwitchCaseOp "qiskit.circuit.SwitchCaseOp")).

<Admonition title="Note" type="note">
  This is an exploratory module, and while we will commit to the standard Qiskit deprecation policy within it, please be aware that the module will be deliberately limited in scope at the start, and early versions may not evolve cleanly into the final version. It is possible that various components of this module will be replaced (subject to deprecations) instead of improved into a new form.

  The type system and expression tree will be expanded over time, and it is possible that the allowed types of some operations may need to change between versions of Qiskit as the classical processing capabilities develop.
</Admonition>

<span id="module-qiskit.circuit.classical.expr" />

<span id="expressions-qiskit-circuit-classical-expr" />

## Expressions

<span id="module-qiskit.circuit.classical" />

`qiskit.circuit.classical.expr`

The necessary components for building expressions are all exported from the [`expr`](#module-qiskit.circuit.classical.expr "qiskit.circuit.classical.expr") namespace within [`qiskit.circuit.classical`](#module-qiskit.circuit.classical "qiskit.circuit.classical"), so you can choose whether to use qualified access (for example [`expr.Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.expr.Value")) or import the names you need directly and call them without the prefix.

There are two pathways for constructing expressions. The classes that form [the representation of the expression system](#circuit-classical-expressions-expr-representation) have constructors that perform zero type checking; it is up to the caller to ensure that they are building valid objects. For a more user-friendly interface to direct construction, there are helper functions associated with most of the classes that do type validation and inference. These are described below, in [Construction](#circuit-classical-expressions-expr-construction).

<span id="circuit-classical-expressions-expr-representation" />

### Representation

The expression system is based on tree representation. All nodes in the tree are final (uninheritable) instances of the abstract base class:

<span id="qiskit.circuit.classical.expr.Expr" />

`qiskit.circuit.classical.expr.Expr` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/expr.py "view source code")

Root base class of all nodes in the expression tree. The base case should never be instantiated directly.

This must not be subclassed by users; subclasses form the internal data of the representation of expressions, and it does not make sense to add more outside of Qiskit library code.

All subclasses are responsible for setting their `type` attribute in their `__init__`, and should not call the parent initialiser.

These objects are mutable and should not be reused in a different location without a copy.

The entry point from general circuit objects to the expression system is by wrapping the object in a [`Var`](#qiskit.circuit.classical.expr.Var "qiskit.circuit.classical.expr.Var") node and associating a [`Type`](#qiskit.circuit.classical.types.Type "qiskit.circuit.classical.types.Type") with it.

<span id="qiskit.circuit.classical.expr.Var" />

`final class qiskit.circuit.classical.expr.Var(var, type)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/expr.py "view source code")

A classical variable.

Variables are immutable after construction, so they can be used as dictionary keys.

Similarly, literals used in comparison (such as integers) should be lifted to [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes with associated types.

<span id="qiskit.circuit.classical.expr.Value" />

`final class qiskit.circuit.classical.expr.Value(value, type)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/expr.py "view source code")

A single scalar value.

The operations traditionally associated with pre-, post- or infix operators in programming are represented by the [`Unary`](#qiskit.circuit.classical.expr.Unary "qiskit.circuit.classical.expr.Unary") and [`Binary`](#qiskit.circuit.classical.expr.Binary "qiskit.circuit.classical.expr.Binary") nodes as appropriate. These each take an operation type code, which are exposed as enumerations inside each class as [`Unary.Op`](#qiskit.circuit.classical.expr.Unary.Op "qiskit.circuit.classical.expr.Unary.Op") and [`Binary.Op`](#qiskit.circuit.classical.expr.Binary.Op "qiskit.circuit.classical.expr.Binary.Op") respectively.

<span id="qiskit.circuit.classical.expr.Unary" />

`final class qiskit.circuit.classical.expr.Unary(op, operand, type)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/expr.py "view source code")

A unary expression.

**Parameters**

*   **op** ([*Unary.Op*](#qiskit.circuit.classical.expr.Unary.Op "qiskit.circuit.classical.expr.Unary.Op")) – The opcode describing which operation is being done.
*   **operand** ([*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr")) – The operand of the operation.
*   **type** ([*Type*](#qiskit.circuit.classical.types.Type "qiskit.circuit.classical.types.types.Type")) – The resolved type of the result.

<span id="qiskit.circuit.classical.expr.Unary.Op" />

`Op(value)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/expr.py "view source code")

Enumeration of the opcodes for unary operations.

The bitwise negation [`BIT_NOT`](#qiskit.circuit.classical.expr.Unary.Op.BIT_NOT "qiskit.circuit.classical.expr.Unary.Op.BIT_NOT") takes a single bit or an unsigned integer of known width, and returns a value of the same type.

The logical negation [`LOGIC_NOT`](#qiskit.circuit.classical.expr.Unary.Op.LOGIC_NOT "qiskit.circuit.classical.expr.Unary.Op.LOGIC_NOT") takes an input that is implicitly coerced to a Boolean, and returns a Boolean.

<span id="qiskit.circuit.classical.expr.Unary.Op.BIT_NOT" />

### BIT\_NOT

`= 1`

Bitwise negation. `~operand`.

<span id="qiskit.circuit.classical.expr.Unary.Op.LOGIC_NOT" />

### LOGIC\_NOT

`= 2`

Logical negation. `!operand`.

<span id="qiskit.circuit.classical.expr.Binary" />

`final class qiskit.circuit.classical.expr.Binary(op, left, right, type)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/expr.py "view source code")

A binary expression.

**Parameters**

*   **op** ([*Binary.Op*](#qiskit.circuit.classical.expr.Binary.Op "qiskit.circuit.classical.expr.Binary.Op")) – The opcode describing which operation is being done.
*   **left** ([*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr")) – The left-hand operand.
*   **right** ([*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr")) – The right-hand operand.
*   **type** ([*Type*](#qiskit.circuit.classical.types.Type "qiskit.circuit.classical.types.types.Type")) – The resolved type of the result.

<span id="qiskit.circuit.classical.expr.Binary.Op" />

`Op(value)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/expr.py "view source code")

Enumeration of the opcodes for binary operations.

The bitwise operations [`BIT_AND`](#qiskit.circuit.classical.expr.Binary.Op.BIT_AND "qiskit.circuit.classical.expr.Binary.Op.BIT_AND"), [`BIT_OR`](#qiskit.circuit.classical.expr.Binary.Op.BIT_OR "qiskit.circuit.classical.expr.Binary.Op.BIT_OR") and [`BIT_XOR`](#qiskit.circuit.classical.expr.Binary.Op.BIT_XOR "qiskit.circuit.classical.expr.Binary.Op.BIT_XOR") apply to two operands of the same type, which must be a single bit or an unsigned integer of fixed width. The resultant type is the same as the two input types.

The logical operations [`LOGIC_AND`](#qiskit.circuit.classical.expr.Binary.Op.LOGIC_AND "qiskit.circuit.classical.expr.Binary.Op.LOGIC_AND") and [`LOGIC_OR`](#qiskit.circuit.classical.expr.Binary.Op.LOGIC_OR "qiskit.circuit.classical.expr.Binary.Op.LOGIC_OR") first implicitly coerce their arguments to Booleans, and then apply the logical operation. The resultant type is always Boolean.

The binary mathematical relations [`EQUAL`](#qiskit.circuit.classical.expr.Binary.Op.EQUAL "qiskit.circuit.classical.expr.Binary.Op.EQUAL"), [`NOT_EQUAL`](#qiskit.circuit.classical.expr.Binary.Op.NOT_EQUAL "qiskit.circuit.classical.expr.Binary.Op.NOT_EQUAL"), [`LESS`](#qiskit.circuit.classical.expr.Binary.Op.LESS "qiskit.circuit.classical.expr.Binary.Op.LESS"), [`LESS_EQUAL`](#qiskit.circuit.classical.expr.Binary.Op.LESS_EQUAL "qiskit.circuit.classical.expr.Binary.Op.LESS_EQUAL"), [`GREATER`](#qiskit.circuit.classical.expr.Binary.Op.GREATER "qiskit.circuit.classical.expr.Binary.Op.GREATER") and [`GREATER_EQUAL`](#qiskit.circuit.classical.expr.Binary.Op.GREATER_EQUAL "qiskit.circuit.classical.expr.Binary.Op.GREATER_EQUAL") take unsigned integers (with an implicit cast to make them the same width), and return a Boolean.

<span id="qiskit.circuit.classical.expr.Binary.Op.BIT_AND" />

### BIT\_AND

`= 1`

Bitwise “and”. `lhs & rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.BIT_OR" />

### BIT\_OR

`= 2`

Bitwise “or”. `lhs | rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.BIT_XOR" />

### BIT\_XOR

`= 3`

Bitwise “exclusive or”. `lhs ^ rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.LOGIC_AND" />

### LOGIC\_AND

`= 4`

Logical “and”. `lhs && rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.LOGIC_OR" />

### LOGIC\_OR

`= 5`

Logical “or”. `lhs || rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.EQUAL" />

### EQUAL

`= 6`

Numeric equality. `lhs == rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.NOT_EQUAL" />

### NOT\_EQUAL

`= 7`

Numeric inequality. `lhs != rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.LESS" />

### LESS

`= 8`

Numeric less than. `lhs < rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.LESS_EQUAL" />

### LESS\_EQUAL

`= 9`

Numeric less than or equal to. `lhs <= rhs`

<span id="qiskit.circuit.classical.expr.Binary.Op.GREATER" />

### GREATER

`= 10`

Numeric greater than. `lhs > rhs`.

<span id="qiskit.circuit.classical.expr.Binary.Op.GREATER_EQUAL" />

### GREATER\_EQUAL

`= 11`

Numeric greater than or equal to. `lhs >= rhs`.

When constructing expressions, one must ensure that the types are valid for the operation. Attempts to construct expressions with invalid types will raise a regular Python `TypeError`.

Expressions in this system are defined to act only on certain sets of types. However, values may be cast to a suitable supertype in order to satisfy the typing requirements. In these cases, a node in the expression tree is used to represent the promotion. In all cases where operations note that they “implicitly cast” or “coerce” their arguments, the expression tree must have this node representing the conversion.

<span id="qiskit.circuit.classical.expr.Cast" />

`final class qiskit.circuit.classical.expr.Cast(operand, type, implicit=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/expr.py "view source code")

A cast from one type to another, implied by the use of an expression in a different context.

<span id="circuit-classical-expressions-expr-construction" />

### Construction

Constructing the tree representation directly is verbose and easy to make a mistake with the typing. In many cases, much of the typing can be inferred, scalar values can automatically be promoted to [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") instances, and any required promotions can be resolved into suitable [`Cast`](#qiskit.circuit.classical.expr.Cast "qiskit.circuit.classical.expr.Cast") nodes.

The functions and methods described in this section are a more user-friendly way to build the expression tree, while staying close to the internal representation. All these functions will automatically lift valid Python scalar values into corresponding [`Var`](#qiskit.circuit.classical.expr.Var "qiskit.circuit.classical.expr.Var") or [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") objects, and will resolve any required implicit casts on your behalf. If you want to directly use some scalar value as an [`Expr`](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr") node, you can manually [`lift()`](#qiskit.circuit.classical.expr.lift "qiskit.circuit.classical.expr.lift") it yourself.

### lift

<span id="qiskit.circuit.classical.expr.lift" />

`qiskit.circuit.classical.expr.lift(value, /, type=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Lift the given Python `value` to a [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.expr.Value") or [`Var`](#qiskit.circuit.classical.expr.Var "qiskit.circuit.classical.expr.expr.Var").

If an explicit `type` is given, the typing in the output will reflect that.

**Examples**

Lifting simple circuit objects to be [`Var`](#qiskit.circuit.classical.expr.Var "qiskit.circuit.classical.expr.expr.Var") instances:

```python
>>> from qiskit.circuit import Clbit, ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.lift(Clbit())
Var(<clbit>, Bool())
>>> expr.lift(ClassicalRegister(3, "c"))
Var(ClassicalRegister(3, "c"), Uint(3))
```

The type of the return value can be influenced, if the given value could be interpreted losslessly as the given type (use [`cast()`](#qiskit.circuit.classical.expr.cast "qiskit.circuit.classical.expr.cast") to perform a full set of casting operations, include lossy ones):

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr, types
>>> expr.lift(ClassicalRegister(3, "c"), types.Uint(5))
Var(ClassicalRegister(3, "c"), Uint(5))
>>> expr.lift(5, types.Uint(4))
Value(5, Uint(4))
```

**Return type**

[Expr](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr")

You can manually specify casts in cases where the cast is allowed in explicit form, but may be lossy (such as the cast of a higher precision [`Uint`](#qiskit.circuit.classical.types.Uint "qiskit.circuit.classical.types.Uint") to a lower precision one).

### cast

<span id="qiskit.circuit.classical.expr.cast" />

`qiskit.circuit.classical.expr.cast(operand, type, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create an explicit cast from the given value to the given type.

**Examples**

Add an explicit cast node that explicitly casts a higher precision type to a lower precision one:

```python
>>> from qiskit.circuit.classical import expr, types
>>> value = expr.value(5, types.Uint(32))
>>> expr.cast(value, types.Uint(8))
Cast(Value(5, types.Uint(32)), types.Uint(8), implicit=False)
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

There are helper constructor functions for each of the unary operations.

### bit\_not

<span id="qiskit.circuit.classical.expr.bit_not" />

`qiskit.circuit.classical.expr.bit_not(operand, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a bitwise ‘not’ expression node from the given value, resolving any implicit casts and lifting the value into a [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") node if required.

**Examples**

Bitwise negation of a [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister"):

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.bit_not(ClassicalRegister(3, "c"))
Unary(Unary.Op.BIT_NOT, Var(ClassicalRegister(3, 'c'), Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### logic\_not

<span id="qiskit.circuit.classical.expr.logic_not" />

`qiskit.circuit.classical.expr.logic_not(operand, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a logical ‘not’ expression node from the given value, resolving any implicit casts and lifting the value into a [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") node if required.

**Examples**

Logical negation of a [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister"):

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.logic_not(ClassicalRegister(3, "c"))
Unary(Unary.Op.LOGIC_NOT, Cast(Var(ClassicalRegister(3, 'c'), Uint(3)), Bool(), implicit=True), Bool())
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

Similarly, the binary operations and relations have helper functions defined.

### bit\_and

<span id="qiskit.circuit.classical.expr.bit_and" />

`qiskit.circuit.classical.expr.bit_and(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a bitwise ‘and’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Bitwise ‘and’ of a classical register and an integer literal:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.bit_and(ClassicalRegister(3, "c"), 0b111)
Binary(Binary.Op.BIT_AND, Var(ClassicalRegister(3, 'c'), Uint(3)), Value(7, Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### bit\_or

<span id="qiskit.circuit.classical.expr.bit_or" />

`qiskit.circuit.classical.expr.bit_or(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a bitwise ‘or’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Bitwise ‘or’ of a classical register and an integer literal:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.bit_or(ClassicalRegister(3, "c"), 0b101)
Binary(Binary.Op.BIT_OR, Var(ClassicalRegister(3, 'c'), Uint(3)), Value(5, Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### bit\_xor

<span id="qiskit.circuit.classical.expr.bit_xor" />

`qiskit.circuit.classical.expr.bit_xor(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a bitwise ‘exclusive or’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Bitwise ‘exclusive or’ of a classical register and an integer literal:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.bit_xor(ClassicalRegister(3, "c"), 0b101)
Binary(Binary.Op.BIT_XOR, Var(ClassicalRegister(3, 'c'), Uint(3)), Value(5, Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### logic\_and

<span id="qiskit.circuit.classical.expr.logic_and" />

`qiskit.circuit.classical.expr.logic_and(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a logical ‘and’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Logical ‘and’ of two classical bits:

```python
>>> from qiskit.circuit import Clbit
>>> from qiskit.circuit.classical import expr
>>> expr.logical_and(Clbit(), Clbit())
Binary(Binary.Op.LOGIC_AND, Var(<clbit 0>, Bool()), Var(<clbit 1>, Bool()), Bool())
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### logic\_or

<span id="qiskit.circuit.classical.expr.logic_or" />

`qiskit.circuit.classical.expr.logic_or(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a logical ‘or’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Logical ‘or’ of two classical bits

```python
>>> from qiskit.circuit import Clbit
>>> from qiskit.circuit.classical import expr
>>> expr.logical_and(Clbit(), Clbit())
Binary(Binary.Op.LOGIC_OR, Var(<clbit 0>, Bool()), Var(<clbit 1>, Bool()), Bool())
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### equal

<span id="qiskit.circuit.classical.expr.equal" />

`qiskit.circuit.classical.expr.equal(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create an ‘equal’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Equality between a classical register and an integer:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.equal(ClassicalRegister(3, "c"), 7)
Binary(Binary.Op.EQUAL, Var(ClassicalRegister(3, "c"), Uint(3)), Value(7, Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### not\_equal

<span id="qiskit.circuit.classical.expr.not_equal" />

`qiskit.circuit.classical.expr.not_equal(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a ‘not equal’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Inequality between a classical register and an integer:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.not_equal(ClassicalRegister(3, "c"), 7)
Binary(Binary.Op.NOT_EQUAL, Var(ClassicalRegister(3, "c"), Uint(3)), Value(7, Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### less

<span id="qiskit.circuit.classical.expr.less" />

`qiskit.circuit.classical.expr.less(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a ‘less than’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Query if a classical register is less than an integer:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.less(ClassicalRegister(3, "c"), 5)
Binary(Binary.Op.LESS, Var(ClassicalRegister(3, "c"), Uint(3)), Value(5, Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### less\_equal

<span id="qiskit.circuit.classical.expr.less_equal" />

`qiskit.circuit.classical.expr.less_equal(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a ‘less than or equal to’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Query if a classical register is less than or equal to another:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.less(ClassicalRegister(3, "a"), ClassicalRegister(3, "b"))
Binary(Binary.Op.LESS_EQUAL, Var(ClassicalRegister(3, "a"), Uint(3)), Var(ClassicalRegister(3, "b"), Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### greater

<span id="qiskit.circuit.classical.expr.greater" />

`qiskit.circuit.classical.expr.greater(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a ‘greater than’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Query if a classical register is greater than an integer:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.less(ClassicalRegister(3, "c"), 5)
Binary(Binary.Op.GREATER, Var(ClassicalRegister(3, "c"), Uint(3)), Value(5, Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

### greater\_equal

<span id="qiskit.circuit.classical.expr.greater_equal" />

`qiskit.circuit.classical.expr.greater_equal(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Create a ‘greater than or equal to’ expression node from the given value, resolving any implicit casts and lifting the values into [`Value`](#qiskit.circuit.classical.expr.Value "qiskit.circuit.classical.expr.Value") nodes if required.

**Examples**

Query if a classical register is greater than or equal to another:

```python
>>> from qiskit.circuit import ClassicalRegister
>>> from qiskit.circuit.classical import expr
>>> expr.less(ClassicalRegister(3, "a"), ClassicalRegister(3, "b"))
Binary(Binary.Op.GREATER_EQUAL, Var(ClassicalRegister(3, "a"), Uint(3)), Var(ClassicalRegister(3, "b"), Uint(3)), Uint(3))
```

**Return type**

[*Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")

Qiskit’s legacy method for specifying equality conditions for use in conditionals is to use a two-tuple of a [`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.Clbit") or [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") and an integer. This represents an exact equality condition, and there are no ways to specify any other relations. The helper function [`lift_legacy_condition()`](#qiskit.circuit.classical.expr.lift_legacy_condition "qiskit.circuit.classical.expr.lift_legacy_condition") converts this legacy format into the new expression syntax.

### lift\_legacy\_condition

<span id="qiskit.circuit.classical.expr.lift_legacy_condition" />

`qiskit.circuit.classical.expr.lift_legacy_condition(condition, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/constructors.py "view source code")

Lift a legacy two-tuple equality condition into a new-style [`Expr`](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr").

**Examples**

Taking an old-style conditional instruction and getting an [`Expr`](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr") from its condition:

```python
from qiskit.circuit import ClassicalRegister
from qiskit.circuit.library import HGate
from qiskit.circuit.classical import expr

cr = ClassicalRegister(2)
instr = HGate().c_if(cr, 3)

lifted = expr.lift_legacy_condition(instr.condition)
```

**Return type**

[Expr](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr")

### Working with the expression tree

A typical consumer of the expression tree wants to recursively walk through the tree, potentially statefully, acting on each node differently depending on its type. This is naturally a double-dispatch problem; the logic of ‘what is to be done’ is likely stateful and users should be free to define their own operations, yet each node defines ‘what is being acted on’. We enable this double dispatch by providing a base visitor class for the expression tree.

<span id="qiskit.circuit.classical.expr.ExprVisitor" />

`qiskit.circuit.classical.expr.ExprVisitor` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/visitors.py "view source code")

Base class for visitors to the [`Expr`](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.Expr") tree. Subclasses should override whichever of the `visit_*` methods that they are able to handle, and should be organised such that non-existent methods will never be called.

### visit\_binary

<span id="qiskit.circuit.classical.expr.ExprVisitor.visit_binary" />

`visit_binary(node, /)`

**Return type**

*\_T\_co*

### visit\_cast

<span id="qiskit.circuit.classical.expr.ExprVisitor.visit_cast" />

`visit_cast(node, /)`

**Return type**

*\_T\_co*

### visit\_generic

<span id="qiskit.circuit.classical.expr.ExprVisitor.visit_generic" />

`visit_generic(node, /)`

**Return type**

*\_T\_co*

### visit\_unary

<span id="qiskit.circuit.classical.expr.ExprVisitor.visit_unary" />

`visit_unary(node, /)`

**Return type**

*\_T\_co*

### visit\_value

<span id="qiskit.circuit.classical.expr.ExprVisitor.visit_value" />

`visit_value(node, /)`

**Return type**

*\_T\_co*

### visit\_var

<span id="qiskit.circuit.classical.expr.ExprVisitor.visit_var" />

`visit_var(node, /)`

**Return type**

*\_T\_co*

Consumers of the expression tree should subclass the visitor, and override the `visit_*` methods that they wish to handle. Any non-overridden methods will call [`visit_generic()`](#qiskit.circuit.classical.expr.ExprVisitor.visit_generic "qiskit.circuit.classical.expr.ExprVisitor.visit_generic"), which unless overridden will raise a `RuntimeError` to ensure that you are aware if new nodes have been added to the expression tree that you are not yet handling.

For the convenience of simple visitors that only need to inspect the variables in an expression and not the general structure, the iterator method [`iter_vars()`](#qiskit.circuit.classical.expr.iter_vars "qiskit.circuit.classical.expr.iter_vars") is provided.

### iter\_vars

<span id="qiskit.circuit.classical.expr.iter_vars" />

`qiskit.circuit.classical.expr.iter_vars(node)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/visitors.py "view source code")

Get an iterator over the [`Var`](#qiskit.circuit.classical.expr.Var "qiskit.circuit.classical.expr.expr.Var") nodes referenced at any level in the given [`Expr`](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr").

**Examples**

Print out the name of each [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") encountered:

```python
from qiskit.circuit import ClassicalRegister
from qiskit.circuit.classical import expr

cr1 = ClassicalRegister(3, "a")
cr2 = ClassicalRegister(3, "b")

for node in expr.iter_vars(expr.bit_and(expr.bit_not(cr1), cr2)):
    if isinstance(node.var, ClassicalRegister):
        print(node.var.name)
```

**Return type**

[*Iterator*](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.12)")\[[*Var*](#qiskit.circuit.classical.expr.Var "qiskit.circuit.classical.expr.expr.Var")]

Two expressions can be compared for direct structural equality by using the built-in Python `==` operator. In general, though, one might want to compare two expressions slightly more semantically, allowing that the [`Var`](#qiskit.circuit.classical.expr.Var "qiskit.circuit.classical.expr.Var") nodes inside them are bound to different memory-location descriptions between two different circuits. In this case, one can use [`structurally_equivalent()`](#qiskit.circuit.classical.expr.structurally_equivalent "qiskit.circuit.classical.expr.structurally_equivalent") with two suitable “key” functions to do the comparison.

### structurally\_equivalent

<span id="qiskit.circuit.classical.expr.structurally_equivalent" />

`qiskit.circuit.classical.expr.structurally_equivalent(left, right, left_var_key=None, right_var_key=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/expr/visitors.py "view source code")

Do these two expressions have exactly the same tree structure, up to some key function for the [`Var`](#qiskit.circuit.classical.expr.Var "qiskit.circuit.classical.expr.expr.Var") objects?

In other words, are these two expressions the exact same trees, except we compare the `Var.var` fields by calling the appropriate `*_var_key` function on them, and comparing that output for equality. This function does not allow any semantic “equivalences” such as asserting that `a == b` is equivalent to `b == a`; the evaluation order of the operands could, in general, cause such a statement to be false (consider hypothetical `extern` functions that access global state).

There’s no requirements on the key functions, except that their outputs should have general `__eq__` methods. If a key function returns `None`, the variable will be used verbatim instead.

**Parameters**

*   **left** ([*expr.Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")) – one of the [`Expr`](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr") nodes.
*   **right** ([*expr.Expr*](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr")) – the other [`Expr`](#qiskit.circuit.classical.expr.Expr "qiskit.circuit.classical.expr.expr.Expr") node.
*   **left\_var\_key** ([*Callable*](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.12)")*\[\[*[*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")*],* [*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")*] | None*) – a callable whose output should be used when comparing `Var.var` attributes. If this argument is `None` or its output is `None` for a given variable in `left`, the variable will be used verbatim.
*   **right\_var\_key** ([*Callable*](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.12)")*\[\[*[*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")*],* [*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")*] | None*) – same as `left_var_key`, but used on the variables in `right` instead.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

**Examples**

Comparing two expressions for structural equivalence, with no remapping of the variables. These are different because the different [`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.Clbit") instances compare differently:

```python
>>> from qiskit.circuit import Clbit
>>> from qiskit.circuit.classical import expr
>>> left_bits = [Clbit(), Clbit()]
>>> right_bits = [Clbit(), Clbit()]
>>> left = expr.logic_and(expr.logic_not(left_bits[0]), left_bits[1])
>>> right = expr.logic_and(expr.logic_not(right_bits[0]), right_bits[1])
>>> expr.structurally_equivalent(left, right)
False
```

Comparing the same two expressions, but this time using mapping functions that associate the bits with simple indices:

```python
>>> left_key = {var: i for i, var in enumerate(left_bits)}.get
>>> right_key = {var: i for i, var in enumerate(right_bits)}.get
>>> expr.structurally_equivalent(left, right, left_key, right_key)
True
```

<span id="module-qiskit.circuit.classical.types" />

<span id="typing-qiskit-circuit-classical-types" />

## Typing

<span id="module-qiskit.circuit.classical" />

`qiskit.circuit.classical.types`

<span id="id1" />

### Representation

The type system of the expression tree is exposed through this module. This is inherently linked to the expression system in the [`expr`](#module-qiskit.circuit.classical.expr "qiskit.circuit.classical.expr") module, as most expressions can only be understood with the context of the types that they act on.

All types inherit from an abstract base class:

<span id="qiskit.circuit.classical.types.Type" />

`qiskit.circuit.classical.types.Type` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/types.py "view source code")

Root base class of all nodes in the type tree. The base case should never be instantiated directly.

This must not be subclassed by users; subclasses form the internal data of the representation of expressions, and it does not make sense to add more outside of Qiskit library code.

Types should be considered immutable objects, and you must not mutate them. It is permissible to reuse a [`Type`](#qiskit.circuit.classical.types.Type "qiskit.circuit.classical.types.Type") that you take from another object without copying it, and generally this will be the best approach for performance. [`Type`](#qiskit.circuit.classical.types.Type "qiskit.circuit.classical.types.Type") objects are designed to be small amounts of data, and it’s best to point to the same instance of the data where possible rather than heap-allocating a new version of the same thing. Where possible, the class constructors will return singleton instances to facilitate this.

The two different types available are for Booleans (corresponding to [`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.Clbit") and the literals `True` and `False`), and unsigned integers (corresponding to [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") and Python integers).

<span id="qiskit.circuit.classical.types.Bool" />

`final class qiskit.circuit.classical.types.Bool` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/types.py "view source code")

The Boolean type. This has exactly two values: `True` and `False`.

<span id="qiskit.circuit.classical.types.Uint" />

`final class qiskit.circuit.classical.types.Uint(width)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/types.py "view source code")

An unsigned integer of fixed bit width.

Note that [`Uint`](#qiskit.circuit.classical.types.Uint "qiskit.circuit.classical.types.Uint") defines a family of types parametrised by their width; it is not one single type, which may be slightly different to the ‘classical’ programming languages you are used to.

### Working with types

There are some functions on these types exposed here as well. These are mostly expected to be used only in manipulations of the expression tree; users who are building expressions using the [user-facing construction interface](#circuit-classical-expressions-expr-construction) should not need to use these.

#### Partial ordering of types

The type system is equipped with a partial ordering, where $a < b$ is interpreted as “$a$ is a strict subtype of $b$”. Note that the partial ordering is a subset of the directed graph that describes the allowed explicit casting operations between types. The partial ordering defines when one type may be lossless directly interpreted as another.

The low-level interface to querying the subtyping relationship is the [`order()`](#qiskit.circuit.classical.types.order "qiskit.circuit.classical.types.order") function.

### order

<span id="qiskit.circuit.classical.types.order" />

`qiskit.circuit.classical.types.order(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/ordering.py "view source code")

Get the ordering relationship between the two types as an enumeration value.

**Examples**

Compare two [`Uint`](#qiskit.circuit.classical.types.Uint "qiskit.circuit.classical.types.Uint") types of different widths:

```python
>>> from qiskit.circuit.classical import types
>>> types.order(types.Uint(8), types.Uint(16))
Ordering.LESS
```

Compare two types that have no ordering between them:

```python
>>> types.order(types.Uint(8), types.Bool())
Ordering.NONE
```

**Return type**

[*Ordering*](#qiskit.circuit.classical.types.Ordering "qiskit.circuit.classical.types.ordering.Ordering")

The return value is an enumeration [`Ordering`](#qiskit.circuit.classical.types.Ordering "qiskit.circuit.classical.types.Ordering") that describes what, if any, subtyping relationship exists between the two types.

<span id="qiskit.circuit.classical.types.Ordering" />

`qiskit.circuit.classical.types.Ordering(value)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/ordering.py "view source code")

Enumeration listing the possible relations between two types. Types only have a partial ordering, so it’s possible for two types to have no sub-typing relationship.

Note that the sub-/supertyping relationship is not the same as whether a type can be explicitly cast from one to another.

Some helper methods are then defined in terms of this low-level [`order()`](#qiskit.circuit.classical.types.order "qiskit.circuit.classical.types.order") primitive:

### is\_subtype

<span id="qiskit.circuit.classical.types.is_subtype" />

`qiskit.circuit.classical.types.is_subtype(left, right, /, strict=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/ordering.py "view source code")

Does the relation $\text{left} \le \text{right}$ hold? If there is no ordering relation between the two types, then this returns `False`. If `strict`, then the equality is also forbidden.

**Examples**

Check if one type is a subclass of another:

```python
>>> from qiskit.circuit.classical import types
>>> types.is_subtype(types.Uint(8), types.Uint(16))
True
```

Check if one type is a strict subclass of another:

```python
>>> types.is_subtype(types.Bool(), types.Bool())
True
>>> types.is_subtype(types.Bool(), types.Bool(), strict=True)
False
```

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### is\_supertype

<span id="qiskit.circuit.classical.types.is_supertype" />

`qiskit.circuit.classical.types.is_supertype(left, right, /, strict=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/ordering.py "view source code")

Does the relation $\text{left} \ge \text{right}$ hold? If there is no ordering relation between the two types, then this returns `False`. If `strict`, then the equality is also forbidden.

**Examples**

Check if one type is a superclass of another:

```python
>>> from qiskit.circuit.classical import types
>>> types.is_supertype(types.Uint(8), types.Uint(16))
False
```

Check if one type is a strict superclass of another:

```python
>>> types.is_supertype(types.Bool(), types.Bool())
True
>>> types.is_supertype(types.Bool(), types.Bool(), strict=True)
False
```

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### greater

<span id="qiskit.circuit.classical.types.greater" />

`qiskit.circuit.classical.types.greater(left, right, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/ordering.py "view source code")

Get the greater of the two types, assuming that there is an ordering relation between them. Technically, this is a slightly restricted version of the concept of the ‘meet’ of the two types in that the return value must be one of the inputs. In practice in the type system there is no concept of a ‘sum’ type, so the ‘meet’ exists if and only if there is an ordering between the two types, and is equal to the greater of the two types.

**Returns**

The greater of the two types.

**Raises**

[**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – if there is no ordering relation between the two types.

**Return type**

[*Type*](#qiskit.circuit.classical.types.Type "qiskit.circuit.classical.types.types.Type")

**Examples**

Find the greater of two [`Uint`](#qiskit.circuit.classical.types.Uint "qiskit.circuit.classical.types.Uint") types:

```python
>>> from qiskit.circuit.classical import types
>>> types.greater(types.Uint(8), types.Uint(16))
types.Uint(16)
```

#### Casting between types

It is common to need to cast values of one type to another type. The casting rules for this are embedded into the [`types`](https://docs.python.org/3/library/types.html#module-types "(in Python v3.12)") module. You can query the casting kinds using [`cast_kind()`](#qiskit.circuit.classical.types.cast_kind "qiskit.circuit.classical.types.cast_kind"):

### cast\_kind

<span id="qiskit.circuit.classical.types.cast_kind" />

`qiskit.circuit.classical.types.cast_kind(from_, to_, /)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/ordering.py "view source code")

Determine the sort of cast that is required to move from the left type to the right type.

**Examples**

```python
>>> from qiskit.circuit.classical import types
>>> types.cast_kind(types.Bool(), types.Bool())
<CastKind.EQUAL: 1>
>>> types.cast_kind(types.Uint(8), types.Bool())
<CastKind.IMPLICIT: 2>
>>> types.cast_kind(types.Bool(), types.Uint(8))
<CastKind.LOSSLESS: 3>
>>> types.cast_kind(types.Uint(16), types.Uint(8))
<CastKind.DANGEROUS: 4>
```

**Return type**

[*CastKind*](#qiskit.circuit.classical.types.CastKind "qiskit.circuit.classical.types.ordering.CastKind")

The return values from this function are an enumeration explaining the types of cast that are allowed from the left type to the right type.

<span id="qiskit.circuit.classical.types.CastKind" />

`qiskit.circuit.classical.types.CastKind(value)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/classical/types/ordering.py "view source code")

A return value indicating the type of cast that can occur from one type to another.

