# qiskit.providers.ibmq.runtime.IBMRuntimeService.set\_program\_visibility

`IBMRuntimeService.set_program_visibility(program_id, public)`

Sets a program’s visibility.

**Parameters**

*   **program\_id** (`str`) – Program ID.
*   **public** (`bool`) – If `True`, make the program visible to all. If `False`, make the program visible to just your account.

**Raises**

*   **RuntimeJobNotFound** – if program not found (404)
*   **QiskitRuntimeError** – if update failed (401, 403)

**Return type**

`None`
