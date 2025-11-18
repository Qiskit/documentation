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
from dataclasses import dataclass

@dataclass
class Ok:
    result: str

@dataclass
class Err:
    err: Exception

Result = Ok | Err

def check_output(cmd: list[str]) -> Result:
    try:
        return Ok(
            subprocess.check_output(
                cmd,
                text=True,
                encoding="utf-8",
            )
        )
    except FileNotFoundError as err:
        return Err(err)
    except subprocess.CalledProcessError as err:
        return Err(err)
