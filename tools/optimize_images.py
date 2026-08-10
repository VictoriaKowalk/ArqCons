from pathlib import Path

from PIL import Image


SOURCES = [
    *Path("images/hero/servicios").glob("*.png"),
    Path("images/nosotros/nosotros.png"),
]


for source in SOURCES:
    destination = source.with_suffix(".webp")
    with Image.open(source) as image:
        image.save(destination, "WEBP", quality=84, method=6)
    print(f"{source} -> {destination}")
