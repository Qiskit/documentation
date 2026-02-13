from sphinx_alt_text_validator.verify_images import ( validate_images )

EXAMPLE_RST_WITH_IMAGES = """\
.. image::  /example_image/example1.png
    :width: 400

.. image::  /example_image/example2.png
    :alt: Example

.. image::  /example_image/example3.png

.. plot::
    :include-source:
    from numpy import sqrt
    from qiskit.quantum_info import Statevector
    sv=Statevector([1/sqrt(2), 0, 0, -1/sqrt(2)])
    sv.draw(output='hinton')

.. plot::
    :alt: Example
    :include-source:
    from numpy import sqrt
    from qiskit.quantum_info import Statevector
    sv=Statevector([1/sqrt(2), 0, 0, -1/sqrt(2)])
    sv.draw(output='hinton')

.. image::  /example_image/example4.png

.. plot::
    :include-source:
    :nofigs:
    from numpy import sqrt
    from qiskit.quantum_info import Statevector
    sv=Statevector([1/sqrt(2), 0, 0, -1/sqrt(2)])
"""


def test_validate_image():
    invalid_images = validate_images(EXAMPLE_RST_WITH_IMAGES)
    assert invalid_images == [
        '- Error in line 1: .. image::  /example_image/example1.png',
        '- Error in line 7: .. image::  /example_image/example3.png',
        '- Error in line 9: .. plot::',
        '- Error in line 24: .. image::  /example_image/example4.png',
    ]
