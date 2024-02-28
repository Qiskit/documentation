---
title: BMSynthesisClifford
description: API reference for qiskit.transpiler.passes.synthesis.high_level_synthesis.BMSynthesisClifford
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.synthesis.high_level_synthesis.BMSynthesisClifford
---

# BMSynthesisClifford

<span id="qiskit.transpiler.passes.synthesis.high_level_synthesis.BMSynthesisClifford" />

`qiskit.transpiler.passes.synthesis.high_level_synthesis.BMSynthesisClifford` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/transpiler/passes/synthesis/high_level_synthesis.py "view source code")

Bases: [`HighLevelSynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.HighLevelSynthesisPlugin")

Clifford synthesis plugin based on the Bravyi-Maslov method.

The method only works on Cliffords with at most 3 qubits, for which it constructs the optimal CX cost decomposition.

This plugin name is :`clifford.bm` which can be used as the key on an [`HLSConfig`](qiskit.transpiler.passes.HLSConfig "qiskit.transpiler.passes.synthesis.high_level_synthesis.HLSConfig") object to use this method with [`HighLevelSynthesis`](qiskit.transpiler.passes.HighLevelSynthesis "qiskit.transpiler.passes.synthesis.high_level_synthesis.HighLevelSynthesis").

## Methods

### run

<span id="qiskit.transpiler.passes.synthesis.high_level_synthesis.BMSynthesisClifford.run" />

`run(high_level_object, coupling_map=None, target=None, qubits=None, **options)`

Run synthesis for the given Clifford.

