import cv2
import os
from pathlib import Path

# Create output directory
output_dir = Path('public/film')
output_dir.mkdir(parents=True, exist_ok=True)

# Open the master video
video_path = 'master.mp4'
cap = cv2.VideoCapture(video_path)

# Get video properties
fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = total_frames / fps

print(f"Master video: {fps:.2f} fps, {total_frames} frames, {duration:.2f} seconds")

# We want 15fps output from 24fps input
# So we take every 24/15 = 1.6 frames
frame_interval = fps / 15.0
frame_count = 0
output_count = 0
next_frame_to_capture = 0

# First, create poster from first frame
ret, first_frame = cap.read()
if ret:
    # Resize to 1280x720
    resized = cv2.resize(first_frame, (1280, 720), interpolation=cv2.INTER_LANCZOS4)
    poster_path = output_dir / 'poster.webp'
    cv2.imwrite(str(poster_path), resized, [cv2.IMWRITE_WEBP_QUALITY, 80])
    print(f"✓ Created poster.webp")

# Reset to beginning
cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

# Export frames at 15fps
while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    if frame_count >= next_frame_to_capture:
        # Resize to 1280x720
        resized = cv2.resize(frame, (1280, 720), interpolation=cv2.IMWRITE_WEBP_QUALITY)
        
        # Save as WebP with 4-digit padding
        output_count += 1
        output_path = output_dir / f'f{output_count:04d}.webp'
        cv2.imwrite(str(output_path), resized, [cv2.IMWRITE_WEBP_QUALITY, 80])
        
        if output_count % 50 == 0:
            print(f"Exported {output_count} frames...")
        
        next_frame_to_capture += frame_interval
    
    frame_count += 1

cap.release()

print(f"\n✓ Exported {output_count} frames at 15fps as 1280x720 WebP (quality 80)")
print(f"✓ Total frames: {output_count}")

# Calculate directory size
total_size = sum(f.stat().st_size for f in output_dir.glob('*.webp'))
size_mb = total_size / (1024 * 1024)
print(f"✓ Total size of public/film/: {size_mb:.2f} MB ({total_size:,} bytes)")
