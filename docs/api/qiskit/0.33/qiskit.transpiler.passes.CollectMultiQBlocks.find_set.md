# qiskit.transpiler.passes.CollectMultiQBlocks.find\_set

`CollectMultiQBlocks.find_set(index)`

DSU function for finding root of set of items If my parent is myself, I am the root. Otherwise we recursively find the root for my parent. After that, we assign my parent to be my root, saving recursion in the future.
