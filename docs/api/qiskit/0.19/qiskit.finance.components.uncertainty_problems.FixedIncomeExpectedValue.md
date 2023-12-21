---
title: FixedIncomeExpectedValue
description: API reference for qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue
---

# FixedIncomeExpectedValue

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue" />

`FixedIncomeExpectedValue(uncertainty_model, A, b, cash_flow, c_approx, i_state=None, i_objective=None)`

The Fixed Income Expected Value.

Evaluates a fixed income asset with uncertain interest rates.

Constructor.

**Parameters**

*   **uncertainty\_model** ([`UncertaintyModel`](qiskit.aqua.components.uncertainty_models.UncertaintyModel "qiskit.aqua.components.uncertainty_models.uncertainty_model.UncertaintyModel")) – multivariate distribution
*   **A** (`ndarray`) – PCA matrix for delta\_r (changes in interest rates)
*   **b** (`int`) – offset for interest rates (= initial interest rates)
*   **cash\_flow** (`List`\[`float`]) – cash flow time series
*   **c\_approx** (`float`) – approximation scaling factor
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits that represent the state
*   **i\_objective** (`Optional`\[`int`]) – index of target qubit to apply the rotation to

## Attributes

|                                                                                                                                                                                                                                       |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`FixedIncomeExpectedValue.num_target_qubits`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.num_target_qubits "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                                                                                                     |                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`FixedIncomeExpectedValue.build`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build")(qc, q\[, …])                                                                      | Adds corresponding sub-circuit to given circuit                       |
| [`FixedIncomeExpectedValue.build_controlled`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`FixedIncomeExpectedValue.build_controlled_inverse`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`FixedIncomeExpectedValue.build_controlled_inverse_power`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse_power "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`FixedIncomeExpectedValue.build_controlled_power`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_power "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`FixedIncomeExpectedValue.build_inverse`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`FixedIncomeExpectedValue.build_inverse_power`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse_power "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`FixedIncomeExpectedValue.build_power`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_power "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_power")(qc, q, …)                                                       | Adds power of corresponding circuit.                                  |
| [`FixedIncomeExpectedValue.get_num_qubits`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`FixedIncomeExpectedValue.get_num_qubits_controlled`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits_controlled "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`FixedIncomeExpectedValue.required_ancillas`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas")()                                             | returns required ancillas                                             |
| [`FixedIncomeExpectedValue.required_ancillas_controlled`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas_controlled "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas_controlled")()            | returns required ancillas controlled                                  |
| [`FixedIncomeExpectedValue.value_to_estimation`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.value_to_estimation "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.value_to_estimation")(value)                                  | value to estimate                                                     |

