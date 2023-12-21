# qiskit.ignis.verification.QVFitter.calc\_statistics

`QVFitter.calc_statistics()`

Convert the heavy outputs in the different trials into mean and error for plotting.

Here we assume the error is due to a binomial distribution. Error (standard deviation) for binomial distribution is sqrt(np(1-p)), where n is the number of trials (self.\_ntrials) and p is the success probability (self.\_ydata\[0]\[depthidx]/self.\_ntrials).
