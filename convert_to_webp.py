import cv2
from pathlib import Path
import os

# Get all temp JPEG files
film_dir = Path('public/film')
jpg_files = sorted(film_dir.glob('temp_*.jpg'))

print(f"Found {len(jpg_files)} JPEG frames to convert...")

# Convert each to WebP
for i, jpg_path in enumerate(jpg_files, 1):
    # Read image
    img = cv2.imread(str(jpg_path))
    
    # Save as WebP with quality 80
    webp_path = film_dir / f'f{i:04d}.webp'
    cv2.imwrite(str(webp_path), img, [cv2.IMWRITE_WEBP_QUALITY, 80])
    
    # Delete temp JPEG
    jpg_path.unlink()
    
    if i % 50 == 0:
        print(f"Converted {i}/{len(jpg_files)} frames...")

# Create poster from first frame
first_frame = cv2.imread(str(film_dir / 'f0001.webp'))
cv2.imwrite(str(film_dir / 'poster.webp'), first_frame, [cv2.IMWRITE_WEBP_QUALITY, 80])

print(f"\n✓ Converted {len(jpg_files)} frames to WebP")
print(f"✓ Created poster.webp")

# Calculate total size
total_size = sum(f.stat().st_size for f in film_dir.glob('*.webp'))
size_mb = total_size / (1024 * 1024)
print(f"\n✓ Total frame count: {len(jpg_files)}")
print(f"✓ Total size of public/film/: {size_mb:.2f} MB ({total_size:,} bytes)")
