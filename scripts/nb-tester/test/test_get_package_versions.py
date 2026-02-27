from textwrap import dedent
from qiskit_docs_notebook_tester.post_process import get_package_versions

def test_simple_import():
    source = dedent("""\
        import qiskit
        def function():
            pass
    """)
    requirements = dedent("""\
        qiskit[all]~=2.1.1
        nbformat==4.2.1
        something-else~=0.0.1
    """)
    expected = dedent("""\
        qiskit[all]~=2.1.1
    """).strip()
    assert get_package_versions(source, requirements) == expected

def test_more_complicated_imports():
    source = dedent("""\
        import qiskit, nbformat.thing
        from scipy import thing
        def function():
            pass
    """)
    requirements = dedent("""\
        qiskit[all]~=2.1.1
        nbformat==4.2.1
        scipy~=1.15.1
        something-else~=0.0.1
    """)
    expected = dedent("""\
        qiskit[all]~=2.1.1
        nbformat==4.2.1
        scipy~=1.15.1
    """).strip()
    assert get_package_versions(source, requirements) == expected

def test_module_with_different_name_to_package():
    source = dedent("""\
        from qiskit_ibm_runtime import thing
        def function():
            pass
    """)
    requirements = dedent("""\
        qiskit[all]~=2.1.1
        qiskit-ibm-runtime~=0.18.1
        something-else~=0.0.1
    """)
    expected = "qiskit-ibm-runtime~=0.18.1"
    assert get_package_versions(source, requirements) == expected

def test_ignore_stdlib():
    source = dedent("""\
        import math
        import pathlib.Path
        from sys import thing
    """)
    requirements = dedent("""\
        qiskit[all]~=2.1.1
        nbformat==4.2.1
        something-else~=0.0.1
    """)
    expected = ""
    assert get_package_versions(source, requirements) == expected
