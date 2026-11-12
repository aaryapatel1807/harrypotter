import cv2
import numpy as np

# Check the first clip for a watermark in bottom-right corner
video_path = r'clips\clip1.mp4'
cap = cv2.VideoCapture(video_path)

# Read a few frames to check
for i in range(3):
    ret, frame = cap.read()
    if ret:
        # Get the bottom-right corner (last 100x50 pixels)
        h, w = frame.shape[:2]
        corner = frame[h-50:h, w-100:w]
        
        # Save just this corner for inspection
        if i == 1:  # Middle frame
            cv2.imwrite(f'watermark_check.png', corner)
            print(f"Video dimensions: {w}x{h}")
            print(f"Saved bottom-right corner ({w-100},{h-50}) to ({w},{h}) as watermark_check.png")
            
            # Check if this area has distinctive patterns (possible watermark)
            gray = cv2.cvtColor(corner, cv2.COLOR_BGR2GRAY)
            mean_intensity = np.mean(gray)
            std_intensity = np.std(gray)
            print(f"Corner mean intensity: {mean_intensity:.2f}, std: {std_intensity:.2f}")
            
            # If there's text or logo, it typically has higher contrast
            if std_intensity > 30:
                print("⚠️ Possible watermark detected in bottom-right corner (high contrast area)")
            else:
                print("✓ Bottom-right corner appears clean (low contrast)")

cap.release()
