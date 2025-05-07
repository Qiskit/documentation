import nbformat
from pathlib import Path
from textwrap import dedent
import base64
from qiskit_docs_notebook_image_extractor import extract_images, RasterImage, SvgImage


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
    new_nb, images = extract_images(nb, Path("public/images"))
    assert images == []
    assert new_nb.cells[0]["outputs"] == []


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
    new_nb, images = extract_images(nb, Path("public/root"))
    assert images == [
        SvgImage(
            data="svgdata",
            filepath=Path("public/root/aaaaaa-0.svg"),
        )
    ]
    assert len(new_nb.cells[0]["outputs"]) == 1
    output_data = new_nb.cells[0]["outputs"][0]["data"]
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
    new_nb, images = extract_images(nb, Path("public/root"))
    assert images == [
        RasterImage(
            data="".encode(),
            filepath=Path("public/root/aaaaaa-0.avif"),
        )
    ]
    assert len(new_nb.cells[0]["outputs"]) == 1
    output_data = new_nb.cells[0]["outputs"][0]["data"]
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
    new_nb, images = extract_images(nb, Path("public/root"))
    assert images == [
        RasterImage(
            data="".encode(),
            filepath=Path("public/root/aaaaaa-0.avif"),
        )
    ]
    assert len(new_nb.cells[0]["outputs"]) == 1
    output_data = new_nb.cells[0]["outputs"][0]["data"]
    assert "image/jpeg" not in output_data
    assert (
        output_data["text/plain"]
        == '<Image src="/root/aaaaaa-0.avif" alt="Output of the previous code cell" />'
    )
