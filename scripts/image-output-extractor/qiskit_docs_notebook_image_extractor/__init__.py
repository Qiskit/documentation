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
import nbformat
import base64
import shutil
from typing import TypeGuard
from subprocess import Popen, PIPE
from pathlib import Path
from dataclasses import dataclass
from itertools import chain

NOTEBOOK_PATHS = chain(
    Path("docs").rglob("*.ipynb"),
    Path("learning").rglob("*.ipynb"),
)


@dataclass
class SvgImage:
    data: str
    filepath: Path

    def write(self):
        self.filepath.write_text(self.data)


@dataclass
class RasterImage:
    data: bytes
    filepath: Path

    def write(self):
        self.filepath.write_bytes(self.data)


Image = SvgImage | RasterImage


# Result types for normalization process
@dataclass
class NormalizationNeeded:
    changes = True
    nb: nbformat.NotebookNode
    images: list[Image]


@dataclass
class AlreadyNormalized:
    changes = False


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

        print(f"{nb_path}")
        nb = nbformat.read(nb_path, 4)
        images_folder = determine_image_folder(nb_path)

        result = normalize_notebook(nb, images_folder, args.check)
        if not changes_made(result):
            continue

        problem_notebooks.append(nb_path)
        if args.check:
            continue

        ensure_exists_and_empty(images_folder)
        for image in result.images:
            image.write()
        nbformat.write(result.nb, nb_path)
        print(f"  Written notebook and {len(result.images)} image(s)")

    if args.check and problem_notebooks:
        print(
            "\nThe following notebooks need normalizing:\n ",
            "\n  ".join(map(str, problem_notebooks)),
            "\nRun ./fix to fix them automatically.",
        )
        raise SystemExit(1)


def normalize_notebook(
    nb: nbformat.NotebookNode, image_folder: Path, check_only: bool
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
            filestem = Path(image_folder, f"{cell.id}-{index}")

            if svg_data := data.get("image/svg+xml", None):
                image = SvgImage(filepath=filestem.with_suffix(".svg"), data=svg_data)
            elif png_data := data.get("image/png", None):
                image = RasterImage(
                    filepath=filestem.with_suffix(".png"),
                    data=base64.b64decode(png_data),
                )
                # Conversion can take a long time, so skip if only checking
                if not check_only:
                    print(f"  - Converting PNG output for cell {cell_index}")
                    image = convert_to_avif(image)
            else:
                continue

            change_made = True
            if check_only:
                # We know the notebook needs linting so we can stop here
                return NormalizationNeeded(nb=nb, images=[])

            data["text/plain"] = mdx_component(image.filepath)
            # Delete all image outputs now we've converted one.
            # An output can have many different representations (e.g. text,
            # html, image), including many image representations in different
            # formats. We only want to keep one image representation, so we ignore
            # the rest.
            for datatype in ["png", "jpeg", "svg+xml"]:
                data.pop(f"image/{datatype}", None)
            images.append(image)
    if change_made:
        return NormalizationNeeded(nb=nb, images=images)
    return AlreadyNormalized()


def mdx_component(image_path: Path) -> str:
    return f'<Image src="/{image_path.relative_to("public")}" alt="Output of the previous code cell" />'


def convert_to_avif(image: RasterImage) -> RasterImage:
    """
    Pipe image through ImageMagick subprocess to convert to AVIF.
    """
    new_path = image.filepath.with_suffix(".avif")
    imagemagick = Popen(["magick", "-", "avif:-"], stdout=PIPE, stderr=PIPE, stdin=PIPE)
    (new_data, _stderr) = imagemagick.communicate(input=image.data)
    return RasterImage(filepath=new_path, data=new_data)


def determine_image_folder(nb_path: Path) -> Path:
    """
    Determine the appropriate output folder for the extracted images, and ensure it exists and is empty.

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


def ensure_exists_and_empty(folder: Path) -> None:
    if folder.exists():
        shutil.rmtree(folder)
    folder.mkdir(parents=True)

