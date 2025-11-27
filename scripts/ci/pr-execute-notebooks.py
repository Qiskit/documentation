# This code is a Qiskit project.
#
# (C) Copyright IBM 2024.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

"""
Run the notebook tester on changed notebooks and display a helpful message if
can't test due to being on a fork.
"""

FORK_ERROR_MESSAGE = """\
We can't run this test on pull requests from forks.

If you have write access to Qiskit/documentation, push to a new branch there
and make your pull request from that branch instead.

If you don't have write access, you must test out the notebook locally using
the instructions in https://github.com/Qiskit/documentation#execute-notebooks.
When this PR is approved, a maintainer will merge it to a new branch in
Qiskit/documentation, then make a PR from that branch into main so it can pass
CI.
"""

import os
import subprocess
import sys

args = ["tox", "--", "--write"]
if len(sys.argv) > 1:
    extra_args = sys.argv[1].split(",")
    if extra_args != [""]:
        args.extend(extra_args)

is_fork = os.environ["PR_REPOSITORY"] != os.environ["GITHUB_REPOSITORY"]

try:
    subprocess.run(args, check=True)
except Exception as err:
    is_fork = os.environ["PR_REPOSITORY"] != os.environ["GITHUB_REPOSITORY"]
    if is_fork:
        raise SystemExit(FORK_ERROR_MESSAGE) from err
    raise err
