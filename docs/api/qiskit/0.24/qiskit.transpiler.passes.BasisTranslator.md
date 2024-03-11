---
title: BasisTranslator
description: API reference for qiskit.transpiler.passes.BasisTranslator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.BasisTranslator
---

<span id="qiskit-transpiler-passes-basistranslator" />

# qiskit.transpiler.passes.BasisTranslator

<span id="qiskit.transpiler.passes.BasisTranslator" />

`BasisTranslator(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/transpiler/passes/basis/basis_translator.py "view source code")

Translates gates to a target basis by searching for a set of translations from a given EquivalenceLibrary.

This pass operates in several steps:

*   Determine the source basis from the input circuit.
*   Perform an A\* search over basis sets, starting from the source basis and targeting the device’s target\_basis, with edges discovered from the provided EquivalenceLibrary. The heuristic used by the A\* search is the number of distinct circuit basis gates not in the target\_basis, plus the number of distinct device basis gates not used in the current basis.
*   The found path, as a set of rules from the EquivalenceLibrary, is composed into a set of gate replacement rules.
*   The composed replacement rules are applied in-place to each op node which is not already in the target\_basis.

Initialize a BasisTranslator instance.

**Parameters**

*   **equivalence\_library** ([*EquivalenceLibrary*](qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")) – The equivalence library which will be used by the BasisTranslator pass. (Instructions in this library will not be unrolled by this pass.)
*   **target\_basis** (*list\[str]*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’].

### \_\_init\_\_

<span id="qiskit.transpiler.passes.BasisTranslator.__init__" />

`__init__(equivalence_library, target_basis)`

Initialize a BasisTranslator instance.

**Parameters**

*   **equivalence\_library** ([*EquivalenceLibrary*](qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")) – The equivalence library which will be used by the BasisTranslator pass. (Instructions in this library will not be unrolled by this pass.)
*   **target\_basis** (*list\[str]*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’].

## Methods

|                                                                                                                                                           |                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.BasisTranslator.__init__ "qiskit.transpiler.passes.BasisTranslator.__init__")(equivalence\_library, target\_basis) | Initialize a BasisTranslator instance.             |
| [`name`](#qiskit.transpiler.passes.BasisTranslator.name "qiskit.transpiler.passes.BasisTranslator.name")()                                                | Return the name of the pass.                       |
| [`run`](#qiskit.transpiler.passes.BasisTranslator.run "qiskit.transpiler.passes.BasisTranslator.run")(dag)                                                | Translate an input DAGCircuit to the target basis. |

## Attributes

|                                                                                                                                                                |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.BasisTranslator.is_analysis_pass "qiskit.transpiler.passes.BasisTranslator.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.BasisTranslator.is_transformation_pass "qiskit.transpiler.passes.BasisTranslator.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.BasisTranslator.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.BasisTranslator.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.BasisTranslator.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.BasisTranslator.run" />

`run(dag)`

Translate an input DAGCircuit to the target basis.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – input dag

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the target basis cannot be reached

**Returns**

translated circuit.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

