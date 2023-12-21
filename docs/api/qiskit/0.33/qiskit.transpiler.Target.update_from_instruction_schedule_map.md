# qiskit.transpiler.Target.update\_from\_instruction\_schedule\_map

`Target.update_from_instruction_schedule_map(inst_map, inst_name_map=None, error_dict=None)`

Update the target from an instruction schedule map.

If the input instruction schedule map contains new instructions not in the target they will be added. However if it contains additional qargs for an existing instruction in the target it will error.

**Parameters**

*   **inst\_map** ([*InstructionScheduleMap*](qiskit.pulse.InstructionScheduleMap#qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap")) – The instruction

*   **inst\_name\_map** (*dict*) – An optional dictionary that maps any instruction name in `inst_map` to an instruction object

*   **error\_dict** (*dict*) –

    A dictionary of errors of the form:

    ```python
    {gate_name: {qarg: error}}
    ```

*   **example::** (*for*) – \{‘rx’: \{(0, ): 1.4e-4, (1, ): 1.2e-4}}

*   **each entry in the inst\_map if error\_dict is defined** (*For*) –

*   **when updating the Target the error value will be pulled from** (*a*) –

*   **dictionary. If one is not found in error\_dict then** (*this*) –

*   **will be used.** (*None*) –

**Raises**

*   **ValueError** – If `inst_map` contains new instructions and `inst_name_map` isn’t specified
*   **KeyError** – If a `inst_map` contains a qarg for an instruction that’s not in the target
