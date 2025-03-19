# This code is a Qiskit project.
#
# (C) Copyright IBM 2025.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

import subprocess


def run_cmd(cmd: list[str]) -> None:
    """Run a command and error the program (with no stacktrace) if it fails.

    Streams the subprocess output to the parent process's std{out,err}.
    """
    try:
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError:
        # This avoids adding a noisy stacktrace.
        raise SystemExit(1)
