import cv2
from pathlib import Path
import shutil

# Create sample frames: start, 25%, 50%, 75%, end
total_frames = 563
sample_indices = [
    1,  # Start
    int(total_frames * 0.25),  # 25%
    int(total_frames * 0.50),  # 50%
    int(total_frames * 0.75),  # 75%
    total_frames  # End
]

labels = ['start', '25%', '50%', '75%', 'end']

print("Creating sample frames for review:\n")

for idx, label in zip(sample_indices, labels):
    src = Path(f'public/film/f{idx:04d}.webp')
    dest = Path(f'sample_{label}.webp')
    
    if src.exists():
        shutil.copy(src, dest)
        
        # Get timestamp
        time_seconds = (idx - 1) / 15.0  # 15 fps
        print(f"✓ sample_{label}.webp (frame {idx}, {time_seconds:.2f}s)")

print(f"\nSample frames saved in the project root for review.")
