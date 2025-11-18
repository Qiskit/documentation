from subprocess import CalledProcessError
from qiskit_docs_contributor_tools.setup import check_output, Ok, Err

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
