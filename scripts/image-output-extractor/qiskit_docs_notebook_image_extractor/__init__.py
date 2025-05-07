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

import nbformat
import base64
import shutil
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


def main():
    """
    Search for notebooks and extract image outputs if necessary.
    """
    for nb_path in NOTEBOOK_PATHS:
        images_folder = prepare_image_folder(nb_path)
        nb = nbformat.read(nb_path, 4)
        print(f"{nb_path}")
        new_nb, images = extract_images(nb, images_folder)
        if len(images) == 0:
            continue
        for image in images:
            image.write()
        nbformat.write(new_nb, nb_path)
        print(f"  Written notebook and {len(images)} image(s)")


def extract_images(
    nb: nbformat.NotebookNode, image_folder: Path
) -> tuple[nbformat.NotebookNode, list[Image]]:
    """
    Extracts images (converting if necessary) and returns an updated notebook.
    """
    images = []
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
                png_image = RasterImage(
                    filepath=filestem.with_suffix(".png"),
                    data=base64.b64decode(png_data),
                )
                print(f"  - Converting PNG output for cell {cell_index}")
                image = convert_to_avif(png_image)
            elif jpeg_data := data.get("image/jpeg", None):
                jpeg_image = RasterImage(
                    filepath=filestem.with_suffix(".jpeg"),
                    data=base64.b64decode(jpeg_data),
                )
                print(f"  - Converting JPEG output for cell {cell_index}")
                image = convert_to_avif(jpeg_image)
            else:
                continue

            data["text/plain"] = mdx_component(image.filepath)
            # Delete all image outputs now we've converted one
            for datatype in ["png", "jpeg", "svg+xml"]:
                data.pop(f"image/{datatype}", None)
            images.append(image)
    return nb, images


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


def prepare_image_folder(nb_path: Path) -> Path:
    """
    Determine the appropriate output folder for the extracted images, and ensure it exists and is empty.
    """
    images_folder = Path(
        "public",
        nb_path.parts[0],
        "images",
        *nb_path.with_suffix("").parts[1:],
        "extracted-outputs",
    )
    if images_folder.exists():
        shutil.rmtree(images_folder)
    images_folder.mkdir(parents=True)
    return images_folder
