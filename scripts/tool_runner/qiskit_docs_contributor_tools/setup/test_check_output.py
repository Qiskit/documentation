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

from subprocess import CalledProcessError
from qiskit_docs_contributor_tools.setup.check_output import check_output, Ok, Err


def test_check_output():
    empty_return = check_output(["python", "-c", ""])
    assert isinstance(empty_return, Ok)
    assert empty_return.result == ""

    command_not_found = check_output(["non-existent-command", "-v"])
    assert isinstance(command_not_found, Err)
    assert isinstance(command_not_found.err, FileNotFoundError)

    bad_command = check_output(["python", "--frank"])
    assert isinstance(bad_command, Err)
    assert isinstance(bad_command.err, CalledProcessError)
