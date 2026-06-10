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

import argparse
from dataclasses import dataclass
from itertools import chain
from pathlib import Path
from typing import TypeGuard, ClassVar, Iterator

import nbformat

from .cell_output_data import remove_circuit_drawing_html, remove_inline_katex_expression, extract_image_output, Image

NOTEBOOK_PATHS = chain(
    Path("docs").rglob("*.ipynb"),
    Path("learning").rglob("*.ipynb"),
)


# Result types for normalization process
@dataclass
class NormalizationNeeded:
    changes: ClassVar[bool] = True
    nb: nbformat.NotebookNode
    images: list[Image]


@dataclass
class AlreadyNormalized:
    changes: ClassVar[bool] = False


NormalizationResult = NormalizationNeeded | AlreadyNormalized


def changes_made(result: NormalizationResult) -> TypeGuard[NormalizationNeeded]:
    return result.changes


def main():
    """
    Search for notebooks and extract image outputs if necessary.
    """
    parser = argparse.ArgumentParser(prog="Qiskit/documentation notebook normalization")
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()

    problem_notebooks = []
    for nb_path in NOTEBOOK_PATHS:
        if is_hidden(nb_path):
            continue

        nb = nbformat.read(nb_path, 4)
        images_folder = determine_image_folder(nb_path)

        result = normalize_notebook(nb, images_folder, args.check)
        if not changes_made(result):
            continue

        problem_notebooks.append(nb_path)
        if args.check:
            continue

        images_folder.mkdir(exist_ok=True, parents=True)
        for image in result.images:
            image.write()
        for image in get_unused_images(images_folder, nb):
            image.unlink()
        nbformat.write(result.nb, nb_path)
        print(f"✍️ Written '{nb_path}' and {len(result.images)} image(s)")

    if args.check and problem_notebooks:
        print(
            "\nThe following notebooks need normalizing:\n ",
            "\n  ".join(map(str, problem_notebooks)),
            "\nRun ./fix to fix them automatically.",
        )
        raise SystemExit(1)


def normalize_notebook(
    nb: nbformat.NotebookNode, image_folder: Path, check_only: bool = False
) -> NormalizationResult:
    """
    Extracts images (converting if necessary) and returns an updated notebook.
    """
    images = []
    change_made = False
    for cell_index, cell in enumerate(nb.cells):
        if cell.cell_type != "code":
            continue
        if "outputs" not in cell:
            continue
        for index, output in enumerate(cell["outputs"]):
            if "data" not in output:
                continue
            data = output["data"]

            html_removed = remove_circuit_drawing_html(data)
            if html_removed:
                change_made = True

            katex_modified = remove_inline_katex_expression(data)
            if katex_modified:
                change_made = True

            # 2. Extract image outputs
            filestem = Path(image_folder, f"{cell.id}-{index}")
            if image := extract_image_output(
                data, filestem, skip_conversion=check_only
            ):
                change_made = True
                images.append(image)

            if change_made and check_only:
                # We now know the notebook needs linting so we don't need to
                # keep looking at other cells
                return NormalizationNeeded(nb=nb, images=[])

    has_unused_images = any(image for image in get_unused_images(image_folder, nb))

    if change_made or has_unused_images:
        return NormalizationNeeded(nb=nb, images=images)
    return AlreadyNormalized()


def determine_image_folder(nb_path: Path) -> Path:
    """
    Determine the appropriate output folder for the extracted images.

    For example, the following notebook path:
        docs/guides/my-notebook.ipynb
    Should have its images extracted to:
        public/docs/images/guides/my-notebook/extracted-outputs/
    """
    return Path(
        "public",
        nb_path.parts[0],  # i.e. "docs" or "learning"
        "images",
        *nb_path.with_suffix("").parts[1:],  # e.g. "guides/visualize-results"
        "extracted-outputs",
    )


def is_hidden(path: Path) -> bool:
    return any(part.startswith(".") for part in path.parts)

def get_unused_images(images_folder: Path, nb: nbformat.NotebookNode) -> Iterator[Path]:
    """Return images whose filenames do not appear in a cell output"""
    def output_includes(cell: nbformat.NotebookNode, search: str) -> bool:
        return any(
          search in output.get('data', {}).get('text/plain', [])
          for output in cell.get("outputs", [])
        )
    def origin_cell_exists(image: Path) -> bool:
        return any(output_includes(cell, image.name) for cell in nb.cells)

    for image in images_folder.glob("*"):
        if not origin_cell_exists(image):
            yield image
