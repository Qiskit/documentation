import nbformat
from pathlib import Path
from textwrap import dedent
from qiskit_docs_notebook_normalizer import (
    normalize_notebook,
    changes_made,
)
from qiskit_docs_notebook_normalizer.cell_output_data import (
    RasterImage,
    SvgImage,
)


def test_no_outputs():
    nb_source = dedent(
        """
     {
      "cells": [
       {
        "cell_type": "code",
        "execution_count": 1,
        "id": "aaaaaa",
        "metadata": {},
        "outputs": [],
        "source": []
       }
      ],
      "metadata": {},
      "nbformat": 4,
      "nbformat_minor": 5
     }
    """.strip()
    )
    nb = nbformat.reads(nb_source, 4)
    result = normalize_notebook(nb, Path("public/images"))
    assert not changes_made(result)


def test_svg():
    nb_source = dedent(
        """
     {
      "cells": [
       {
        "cell_type": "code",
        "execution_count": 1,
        "id": "aaaaaa",
        "metadata": {},
        "outputs": [
         {
          "data": {
           "image/svg+xml": "svgdata",
           "text/plain": [
            "<Figure size ... with 1 Axes>"
           ]
          },
          "execution_count": 1,
          "metadata": {},
          "output_type": "execute_result"
         }
        ],
        "source": []
       }
      ],
      "metadata": {},
      "nbformat": 4,
      "nbformat_minor": 5
     }
    """.strip()
    )
    nb = nbformat.reads(nb_source, 4)
    result = normalize_notebook(nb, Path("public/root"))
    assert changes_made(result)
    assert result.images == [
        SvgImage(
            data="svgdata",
            filepath=Path("public/root/aaaaaa-0.svg"),
        )
    ]
    assert len(result.nb.cells[0]["outputs"]) == 1
    output_data = result.nb.cells[0]["outputs"][0]["data"]
    assert "image/svg+xml" not in output_data
    assert (
        output_data["text/plain"]
        == '<Image src="/root/aaaaaa-0.svg" alt="Output of the previous code cell" />'
    )


def test_png():
    nb_source = dedent(
        """
     {
      "cells": [
       {
        "cell_type": "code",
        "execution_count": 1,
        "id": "aaaaaa",
        "metadata": {},
        "outputs": [
         {
          "data": {
           "image/png": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGP4z8AAAAMBAQDJ",
           "text/plain": [
            "<Figure size ... with 1 Axes>"
           ]
          },
          "execution_count": 1,
          "metadata": {},
          "output_type": "execute_result"
         }
        ],
        "source": []
       }
      ],
      "metadata": {},
      "nbformat": 4,
      "nbformat_minor": 5
     }
    """.strip()
    )
    nb = nbformat.reads(nb_source, 4)
    result = normalize_notebook(nb, Path("public/root"))
    assert changes_made(result)
    assert result.images == [
        RasterImage(
            data="".encode(),
            filepath=Path("public/root/aaaaaa-0.avif"),
        )
    ]
    assert len(result.nb.cells[0]["outputs"]) == 1
    output_data = result.nb.cells[0]["outputs"][0]["data"]
    assert "image/svg+xml" not in output_data
    assert (
        output_data["text/plain"]
        == '<Image src="/root/aaaaaa-0.avif" alt="Output of the previous code cell" />'
    )


def test_png_and_jpeg():
    """If more than one image output is present, we prioritize SVG then PNG, then discard the rest."""
    nb_source = dedent(
        """
     {
      "cells": [
       {
        "cell_type": "code",
        "execution_count": 1,
        "id": "aaaaaa",
        "metadata": {},
        "outputs": [
         {
          "data": {
           "image/png": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGP4z8AAAAMBAQDJ",
           "image/jpeg": "jpeg_data",
           "text/plain": [
            "<Figure size ... with 1 Axes>"
           ]
          },
          "execution_count": 1,
          "metadata": {},
          "output_type": "execute_result"
         }
        ],
        "source": []
       }
      ],
      "metadata": {},
      "nbformat": 4,
      "nbformat_minor": 5
     }
    """.strip()
    )
    nb = nbformat.reads(nb_source, 4)
    result = normalize_notebook(nb, Path("public/root"))
    assert changes_made(result)
    assert result.images == [
        RasterImage(
            data="".encode(),
            filepath=Path("public/root/aaaaaa-0.avif"),
        )
    ]
    assert len(result.nb.cells[0]["outputs"]) == 1
    output_data = result.nb.cells[0]["outputs"][0]["data"]
    assert "image/jpeg" not in output_data
    assert (
        output_data["text/plain"]
        == '<Image src="/root/aaaaaa-0.avif" alt="Output of the previous code cell" />'
    )


def test_circuit_draw_html():
    nb_source = dedent(
        r"""
    {
     "cells": [
      {
       "cell_type": "code",
       "execution_count": 1,
       "id": "aaaaaaa",
       "metadata": {},
       "outputs": [
        {
         "data": {
          "text/html": [
           "<pre style=\"word-wrap: normal;white-space: pre;background: #fff0;line-height: 1.1;font-family: &quot;Courier New&quot;,Courier,monospace\">     ┌───┐          ┌─┐   \n",
           "q_0: ┤ H ├───────■──┤M├───\n",
           "     ├───┤┌───┐┌─┴─┐└╥┘┌─┐\n",
           "q_1: ┤ X ├┤ H ├┤ X ├─╫─┤M├\n",
           "     ├───┤└┬─┬┘└───┘ ║ └╥┘\n",
           "q_2: ┤ H ├─┤M├───────╫──╫─\n",
           "     └───┘ └╥┘       ║  ║ \n",
           "c: 3/═══════╩════════╩══╩═\n",
           "            2        0  1 </pre>"
          ],
          "text/plain": [
           "     ┌───┐          ┌─┐   \n",
           "q_0: ┤ H ├───────■──┤M├───\n",
           "     ├───┤┌───┐┌─┴─┐└╥┘┌─┐\n",
           "q_1: ┤ X ├┤ H ├┤ X ├─╫─┤M├\n",
           "     ├───┤└┬─┬┘└───┘ ║ └╥┘\n",
           "q_2: ┤ H ├─┤M├───────╫──╫─\n",
           "     └───┘ └╥┘       ║  ║ \n",
           "c: 3/═══════╩════════╩══╩═\n",
           "            2        0  1 "
          ]
         },
         "execution_count": 4,
         "metadata": {},
         "output_type": "execute_result"
        }
       ],
       "source": [
        "circuit.draw()"
       ]
      }
     ],
     "metadata": {},
     "nbformat": 4,
     "nbformat_minor": 5
    }
    """.strip()
    )
    nb = nbformat.reads(nb_source, 4)
    result = normalize_notebook(nb, Path("public/root"))
    assert changes_made(result)
    assert result.images == []
    assert len(result.nb.cells[0]["outputs"]) == 1
    output_data = result.nb.cells[0]["outputs"][0]["data"]
    assert "text/html" not in output_data
    assert "text/plain" in output_data
