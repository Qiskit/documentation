# qiskit.providers.ibmq.runtime.IBMRuntimeService.logout

`IBMRuntimeService.logout()`

Clears authorization cache on the server.

For better performance, the runtime server caches each user’s authorization information. This method is used to force the server to clear its cache.

<Admonition title="Note" type="note">
  Invoke this method ONLY when your access level to the runtime service has changed - for example, the first time your account is given the authority to upload a program.
</Admonition>

**Return type**

`None`
