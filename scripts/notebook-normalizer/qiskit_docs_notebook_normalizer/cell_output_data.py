import base64
import subprocess
from tempfile import NamedTemporaryFile
from typing import Literal
from dataclasses import dataclass
from pathlib import Path
import re

# Qiskit's QuantumCircuit.draw() results in Jupyter outputting both a `text/html` and
# `text/plain` entry. The HTML entry has pre-applied formatting that makes sense in
# a Jupyter notebook, but renders horribly in our app:
# https://github.com/Qiskit/qiskit/blob/df379876ba10d6f490a96723b6dbbf723ec45d7a/qiskit/visualization/circuit/text.py#L761-L769
#
# So, we instead should render the `text/plain` entry rather than `text/html`.
CIRCUIT_DRAW_HTML_PREFIX = '<pre style="word-wrap: normal;white-space: pre;background: #fff0;line-height: 1.1;font-family: &quot;Courier New&quot;,Courier,monospace">'


@dataclass
class SvgImage:
    data: str
    destination_filepath: Path

    def write(self):
        self.destination_filepath.write_text(self.data)


@dataclass
class RasterImage:
    data: bytes
    source_format: Literal['.png']
    destination_filepath: Path

    def write(self):
        """
        Save to a tempfile, then use ImageMagick to convert to AVIF in the right place.
        """
        temp_file = NamedTemporaryFile(suffix=self.source_format)
        with temp_file as f:
            f.write(self.data)
            f.file.seek(0) # change the File Handle position to the beginning of the file
            subprocess.run(["magick", f.name, self.destination_filepath], check=True)



Image = SvgImage | RasterImage


def remove_circuit_drawing_html(output_data: dict) -> bool:
    """Mutates a notebook cell if needed and returns True if any changes were made."""
    if html := output_data.get("text/html"):
        if html.startswith(CIRCUIT_DRAW_HTML_PREFIX):
            del output_data["text/html"]
            return True
    return False

def remove_inline_katex_expression(output_data: dict) -> bool:
    """Converts inline katex expressions into display mode if needed and returns True if any changes were made."""
    if "text/latex" in output_data:
        latex = output_data.get("text/latex").strip()

        # We skip displayed equations because they already have the desired style
        if latex.startswith('$$'):
            return False

        # We transform inline katex expressions
        if latex.startswith('$') and latex.endswith('$'):
            latex = re.sub(r'^\$', '$$\n', latex)# Replace the first '$'
            latex = re.sub(r'\$$', '\n$$', latex) # Replace the last '$'
            output_data["text/latex"] = latex
            return True

    return False


def extract_image_output(
    output_data: dict, filestem: Path, skip_conversion: bool
) -> Image | None:
    """Extract image output if one exists and mutate the cell to point to the destination image."""

    image = _get_image(output_data, filestem, skip_conversion)
    if image is None:
        return None

    output_data["text/plain"] = _image_mdx_component(image)
    # Delete all image outputs now we've converted one.
    # An output can have many different representations (e.g. text,
    # html, image), including many image representations in different
    # formats. We only want to keep one image representation, so we ignore
    # the rest.
    for datatype in ["png", "jpeg", "svg+xml"]:
        output_data.pop(f"image/{datatype}", None)
    return image


def _get_image(
    output_data: dict, filestem: Path, skip_conversion: bool
) -> Image | None:
    """Just get the image data if it exists, nothing else"""
    if svg_data := output_data.get("image/svg+xml", None):
        return SvgImage(destination_filepath=filestem.with_suffix(".svg"), data=svg_data)
    if png_data := output_data.get("image/png", None):
        png_image = RasterImage(
            destination_filepath=filestem.with_suffix(".avif"),
            source_format='.png',
            data=base64.b64decode(png_data),
        )
        if skip_conversion:
            return png_image
        return png_image



def _image_mdx_component(image: Image) -> str:
    return f'<Image src="/{image.destination_filepath.relative_to("public")}" alt="Output of the previous code cell" />'
